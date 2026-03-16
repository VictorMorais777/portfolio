const items = document.querySelectorAll(".timeline-item");

function revealTimeline() {

    const windowHeight = window.innerHeight;

    items.forEach(item => {

        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealTimeline);

window.addEventListener("load", revealTimeline);