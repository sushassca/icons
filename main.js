$(document).ready(function() {
  // folders
  var filenames = [],
    foldernames = [];
  var url = "https://sleepy-archimedes-a43817.netlify.com/assets/";
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      document.write(req.responseText);
      getNames();
    }
  };
  req.send();

  function getNames() {
    var files = document.querySelectorAll("a.icon.file");
    var folders = document.querySelectorAll("a.icon.dir");
    files.forEach(function(item) {
      filenames.push(item.textContent)
    })
    folders.forEach(function(item) {
      foldernames.push(item.textContent.slice(0, -1))
    })
    console.log(filenames);
    console.log(foldernames);
  }

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
