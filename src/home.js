function Home() {
  const root = document.querySelector('#content');
  const rootContent = document.createElement('div');
  document.body.appendChild(rootContent);

  const content = () => {
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
    // first child of root
    root.appendChild(nav);

    // add eventlisteners for each menuTab
    menu.addEventListener('click', () => {
      while (rootContent.firstChild) {
        rootContent.removeChild(rootContent.lastChild);
      }
      menuTab.Menu();
    });

    about.addEventListener('click', () => {
      //wipe out contents of rootContent
      while (rootContent.firstChild) {
        rootContent.removeChild(rootContent.lastChild);
      }
      aboutTab.section1();
    });
  };
}
export { Home, root, rootContent };
