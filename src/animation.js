function animation () {
    let container = document.querySelector('.container');
    
    container.style.visibility = "visible";
    container.style.top = "0";
}

setInterval(animation, 1000);