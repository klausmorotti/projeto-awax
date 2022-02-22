function  MenuToogle() {
    let MenuArea = document.querySelector('nav');

    if ( MenuArea.classList.contains('menu-opened') == true ) {
        MenuArea.classList.remove('menu-opened');
    } else {
        MenuArea.classList.add('menu-opened')
    }
}