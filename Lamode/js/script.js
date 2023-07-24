const navbar = document.querySelector('.navbar');
const searchForm = document.querySelector('.search-form');
const cartItem = document.querySelector('.cart-items-container');
const formUser = document.getElementById('form-user');
const header = document.querySelector('header');

document.getElementById('user-btn').onclick = () =>{
    formUser.style.display = "flex";
}

document.getElementById('close-login').onclick = () =>{
    formUser.style.display = "none";
}

window.addEventListener("click",e => {
    if (e.target == formUser) {
        formUser.style.display = "none";
    }
});

formUser.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
  });
  
const formValidation = () => {
    console.log("Éxito");
    acceptData();
};

let data2 = [{}];
const acceptData = () => {
  
    localStorage.setItem("data2", JSON.stringify(data2));
  
    console.log(data2);
    createTasks();
};

const createTasks = () =>{

}

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}


document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let mainLocation = window.scrollY;
window.onscroll = () =>{
    let currentScroll = window.scrollY;
    if(mainLocation >= currentScroll){
        header.style.top = '0';
    }
    else{
        header.style.top = '-200px';
    }
    mainLocation = currentScroll;

    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}