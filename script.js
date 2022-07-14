const share = document.querySelector('.share')
const share_container= document.querySelector('.share_container')

share.addEventListener("click", (e) => {
    console.log(e);
    share.style.backgroundColor = "#6E8098"
    share.style.backgroundImage = "url(/images/icon-share_white.svg)";
    share_container.style.display = "flex"
})
