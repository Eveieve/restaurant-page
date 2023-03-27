const root = document.querySelector('#content');
const rootContent = document.createElement('div');
document.body.appendChild(rootContent);

const renderSection1 = () => {
  const header = document.createElement('h1');
  header.textContent = 'ABOUT US';

  const header2 = document.createElement('h3');
  header2.textContent = 'L’Arte Della Pizza is the New Neapolis';

  const para = document.createElement('p');
  para.textContent =
    'A place where true Neapolitan tradition combines with the vision of the new generation. Our pizza is a mix of passion and bakery science. Inspired by the scientific elements, we created our own. You can spot several of these icons at L’Arte. Watch closely and they tell you the story about the origins of Napels and the mythical siren Partenope. Following the path of the song Odissea from La Famiglia, telling old stories by using a new language – rap music. Just like L’Arte does with the pizza.';
  rootContent.append(header, header2, para);
  // root.append(rootContent);
};

export default function renderAbout() {
  renderSection1();
}
