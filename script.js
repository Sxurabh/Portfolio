/* -------------Hamburger Handler-----------
 */
burger = document.querySelector('.burger')
navList = document.querySelector('.navList')
navbar = document.querySelector('.navbar')
burger = addEventListener('click', ()=>{

        navList.classList.toggle('v-class');
        navbar.classList.toggle('navbar');
})
