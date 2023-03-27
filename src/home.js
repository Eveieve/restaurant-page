import renderMenuTab from './menu';
import renderAbout from './about';
// function Home() {
const root = document.querySelector('#content');

const rootContent = document.createElement('div');
document.body.appendChild(rootContent);

const renderNavbar = () => {
  const nav = document.createElement('nav');
  const menu = document.createElement('li');
  const contact = document.createElement('li');
  const about = document.createElement('li');

  menu.textContent = 'MENU';
  about.textContent = 'ABOUT';
  contact.textContent = 'CONTACT';

  nav.appendChild(menu);
  nav.appendChild(about);
  nav.appendChild(contact);
  root.appendChild(nav);

  menu.addEventListener('click', () => {
    while (rootContent.firstChild) {
      rootContent.removeChild(rootContent.lastChild);
    }
    renderMenuTab();
  });

  about.addEventListener('click', () => {
    while (rootContent.firstChild) {
      rootContent.removeChild(rootContent.lastChild);
    }
    renderAbout();
  });
};

export default function renderHome() {
  renderNavbar();
}
