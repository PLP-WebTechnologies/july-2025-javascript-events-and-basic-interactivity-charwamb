// GLOBAL VARIABLE: Discount
let globalDiscount = 0.05; // 5%

// Loading Spinner
window.addEventListener('load', () => {
    document.getElementById('loading-spinner').style.display = 'none';
});

// HERO SLIDESHOW
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(index){
    slides.forEach((slide,i)=> slide.classList.remove('active'));
    slides[index].classList.add('active');
}
setInterval(()=>{
    currentSlide = (currentSlide+1)%slides.length;
    showSlide(currentSlide);
},4000);

// SCROLL TO LISTINGS
function scrollToListings(){
    document.getElementById('listings').scrollIntoView({behavior:'smooth'});
}

// CARD FLIP
function flipCard(cardInner){
    cardInner.style.transform = cardInner.style.transform==='rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

// FILTER LISTINGS
function filterListings(){
    const loc = document.getElementById('search-location').value.toLowerCase();
    const price = parseInt(document.getElementById('search-price').value) || Infinity;
    const cards = document.querySelectorAll('.house-card');
    cards.forEach(card=>{
        const location = card.dataset.location.toLowerCase();
        const cardPrice = parseInt(card.dataset.price);
        if(location.includes(loc) && cardPrice<=price){
            card.style.display='block';
        } else { card.style.display='none'; }
    });
}

// MODAL FUNCTIONS
function showModal(title, desc, img){
    document.getElementById('modal-title').innerText=title;
    document.getElementById('modal-desc').innerText=desc;
    document.getElementById('modal-img').src=img;
    document.getElementById('house-modal').style.display='flex';
}
function closeModal(){
    document.getElementById('house-modal').style.display='none';
}

// CONTACT FORM
function submitForm(){
    const msg = document.getElementById('form-message');
    msg.textContent='Thank you! Your message has been sent.';
    msg.style.color='green';
    return false;
}

// FUNCTION EXAMPLE: Apply Discount
function applyDiscount(price){
    let localDiscount = 0.1;
    return price - (price*(localDiscount+globalDiscount));
}

// FUNCTION EXAMPLE: Animate Element
function animateElement(selector, animationClass, duration){
    const el = document.querySelector(selector);
    el.classList.add(animationClass);
    setTimeout(()=>el.classList.remove(animationClass),duration);
}
