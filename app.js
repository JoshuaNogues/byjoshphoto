const oceanImg = document.querySelector('.ocean');
const zoomFactor = 1.2; // adjust this to control the zoom level

// const frontPage = document.querySelector("#frontPage");
// const prevArrow = document.querySelector("#prevArrow");
// const nextArrow = document.querySelector("#nextArrow");

// const scrollAmount = 300; // adjust this to change the scroll amount

// prevArrow.addEventListener("click", () => {
//   const leftPos = frontPage.scrollLeft - scrollAmount;
//   frontPage.scrollBy({
//     left: Math.max(leftPos, 0),
//     behavior: "smooth"
//   });
// });

// nextArrow.addEventListener("click", () => {
//   const leftPos = frontPage.scrollLeft + scrollAmount;
//   frontPage.scrollBy({
//     left: Math.min(leftPos, frontPage.scrollWidth - frontPage.clientWidth),
//     behavior: "smooth"
//   });
// });



window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const windowHeight = window.innerHeight;
  const imageHeight = oceanImg.offsetHeight;
  const imageTop = oceanImg.getBoundingClientRect().top + scrollPos;
  const imageBottom = imageTop + imageHeight;

  if (imageTop < windowHeight && imageBottom > 0) {
    const percentVisible = (windowHeight - imageTop) / imageHeight;
    const scale = 1 + (zoomFactor - 1) * percentVisible;
    const translate = (1 - scale) / 2 * imageHeight;
    oceanImg.style.transform = `scale(${scale}) translateY(${translate}px)`;
  } else {
    oceanImg.style.transform = 'none';
  }
});