const openSearch = document.querySelector('.header button.icon-search');
const searchBar = document.querySelector('.header__search');
const searchBtnClose = document.querySelector('.header__search__btn--close');
const notificationBox = document.querySelector('.header__notifications-box');
const btnBell = document.querySelector('.header__notifications button');

const mainMenu = document.querySelector('.aside__menu');
const body = document.querySelector('body');
const asideBtnClose = document.querySelector('.aside__menu__btn--close');
const navBtnToggle = document.querySelector('.header__nav-toggle');

const showSubMenu = document.querySelector('.menu-item-has-children');

/* Search */
openSearch.addEventListener('click', toggleSearchBar);
searchBtnClose.addEventListener('click', toggleSearchBar);
btnBell.addEventListener('click', togglenotification);

/* Navigation */
showSubMenu.addEventListener('click', toggleDropDown);
navBtnToggle.addEventListener('click', toggleNav);
window.addEventListener('resize', checkScreenSize);
asideBtnClose.addEventListener('click', toggleNav);

function togglenotification() {
    notificationBox.classList.toggle('active');
    console.log('CLICK');
}

function toggleSearchBar() {
    searchBar.classList.toggle('active');
}

function toggleDropDown() {
    showSubMenu.classList.toggle('open');
}

function toggleNav() {
    mainMenu.classList.toggle('active');
    body.classList.toggle('active');
}

function checkScreenSize() {
    if (window.innerWidth < 990) {
        mainMenu.classList.remove('active');
        body.classList.remove('active');
    } else {
        mainMenu.classList.add('active');
        body.classList.add('active');
    }
}

checkScreenSize();

document.addEventListener('click', function(e) {
    if (!e.target.closest('.header__notifications')) {
        notificationBox.classList.remove('active');
    } else {
        return;
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        if ( notificationBox.classList.contains('active')) {
            notificationBox.classList.remove('active');
        }

        if (searchBar.classList.contains('active')) {
            searchBar.classList.remove('active');
        }
    }
});