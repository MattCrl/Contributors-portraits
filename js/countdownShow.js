define('countdownShow',function(){
    if(Cookies.get('modal-was-shown') === undefined){
        $("#modal").modal("show");
        window.setTimeout(function () {
            $("#modal").modal("hide");
        },8000);
        Cookies.set('modal-was-shown', true, { expires: 7 });
    }
});