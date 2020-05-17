// Sliding and responsive settings for the carousel using Slick

$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1211,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });
  
});

// email validation
$("#check").click(function () {
  var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if ($('#email').val() == "") {
    alert("Please enter a valid input");
  }
  else if ($('#email').val().match(mailformat) == null) {
    alert("Please enter a valid email adress input");
  }
  else {
    alert("Thank you for signing up!");
  }
  $('#email').val("");  //clear input field
})