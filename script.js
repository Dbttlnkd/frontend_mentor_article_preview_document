const share = document.querySelector('.share')
const share_container= document.querySelector('.share_container')
const html_content = document.querySelector("html");

share.addEventListener("click", (e) => {
    console.log(e);
    share_container.classList.toggle("show")
    share.classList.toggle("share_toggle")
})

// html_content.addEventListener("click", function (e) {
//     if (e.target !== share)
//     share.classList.remove("share_toggle")
// })

// html_content.addEventListener("click", function (e) {
//     if (e.target !== share_container)
//     share_container.style.visibility="visible"
// })

