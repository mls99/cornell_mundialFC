$(document).ready(function() {
  $("#form").on("submit",function(){

    // assume form is valid by default
    var formValid = true;
    //feedback for name
    if( $("#name").prop("validity").valid ){
      $("#nameFeedback").addClass("hidden");
    } else {
      $("#nameFeedback").removeClass("hidden");
      formValid = false;
    }
    //feedback for email
    if( $("#email").prop("validity").valid ){
      $("#emailFeedback").addClass("hidden");
    } else {
      $("#emailFeedback").removeClass("hidden");
      formValid = false;
    }
    //feedback for who are you
    if( $("#who").prop("validity").valid ){
      $("#whoFeedback").addClass("hidden");
    } else {
      $("#whoFeedback").removeClass("hidden");
      formValid = false;
    }
    //feedback for message
    if( $("#message").prop("validity").valid ){
      $("#messageFeedback").addClass("hidden");
    } else {
      $("#messageFeedback").removeClass("hidden");
      formValid = false;
    }

  return formValid;
  });
});
