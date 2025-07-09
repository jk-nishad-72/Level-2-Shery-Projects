let products = [
  {
    name: "Macbook",
    hadline: "Smooth tasking perfom",
    prices: "2,50,000",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Headphone",
    hadline: "High Base sound ",
    prices: "1,00,000",
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shoes",
    hadline: "Flexible and Awsome ",
    prices: "10,00,000",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "shofa",
    hadline: "Gaddedar",
    prices: "50,000",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Smart-Watch",
    hadline: "High Base sound ",
    prices: "1,00,000",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "cloths",
    hadline: "out fit for boys ",
    prices: "6,000",
    image:
      "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hoodi",
    hadline: "out fit for boys ",
    prices: "30,000",
    image:
      " https://images.unsplash.com/vector-1741591987052-608871d246a3?q=80&w=2356&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },


   
];

let populr = [
  {
    name: "Macbook",
    hadline: "Smooth tasking perfom",
    prices: "2,50,000",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Headphone",
    hadline: "High Base sound ",
    prices: "1,00,000",
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shoes",
    hadline: "Flexible and Awsome ",
    prices: "10,00,000",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let cartProducts = [ ];

function Showproduct() {
  let clutter = "";

  products.forEach((obj,index) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem]  rounded-xl">
                <img  class="w-full h-full z-[1000] object-cover" src="${obj.image}" alt="">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}.</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20"> ${obj.hadline}.</h3>
                            <h4 class="font-semibold mt-2"> ${obj.prices} </h4>
                        </div>
                        <button data-index='${index}'  class=" add   w-10 h-10 rounded-full shader text-yellow-400">
                        <i  data-index='${index}' class=" add  ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
}

function showpopulerProducts() {
  let clutter = "";

  populr.forEach(function (obj) {
    clutter += `  <div class="populars mt-5 flex whitespace-nowrap gap-5 overflow-auto w-full pl-5">
                <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${obj.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${obj.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.hadline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${obj.prices}</h4>
                    </div>
                </div>

            </div>`;
  });

  document.querySelector(".populardiv").innerHTML = clutter;
}

function addTocart(){
document.querySelector('.products') 
.addEventListener("click",function(detals){

// console.log(detals.target.classList.contains('add'));
   
// console.log(detals.target.dataset.index)

  cartProducts.push(products[detals.target.dataset.index])
    
})


}


function showCartProduct(){

    document.querySelector(".carticon").addEventListener("click",function(){

        document.querySelector(".cartexpend").style.display = "block"

         let clutter ='';

        cartProducts.forEach(function(obj){
      
            clutter +=`
                <div class="populars border-1 bg-white rounded-2xl flex whitespace-nowrap gap-5 overflow-auto w-full pl-5">
                    <div class="popular  p-2 rounded-2xl flex justify-between gap-3 w-[60%] flex-shrink-0">
                        <div class="w-15 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                            <img class="w-full h-full object-cover"
                                src="${obj.image}"
                                alt="">
                        </div>
                        <div class="data py-2 w-full">
                            <h1 class="leading-none font-semibold">${obj.name}</h1>
                            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.hadline}</h4>
                            <h4 class="mt-3 font-semibold text-zinc-500">${obj.prices}</h4>
                        </div>
                    </div>
                </div>`
        }) 

         document.querySelector(".cartexpend").innerHTML= clutter;
       document.querySelector(".cartexpend").addEventListener("mouseleave",function(){

         document.querySelector(".cartexpend").style.display= 'none';


       })

    })


}



Showproduct();
showpopulerProducts();
addTocart()
showCartProduct()