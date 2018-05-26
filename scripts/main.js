function removeFooter(limitCheck, limitCount) {
    var sneakyFoot = document.querySelector('.cognito > div:last-child');
    if (!sneakyFoot && (limitCount < limitCheck)) {
        setTimeout(function () {
            console.log('checking');
            removeFooter(limitCheck, limitCount + 1);
        }, 500)
    } else {
        sneakyFoot.style.cssText = "";
        sneakyFoot.style.display = "none";
        return sneakyFoot;
    }
}

document.addEventListener('DOMContentLoaded', function (o) {
    var nav = document.querySelector('#navigation');
    var menuButton = document.querySelector('#menuButton');
    var header = document.querySelector('header');
    var body = document.body;
    var html = document.body.parentElement;
    var navItems = document.querySelector('nav > a');

    var limitCheck = 20;
    var limitCount = 0;

    removeFooter(limitCheck, limitCount);

    menuButton.addEventListener('click', function (e) {
        e.preventDefault();
        header.classList.toggle('is-active');
        nav.classList.toggle('hidden');
        menuButton.classList.toggle('is-active');
        body.classList.toggle('stop-scrolling');
        html.classList.toggle('stop-scrolling');

        if (menuButton.classList.contains('is-active')) {
            navItems.addEventListener('click', function (e) {
                menuButton.dispatchEvent('click');
            });
            document.ontouchmove = function (e) { e.preventDefault(); }
        } else {
            navItems.removeEventListener('click', function (e) {
                menuButton.dispatchEvent('click');
            });
            document.ontouchmove = function (e) { return true; }
        }
    }.bind(this))
}.bind(this));