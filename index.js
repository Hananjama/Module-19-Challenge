$(document).ready(function() {
    // Event listener for hover over "About", "Resume", and "Get in Touch"
    $(".about, .resume, .get-in-touch").hover(
      function() {
        $(this).css("color", "#005B47");
      },
      function() {
        $(this).css("color", "#FCF5E3");
      }
    );
  
    // Event listener for hover over "I'm Hanan"
    $(".im-hanan-1").hover(
      function() {
        $(this).find("textarea").css("color", "#005B47");
      },
      function() {
        $(this).find("textarea").css("color", "#FCF5E3");
      }
    );
  
    // Event listener for hover over "Projects" button
    $(".projects").hover(
      function() {
        $(this).css({
          "background-color": "#005B47",
          "border-radius": "20px",
          "width": "213px",
          "height": "75px",
          "color": "#FCF5E3" // Change the text color to #FCF5E3
        });
      },
      function() {
        $(this).css({
          "background-color": "#FCF5E3",
          "border-radius": "20px",
          "width": "213px",
          "height": "75px",
          "color": "#005B47" // Change the text color to #005B47
        });
      }
    );
  
    // Event listener for hover over "View Case Study" button
    $(".view-case-study").hover(
      function() {
        $(this).css({
          "background-color": "#005B47",
          "border-radius": "25px",
          "width": "293px",
          "height": "70px",
          "color": "#FCF5E3"
        });
      },
      function() {
        $(this).css({
          "background-color": "#FCF5E3",
          "border-radius": "25px",
          "width": "293px",
          "height": "70px",
          "color": "#005B47"
        });
      }
    );
  });
  