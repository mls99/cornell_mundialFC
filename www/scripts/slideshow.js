//When the document is ready
$(document).ready(function() {
  //list of images



  var images = [
    "images/team.jpg", //index 0
    "images/2017-18.jpg",  //index 1
    "images/2016-17.jpg",  //index 2
    "images/dribble.jpg",  //index 3
    "images/header.jpg",   //index 4
    "images/huddle.jpg",   //index 5
    "images/shoot.jpg",    //index 6
  ];

  //index of image currently displayed
  var currentIndex = 0;

  //when you click next button

  $("#slideshowNext").click(function () {
    currentIndex +=1;

    if (currentIndex > 6){
      currentIndex = 0;
    }

    $('#slideshowImage').attr("src",images[currentIndex]);

  });

  //when you click previous button

  $("#slideshowPrev").click(function () {
    currentIndex -= 1;

    if (currentIndex < 0){
      currentIndex = 6;
    }
    $('#slideshowImage').attr("src",images[currentIndex])

  });
});
