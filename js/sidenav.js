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

function initMenu() {
      var menu = $("#mySidenav")[0];
      console.log(menu);
      var dims = JSON.parse(JSON.stringify(masterninja));
      dims = dims.dimensions;
      console.log(dims);
      for (var i = 0; i < dims.length; i++) {
            addDim("dim", dims[i].name, dims[i].linkid, menu);
            var curSubs = dims[i].subcategories;
            for (var j = 0; j < curSubs.length; j++) {
                  addDim("sub", curSubs[j].name, curSubs[j].linkid, menu);
                  var curTools = curSubs[j].tools;
                  for (var k = 0; k < curTools.length; k++) {
                        addDim("tool", curTools[k].name, curTools[k].linkid, menu);

                  }
            }
      }
}

function addDim(className, name, link, menu) {
      var div = document.createElement("div");
      div.className = className;
      var a = document.createElement("a");
      a.href = "#" + link;
      a.innerHTML = name;
      div.appendChild(a);
      menu.append(div)
}


$(document).ready(function () {
      initMenu();
      $(document).on("scroll", onScroll);
      $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                  $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                  menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                  'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                  window.location.hash = target;
                  $(document).on("scroll", onScroll);
            });
      });
});

function onScroll(event) {
      var scrollPos = $(document).scrollTop();
      $('#mySidenav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                  $('#menu-center ul li a').removeClass("active");
                  currLink.addClass("active");
            }
            else {
                  currLink.removeClass("active");
            }
      });
}