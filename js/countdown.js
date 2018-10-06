define('countdown', function () {
   
  var time = (new Date().getFullYear()) + "/11/01";
  $("#getting-started").countdown(time, function(event) {
    $(this).html(event.strftime('%-w weeks %-d days %Hh %Mm %Ss'));
  });

});