
let toggleBtn = document.querySelector('#toggle')
let menuList = document.querySelector('.item')

toggleBtn.addEventListener('click', clickfn);

function clickfn()
{
    menuList.classList.toggle('active');
}