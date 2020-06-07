var items = [
  {
    id: 0,
    title: 'Hat',
    imageURL: 'https://i.imgur.com/HgIzJ0O.png',
    description: 'A retro hat from 1972 wore by Jim Morrison. Size L',
    price: 25.99,
  },
  {
    id: 1,
    title: 'Guitar',
    imageURL: 'https://i.imgur.com/1pc347r.png',
    description: 'Used by Jimi Hendrix in Spain tour 1969. Left-handed.',
    price: 7560,
  },
  {
    id: 2,
    title: 'Headset',
    imageURL: 'https://i.imgur.com/BU1u53U.png',
    description: 'Mono/Stereo sound.',
    price: 129.99,
  },
  {
    id: 3,
    title: 'Backpack',
    imageURL: 'https://i.imgur.com/WOGQ3ll.png',
    description: '25 liters travel fake-leather',
    price: 59.99,
  },
  {
    id: 4,
    title: 'Glasses',
    imageURL: 'https://i.imgur.com/KQssRzO.png',
    description:
      '-3.75 left eye -4.25 right eye. Can you buy glasses like this somewhere else? You cannot.',
    price: 158.45,
  },
  {
    id: 5,
    title: 'Camera',
    imageURL: 'https://i.imgur.com/hifcDsd.png',
    description: 'Works only with Kodak Pro-289l films',
    price: 46.15,
  },
  {
    id: 6,
    title: 'Skate',
    imageURL: 'https://i.imgur.com/KiZi7HQ.png',
    description: 'Tony Hawks first skate.',
    price: 2500,
  },
  {
    id: 7,
    title: 'Shirt',
    imageURL: 'https://i.imgur.com/4OZIWFV.png',
    description: 'Wore by Elvis Presley in Acapulco film.',
    price: 756,
  },
  {
    id: 8,
    title: 'Sneakers',
    imageURL: 'https://i.imgur.com/4GtCkkJ.png',
    description: 'Used by Bugs Bunny in Space-Jam',
    price: 259.3,
  },
  {
    id: 9,
    title: 'Shoes',
    imageURL: 'https://i.imgur.com/uRXDvwK.png',
    description: 'Only one. Right foot.',
    price: 79.99,
  },
  {
    id: 10,
    title: 'Red Hat',
    imageURL: 'https://i.imgur.com/qvwxXYY.png',
    description: "Outlander's costume. Unique piece!",
    price: 250,
  },
  {
    id: 11,
    title: 'Brown Beanie',
    imageURL: 'https://i.imgur.com/zZAtqkD.png',
    description: 'Want to be cool but look like idiot? Buy this hat.',
    price: 829.15 + '\u20AC',
  },
  {
    id: 12,
    title: 'Blue Jeans',
    imageURL: 'https://i.imgur.com/PMFkkjS.png',
    description:
      'Blue jeans, white shirt. Walked into the room you know you made my eyes burn',
    price: 150.9,
  },
  {
    id: 13,
    title: 'Brown Pants',
    imageURL: 'https://i.imgur.com/PmCMb4p.png',
    description: 'They are so ugly that we give them out for almost nothing',
    price: 1.99,
  },
  {
    id: 14,
    title: 'Radio',
    imageURL: 'https://i.imgur.com/Xd1YRFS.png',
    description: 'AM only. Volumne knob broken but works at max volume',
    price: 5.99,
  },
];
let cart = [];
let total = 0;
let snackbar = document.getElementById('snackbar');
let cartIndicator = document.getElementById('cartNr');
let snackbarMessege = document.getElementById('snackbarMessege');
let cartTotal = document.getElementById('cartTotal');

