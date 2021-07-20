$(function() {
    $('.module-toggle-menu_button').on('click', function(e) {
        e.preventDefault();
        $('.nav--header').toggleClass('js--show');
    });

    function test() {
        document.getElementById('body').classList.toggle('js--test');
    }
    document.getElementsByClassName('module-toggle-menu_button')[0].addEventListener("click", test);
});