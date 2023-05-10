function imgSlider(selectedImage) {
  document.getElementById('hero-img').src = `/assets/${selectedImage}`;
}


function updateBackgroundColor(color) {
    const section = document.querySelector('.content');
    section.style.background = color;
  }
  