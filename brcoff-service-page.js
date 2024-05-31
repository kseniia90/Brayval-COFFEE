// if(window.innerWidth > 900){
//     document.querySelectorAll('.br-service__button').forEach((item)=>{
//         item.addEventListener('click', ()=>{
//             document.querySelector('[data-modal="#call-me"]').click();
//         })
//     })
// }else{
//     document.querySelectorAll('.br-service__button').forEach((item)=>{
//         item.addEventListener('click', ()=>{
//             document.querySelector('[href="#menu"]').click();
//             document.querySelector('[href="#callback-form"]').click();
//         })
//     })
// }

// document.querySelectorAll('.br-service__form-btn').forEach((item)=>{
//     item.addEventListener('click', ()=>{
//         document.querySelector('[data-modal="#call-me"]').click();
//     })
// })

var swiperOurWorks = new Swiper(".br-service__slider_1", {
    freeMode: true,
    loop: true,
    // slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        0: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,   
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiperBrands = new Swiper(".br-service__slider_2", {
    freeMode: true,
    loop: true,
    slidesPerView: 6,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50,   
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 80,
        },
    },
});

var swiperServices = new Swiper(".br-service__slider_3", {
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        0: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,
        },
        768: {
            spaceBetween: 15,   
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


// tab START

function openOption(evt, optionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(optionName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
  
  // tab END

  //accordion start

  const accordions = document.querySelectorAll(".accordion__item");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
	content.style.maxHeight = content.scrollHeight + 20 + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__title");
	const content = accordion.querySelector(".accordion__content");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});

//Show more-less

document.querySelector('.repair-table-btn').addEventListener('click', function(){
    let repairTable = document.querySelector('.repair-table-block');
    let linkText = repairTable.querySelector('.repair-table-btn');
    if (linkText.textContent == "Переглянути всі") {
        linkText.textContent = "Приховати";
        repairTable.querySelector('.hide-table').classList.add('show');
      } else {
        linkText.textContent = "Переглянути всі";
        repairTable.querySelector('.hide-table').classList.remove('show');
      }
})

document.querySelector('.price-table-btn').addEventListener('click', function(){
    let priceTable = document.querySelector('.price-table-block');
    let linkText =  priceTable.querySelector('.price-table-btn');
    if (linkText.textContent == "Переглянути всі") {
        linkText.textContent = "Приховати";
        priceTable.querySelector('.hide-table').classList.add('show');
      } else {
        linkText.textContent = "Переглянути всі";
        priceTable.querySelector('.hide-table').classList.remove('show');
      }
})








