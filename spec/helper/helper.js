$.fn.pressEnter = function () {
    var e = $.Event("keypress");
    e.keyCode = 13;
    $(this).trigger(e);
};

