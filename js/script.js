window.addEventListener('DOMContentLoaded', () => {
    const engBtn = document.getElementsByClassName('header__eng');
    const isEngClicked = false

    engBtn[0].addEventListener('click', (elem) => {
        if (!isEngClicked) {
            window.location.href = 'eng.html';
            isRuClicked = true;
            isEngClicked = false;
        }
    })

    //slider

    const sliderArrowLeft = document.querySelector(".slider__arrow_left"),
          sliderArrowRight = document.querySelector(".slider__arrow_right"),
          sliderContent = document.querySelectorAll('.slider__content'),
          sliderDots = document.querySelectorAll(".slider__dote");

    let count = 1;

    sliderArrowLeft.addEventListener('click', previousSlide);
    sliderArrowRight.addEventListener('click', nextSlide)
    sliderDots.forEach((e, i) => {
        e.addEventListener('click', () => {
            showSlides(count = i+1);
        })
    })

    function nextSlide() {
        showSlides(count += 1);
    }
    
    /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
    function previousSlide() {
        showSlides(count -= 1);  
    }
    
    /* Устанавливаем текущий слайд: */
    function currentSlide(n) {
        showSlides(count = n);
    }
    
    function showSlides(n) {
        /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
        let slides = sliderContent
        let dots = sliderDots
        
        /* Проверяем количество слайдов: */
        if (n > slides.length) {
          count = 1
        }
        if (n < 1) {
            count = slides.length
        }
      
        /* Проходим по каждому слайду в цикле for: */
        for (let slide of slides) {
            slide.style.display = "none";
        }

        for(let dote of dots){
            dote.style.background = "url(icons/slider_dote_disabled.svg) no-repeat"
        }

        dots[count - 1].style.background = "url(icons/slider_dote_active.svg) no-repeat"
        slides[count - 1].style.display = "block";
    }

    showSlides(count);

    //validate form

    const formBtn = document.querySelector(".form__submit"),
          form = document.querySelector(".form");
          inputs = document.querySelectorAll(".form__input")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Форма отправлена!!!");
        inputs.forEach(elem => {
            elem.value = '';
        });
    });

    //smoth

    $("a[href^='#']").click(function(){
        let _href = $(this).attr('href');
        $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
        return false;
    })

    //visual help

    const questG = document.querySelector('.visual__table-questiong'),
          questA = document.querySelector('.visual__table-questiona'),
          questS = document.querySelector('.visual__table-questions'),
          questM = document.querySelector('.visual__table-questionm'),
          questB = document.querySelector('.visual__table-questionb'),
          questD = document.querySelector('.visual__table-questiond');
    
    const txtA = document.querySelector('.visual__table-txta'),
          txtG = document.querySelector('.visual__table-txtg'),
          txtS = document.querySelector('.visual__table-txts'),
          txtM = document.querySelector('.visual__table-txtm'),
          txtB = document.querySelector('.visual__table-txtb'),
          txtD = document.querySelector('.visual__table-txtd');

    questA.addEventListener('mouseover', () => {
        txtA.style.display = 'block';
    })
    questA.addEventListener('mouseout', () => {
        txtA.style.display = 'none';
    })
    questG.addEventListener('mouseover', () => {
        txtG.style.display = 'block';
    })
    questG.addEventListener('mouseout', () => {
        txtG.style.display = 'none';
    })
    questS.addEventListener('mouseover', () => {
        txtS.style.display = 'block';
    })
    questS.addEventListener('mouseout', () => {
        txtS.style.display = 'none';
    })
    questM.addEventListener('mouseover', () => {
        txtM.style.display = 'block';
    })
    questM.addEventListener('mouseout', () => {
        txtM.style.display = 'none';
    })
    questB.addEventListener('mouseover', () => {
        txtB.style.display = 'block';
    })
    questB.addEventListener('mouseout', () => {
        txtB.style.display = 'none';
    })
    questD.addEventListener('mouseover', () => {
        txtD.style.display = 'block';
    })
    questD.addEventListener('mouseout', () => {
        txtD.style.display = 'none';
    })

    //comments

    if (document.documentElement.clientWidth > 768){
        const commentsItem = document.querySelectorAll('.comments__item');

        let isCommentFull = false;

        
        commentsItem.forEach(e => {
            e.addEventListener('click',() => {
                if (isCommentFull){
                    for (let block of commentsItem){
                        block.style.display = "block";
                        block.style.width = "555px";
                    }
                    let commentsBlock = e.childNodes[0];
                    commentsBlock.style.padding = "0px"
                    commentsBlock.childNodes[0].style.display = "block";
                    commentsBlock.childNodes[1].style.display = "block";
                    commentsBlock.childNodes[2].style.display = 'none';
                    isCommentFull = false;
                } else {
                    for (let block of commentsItem){
                        block.style.display = "none";
                    }
                    e.style.width = "90%";
                    e.style.display = "flex";
                    let commentsBlock = e.childNodes[0];
                    commentsBlock.style.padding = "15px"
                    commentsBlock.childNodes[0].style.display = "none";
                    commentsBlock.childNodes[1].style.display = "none";
                    commentsBlock.childNodes[2].style.display = 'inline';
                    isCommentFull = true;
                }
                document.documentElement.scrollTop = 8732;
            })
        })
    } else{
        const commentsItem = document.querySelectorAll('.comments__item');
        let commentsTitle = document.querySelector('.comments__title')

        let isCommentFull = false;

        let slide = 1


        const commentsDots = document.querySelectorAll(".comments__dote"),
              commentsSlides = document.querySelectorAll('.comments__item')

        function showCommentsSlides(n) {
            /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
            let slides = commentsSlides
            let dots = commentsDots

            for (let slide of slides) {
                slide.style.display = "none";
            }
    
            for(let dote of dots){
                dote.style.background = "url(icons/slider_dote_disabled.svg) no-repeat"
            }
    
            dots[slide - 1].style.background = "url(icons/slider_dote_active.svg) no-repeat"
            slides[slide - 1].style.display = "block";
        }
    
        showCommentsSlides(slide);

        commentsDots.forEach((e, i) => {
            e.addEventListener('click', () => {
                showCommentsSlides(slide = i+1);
                document.documentElement.scrollTop = commentsTitle.offsetTop;
            })
        })
    
    
        commentsItem.forEach(e => {
            e.addEventListener('click',() => {
                if (isCommentFull){
                    e.style.display = "flex"
                    let commentsBlock = e.childNodes[0];
                    commentsBlock.style.padding = "0px"
                    commentsBlock.childNodes[0].style.display = "block";
                    commentsBlock.childNodes[1].style.display = "block";
                    commentsBlock.childNodes[2].style.display = 'none';
                    isCommentFull = false;
                } else {
                    for (let block of commentsItem){
                        block.style.display = "none";
                    }
                    e.style.width = "555px";
                    e.style.display = "flex";
                    let commentsBlock = e.childNodes[0];
                    commentsBlock.style.padding = "15px"
                    commentsBlock.childNodes[0].style.display = "none";
                    commentsBlock.childNodes[1].style.display = "none";
                    commentsBlock.childNodes[2].style.display = 'inline';
                    isCommentFull = true;
                }
                
                document.documentElement.scrollTop = commentsTitle.offsetTop;
            })
        })
    }

    //hamburger

    const hamburger = document.getElementsByClassName('hamburger'),
          menu = document.getElementsByClassName('header__list'),
          headerItems = document.querySelectorAll('.header__link'),
          headerAdder = document.querySelectorAll('.header__link_adder'),
          headerIAB = document.querySelectorAll('.header__item_adder_block'),
          headerIABI = document.querySelectorAll('.header__item_adder_block_item');

    if (document.documentElement.clientWidth < 769){
        let isMenuSaw = false;
        console.log(headerAdder, headerIAB)
        hamburger[0].addEventListener('click', () => {
            if (isMenuSaw){
                menu[0].style.left = "-100%"
                isMenuSaw = false;
            } else {
                menu[0].style.left = "0"
                isMenuSaw = true
            }
        })
        headerItems.forEach(e => {
            e.addEventListener('click', () => {
                menu[0].style.left = "-100%"
                isMenuSaw = false;
            })
        })
        headerAdder[0].addEventListener('click', () => {
            headerIAB[0].style.display="block";
        })
        headerIABI.forEach(elem => {
            elem.addEventListener('click', () => {
                menu[0].style.left = "-100%"
                isMenuSaw = false;
                headerIAB[0].style.display="none";
            })
        })
    }
    //other utilities

    if(document.documentElement.clientWidth < 769){
        const table = document.querySelectorAll(".visual__img");
        table[0].outerHTML = '<img src="img/768table.png" class="visual__img"></img>'
    }
})