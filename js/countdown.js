define('countdown', function () {

  var time = (new Date().getFullYear()) + "/10/31"; /*Your can test it replace here the date for today date, for example /10/27*/
  $("#countdown").countdown(time, function(event) {
    $(this).html(event.strftime(
    
    ' '
    + '<span class="badge badge-dark time">%-D <br>day%!d </span>'
    + '<span class="badge badge-dark time">%H <br>hr </span>'
    + '<span class="badge badge-dark time">%M <br>min </span>'
    + '<span class="badge badge-dark time">%S <br>sec</span>'));
  });

  var days = $('#countdown span.badge:nth-child(1)');
  var dataDays = days[0].firstChild.data;

  if(parseInt(dataDays) === 0){
    $('.main-subtitle,.alert-custom,.branch').remove();
    $('<div class="container"><h3 class="main-subtitle expired text-center">Hacktoberfest pull requests time has expired <i class="em em-checkered_flag"></i>!</h3></div>').insertBefore('.home');
    $('<div class="container"><h3 class="main-subtitle expired text-center">Thanks for your contributions <i class="em em-call_me_hand"></i>!</h3></div>').insertAfter('.home');
    time = undefined;
  }
  console.log(typeof(dataDays),time);
  
});