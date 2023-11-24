window.onload = function() {
    clock();  
      function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = 'pm';
     
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;
      document.getElementById('currentTime').innerHTML = hour + ' : ' + min;
      setTimeout(clock, 1000);
      }
  }
  