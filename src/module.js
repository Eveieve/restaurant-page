function Home() {
  const content = () => {
    const root = document.querySelector('#content');
    console.log(root);
    const nav = document.createElement('nav');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const about = document.createElement('li');

    menu.textContent = 'MENU';
    about.textContent = 'ABOUT';
    contact.textContent = 'CONTACT';
    root.appendChild(nav);
    nav.appendChild(menu);
    nav.appendChild(about);
    nav.appendChild(contact);

    menu.addEventListener('click', () => tab.menuTab());
  };
  return { content };
}
export { Home };

function MenuTab() {
  const menuTab = () => {
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

    document.body.append(menu, mainCourse, desserts, drinks, salads);
    document.body.appendChild(mainCourse);
  };
  return { menuTab };
}
const tab = MenuTab();
export { MenuTab };
