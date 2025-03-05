let openModal = document.querySelector('.open_modal');
let background_container = document.querySelector('.background_container');
let show_sub_container = document.querySelector('.show_sub_container');
let close_btn = document.querySelector('.close_btn');
openModal.addEventListener('click',()=>{
background_container.style.display = 'block';
show_sub_container.style.display = 'block';
})
close_btn.addEventListener('click',()=>{
background_container.style.display = 'none';
show_sub_container.style.display = 'none';
})

// project2

let scrollElement = document.querySelector('.scroll_to_top_btn');
window.addEventListener('scroll',()=>{
    let x = window.pageYOffset;
   if(x>1000){
 scrollElement.style.display = 'block';

   }
else{
scrollElement.style.display = 'none';
}
})

scrollElement.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})

// faq
let questionsEl = document.querySelector('.question');
let buttonsEl = document.querySelectorAll('.question-btn');
buttonsEl.forEach((btn)=>{
btn.addEventListener('click', (e)=>{
e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
})
})
const questions = document.querySelectorAll('.question');
questions.forEach((question)=>{
const btn = question.querySelector(".question-btn")
btn.addEventListener('click', ()=>{
 questions.forEach((item)=>{
 console.log(item);
if(item !==question)
item.classList.remove('show-text');
})
});
});

// navbar project

// *************************set toggle-btn********************************


let linksEl= document.querySelector('.links');
let toggle = document.querySelector('.toggle');
let linksContainer = document.querySelector('.links-container');


toggle.addEventListener('click', ()=>{
linksEl.classList.toggle('show-links');
})

// *************fixed header ********************************

let headerEl = document.querySelector('.site-header');
let backtotop = document.querySelector('.back-to-top-link-icon');
window.addEventListener('scroll',()=>{

let scrollPosition = window.scrollY;
if(scrollPosition>2600){
headerEl.classList.add('fixed-header');
}
else{
headerEl.classList.remove('fixed-header');
}
});


// navbar sidebar
let sideBarToggleBtn = document.querySelector(".sidebar-toggle");
let AsideSidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn");

sideBarToggleBtn.addEventListener('click',()=>{
if((AsideSidebar.classList.contains("show-sidebar"))){
AsideSidebar.classList.remove("show-sidebar");
}
else{
AsideSidebar.classList.add("show-sidebar");
}
})
// or
// sideBarToggleBtn.addEventListener('click',()=>{
// AsideSidebar.classList.toggle("show-sidebar");
// });

closeBtn.addEventListener('click',()=>{
    AsideSidebar.classList.toggle("show-sidebar");
    });




// Tab project
let buttonEl = document.querySelectorAll('button');
let contentEl = document.querySelectorAll('.content');
// console.log(buttonEl);
buttonEl.forEach((btns)=>{
    btns.addEventListener('click', (e)=>{
        let currentEvent = e.currentTarget.dataset.info;
        let element2 = e.currentTarget;
        if(currentEvent){
            contentEl.forEach((contents)=>{
                contents.classList.remove('active');
                const element = document.getElementById(currentEvent);
console.log(element);
element.classList.add('active');
})
let buttons = document.querySelectorAll('button');
buttons.forEach((checking)=>{
    checking.classList.remove('show');
})
element2.classList.add('show');
}

})
})


// filter card project
let buttonsContainer = document.querySelectorAll('.filter_btn');
let imgContainer = document.querySelectorAll('.img_box');
buttonsContainer.forEach((btns)=>{
btns.addEventListener('click', (e)=>{
let filterCheck = e.target.dataset.filter;
imgContainer.forEach((imgs)=>{
if(filterCheck === 'all'){
imgs.style.display = 'block';
}
else{
    if(imgs.classList.contains(filterCheck)){
    imgs.style.display = 'block';
    }
    else{
    imgs.style.display = 'none';
}
}
})
})
})





