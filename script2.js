/* =================================
   GO TO PERSONAL MESSAGE
================================= */

function goToMessage() {

    const message =
        document.getElementById("message");

    message.scrollIntoView({
        behavior: "smooth"
    });

}


/* =================================
   SURPRISE BUTTON
================================= */

function showSurprise() {

    const surprise =
        document.getElementById("surprise");

    if (surprise.style.display === "block") {

        surprise.style.display = "none";

    } else {

        surprise.style.display = "block";

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* =================================
   SMOOTH SCROLL ANIMATION
================================= */

const animatedElements =
    document.querySelectorAll(
        ".message-card, .motivation-card, .wish-card, .rcb-card, .support-card"
    );


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(function(element) {

    element.classList.add("animate");

    observer.observe(element);

});