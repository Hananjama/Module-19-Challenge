$(document).ready(function() {
    // Event listener for nav bar items
    $(".about, .resume, .get-in-touch").hover(
      function() {
        $(this).css("color", "#005B47");
      },
      function() {
        $(this).css("color", "#FCF5E3");
      }
    );
  
    // Event listener for "I'm Hanan" - Changing "Hanan" font color
    $(".im-hanan-1").hover(
      function() {
        $(this).find("textarea").css("color", "#005B47");
      },
      function() {
        $(this).find("textarea").css("color", "#FCF5E3");
      }
    );
  
    // Event listener for "Projects" button - Changing button color
    $(".projects").hover(
      function() {
        $(this).css({
          "background-color": "#005B47",
          "border-radius": "25px",
          "width": "213px",
          "height": "75px"
        });
        $(this).find(".kurale-regular-normal-evening-sea-30px").css("color", "#FCF5E3");
      },
      function() {
        $(this).css({
          "background-color": "transparent",
          "border-radius": "25px",
          "width": "auto",
          "height": "auto"
        });
        $(this).find(".kurale-regular-normal-evening-sea-30px").css("color", "#005B47");
      }
    );
  
    // Event listener for "View Case Study" button - Changing button color
    $(".view-case-study").hover(
      function() {
        $(this).css({
          "background-color": "#005B47",
          "border-radius": "35px",
          "width": "293px",
          "height": "70px",
          "color": "#FCF5E3"
        });
      },
      function() {
        $(this).css({
          "background-color": "transparent",
          "border-radius": "35px",
          "width": "auto",
          "height": "auto",
          "color": "#005B47"
        });
      }
    );
  });
  