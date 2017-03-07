
//引入serviceWorker，进行缓存管理
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js', { scope: "./" }) //setting scope of sw
    .then(function(registration) {
      console.info('Service worker is registered!');
    })
    .catch(function(error) {
      console.error('Service worker failed ', error);
    });
}


var _interval = 0;

window.onload = function(e) {

    //控制首页的走马灯
    setInterval(function() {
        var textItem = document.getElementsByClassName('textItem')
        var displayItem = document.querySelector('.current');
        if(displayItem) displayItem.classList.remove('current');
        textItem[_interval % textItem.length].classList.add('current');
        _interval++;
    }, 3000);

    
}