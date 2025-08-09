// Select all elements with the class "product-images"
const productImages = document.querySelectorAll(".product-images img");

// Select the container element where the clicked image will be shown as a background
const productImageSlide = document.querySelector(".image-slider");

// This will track which image is currently active 

let activeImageSlide = 0;


productImages.forEach((item, i) => {

    item.addEventListener("click", () => {

    // Remove the 'active' class from the currently active image

    productImages[activeImageSlide].classList.remove("active");

    // Add the 'active' class to the clicked image
    item.classList.add("active");

    productImageSlide.style.backgroundImage = `url("${item.src}")`;

    // Update the activeImageSlide to the newly clicked image index
    activeImageSlide = i;
  });
});


//To Make the Toggle for 

const sizeBtns = document.querySelectorAll(".size-radio-btn")
// const productImageSlide = document.querySelector(".image-slider");


let checkedBtn = 0;

sizeBtns.forEach((item, i)=>{
    item.addEventListener("click", () =>{
         sizeBtns[checkedBtn].classList.remove('check');
         item.classList.add('check');
         checkedBtn = i;
    })
})


