function PostAnimation(){
    const posts = document.querySelectorAll(".post");
    posts.forEach((post,index) => {
        post.style.opacity = 0;
        post.style.transform = "translateY(20px)";
        post.style.filter = "blur(5px)";
        post.style.transition = `all 0.15s ease out $(index * 0.1s)s`;
    });

    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                entry.target.style.filter = "blur(0)"
            }
    });
    },{
        threshold: 0.1
    });
    
    posts.forEach((post) => {
        observer.observe(post);
    });
}
function HeaderAnimation(){
    const header = document.querySelector("header");
    header.style.animation = "slideDown 0.4s ease-out"
}
document.addEventListener("DOMContentLoaded",() =>{
    PostAnimation();
    HeaderAnimation();
    console.log("Функции вызваны");
});