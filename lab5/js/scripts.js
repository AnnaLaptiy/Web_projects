


window.addEventListener('DOMContentLoaded', event => {
   
    // Функция появления  фона при прокрутке страницы
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            //При прокрутке до верхней границы страницы фон исчезает и меняется стиль текста
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            //иначе, появляется белый фон в меню
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();
    
    document.addEventListener('scroll', navbarShrink);



});





