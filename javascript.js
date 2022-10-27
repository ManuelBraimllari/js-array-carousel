const arrImages =[
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

const eleSlider = document.querySelector('.slider')
const eleBtnUp = document.querySelector('.btn-up')
const eleBtnDown = document.querySelector('.btn-down')

for (let i = 0; i < arrImages.length; i++) {
    const eleimg = document.createElement('img');
    eleimg.src = arrImages[i];
    eleimg.classList.add('slider-img');

    if(i===0){
        eleimg.classList.add('active');

    }
    eleSlider.append(eleimg);
}

const listEleImg = document.querySelectorAll('.slider-img'); 
let activeIndex = 0;

eleBtnUp.addEventListener ('click', function (){
    listEleImg[activeIndex].classList.remove('active');
    
    if (activeIndex === listEleImg.length - 1) {
		activeIndex = 0
	}else{
        activeIndex++;
    }
    listEleImg[activeIndex].classList.add('active');
	

})

eleBtnDown.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');

    if (activeIndex === 0) {
		activeIndex = listEleImg.length -1;
	}else{
        activeIndex--;
    }

	listEleImg[activeIndex].classList.add('active');

});