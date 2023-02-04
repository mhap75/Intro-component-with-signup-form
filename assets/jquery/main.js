jQuery(function ($) {
    $('.btn-signUp').on('mousedown', function () {
        $(this).addClass('btn-clicked');
    });
    $('.btn-signUp').on('mouseup', function () {
        $(this).removeClass('btn-clicked');
    });
    $('form input').on('focusout keyup', function () {
        if ($(this).val() === '') {
            $(this).css('border-color', 'hsl(0, 100%, 74%)');
            $(this).siblings().not('.invalidEmail').css('display', 'inline-block');
        } else {
            $(this).css('border-color', 'hsl(246, 25%, 77%)');
            $(this).siblings().not('.invalidEmail').css('display', 'none');
        }
    });
    $('form input[type="email"]').on('focusout keyup', function () {
        let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (!testEmail.test($(this).val()) && $(this).val() !== '') {
            $(this).css('border-color', 'hsl(0, 100%, 74%)');
            $(this).siblings('.invalidEmail, img').css('display', 'inline-block');
            $(this).css('color', 'hsl(0, 100%, 74%)');
        } else {
            $(this).css('border-color', 'hsl(246, 25%, 77%)');
            $(this).siblings('.invalidEmail').css('display', 'none');
            $(this).css('color', 'black');
        }
    });
});