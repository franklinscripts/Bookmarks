
window.addEventListener('scroll',reveal)

//The navigation menu button
const menuBtn = document.getElementById('menu-btn')
//The navigation exit button 
const closeBtn = document.getElementById('exit-btn')
//The whole nav
const nav = document.querySelector('.nav__menu-two ul')
//The mobile nav menu
const navT = document.querySelector('.nav__menu-two')
const fit1 = document.querySelector('.fit1')
const fit2 = document.querySelector('.fit2')
const fit3 = document.querySelector('.fit3')
const container = document.getElementById('fit')
const simpBtn = document.getElementById('feature-select-one')
const spepBtn = document.getElementById('feature-select-two')
const easBtn = document.getElementById('feature-select-three')
const input = document.querySelector('input')
const contactBtn = document.getElementById('contact')
// This is an array of the features section holding the elements like containers💌

   const arr = [
      `
   <div class="feature-img">
      <div class="blue-bg-right">
         <div class="round-bg">
            
         </div>
      </div>
      <img src="./images/illustration-features-tab-1.svg" alt="">
      </div>
      <div class="feature-info">
         <h4>Bookmark in one click</h4>
            <p>
            Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.</p>
         <button>More Info</button>
   </div>
`
      ,`
   
      <div class="feature-img">
         <div class="blue-bg-right">
            <div class="round-bg">
            
            </div>
         </div>
      <img src="./images/illustration-features-tab-2.svg" alt="">
      </div>
         <div class="feature-info">
            <h4>Intelligent search</h4>
            <p>
               Our powerful search feature will help you find saved sites in no time at all. 
               No need to trawl through all of your bookmarks.</p>
            <button>More Info</button>
      </div>
   `,` 
       
      <div class="feature-img">
      <div class="blue-bg-right">
         <div class="round-bg">
         
         </div>
      </div>
      <img src="./images/illustration-features-tab-3.svg" alt="">
      </div>
      <div class="feature-info">
         <h4>Share your bookmarks</h4>
         <p>
            Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.</p>
         <button>More Info</button>
      </div>
`]

//Adding event listeners for the menu button click
menuBtn.addEventListener('click',() =>{
   //Makes it display block
   nav.style.display = "block"
   navT.style.display = "block"
})
//Adding event listeners for the menu button click
closeBtn.addEventListener('click',() =>{
   //Hides the navbar from the mobile device
   nav.style.display = "none"
   navT.style.display = "none"
})

//This Part litens to the HTML document and provide them with basic information in the array which is === containers for me
simpBtn.addEventListener('click',() =>{
   container.innerHTML = arr[0]
   simpBtn.classList.add('acting')
   spepBtn.classList.remove('acting')
   easBtn.classList.remove('acting')
})
spepBtn.addEventListener('click',() =>{
   container.innerHTML = arr[1]
   spepBtn.classList.add('acting')
   simpBtn.classList.remove('acting')
   easBtn.classList.remove('acting')
})
easBtn.addEventListener('click',() =>{
   container.innerHTML = arr[2]
   easBtn.classList.add('acting')
   simpBtn.classList.remove('acting')
   spepBtn.classList.remove('acting')
})


//Checks if the email address is valid or not
let regEx = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

function getEmail(){
   const success = document.querySelector('.suc')
   const error = document.querySelector('.vl')
   let val = input.value;
   if(val.includes('@') && val.includes(".") && val.includes('gmail')){
      error.style.display = "none"
      success.style.display = "block"
      input.value = ''
     
   }else{
      success.style.display = "none"
      error.style.display = "block"
      input.value = ''
   }

}
/*Scroll Reaveal*/
let sectionId;
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll',scrollActive);
function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight 
        const sectionTop = current.offsetTop - 40;
        sectionId = current.getAttribute('id');
    });
}
//scroll reveal animation
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2000,
    reset:true
});

function reveal(){
   const reveals = document.querySelectorAll('.reveal');
   for (let i = 0; i < reveals.length; i++) {
      const elementHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;
      if(elementTop < elementHeight - elementVisible){
      reveals[i].classList.add("active");
      
      }else {
         reveals[i].classList.remove("active")
      }
}
}


