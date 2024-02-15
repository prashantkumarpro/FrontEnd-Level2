let arr = [
    { name: "Petals of roses", image: "https://images.unsplash.com/photo-1579532630641-a4ff6d68622c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Animals of town", image: "https://images.unsplash.com/photo-1496497243327-9dccd845c35f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tree images", image: "https://images.unsplash.com/photo-1508246325515-244d9d3a2b08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Graphic design", image: "https://images.unsplash.com/photo-1519408469771-2586093c3f14?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Petals of roses", image: "https://images.unsplash.com/photo-1579532630641-a4ff6d68622c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Animals of town", image: "https://images.unsplash.com/photo-1496497243327-9dccd845c35f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tree images", image: "https://images.unsplash.com/photo-1508246325515-244d9d3a2b08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Graphic design", image: "https://images.unsplash.com/photo-1519408469771-2586093c3f14?q=80&w=1404&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
]

function showCards() {
    let clutter = '';
    arr.forEach(function (obj) {
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}">
        <div class="caption">${obj.name}</div>
        </div>`
    })
    document.querySelector('.container').innerHTML = clutter

}
function handleSearch() {
    let searchInput = document.querySelector('#searchinput');
    let overlay = document.querySelector('.overlay');

    searchInput
        .addEventListener('focus', function () {
            overlay.style.display = 'block'
        })
    searchInput
        .addEventListener('blur', function () {
            overlay.style.display = 'none'
        })
    searchInput
        .addEventListener('input', function () {

            let searchData = document.querySelector('.searchdata');
            let clutter = '';
            let filteredArr = arr.filter((data) => data.name.toLocaleLowerCase().startsWith(searchInput.value))
            console.log(filteredArr)
            filteredArr.forEach(function (obj) {
                clutter = ` <div class="res flex px-8 py-3">
                             <i class="ri-search-line font-semibold mr-5"></i>
                             <h3 class="font-semibold">${obj.name}</h3>
                             </div>`
            })
            
            searchData.style.display = 'block'
            searchData.innerHTML = clutter

        })


}
handleSearch()
showCards()

