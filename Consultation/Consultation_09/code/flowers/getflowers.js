/*   {
    "name": "rose",
    "color": "red",
    "description": "Has horns and very beatiful",
    "image": "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VycyUyMHJvc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "maxHeight": 200
  }
*/

const flowersContainerElement = document.getElementById('flowers-container');

loadFlowers();

function loadFlowers() {
  fetch('https://alisherkhamidov.github.io/book-api/flowers.json')
    .then((res) => res.json())
    .then((flowers) => {
      flowers.forEach((flower) => {
        const { name, color, description, image, maxHeight } = flower;

        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        const nameElement = document.createElement('span');
        nameElement.classList.add('card-element', 'title');

        const imgElement = document.createElement('img');
        imgElement.className = 'card-element';

        nameElement.textContent = name;
        imgElement.src = image;

        cardElement.append(nameElement, imgElement);

        flowersContainerElement.append(cardElement);
      });
    })
    .catch((error) => console.error('Error loading flowers:', error));
}