for (let index = 0; index < items.length; index++) {
  const storeList = document.getElementById('container');
  let item = items[index];

  let itemContainer = document.createElement('div');
  itemContainer.classList.add('grid-item');
  storeList.appendChild(itemContainer);

  let title = document.createElement('h3');
  title.innerHTML = item.title;
  title.classList.add('title');
  itemContainer.appendChild(title);

  let image = document.createElement('img');
  image.src = item.imageURL;
  itemContainer.appendChild(image);

  let description = document.createElement('p');
  description.innerHTML = item.description;
  itemContainer.appendChild(description);

  let price = document.createElement('p');
  price.classList.add('price');
  price.innerHTML = item.price + '&euro;';
  itemContainer.appendChild(price);

  let addButton = document.createElement('button');
  addButton.innerHTML = 'Add to cart';
  addButton.onclick = function () {
    asd();
    /* cart.push(item);
        snackbarMessege.innerHTML = item.title + " has been added to the cart!";
        toggleSnackbar();
        total += item.price;
        cartTotal.innerHTML = "Total : " + total;
        cartIndicator.innerHTML = cart.length;
        showCart();*/
    //checkCart();
    //change button to make sure the user cannot add the item in the cart again
    //addButton.disabled = "true";
  };

  //kõik väga putsis, tee uuesti kogu lisamis ja eemaldamis section

  //remove from cart

  itemContainer.appendChild(addButton);
}

var cartModal = document.getElementById('modal');
var modalToggle = document.getElementById('cartIcon');
if (cart.length > 0) {
  console.log('asd');
  // modalToggle.addEventListener('click', function () {
  //cartModal.classList.toggle("modal-active");
  //showCart();
  // });
}

function checkCart() {
  if (cart === undefined || cart.length == 0) {
    console.log('ei');
    //        cartModal.classList.remove("modal-active");
  } else {
    /*modalToggle.onclick = function () {
            cartModal.classList.toggle("modal-active");
        }*/
    console.log('midagi on');
    // cart = [];
  }
}

function test() {
  for (var index = 0; index < cart.length; index++) {
    let item = items[index];
    if (cart.indexOf(item) > -1) {
      console.log('vittu on juba');
    } else if (items.indexOf(item) == -1) {
      console.log('ei ole kohe teeme et oleks');
      cart.push(item);
      total += item.price;
      console.log(cart);
      console.log(total);
    }
  }
}

function asd() {
  console.log('asd');
}

function showCart() {
  let modalContent = document.getElementById('cartModal');
  modalContent.innerHTML = '';

  for (var i = 0; i < cart.length; i++) {
    let item = cart[i];

    let cartDiv = document.createElement('div');
    modalContent.appendChild(cartDiv);
    var cartTitle = document.createElement('p');
    cartTitle.innerHTML = item.title;
    cartDiv.appendChild(cartTitle);
    let cartPrice = document.createElement('p');
    cartPrice.innerHTML = item.price;
    cartDiv.appendChild(cartPrice);
    let cartImage = document.createElement('img');
    cartImage.src = item.imageURL;
    cartDiv.appendChild(cartImage);

    /*let removeFromCart = document.createElement("p")
        removeFromCart.innerHTML = "&times;"
        removeFromCart.classList.add("modal-close");
        cartDiv.appendChild(removeFromCart);
        removeFromCart.addEventListener('click', function () {
            if (cart.includes(item.title)) {
                snackbarMessege.innerHTML = item.title + " has been removed from the cart!";
                toggleSnackbar();
                total -= item.price;
                cart.pop(item.title);
                cartIndicator.innerHTML = cart.length;
                cartTotal.innerHTML = "Total : " + total.toFixed(2) + "&euro;";
                cartDiv.parentNode.removeChild(cartDiv);
                checkCart();

            }
        });*/
  }
}

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', () => {
    //Toggle nav
    nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};
navSlide();

function toggleSnackbar() {
  snackbar.className = 'show';
  setTimeout(function () {
    snackbar.className = snackbar.className.replace('show', '');
  }, 3000);
}

//cartist asjade eemaldamisega on kaa mingi nuss
//Viimase asja eemaldamisega on alati mingi nuss
