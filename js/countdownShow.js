define('countdownShow',function(){
   
    $("#modal").modal("show");

    window.setTimeout(function () {
        $("#modal").modal("hide");
    },8000);
    
});