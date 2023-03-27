import renderMenuTab from './menu';
import renderAbout from './about';

const root = document.querySelector('#content');

const rootContent = document.querySelector('#root-content');

const renderHomeContent = () => {
  const p = document.createElement('p');
  p.textContent = 'This is a some home content';
  rootContent.appendChild(p);
};

export const renderNavbar = () => {
  const nav = document.createElement('nav');
  const home = document.createElement('li');
  const menu = document.createElement('li');
  const contact = document.createElement('li');
  const about = document.createElement('li');

  home.textContent = 'HOME';
  menu.textContent = 'MENU';
  about.textContent = 'ABOUT';
  contact.textContent = 'CONTACT';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(about);
  nav.appendChild(contact);
  root.appendChild(nav);

  home.addEventListener('click', () => {
    while (rootContent.firstChild) {
      rootContent.removeChild(rootContent.lastChild);
    }
    renderHomeContent();
  });
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
  return { home };
};

export function renderHome() {
  renderHomeContent();
  renderNavbar();
}
