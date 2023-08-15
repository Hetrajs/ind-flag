var c = document.getElementById("flag");
var $ = c.getContext('2d');

var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

var flagflow = function(a, b, t) {
    $.lineWidth = 0.5;
    $.fillStyle = `black`;
    $.fillRect(0, 0, w, h);

    // Orange color
    for (var i = -60; i < 60; i += 1) {
        $.strokeStyle = 'rgba(255,153,51,0.8)';
        $.beginPath();
        $.moveTo(0, h / 2);
        for (var j = 0; j < w; j += 10) {
            $.lineTo(10 * Math.sin(i / 10) +
                j + 0.008 * j * j,
                Math.floor(h / 2 + j / 2 *
                    Math.sin(j / 50 - t / 50 - i / 118) +
                    (i * 0.9) * Math.cos(j / 25 - (i + t) /
                    65)));
        }
        $.stroke();
    }

    // White color
    for (var i = -60; i < 60; i += 1) {
        $.strokeStyle = 'rgba(255,255,255,0.5)';
        $.beginPath();
        $.moveTo(0, h / 2);
        for (var j = 0; j < w; j += 10) {
            $.lineTo(10 * Math.cos(i / 10) +
                j + 0.008 * j * j,
                Math.floor(h / 2 + j / 2 *
                    Math.sin(j / 50 - t / 50 - i / 118) +
                    (i * 0.9) * Math.sin(j / 15 - (i + t) /
                    65)));
        }
        $.stroke();
    }

    // Green color
    for (var i = -60; i < 60; i += 1) {
        $.strokeStyle = 'rgba(19,136,8,0.5)';
        $.beginPath();
        $.moveTo(0, h / 2);
        for (var j = 0; j < w; j += 10) {
            $.lineTo(10 * Math.sin(i / 10) +
                j + 0.008 * j * j,
                Math.floor(h / 2 + j / 2 *
                    Math.cos(j / 50 - t / 50 - i / 118) +
                    (i * 0.9) * Math.sin(j / 15 - (i + t) /
                    65)));
        }
        $.stroke();
    }

     // Add text "Happy Independence Day!"
     $.font = "24px Arial";
     $.fillStyle = "white";
     $.textAlign = "center";
     $.fillText("Happy Independence Day!", w / 2, h - 80);
 
     // Add text "77th" with mini Indian flag
     $.font = "18px Arial";
     $.fillStyle = "white";
     $.fillText("77th", w / 2 - 40, h - 50);
     
     // Draw mini Indian flag
     var flagSize = 20;
     var flagX = w / 2 - 10;
     var flagY = h - 65;
     
     // Orange color
     $.fillStyle = 'orange';
     $.fillRect(flagX, flagY, flagSize, flagSize / 3);
     
     // White color
     $.fillStyle = 'white';
     $.fillRect(flagX, flagY + flagSize / 3, flagSize, flagSize / 3);
     
     // Green color
     $.fillStyle = 'green';
     $.fillRect(flagX, flagY + (2 * flagSize) / 3, flagSize, flagSize / 3);
 };

var t = 0;
window.addEventListener('resize', function() {
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
    $.fillStyle = `hsla(277,95%,55%,1)`;
}, false);

var run = function() {
    window.requestAnimationFrame(run);
    t += 1;
    flagflow(33, 52 * Math.sin(t / 2400), t);
};

run();
