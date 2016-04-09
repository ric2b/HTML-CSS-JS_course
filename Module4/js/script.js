document.getElementById('number').innerHTML = localStorage.getItem('clicks');

function handleClick(callback) {
    //alert('This button has been clicked');
    if (callback) {
        callback();
    }
}

function doMore() {
    if (localStorage.getItem('clicks') == NaN) {
        localStorage.setItem("clicks", 0);
    }

    localStorage.setItem("clicks", Number(localStorage.getItem('clicks')) + 1);
    //var getClickCount = 'Click Count: ' + sessionStorage.clickcount;
    document.getElementById('number').innerHTML = localStorage.getItem('clicks');
    //alert('I could process more logic here');
}

function doSomethingElse() {
    document.writeln('Test Message');
}



