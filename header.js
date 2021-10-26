const headerImage = document.querySelector(".header-image");
const header = document.querySelector(".primary-header");
const logo = document.querySelector(".company-logo");
const links = document.querySelector('.nav-links');
const recentPosts = document.querySelector(".images__flex-container");
const recentPostsImages = document.querySelectorAll(".container-image");
const imageBanners = document.querySelectorAll(".image__banner");



const options = {
    rootMargin: "-50%"
}

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.style.backgroundColor = "white";
            header.style.boxShadow =  "2px 2px 25px 1px rgba(0, 0, 0, 0.1)";
            logo.style.color = "#006CC5";
            links.style.color = "black";
        }
        else{
            header.style.backgroundColor = "transparent";
            header.style.boxShadow =  "2px 2px 25px 1px rgba(0, 0, 0, 0.0)";
            logo.style.color = "white";
            links.style.color = "white";
           
        }
    })
}, options);

headerObserver.observe(headerImage);



const recentPostsOptions = {
    threshold: .1
}

recentPostsObserver = new IntersectionObserver(function(entries, recentPostsObserver) {

    entries.forEach(entry => {
        if(entry.isIntersecting){

            for(let i = 0 ;i < recentPostsImages.length; i++ ){
                recentPostsImages[i].style.opacity = "1";

                imageBanners[i].style.bottom = "15%";
                imageBanners[i].style.opacity = "1";
            }
        }
        else {

            for(let i = 0 ;i < imageBanners.length; i++ ){
                recentPostsImages[i].style.opacity = "0";

                imageBanners[i].style.bottom = "-50%";
                imageBanners[i].style.opacity = "1";
            }
        }
    })
}, recentPostsOptions);

recentPostsObserver.observe(recentPosts);
