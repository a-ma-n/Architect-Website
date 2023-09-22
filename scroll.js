document.addEventListener("DOMContentLoaded", function () {
    // Select all links that should trigger smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Loop through each link and add a click event listener
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Get the target element's ID (e.g., "#about")
            const targetId = this.getAttribute("href");
            
            // Use `scrollIntoView` with behavior "smooth" for smooth scrolling
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
