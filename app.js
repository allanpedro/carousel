
const nextButton = document.querySelector('[data-js="carousel__button--next"')
const slides = document.querySelectorAll('[data-js="carousel__item"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

const lastSlideIndex = slides.length -1
let currentSlidesIndex = 0

const manipulateSlidesClasses = correctSlideIndex => {
  slides.forEach(slide => slide.classList.remove('carousel__item--visible'))
  slides[correctSlideIndex].classList.add('carousel__item--visible')
}

nextButton.addEventListener('click', () => {
  const correctSlideIndex = currentSlidesIndex === lastSlideIndex
    ? currentSlidesIndex = 0
    : ++currentSlidesIndex
  
  manipulateSlidesClasses(correctSlideIndex)
})

prevButton.addEventListener('click', () => {
  const correctSlideIndex = currentSlidesIndex === 0 
    ? currentSlidesIndex = lastSlideIndex
    : --currentSlidesIndex

  manipulateSlidesClasses(correctSlideIndex)
})