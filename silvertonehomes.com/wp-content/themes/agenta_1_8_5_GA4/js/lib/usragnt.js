function usragnt() {
    var ua = navigator.userAgent;
    var d = document.getElementsByTagName('html'),
        h = d[0];
    var uas = ['Firefox', 'Chrome', 'Safari'];
    for (const a of uas) {
        if (ua.includes(a)) {
            h.classList.add(a.toLowerCase());
            return
        }
    }
}
usragnt();