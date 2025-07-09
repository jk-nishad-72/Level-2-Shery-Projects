


let arr =[
    {songName:"Doller siddu mosewala",url:"/songs/doller.mp3",image:"/images/doller-siddumosevala.webp"},
    {songName:"Hum katha sunate..",url:"/songs/hum.mp3",image:"/images/hum-kath-sunate.webp"},
    {songName:"Kale Je libas Di..",url:"/songs/libas.mp3",image:"/images/libas.webp"},
    {songName:"kundi lagale saiya ..",url:"/songs/kundi.mp3",image:"/images/kundi.webp"},
    {songName:"Ram siya ..",url:"/songs/ram.mp3",image:"/images/ram.webp"}

];

let audio = new Audio()

  let play =document.querySelector("#play");
  let backward =document.querySelector("#backward");
  let forward =document.querySelector("#forward");



let allsong = document.querySelector(".all-song")
let poster = document.querySelector(".left")

// let songcard = document.querySelector(".song-card")

let selectedSong = 0;

function showSong(){

    let clutter = "";
    arr.forEach(function(obj,index){

         clutter += `
                  <div class="song-card" id ="${index}">
                    <div class="part-1">
                    <img src="${obj.image}" alt="">
                       <h2>${obj.songName}</h2>
                    </div>
                    <h6> 3:56 </h6>
                  </div>`
    })

allsong.innerHTML = clutter;
audio.src = arr[selectedSong].url
poster.style.backgroundImage= `url(${arr[selectedSong].image})`

     
}
showSong()

allsong.addEventListener("click",function(dets){

  selectedSong= dets.target.id 

   showSong()
   play.innerHTML =`<i class="ri-pause-fill"></i>`
   flag =1
   audio.play()


})

let flag =0;

play.addEventListener("click",function(){

   if(flag==0) {

   play.innerHTML =`<i class="ri-pause-fill"></i>`
      showSong()
      audio.play()
      flag =1
   }else{
     play.innerHTML =`<i class="ri-play-fill"></i>`
      showSong()
      audio.pause()
      flag =0
   }
 

 
})

forward.addEventListener("click",function(){

    if(selectedSong<arr.length-1)
    {
      play.innerHTML =`<i class="ri-pause-fill"></i>`
      flag=1
      forward.style.opacity = "1"    
      selectedSong++
      showSong()
      audio.play()
    }else{
      forward.style.opacity = "0.30"    
    }
   
})

backward.addEventListener("click",function(){

    if(selectedSong>0)
    {
      backward.style.opacity = "1"    
       play.innerHTML =`<i class="ri-pause-fill"></i>`
      flag=1
      selectedSong--
      showSong()
      audio.play()
    }else{
      backward.style.opacity = "0.30"    
    }
   
})