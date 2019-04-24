$(document).ready(function() {

  $( ".colors" ).click(function(element) {
    element = $(this).find("p");
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    popup();
  });

function popup(){
  $("#popup").css("bottom","2%");
  setTimeout(function () {
    $("#popup").css("bottom","-20%");
  }, 1000);
}



});
