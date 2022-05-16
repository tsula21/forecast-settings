// Variables 
const unitsChange = document.querySelector('.down');
const unitBox = document.querySelector('.unitbox');
const darkMode = document.querySelector('.darkmodinput');
const background = document.querySelector('.background');
const body = document.querySelector('body');
const darkModeAbout = document.querySelector('.about');
const darkModeTabs = document.querySelectorAll('.settings .items');
const celsius = document.querySelector('.celsius');
const fahrenheit = document.querySelector('.fahrenheit');
const h3 = document.querySelector('.cel');
const h4 = document.querySelector('.fah');
let darkWeb = localStorage.getItem('darkWeb');

const enableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.add('darkWeb');
    // 2 . update darkmode in the LocalStorage
    localStorage.setItem('darkWeb', 'enabled');
}

const disableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.remove('darkWeb');
    // 2 . update darkmode in the LocalStorage
    localStorage.setItem('darkWeb', null);
}


// All Event Listeners
unitsChange.addEventListener('click', changeTempType);
// darkMode.addEventListener('click', darkReader);
celsius.addEventListener('click', celsi);
fahrenheit.addEventListener('click', fahren);

// All Functions
function changeTempType(){
    if(unitBox.classList.contains('active')){
        unitBox.classList.remove('active');
        
    }else{
        unitBox.classList.add('active');
    }
}



function celsi(){
    h3.style.display = "block";
    h4.style.display = "none";
    unitBox.classList.remove('active');
}

function fahren(){
    h3.style.display = "none";
    h4.style.display = "block";
    unitBox.classList.remove('active');
}

// Local Storage
if(darkWeb === 'enabled'){
    enableDarkMode();
    background.classList.add('active');
        body.classList.add('active');
        darkModeAbout.classList.add('active');
        darkModeTabs.forEach((elem, i) => {
            elem.classList.add('active');
        });
        darkMode.setAttribute("checked", "checked");
}else{
    disableDarkMode();
    background.classList.remove('active');
    body.classList.remove('active');
    darkModeAbout.classList.remove('active');
    darkModeTabs.forEach((elem, i) => {
        elem.classList.remove('active');
    });
}

 darkMode.addEventListener('click', () => {
     darkWeb = localStorage.getItem('darkWeb');
    if(darkWeb !== 'enabled'){
        enableDarkMode();

        background.classList.add('active');
        body.classList.add('active');
        darkModeAbout.classList.add('active');
        darkModeTabs.forEach((elem, i) => {
            elem.classList.add('active');
        });

        console.log(darkWeb);
    }else{
        disableDarkMode();

        background.classList.remove('active');
        body.classList.remove('active');
        darkModeAbout.classList.remove('active');
        darkModeTabs.forEach((elem, i) => {
            elem.classList.remove('active');
        });

        console.log(darkWeb);
    }
 });