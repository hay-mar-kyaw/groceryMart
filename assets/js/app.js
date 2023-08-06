FontAwesomeConfig = {autoReplaceSvg : false};

// Search Input Change
let search_input=document.getElementById('search-input');
let icon_items=document.getElementsByClassName('icon-items');
search_input.onfocus=function(){
    for(let item of icon_items){
        item.style.display='none'
    }
    search_input.style.width="100%";
}
search_input.onblur=function(){
    for(let item of icon_items){
        item.style.display='block'
    }
    search_input.style.width="65px";


}
// Navbar Bg JS 
let nav= document.getElementById('nav');
window.onscroll=function(){
    if(window.pageYOffset > 200){
       nav.classList.add('bg');
    }else{
        nav.classList.remove('bg');
    }
}
// Navbar Show and Hide 
let hamburger=document.getElementById('hamburger');
let navbar_menu=document.getElementById('navbar-menu');

hamburger.onclick=function(){
    navbar_menu.classList.toggle('active');
    let hamburgericon = hamburger.innerHTML;
    hamburgericon = hamburgericon.trim();
    console.log(hamburgericon);
    if(hamburgericon==`<i class="fa-solid fa-bars"></i>`){
        // console.log('hamburger');
        hamburger.innerHTML=`<i class="fas fa-times"></i>`;
    }else{
        hamburger.innerHTML=`<i class="fas fa-bars"></i>`
    }
}

// Slider JS 
// let next_btn = document.getElementById('next-btn');
// let prev_btn = document.getElementById('prev-btn');
// let sliders=document.getElementsByClassName('slider');
// let slider_no=1;

// function next(){
//     document.getElementById('slider'+slider_no).classList.remove('active');
//     slider_no++;
//     if(slider_no > sliders.length){
//         slider_no=1;
//     }
//     document.getElementById('slider'+slider_no).classList.add('active');
// }

// function prev(){
//     document.getElementById('slider'+slider_no).classList.remove('active');
//     slider_no--;
//     if(slider_no < 1){
//         slider_no=sliders.length;
//     }
//     document.getElementById('slider'+slider_no).classList.add('active');

// }
// next_btn.onclick= next;
// prev_btn.onclick= prev;

// setInterval(next,3000);

//Show Time
function timeInterval(){
    let today = new Date();
    let todayDate=today.getDate();
    let promotion=new Date("08/30/2023");
    let promotionDate=promotion.getDate();

  
    let todayHour= today.getHours();
    let todayMinute=today.getMinutes();
    let todaySecond=today.getSeconds();
    
    if(todayDate > 0 || todayHour >0 || todayMinute>0 || todaySecond >0){
        if(todayHour>12)
        {
            todayHour=todayHour-12;
            document.getElementById('hour').innerHTML=todayHour;
        }
        document.getElementById('day').innerHTML=promotionDate-todayDate;
        document.getElementById('hour').innerHTML=todayHour;
        document.getElementById('minute').innerHTML=todayMinute;
        document.getElementById('second').innerHTML=todaySecond;
    }else{
        document.getElementById('day').innerHTML="00";
        document.getElementById('hour').innerHTML="00";
        document.getElementById('minute').innerHTML="00";
        document.getElementById('second').innerHTML="00";
        document.getElementById('left-btn').innerHTML="Promotion is OVER"
    }
}
    setInterval(timeInterval,1000);

// Products Filter 
let all_btn =document.getElementById('all_btn')
let vegetable_btn =document.getElementById('vegetable_btn')
let meat_btn =document.getElementById('meat_btn')
let bakery_btn =document.getElementById('bakery_btn')

let vegetable_cards=document.getElementsByClassName('vegetable')
let meat_cards=document.getElementsByClassName('meat')
let bakery_cards=document.getElementsByClassName('bakery')

all_btn.onclick=function(){
    for(let vegetable_card of vegetable_cards){
        vegetable_card.style.display="block"
    }
    for(let meat_card of meat_cards){
        meat_card.style.display="block"
    }
    for(let bakery_card of bakery_cards){
        bakery_card.style.display="block"
    }
    this.classList.add('active')
    vegetable_btn.classList.remove('active')
    bakery_btn.classList.remove('active')
    meat_btn.classList.remove('active')
}
vegetable_btn.onclick=function(){
    for(let vegetable_card of vegetable_cards){
        vegetable_card.style.display="block"
    }
    for(let meat_card of meat_cards){
        meat_card.style.display="none"
    }
    for(let bakery_card of bakery_cards){
        bakery_card.style.display="none"
    }
    this.classList.add('active')
    all_btn.classList.remove('active')
    bakery_btn.classList.remove('active')
    meat_btn.classList.remove('active')
}
bakery_btn.onclick=function(){
    for(let vegetable_card of vegetable_cards){
        vegetable_card.style.display="none"
    }
    for(let meat_card of meat_cards){
        meat_card.style.display="none"
    }
    for(let bakery_card of bakery_cards){
        bakery_card.style.display="block"
    }
    this.classList.add('active')
    all_btn.classList.remove('active')
    vegetable_btn.classList.remove('active')
    meat_btn.classList.remove('active')
}

meat_btn.onclick=function(){
    for(let vegetable_card of vegetable_cards){
        vegetable_card.style.display="none"
    }
    for(let meat_card of meat_cards){
        meat_card.style.display="block"
    }
    for(let bakery_card of bakery_cards){
        bakery_card.style.display="none"
    }
    this.classList.add('active')
    all_btn.classList.remove('active')
    vegetable_btn.classList.remove('active')
    bakery_btn.classList.remove('active')
}

// top brand 
let next_btn = document.getElementById('next-btn');
let prev_btn = document.getElementById('prev-btn');
let sliders=document.getElementsByClassName('slider');
let slider_no=1;

function next(){
    document.getElementById('slider'+slider_no).classList.remove('active');
    slider_no++;
    if(slider_no > sliders.length){
        slider_no=1;
    }
    document.getElementById('slider'+slider_no).classList.add('active');
}

function prev(){
    document.getElementById('slider'+slider_no).classList.remove('active');
    slider_no--;
    if(slider_no < 1){
        slider_no=sliders.length;
    }
    document.getElementById('slider'+slider_no).classList.add('active');

}
next_btn.onclick= next;
prev_btn.onclick= prev;
setInterval(next,3000)

// change Background 
window.onscroll=function(){
    console.log(pageYOffset);
    if(window.pageYOffset<800){
        // document.getElementById('bg').classList.add('active');
        document.getElementById('bg').style.background='linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
        // document.getElementById('bg').style.transition = '1s';
    
    }else if( window.pageYOffset<1900) {
        document.getElementById('bg').style.background='linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
    }
    else if( window.pageYOffset<2500) {
        document.getElementById('bg').style.background='linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';
    }   
    else{
        // document.getElementById('bg').classList.remove('active');
        document.getElementById('bg').style.background='#000080';
    }
}
