
// 1. Переделать в ДЗ не fetch!!!!! а new Promise()
let getRequest = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject('Error');
        } else {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.send();
  })
};



// class ProductList {
//   #goods;

//   constructor(container = '.products') {
//     this.container = container;
//     this.#goods = [];
//     this.allProducts = [];

//     // this._fetchProducts();
//     this.#getGoods()
//       .then(data => {
//         this.#goods = [...data];
//         this.#render();
//       });

//     console.log(this.sumPrice());
//   }

  // _fetchProducts() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     this.#goods = JSON.parse(data);
  //     this.#render();
  //     console.log(this.#goods);
  //   });
  // }

//   #getGoods() {
//     return fetch(`${API}/catalogData.json`)
//       .then(response => response.json())
//       .catch(err => console.log(err));
//   }

//   #render() {
//     const block = document.querySelector(this.container);

//     for (let product of this.#goods) {
//       const productObject = new ProductItem(product);

//       this.allProducts.push(productObject);

//       block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
//     }
//   }

//   sumPrice() {
//     return this.#goods.reduce((sum, { price }) => sum + price, 0);
//   }
// }

// class ProductItem {
//   constructor(product, img = 'https://placehold.it/200x150') {
//     this.title = product.title;
//     this.price = product.price;
//     this.id = product.id;
//     this.img = img;
//   }
//   getHTMLString() {
//     return `<div class="product-item" data-id="${this.id}">
//               <img src="${this.img}" alt="Some img">
//               <div class="desc">
//                   <h3>${this.title}</h3>
//                   <p>${this.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//   }
// }

// const list = new ProductList();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);

