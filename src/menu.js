// const root = document.querySelector('#content');
const rootContent = document.querySelector('#root-content');
// document.body.appendChild(rootContent);

const renderMenu = () => {
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
};

export default function renderMenuTab() {
  renderMenu();
}
