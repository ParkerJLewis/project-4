//jshint esversion: 6

let controller = function() {

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      localStorage.setItem("toDoList", $(".comments").html());
      //$new_comment.fadeIn();

      $(".comment-input input").val("");
    }
  };
  test = localStorage.getItem("toDoList");
  if (test =! null) {
  $(".comments").html(localStorage.getItem("toDoList"));
  }
  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

$(document).ready(controller);
