var canvas = document.querySelector('canvas');
$('canvas').hide().fadeIn(5000)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

var mouse = {
	x: undefined,
	y: undefined,
}

var maxRadius = 40;
//var minRadius = 5;

var colorArray = [
	'#99BE8B',
	'#D9E3BC',
	'#C5AF6C',
	'#B6D9AF',
	'#FFFFFF',
];

window.addEventListener('mousemove', function(event) {
		mouse.x = event.x;
		mouse.y = event.y;

});

window.addEventListener('resize', function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color
	}

	this.update = function () {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		// interaction with mouse
		if (mouse.x - this.x < 50 && 
			mouse.x - this.x > -50 && 
			mouse.y - this.y < 50 && 
			mouse.y - this.y > -50) {
			if  (this.radius < maxRadius) {
				this.radius += 1;
			}	
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		this.draw();
	}
}

// Circle list is created
var circleArray = [];

function init() {

	// Circles are stored inside for the loop
	circleArray = [];

	for (var i = 0; i < 1000; i++) {
		// Variable names
		var radius = Math.random() * 3 + 1;
		var x = Math.random() * (innerWidth - radius * 2) + radius; 
		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dx = (Math.random() - 0.5) * 4;
		var dy = (Math.random() - 0.5) * 4;
		
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}

function canvasText () {
	c.fillStyle= "#e5e5e5";
	c.font="150px Arial";
	c.textAlign = 'center';
	c.fillText("Learning Log",canvas.width/2,canvas.height/2);
	c.font="75px Arial";
	c.fillText("A place to document your Knowledge",canvas.width/2,415);
}

function outLine() {
	
	c.rect(28,200,1300,300);
	c.lineWidth="6";
	c.strokeStyle="white";
	c.stroke();
}
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
	outLine();
	canvasText();
	
}



animate();
init();