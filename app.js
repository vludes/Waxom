window.onscroll = function () {
    var top = window.scrollY;
    var header = document.getElementsByTagName('header');
    var offset = $("header").height();

    if (top > offset) {
        header[0].classList.remove('top');
        header[0].classList.add('scrolled');
    } else {
        header[0].classList.remove('scrolled');
        header[0].classList.add('top');
    }


};




var btn = document.getElementById("js-task");
btn.onclick = function () {
    btn.disabled = true;
    console.log(btn.disabled)
    window.setTimeout(function () {
        btn.disabled = false;
        btn.addEventListener("click", function () {
            console.log("click")
        });
        btn.innerHTML = "AAAAA"
    }, 2000);
    console.log(btn.disabled);
};
console.log(btn.disabled);