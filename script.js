let img1 = document.querySelector('.img1')
let div1 = document.querySelector('.div1')
        img1.addEventListener('click', function(){
        anime({
            targets: '.div1',
            height: 510,
            marginBottom: 0,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p1',
            paddingTop: 260,
            duration: 3000,
            easing: 'linear',
        })
        }) 
let cnopka1 = document.querySelector('.cnopka1')
        cnopka1.addEventListener('click', function(){
        anime({
            targets: '.div1',
            height: 300,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p1',
            paddingTop: 0,
            duration: 1000,
            easing: 'linear',
        })
        })


let img2 = document.querySelector('.img2')
let div2 = document.querySelector('.div2')
        img2.addEventListener('click', function(){
        anime({
            targets: '.div2',
            height: 545,
            marginBottom: 0,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p2',
            paddingTop: 278,
            duration: 3000,
            easing: 'linear',
        })
        }) 
let cnopka2 = document.querySelector('.cnopka2')
        cnopka2.addEventListener('click', function(){
        anime({
            targets: '.div2',
            height: 300,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p2',
            paddingTop: 0,
            duration: 1000,
            easing: 'linear',
        })
        })


let img3 = document.querySelector('.img3')
let div3 = document.querySelector('.div3')
        img3.addEventListener('click', function(){
        anime({
            targets: '.div3',
            height: 560,
            marginBottom: 0,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p3',
            paddingTop: 260,
            duration: 3000,
            easing: 'linear',
        })
        }) 
let cnopka3 = document.querySelector('.cnopka3')
        cnopka3.addEventListener('click', function(){
        anime({
            targets: '.div3',
            height: 300,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p3',
            paddingTop: 0,
            duration: 1000,
            easing: 'linear',
        })
        })


let img4 = document.querySelector('.img4')
let div4 = document.querySelector('.div4')
        img4.addEventListener('click', function(){
        anime({
            targets: '.div4',
            height: 560,
            marginBottom: 0,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p4',
            paddingTop: 278,
            duration: 3000,
            easing: 'linear',
        })
        }) 
let cnopka4 = document.querySelector('.cnopka4')
        cnopka4.addEventListener('click', function(){
        anime({
            targets: '.div4',
            height: 300,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p4',
            paddingTop: 0,
            duration: 1000,
            easing: 'linear',
        })
        })


let img5 = document.querySelector('.img5')
let div5 = document.querySelector('.div5')
        img5.addEventListener('click', function(){
        anime({
            targets: '.div5',
            height: 580,
            marginBottom: 0,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p5',
            paddingTop: 260,
            duration: 3000,
            easing: 'linear',
        })
        }) 
let cnopka5 = document.querySelector('.cnopka5')
        cnopka5.addEventListener('click', function(){
        anime({
            targets: '.div5',
            height: 300,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p5',
            paddingTop: 0,
            duration: 1000,
            easing: 'linear',
        })
        })


let img6 = document.querySelector('.img6')
let div6 = document.querySelector('.div6')
        img6.addEventListener('click', function(){
        anime({
            targets: '.div6',
            height: 570,
            marginBottom: 0,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p6',
            paddingTop: 278,
            duration: 3000,
            easing: 'linear',
        })
        }) 
let cnopka6 = document.querySelector('.cnopka6')
        cnopka6.addEventListener('click', function(){
        anime({
            targets: '.div6',
            height: 300,
            duration: 1000,
            easing: 'linear',
        })
        anime({
            targets: '.p6',
            paddingTop: 0,
            duration: 1000,
            easing: 'linear',
        })
        })


let img7 = document.querySelector('.img7')
let one1 = document.querySelector('.one1')
        img7.addEventListener('click', function(){
        anime({
            targets: '.one1',
            height: 570,
            marginBottom: 0,
            duration: 1000,
            easing: 'linear',
            marginBottom: 200,
        })
        anime({
            targets: '.p7',
            paddingTop: 278,
            duration: 3000,
            easing: 'linear',
        })
        }) 
let cnopka7 = document.querySelector('.cnopka7')
        cnopka7.addEventListener('click', function(){
        anime({
            targets: '.one1',
            height: 300,
            duration: 1000,
            easing: 'linear',
            marginBottom: 150,
        })
        anime({
            targets: '.p7',
            paddingTop: 0,
            duration: 1000,
            easing: 'linear',
        })
        })

        let block = document.querySelector('.block')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 20 * dx / window.innerWidth / 2
    let angleY = 20 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})
