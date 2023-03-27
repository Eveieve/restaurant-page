function MenuTab() {
  //function to delete previous things on webpage
  const Menu = () => {
    const menu = document.createElement('h2');
    menu.textContent = 'MENU';

    const mainCourse = document.createElement('h4');
    mainCourse.textContent = 'Main Course';

    const desserts = document.createElement('h4');

    desserts.textContent = 'Desserts';
    const drinks = document.createElement('h4');
    drinks.textContent = 'Drinks';
    const salads = document.createElement('h4');
    salads.textContent = 'Salads';

    rootContent.append(menu, mainCourse, desserts, drinks, salads);
    // root.appendChild(rootContent);
  };
}

export { MenuTab };
