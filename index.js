const css = require('./index.css');

const root = document.getElementById('root');
const ul = document.createElement('ul');
for (let i=0; i<5; i++) {
  const li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
}
root.insertAdjacentElement('beforeend',ul);
console.log(css);