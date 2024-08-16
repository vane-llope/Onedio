var swiper = new Swiper(".Swiper1", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className)
        {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
        480: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },
    pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
        //type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
    },
});
// Add an event listener to the document
document.addEventListener("click", function (event)
{
    const collapseElement = document.getElementById("collapse");
    const target = event.target;

    // Check if the clicked element is outside the dropdown
    if (!collapseElement.contains(target))
    {
        // Close the dropdown
        collapseElement.classList.remove("show");
    }
});

//swiper3
var swiper = new Swiper(".swiper3", {
    slidesPerView: 4,
    spaceBetween: 60,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }

});
//swiper 4

var swiper4 = new Swiper(".swiper4", {
    slidesPerView: 2,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
        480: {
            slidesPerView: 6,
            spaceBetween: 20
        }
    },
    pagination: {
        el: ".swiper-pagination-4",
        clickable: true,
        //type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next-4",
        prevEl: ".swiper-button-prev-4",
    },
});