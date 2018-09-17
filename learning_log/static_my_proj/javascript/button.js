$("body")
  .hide()
  .fadeIn("slow");

//  Reload "a" Html load
$(document).on("click", "a", function(e) {
  var url = this.href;

  if ($(this).hasClass("nav-link")) {
    $($("a.nav-link")).removeClass("active");
    $(this).addClass("active");
    console.log("check active nav link");
    if ($(this).hasClass("nav-logout")) {
      location.reload(true);
    } else {
      preventReload(e, url);
    }
  }
  if ($(this).hasClass("nav-link")) {
  } else {
    preventReload(e, url);
  }
});

// Prevent Reload of page and Reloads Current Page Must have id="container"
function preventReload(e, url) {
  e.preventDefault();
  $("#container").remove();
  $("#content")
    .load(url + " #container")
    .hide()
    .fadeIn("slow");
}
// Add a Topic Toggle
$(document).on("click", "button.add-topic", function() {
  if ($("button.add-topic").html() === "Add a New Topic") {
    $("button.add-topic").html("Enter Topic");
  } else {
    $("button.add-topic").html("Add a New Topic");
  }
  $("#newform").slideToggle("slow");
});

// Topics date added toggle
$(document).on("mouseover", function() {
  $(function toggleTopicsDate() {
    var $elClass = $("a.topics-href");
    var $this = $(this);
    $elClass.on("mouseover click", function() {
      $this
        .parent()
        .siblings()
        .children("h5")
        .fadeIn("slow");
    });
    $elClass.on("mouseout", function() {
      $this
        .parent()
        .siblings()
        .children("h5")
        .fadeOut("slow");
    });
  });
});

$(document).on("click", ".btn-add", function() {
  $(this)
    .removeClass("btn")
    .addClass("btn-successs")
    .html("Success <i class='fas fa-spinner fa-spin'></i>");
  setTimeout(() => {
    $(this)
      .html("Re-Send")
      .removeClass("btn-suceccess")
      .addClass("btn");
  }, 2000);
});

$(document).on("click", "#btn-del", function() {
  $(this)
    .removeClass("btn")
    .addClass("btn-successs")
    .html("Deleting <i class='fas fa-spinner fa-spin'></i>");
  setTimeout(() => {
    $(this)
      .html("Delete")
      .removeClass("btn-successs")
      .addClass("btn");
  }, 2000);
});

// Handling FORMS //
$(document).on("click", "button.btn", function() {
  //Used to Render FORMS Jquery.!
  var productForm = $(".form-product");
  productForm.submit(function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var thisForm = $(this);
    var httpMethod = thisForm.attr("method");
    var actionEnd = thisForm.attr("action");

    var formData = thisForm.serialize();

    $.ajax({
      method: httpMethod,
      url: actionEnd,
      data: formData,
      success: function(data) {},
      error: function(data) {
        console.log("error");
        console.log(data);
      }
    });
    var actionUrl = thisForm.attr("action2");
    setTimeout(() => {
      preventReload(e, actionUrl);
    }, 2000);
  });
});
