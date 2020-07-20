const contacts = ['Bharat', 'Bhavesh', 'Kalp', 'Rahul', 'Parvez'];

/**
 * X Attach a ul as a sibling to #filterInput
 * X add contacts as 'li's
 * handle the event and filter out based on regex
 */
let searchInput = document.getElementById('filterInput');

let contactUnorderedList = document.createElement('ul');
contactUnorderedList.className = 'contact-container';
searchInput.insertAdjacentElement('afterend', contactUnorderedList);

contacts.forEach((contact) => {
  let node = document.createElement('li');
  let textnode = document.createTextNode(contact);
  node.appendChild(textnode);
  contactUnorderedList.appendChild(node);
});

searchInput.addEventListener('keyup', filterNames);

function filterNames(event) {
  let searchInput = event.target.value.toUpperCase();
  let li = document.querySelectorAll('.contact-container > li');
  // console.log(li);

  for (let i = 0; i < li.length; i++) {
    const element = li[i];

    if (element.innerHTML.toUpperCase().indexOf(searchInput) > -1) {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  }
}
