"use strict";

var newWindow;

var myName = 'Hung';

function openWindow() {
    const url = document.getElementById('window-url').value;
    if (url) {
        newWindow = window.open(`http://${url}`, "", 'width=600, height=600, top=100, left=100');

    } else {
        newWindow = window.open("", "", 'width=600, height=600, top=100, left=100');
        newWindow.document.write("<h1>Hello World!</h1>");
    }
}

function closeWindow() {
    if (newWindow != undefined) {
        newWindow.close();
        newWindow = undefined;
    } else {
        alert("Nothing to close!!");
    }
}

function resizeSmall() {
    window.newWindow.resizeTo(300, 300);
}

function resizeLarge() {
    window.newWindow.resizeTo(1000, 1000);
}

function resizeSmaller() {
    window.newWindow.resizeBy(-50, -50);
}

function resizeLarger() {
    window.newWindow.resizeBy(50, 50);
}

var delay = 1000; // 1000 milliseconds = 1 second
var count = 0;
var max = 5;

var intervalId = setInterval(function () {
    if (count >= 5) {
        clearInterval(intervalId)
    } else {
        count++;
        console.log("count is: " + count);
    }
}, delay);


var timeoutId = setTimeout(function() {
    console.log("three seconds passed");
}, 3000);



/*
var clockTweetId = setTimeout(function () {
    // Make tweet noise
}, 3000)

var clockTimerDecrease = setInterval(function () {
    if (clockTime === 0) {
        clearInterval();
        makeTweetNoise();
    }
    // decrease clock time
}, 1000)*/

var time = 0;

var stopWatchId = setInterval(function() {
    console.log('Current time: ' + time);
    time+= 500;
}, 500)


console.log(intervalId);
console.log(timeoutId);

const stopBtnEl = document.querySelector('#stop-btn').addEventListener("click", function() {
    console.log("stop button clicked");
    clearInterval(stopWatchId);
})

/*function clear() {
    clearInterval(intervalId);
}*/

// clearInterval(id) - pass in an id to clear the interval