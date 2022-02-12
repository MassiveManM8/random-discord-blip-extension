let ping = new Audio('weinor.mp3')


function doSomething() {
    ping.play()
}


(function loop() {
    var rand = Math.round(Math.random() * (15000 - 1000)) + 1000;
    console.log(rand)
    setTimeout(function() {
            doSomething();
            loop();  
    }, rand);
}());


