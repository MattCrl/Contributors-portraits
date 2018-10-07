define('countdown', function () {
   
  var time = (new Date().getFullYear()) + "/10/31";
  $("#getting-started").countdown(time, function(event) {
    $(this).html(event.strftime(
    
    ' '
    + '<span class="badge badge-dark">%-D <br>day%!d </span>'
    + '<span class="badge badge-dark">%H <br>hr </span>'
    + '<span class="badge badge-dark">%M <br>min </span>'
    + '<span class="badge badge-dark">%S <br>sec</span>'));
  });

  var countdown = (new Date().getFullYear()) + "/10/31";
  $('#countdown').countdown(time, function(event) {
    $(this).html(event.strftime(
      '<div id="getting-started">' 
    +
      ' '
    + '<span class="badge badge-dark">%-D <br>day%!d </span>'
    + '<span class="badge badge-dark">%H <br>hr </span>'
    + '<span class="badge badge-dark">%M <br>min </span>'
    + '<span class="badge badge-dark">%S <br>sec</span>'
    + '</div>'
    ));
  });

});