$(document).ready(function(){
  var stickyNavTop, scrollTop;

  var stickyNav = function(){
    stickyNavTop = window.innerHeight;
    scrollTop = $(window).scrollTop();

    $("header").css("opacity", 1 - scrollTop / stickyNavTop);

    if (scrollTop > stickyNavTop) {
      $('#nav').addClass('sticky');
      $('#about').addClass('contentpush');
    } else {
      $('#nav').removeClass('sticky');
      $('#about').removeClass('contentpush');
    }
  };

  stickyNav();
  $(window).scroll(function(){ stickyNav(); });
  window.onresize = function(){ stickyNav(); }

  // Set the date we're counting down to.
  // var target_date = new Date("March 31, 2014").getTime();

  // // Variables for time units.
  // var days, hours, minutes, seconds;

  // // Get the elements that will hold the numbers.
  // var $days = document.getElementById("d");
  // var $hours = document.getElementById("h");
  // var $minutes = document.getElementById("m");
  // var $seconds = document.getElementById("s");

  // // Calculate the countdown clock and set the HTML.
  // function update() {
  //   // Find the amount of "seconds" between now and target.
  //   var current_date = new Date().getTime();
  //   var seconds_left = (target_date - current_date) / 1000;

  //   // Do some time calculations.
  //   days = parseInt(seconds_left / 86400);
  //   seconds_left = seconds_left % 86400;

  //   hours = parseInt(seconds_left / 3600);
  //   seconds_left = seconds_left % 3600;

  //   minutes = parseInt(seconds_left / 60);
  //   seconds = parseInt(seconds_left % 60);

  //   // Format the number strings and put them in the elements.
  //   $days.innerHTML = pad(days, 2);
  //   $hours.innerHTML = pad(hours, 2);
  //   $minutes.innerHTML = pad(minutes, 2);
  //   $seconds.innerHTML = pad(seconds, 2);
  // }

  // update();
  // // Update our number elements every 1 second
  // setInterval(update, 1000); // 1000 milliseconds = 1 second

  // This looks much better with leading zeros, don't you agree?
  // If num has less than size digits, add enough 0s to the front.
  // function pad(num, size) {
  //   var s = num + "";
  //   while (s.length < size) s = "0" + s;
  //   return s;
  // }

  // Smooth scrollTo
  var scrollTo = function(el, off){
    $('html, body').animate({
      scrollTop: $(el).offset().top - off
    }, 650);
  }

  $("header").click(function(){ scrollTo("nav", 0); });
  $("#more").click(function(){ scrollTo("nav", 0); });
  $("#title").click(function(){ scrollTo("body", 0); });
  $("#navabout").click(function(){
    if (scrollTop <= stickyNavTop) scrollTo("nav", 0);
    else scrollTo("#about", 0);
  });
  $("#navgoals").click(function(){ scrollTo("#goals", 50); });
  $("#navvote").click(function(){ scrollTo("#vote", 50); });
  $("#navcontact").click(function(){ scrollTo("#contact", 50); });
  $("#navright").click(function(){ scrollTo("#vote", 50); });

  // Map
  function init_map() {
    var homeLatLng = new google.maps.LatLng(43.65950128716179,-79.39750556759793);
    var myOptions = {
      disableDefaultUI:true,
      scrollwheel:false,
      draggable:false,
      zoom:17,
      center: homeLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP};
      map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
      marker = new google.maps.Marker({
        map: map,
        position: homeLatLng
      });
      google.maps.event.addListener(marker, "click", function(){ infowindow.open(map, marker); });
      google.maps.event.addDomListener(window, "resize", function(){ map.setCenter(homeLatLng); });
      infowindow.open(map,marker);
    }
    google.maps.event.addDomListener(window, "load", init_map);
});