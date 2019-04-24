$(document).ready(function() {
  // canvas
  $("#canvas").click(function() {
  $( "html" ).scrollTop( 0 );
  });
  // toggle
  $("#svg").click(function() {
    $("a").each(function() {
      var toggle = this.href;
      var new_src = toggle.replace(/\.pdf/, '.svg');
      $(this).attr('href', new_src);
      console.log(new_src);
    });
    $("#pdf").removeClass("active");
    $("#svg").addClass("active");
  });

  $("#pdf").click(function() {
    $("a").each(function() {
      var toggle = this.href;
      var new_src = toggle.replace(/\.svg$/, '.pdf');
      $(this).attr('href', new_src);
      console.log(new_src);
    });
    $("#pdf").addClass("active");
    $("#svg").removeClass("active");
  });
  // copy paste
  $(".colors").click(function(element) {
    element = $(this).find("p");
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    popup();
  });
  // popup
  function popup() {
    $("#popup").css("bottom", "2%");
    setTimeout(function() {
      $("#popup").css("bottom", "-20%");
    }, 1000);
  }



});
