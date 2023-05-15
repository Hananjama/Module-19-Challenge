console.log("hello");
$(document).ready(function() {
    // Change navbar items color on hover
    $('.about, .resume, .get-in-touch').hover(
      function() {
        $(this).css('color', '#005B47');
      },
      function() {
        $(this).css('color', '#FCF5E3');
      }
    );
  
    // Change Hanan's color on hover
    $('.im-hanan').hover(
      function() {
        $(this).css('color', '#005B47');
      },
      function() {
        $(this).css('color', '#FCF5E3');
      }
    );
  
    // Change project button colors on hover
    $('.title, .vector-1').hover(
      function() {
        $(this).css('color', '#FCF5E3');
        $('.rectangle-10').css('background-color', '#005B47');
      },
      function() {
        $(this).css('color', '#005B47');
        $('.rectangle-10').css('background-color', '#FCF5E3');
      }
    );
  });
  $(document).ready(function() {
    // Select the buttons
    const buttons = $('.workGrid button');
  
    // Attach the event listener
    buttons.on('mouseenter', function() {
      // Change background color to 005B47
      $(this).css('background-color', '#005B47');
      // Change font color to FCF5E3
      $(this).css('color', '#FCF5E3');
      // Add rounded corners
      $(this).css('border-radius', '5px');
    });
  
    // Attach the event listener
    buttons.on('mouseleave', function() {
      // Change background color to FCF6E4
      $(this).css('background-color', '#FCF6E4');
      // Change font color to 005B47
      $(this).css('color', '#005B47');
      // Remove rounded corners
      $(this).css('border-radius', '0px');
    });
  });
  