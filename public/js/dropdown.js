window.onload = function() {
  var eDrop = document.getElementById('topnav');
  var eClose = document.getElementById('close');

  //show menu
  eDrop.addEventListener('click', function() {

      console.log(eDrop);
      if (eDrop.firstChild.classList.contains("display")) {
          eDrop.firstChild.removeAttribute("class");
      } else {
          eDrop.firstChild.setAttribute("class", "display");
      }


  });
  // close menu
  eClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
       eDrop.firstChild.removeAttribute("class");

    })
};

