define('countdownShow',function(){
   
    $("#modal").modal("show");

    window.setTimeout(function () {
        $("#modal").modal("hide");
    },5000);

    $('#countdown').hide();

    $('#modal').on('hidden.bs.modal', function () {
       $('#countdown').fadeIn(3000);
      })
    
});