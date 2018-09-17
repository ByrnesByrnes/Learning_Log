$("#main-info").hide();
$("body")
  .hide()
  .fadeIn(1000);
$("#wells2*")
  .hide()
  .fadeIn(3000);
$("#p-date-added*").hide();

//alert('Making Changes');
var pickElement = $("#elClass1*");
// HighLight a a child option and remove it

var $idButton = $("#main-button");

$idButton.on("click", function() {
  $("#main-Info").slideToggle();
});

$(function checking() {
  var $elClass = $(pickElement);

  $elClass.on("mouseover click", function() {
    $(this)
      .siblings("p")
      .fadeIn(500);
  });
  $elClass.on("mouseout", function() {
    $(this)
      .siblings("p")
      .fadeOut(200);
  });
});

// ajax method for adding a New Topic.
$("h4 a").on("click", function(e) {
  e.preventDefault();
  var url = this.href;
  console.log(url);

  $("oldform.current").removeClass("current");
  $(this).addClass("current");

  $("#oldform").hide();
  $("#content")
    .load(url + " #newform")
    .delay(500)
    .hide()
    .fadeIn("slow");
});
var topicAdd = ".topic-add";

$(topicAdd).on("submit", function(e) {
  e.preventDefault();
  var details = $("#topicAdd").serialize();
  $.post("/new_topic/", details, function(data) {
    $("#topicAdd").html(data);
  });
});

// ajax method for going to a Topic page with ENtries
$("tr a").on("click", function(e) {
  e.preventDefault();
  var url = this.href;

  $("#wholepage*").remove();
  $("#contentTitle*")
    .load(url + " #wholeTopicTitle")
    .hide()
    .fadeIn("slow");
  $("#contentText*")
    .load(url + " #wholeTopicText")
    .hide()
    .fadeIn("slow");
});

//var topicDelete = $('.topic-delete')
//var currentPath = window.location.href
//
//function updateTopic () {
//var topicTable = $('.topic-table')
//
//
//}

var modal = (function() {
  var $window = $(window);
  var $modal = $('<div class="modal"/>');
  var $content = $('<div class="modal-content"/>');
  var $close = $('<button role="button" class="modal-close">close</button>');

  $modal.append($content, $close);

  $close.on("click", function(e) {
    e.preventDefault();
    modal.close();
  });

  return {
    center: function() {
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

      $modal.css({
        top: top + $window.scrollTop(),
        left: left + $window.scrollLeft()
      });
    },
    open: function(settings) {
      $content.empty().append(settings.content);

      $modal
        .css({
          width: settings.width || "auto",
          height: settings.height || "auto"
        })
        .appendTo("body");

      modal.center();
      $(window).on("resize", modal.center);
    },
    close: function() {
      $content.empty();
      $modal.detach();
      $(window).off("resize", modal.center);
    }
  };
})();

(function() {
  var $content = $("#share-options").detach();

  $("#share").on("click", function() {
    modal.open({ content: $content, width: 340, height: 300 });
    console.log(modal);
  });
})();
