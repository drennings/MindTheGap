/* Set the width of the side navigation to 250px */
function openNav() {
      var width = document.getElementById("menubuttondiv").offsetWidth;
      if (width === 40) {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("menubuttondiv").style.width = "290px";
      } else {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("menubuttondiv").style.width = "40px";
      }
}
