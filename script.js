// Search Functionality
function searchService() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let services = document.querySelectorAll(".service-item");

    services.forEach(service => {
        let serviceName = service.getAttribute("data-name").toLowerCase();
        if (serviceName.includes(input)) {
            service.style.display = "block";
        } else {
            service.style.display = "none";
        }
    });
}

// Swipe for Carousel (if needed)
document.querySelectorAll('.banner img').forEach(img => {
    img.addEventListener('touchstart', handleTouchStart, false);
    img.addEventListener('touchmove', handleTouchMove, false);
});

let xDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!xDown) return;

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (xDiff > 5) {
        console.log("Swiped Left");
    } else if (xDiff < -5) {
        console.log("Swiped Right");
    }

    xDown = null;
}
