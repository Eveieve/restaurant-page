const root = document.querySelector('#content');
console.log(root);

function Home() {
  const content = () => {
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

    // const mainContent = w
    menu.addEventListener('click', () => tab.Menu(), { once: true });
    about.addEventListener('click', () => aboutTab.section1());
  };
  return { content };
}
export { Home };

function Menu() {
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

    root.append(menu, mainCourse, desserts, drinks, salads);
  };

  return { Menu };
}
const tab = Menu();
export { Menu };

function About() {
  const section1 = () => {
    const header = document.createElement('h1');
    header.textContent = 'ABOUT US';

    const header2 = document.createElement('h3');
    header2.textContent = 'L’Arte Della Pizza is the New Neapolis';

    const para = document.createElement('p');
    para.textContent =
      'A place where true Neapolitan tradition combines with the vision of the new generation. Our pizza is a mix of passion and bakery science. Inspired by the scientific elements, we created our own. You can spot several of these icons at L’Arte. Watch closely and they tell you the story about the origins of Napels and the mythical siren Partenope. Following the path of the song Odissea from La Famiglia, telling old stories by using a new language – rap music. Just like L’Arte does with the pizza.';
    root.append(header, header2, para);
  };
  return { section1 };
}
const aboutTab = About();
export { About };
