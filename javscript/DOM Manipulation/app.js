// DOM Manipulation

// Event Delegation

// // GetElementById()
// const title = document.getElementById('main-heading');
//
// console.log(title);
//
//
// // GetElementByClassName()
//
// const listItems = document.getElementsByClassName('listItems');
// console.log(listItems);
//
// // GetElementByTagName();
//
// const listItems2 = document.getElementsByTagName('li');
// console.log(listItems2)
//
// // querySelector()
//
// const container = document.querySelector('.container')
//
// console.log(container)

// DOM MANIPULATION

// Styling Elements
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
//doesnt work on multiple items need to loop
// const listItems = document.querySelectorAll('.listItems');
// for ( i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '2rem';
// }

// Creating elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// // Adding elements
// ul.append(li);
// // Modifying the text
// const firstListItem = document.querySelector('.listItems');
// li.innerText = 'Hockey 🏒';
// // li.setAttribute('id', 'main-heading')
// // li.removeAttribute('id');
//
// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));
// li.classList.add('listItems')
// li.id = "hockey";
//
// // Modifying Attributes and Classes
// // console.log(firstListItem.innerText)
// // console.log(firstListItem.textContent)
// // console.log(firstListItem.innerHTML)
//
// // Remove Elements
// li.remove();


// DOM NAVIGATION
// Parenmt Node Traversal
// let ul = document.querySelector('ul');
// const html = document.documentElement;
// console.log(html.parentNode); // use parent node
// console.log(html.parentElement); // parentElement returns null if the node isn't an element, like in the case of the parent of html (document)
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement);

// Child Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes); //lists the text nodes, which might have a lot of unnecessary stuff like indentations
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// // ul.childNodes[1].style.backgroundColor = 'blue';
// console.log(ul.children);

// Sibling Node Traversal
// let li = document.querySelector('li');
// console.log(li);
// console.log(li.previousElementSibling);
// console.log(li.nextElementSibling);

