// Function to open the corresponding large box
function openLargeBox(boxId) {
    var box = document.getElementById('largeBox' + boxId);
    box.style.display = 'block'; // Show the large box
    // Add functionality to close the box when clicked outside
    window.onclick = function(event) {
        if (event.target == box) {
            box.style.display = 'none'; // Hide the box
        }
    }
}
// Define the image sets
const imageSets = {
    1: ['image1-1.jpg', 'image1-2.jpg', 'image1-3.jpg'],
    2: ['image2-1.jpg', 'image2-2.jpg', 'image2-3.jpg'],
    3: ['image3-1.jpg', 'image3-2.jpg', 'image3-3.jpg'],
    4: ['image4-1.jpg', 'image4-2.jpg', 'image4-3.jpg'],
    5: ['image5-1.jpg', 'image5-2.jpg', 'image5-3.jpg'],
    6: ['image6-1.jpg', 'image6-2.jpg', 'image6-3.jpg']
};

// Get elements
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;

// Open pop-up with specific image set
function openLargeBox(setId) {
    const images = imageSets[setId];
    slider.innerHTML = images.map(src => `<img src="${src}" alt="Image">`).join('');
    dotsContainer.innerHTML = images.map((_, index) => `<span class="dot" onclick="moveToSlide(${index})"></span>`).join('');
    currentIndex = 0;
    updateSlider();
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Close pop-up
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Close pop-up when clicking outside of it
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

// Navigation functionality
prev.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slider.children.length - 1 : currentIndex - 1;
    updateSlider();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex === slider.children.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

function moveToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function updateSlider() {
    slider.scrollTo({
        left: slider.children[currentIndex].offsetLeft,
        behavior: 'smooth'
    });
    updateDots();
}

function updateDots() {
    const dots = dotsContainer.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[currentIndex].classList.add('active');
}
