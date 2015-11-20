(function returnTop() {
  var scrollTop = 0;
  var toTop = document.getElementById("to-top");
  var screenw = document.documentElement.clientWidth || document.body.clientWidth;
  var screenh = document.documentElement.clientHeight || document.body.clientHeight;
  // toTop.style.top = screenh - toTop.offsetHeight + "px";
  window.onscroll = function() {
    scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    toTop.style.top = screenh - toTop.offsetHeight + scrollTop - 100 + "px";
    toTop.style.right = 50 + "px";
    if (scrollTop > 100) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  }


  toTop.onclick = function() {

    (function scrollMove() {
      scrollNow = document.body.scrollTop || document.documentElement.scrollTop;
      st = setTimeout(function() {
        if (document.body.scrollTop) {
          document.body.scrollTop -= 50;
        } else if (document.documentElement.scrollTop) {
          document.documentElement.scrollTop -= 50;
        }
        if (scrollNow <= 50) {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          return false;
        }
        scrollMove();
      }, 1);
    })();
  }
})();