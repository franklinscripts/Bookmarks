const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('exit-btn')
const nav = document.querySelector('.nav__menu-two ul')
const navT = document.querySelector('.nav__menu-two')
const fit1 = document.querySelector('.fit1')
const fit2 = document.querySelector('.fit2')
const fit3 = document.querySelector('.fit3')
const container = document.getElementById('fit')
const simpBtn = document.getElementById('feature-select-one')
const spepBtn = document.getElementById('feature-select-two')
const easBtn = document.getElementById('feature-select-three')
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

menuBtn.addEventListener('click',() =>{
   nav.style.display = "block"
   navT.style.display = "block"
})
closeBtn.addEventListener('click',() =>{

   nav.style.display = "none"
   navT.style.display = "none"
})
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


let tl = gsap.timeline({
   // yes, we can add it to an entire timeline!
   scrollTrigger: {
     trigger: ".features",
     pin: true,  
     start: "top top", 
     end: "+=500", 
     scrub: 1, 
     snap: {
       snapTo: "labels", 
       duration: {min: 0.2, max: 3},
       delay: 0.2,
       ease: "power1.inOut" 
     }
   }
 });
//  gsap.from(".nav-bar", {duration: 3, y: 300, opacity: 0, scale: 0.5});
// add animations and labels to the timeline
tl.addLabel("start")
 .from(".hero-first", {scale: 0.3, rotation:45, autoAlpha: 0})
 .addLabel("color")
 .from(".hero-second", {duration: 2, ease: "bounce"})
 .addLabel("spin")
 .to("", {rotation: 360})
 .addLabel("end");

gsap.to('.hero-section',{
   scrollTrigger:".hero-section",
   x: 500

});
gsap.from(".features", {duration: 2, x: 200, ease: "bounce"})
gsap.from(".feature-header", 1, {
    
    x: 50,
    
    repeat: -1, 
    ease: "power1.inOut",
    delay:.5,
   
  });
  //set timer to 3 seconds, after that, load the magic animation and repeat forever
function myFunction() {
    const selector = document.querySelector('.features')
    selector.classList.add('magictime', 'puffIn')
}
setInterval(myFunction, 1000);
