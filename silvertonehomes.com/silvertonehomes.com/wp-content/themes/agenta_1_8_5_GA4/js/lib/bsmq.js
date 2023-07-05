function bsmq() {
    var d = document.getElementsByTagName('html'),
        h = d[0];
    if (window.innerWidth >= 1200) {
        h.classList.remove("lrg", "med", "sml", "xsml");
        h.classList.add("xlrg");
    } else if (window.innerWidth < 1200 && window.innerWidth >= 992) {
        h.classList.remove("xlrg", "med", "sml", "xsml");
        h.classList.add("lrg");
    } else if (window.innerWidth < 992 && window.innerWidth >= 768) {
        h.classList.remove("xlrg", "lrg", "sml", "xsml");
        h.classList.add("med");
    } else if (window.innerWidth < 768 && window.innerWidth >= 576) {
        h.classList.remove("xlrg", "lrg", "med", "xsml");
        h.classList.add("sml");
    } else if (window.innerWidth < 576) {
        h.classList.remove("xlrg", "lrg", "med", "sml");
        h.classList.add("xsml");
    }
}
window.onresize = function(event) {
    bsmq();
}
window.onload = function(event) {
    bsmq();
}