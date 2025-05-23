const imageArray = [
    './assets/image1.jpg',
    './assets/image2.jpg',
    './assets/image3.jpg',
    './assets/image4.jpg',
    './assets/image5.jpg',
    './assets/image6.jpg' 
]


let sliderIndex = 0
const sliderImage = document.getElementById('sliderImage')
sliderImage.src = imageArray[0]

function nextImage() {
    if (sliderIndex < imageArray.length-1) {
    sliderIndex = sliderIndex + 1 // Denne linje kan man også skrive som sliderIndex++
    }
    else{
    sliderIndex = 0
    }
    sliderImage.src = imageArray[sliderIndex]
}

function previousImage() {
    if (sliderIndex > 0){
    sliderIndex = sliderIndex - 1 // Denne linje kan man også skrive som sliderIndex--
    }
    else {
    sliderIndex = imageArray.length - 1
    }
    sliderImage.src = imageArray[sliderIndex]
}