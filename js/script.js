
$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({ end: 20, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 7079, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 1043, duration: 2000 });

/* ########################### join our team ######################## */

$(document).ready(function () {
    $(".form__check").click(function () {
        var checkbox = $(this).find(".form-check-input");
        var isChecked = checkbox.prop("checked");

        checkbox.prop("checked", !isChecked);

        if (!isChecked) {
            $(this).css("background-color", "#18BEF0");
        } else {
            $(this).css("background-color", "");
        }
    });
});


$(document).ready(function () {
    $('#language-selector').change(function () {
        var selectedLanguage = $(this).val();
        // Perform language-specific actions, such as reloading the page with the selected language
        // or updating the content dynamically using AJAX requests.
    });
});

