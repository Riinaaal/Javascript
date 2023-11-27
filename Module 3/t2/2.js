const ul = document.querySelector('#target');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const t1 = document.createTextNode('First item')
const t2 = document.createTextNode('Second item')
const t3 = document.createTextNode('Third item')

li2.classList.add("my-item")

li1.appendChild(t1);
ul.appendChild(li1);
li2.appendChild(t2);
ul.appendChild(li2);
li3.appendChild(t3);
ul.appendChild(li3);

