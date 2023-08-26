
// 24 dz
console.log(document.head.firstChild.nextSibling);

console.log(document.head.lastChild.previousSibling);

console.log(document.head.parentNode);

console.log(document.body.firstChild.nextSibling);

console.log(document.body.firstElementChild);

console.log(document.body.lastElementChild);

console.log(document.body.firstElementChild.nextSibling.nextSibling);

console.log(document.getElementById('lor2'));

console.log(document.getElementById('lor5'));

let lor = document.getElementById('lor6');

console.log(lor.firstElementChild);

let sp = document.querySelector('.sp3');
console.log(sp);

sp.style.color = 'blue';
sp.style.fontSize = '32px';

let lorFive = document.getElementById('lor5');

lorFive.append('\nAppend');
lorFive.prepend('Prepend\n');

let lor6_in = document.createElement('lor6');
lor6_in.innerText = 'innerText';

lor.append(lor6_in);

// dz 25

let block1 = document.getElementById('block-1');
let block2 = document.getElementById('block-2');

block1.onclick = color
block2.onclick = color

block1.addEventListener('click', border)
block2.addEventListener('click', border)

function color(){
    this.classList.toggle('active');
};

function border(){
    this.style.borderRadius = '100px';
}