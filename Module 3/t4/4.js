'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let select = document.querySelector('#target');
for(let i =0; i < students.length; i++){
  let o = document.createElement('option');
  let optionText = document.createTextNode(students[i].name);
  o.appendChild(optionText);
  o.setAttribute('value', students[i].id);
  select.appendChild(o);
}