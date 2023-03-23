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
