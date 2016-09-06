$(window).on('resize', function() {
    if($(window).height() < 1200) {
        $('#home').addClass('.hvr-icon-buzz-out');
        $('#home').removeClass('.hvr-underline-from-center');
    }else{
        $('#home').addClass('.hvr-underline-from-center');
        $('#home').removeClass('.hvr-icon-buzz-out');
    }
});
$(document).ready(function(){
    $("#home").click(function(){
        alert("The paragraph was clicked.");
    });
});