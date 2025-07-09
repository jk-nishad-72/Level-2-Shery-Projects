var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "ladki beauty", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "miss hot", image: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "rajai", image: "https://plus.unsplash.com/premium_photo-1661395149583-9e52d8f1f831?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "nuded", image: "https://images.unsplash.com/photo-1467632499275-7a693a761056?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "comble", image: "https://images.unsplash.com/photo-1645808732083-5c8e0a3ef5b0?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

// function showTheCards(){
//     var clutter = "";
//     arr.forEach(function(obj){
//         clutter += `<div class="box">
//         <img class="cursor-pointer" src="${obj.image}" alt="image">
//         <div class="caption">Lorem ipsum </div>
//     </div>`;
//     })

//     document.querySelector(".container")
//     .innerHTML = clutter;
// }

// function handleSearchFunctionality(){
//     var searchinput = document.querySelector("#searchinput");
    

//     searchinput
//     .addEventListener("focus", function(){
//         document.querySelector(".overlay").style.display = "block";
//     })

//     searchinput
//     .addEventListener("blur", function(){
//         document.querySelector(".overlay").style.display = "none";
//     })

//     searchinput
//     .addEventListener("input", function(){
//         const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(searchinput.value));
//         var clutter = "";
//         filteredArray.forEach(function(obj){
//             clutter += `<div class="res flex px-8 py-3">
//             <i class="ri-search-line font-semibold mr-5"></i>
//             <h3 class="font-semibold">${obj.name}</h3>
//         </div>`
//         })
//         document.querySelector(".searchdata").style.display = "block";
//         document.querySelector(".searchdata").innerHTML = clutter;
//         document.querySelector(".searchdata").addEventListener('mouseleave',function(){
//         document.querySelector(".searchdata").style.display = 'none';

//         })


//     })


// }

// handleSearchFunctionality();
// showTheCards();


function showTheimags(){

     let dibba = "";
     arr.forEach(function(obj){

        dibba += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`

         document.querySelector(".container").innerHTML =dibba;

     })

     

}

function SearchAbiliy(){

     const input = document.querySelector("#searchinput")

      input.addEventListener("focus",function(){
           
           document.querySelector(".overlay").style.display = "block"
      })
      input.addEventListener("blur",function(){
           
           document.querySelector(".overlay").style.display = "none"
      })


      input.addEventListener("input",function(){
   
           const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value))

           let seedata = ""

           filteredArray.forEach(function(obj){

               seedata += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
             <h3 class="font-semibold">${obj.name}</h3>
            </div>`  
           })
            document.querySelector(".searchdata").style.display ="block"
           document.querySelector(".searchdata").innerHTML =seedata;

           input.addEventListener("blur",function(){
            document.querySelector(".searchdata").style.display ="none"


           })


      })

     



}


SearchAbiliy()
showTheimags()