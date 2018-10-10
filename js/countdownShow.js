define('countdownShow',function(){
<<<<<<< HEAD
   
    $("#modal").modal("show");

    window.setTimeout(function () {
        $("#modal").modal("hide");
    },8000);

    $('#countdown').hide();

    $('#modal').on('hidden.bs.modal', function () {
       $('#countdown').fadeIn(3000);
      })
    
=======
    if(Cookies.get('modal-was-shown') === undefined){
        $("#modal").modal("show");
        window.setTimeout(function () {
            $("#modal").modal("hide");
        },8000);
        Cookies.set('modal-was-shown', true, { expires: 7 });
    }
>>>>>>> master
});