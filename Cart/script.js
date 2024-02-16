// products
// populer
// carts
// addProducts()
// addPopulersProducts()



  function getProducts(){
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
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function showProducts(data) {
    let clutter = '';
    let products = document.querySelector('.products');
  
    data.forEach(product => {
      // console.log(product)
      clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
      <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"><img src="${product.image}" /></div>
      <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">${product.category}</h1>
          <div class="flex justify-between w-full items-center mt-2">
              <div class="w-1/2">
                  <h3 class="font-semibold opacity-20">${product.rating.rate} rating</h3>
                  <h4 class="font-semibold mt-2">$${product.price}</h4>
              </div>
              <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                      class="ri-add-line"></i></button>
          </div>
      </div>
    </div>`;
    });

    products.innerHTML = clutter;
  }

  getProducts()