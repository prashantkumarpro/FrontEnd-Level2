


// products
function getProducts() {
  // Define the API URL
  const apiUrl = 'https://fakestoreapi.com/products'

  // Make a GET request
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      showProducts(data)
      addToCart(data)
     
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function showProducts(data) {
  let clutter = '';
  let products = document.querySelector('.products');

  data.forEach((product, index) => {

    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
      <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"><img src="${product.image}" /></div>
      <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">${product.category}</h1>
          <div class="flex justify-between w-full items-center mt-2">
              <div class="w-1/2">
                  <h3 class="font-semibold opacity-20">${product.rating.rate} rating</h3>
                  <h4 class="font-semibold mt-2">$${product.price}</h4>
              </div>
              <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
              data-index="${index}" class="add ri-add-line"></i></button>
          </div>
      </div>
    </div>`;
  });

  products.innerHTML = clutter;
}

// populer

function getPopulersProducts() {
  let populer = [
    {
      product_id: 1,
      name: 'Sneakers',
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 149.44,
      description: "Indian made Men's Shoes"
    },
    {
      product_id: 2,
      name: 'Sneakers',
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 149.44,
      description: "Indian made Men's Shoes"
    },
    {
      product_id: 3,
      name: 'Sneakers',
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 149.44,
      description: "Indian made Men's Shoes"
    },
    {
      product_id: 3,
      name: 'Sneakers',
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 149.44,
      description: "Indian made Men's Shoes"
    },
    {
      product_id: 3,
      name: 'Sneakers',
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 149.44,
      description: "Indian made Men's Shoes"
    },
    {
      product_id: 3,
      name: 'Sneakers',
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 149.44,
      description: "Indian made Men's Shoes"
    },
  ]
  showPopulersProducts(populer)
}
function showPopulersProducts(populer) {
  let clutter = "";
  let populars = document.querySelector('.populars')
  populer.forEach((populerProduct) => {
    clutter += ` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover"src="${populerProduct.image}" alt=""/>
    </div>
    <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${populerProduct.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${populerProduct.description}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">$${populerProduct.price}</h4>
    </div>
</div>`
  })
  populars.innerHTML = clutter;
}
getPopulersProducts()
getProducts()

let cart = [];
function addToCart(product) {
  document.querySelector('.products')
    .addEventListener('click', function (dets) {
      if (dets.target.classList.contains('add')) {
        cart.push(product[dets.target.dataset.index])
  
      }
    })

}

function showTheCart() {
  let clutter = "";
  document.querySelector('.carticon')
  .addEventListener('click', function () {
    document.querySelector('.cartexpnd').style.display = 'block'
    cart.forEach((prod, index) => {
      clutter += `<div data-index="${index}" class="flex gap-2 bg-white p-2 rounded-lg ">
                    <div class="w-20 h-20  flex-shrink-0 rounded-lg overflow-hidden">
                     <img class="w-full h-full object-cover" src="${prod.image}" alt=""/>
                    </div>
                    <div>
                    <h3 class="font-semibold">${prod.category}</h3>
                    <h5 class="text-sm font-semibold opacity-80">$${prod.price}</h5>
                    </div>
                  </div>`
    })
    document.querySelector('.cartexpnd').innerHTML = clutter;
  })
}
showTheCart()