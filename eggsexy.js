EggSexy = {};

EggSexy.switch = (function () {
    var states = {
        egg: 'Egg<br /><br />&nbsp;&nbsp;_<br />&nbsp;/ \\<br />|&nbsp;&nbsp;&nbsp;|<br />&nbsp;\\_/',
        sexy: 'Sexy<br /><br/>(.Y.)<br />&nbsp;).(<br />( V )<br />&nbsp;\\|/'
    };

    var currentState = 'egg';

    return function () {
        if (currentState === 'egg') {
            currentState = 'sexy';
        } else if (currentState === 'sexy') {
            currentState = 'egg';
        }
        return states[currentState];
    };
})();

window.onload = function () {
    EggSexy.display = document.getElementById('display');
    EggSexy.display.innerHTML = 'Egg<br /><br />&nbsp;&nbsp;_<br />&nbsp;/ \\<br />|&nbsp;&nbsp;&nbsp;|<br />&nbsp;\\_/'
    document.getElementById('switcher').onclick = function () {
        EggSexy.display.innerHTML = EggSexy.switch();
    };
};
