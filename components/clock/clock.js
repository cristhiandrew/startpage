window.onload = function() {
    clock();  
      function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = 'pm';
     
    document.getElementById('currentTime').innerHTML =     hour+' : '+min;
      setTimeout(clock, 1000);
      }
  }
  