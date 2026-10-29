const dots = document.querySelectorAll(".testimonial-dot");
const testimonialText = document.getElementById("testimonial-text");
const testimonialName = document.getElementById("testimonial-name");
const testimonialRole = document.getElementById("testimonial-role");
const testimonialPhoto = document.getElementById("testimonial-photo");

const testimonials = [
    {
        text: "Travelya, thank you so much for a well organized trip. We had a wonderful time. Hard to believe it's already done and past. Weather was awesome, the hotels were nice, thank you for everything!",
        name: "Lorena Eka Mira",
        role: "General Manager Bus Association",
        photo: "/img/lorena-testimonial.png"
    },
    {
        text: "Our trip was absolutely amazing! Everything was well planned, the destinations were beautiful, and the entire experience was stress-free. We couldn't have asked for a better travel experience!",
        name: "Michael Anderson",
        role: "Business Consultant",
        photo: "/img/michael-testimonial.png"
    },
    {
        text: "Travelya made our vacation unforgettable. The accommodations were excellent, the itinerary was perfectly organized, and every detail was carefully planned. We will definitely travel with you again!",
        name: "Sophia Williams",
        role: "Marketing Director",
        photo: "/img/sophia-testimonial.png"
    },
    {
        text: "From the beginning to the end, everything went smoothly. The hotels were comfortable, the destinations were incredible, and the support we received was outstanding. Highly recommended!",
        name: "Daniel Roberts",
        role: "Project Manager",
        photo: "/img/daniel-testimonial.png"
    }
];

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        testimonialName.textContent = testimonials[index].name;
        testimonialText.textContent = testimonials[index].text;
        testimonialRole.textContent = testimonials[index].role;
        testimonialPhoto.style.backgroundImage = `url("${testimonials[index].photo}")`;

        dots.forEach((item, i) => {
            if(i === index) {
                item.src = "/img/filled-blue-circle.svg";
            } else {
                item.src = "/img/filled-gray-circle.svg";
            }
        })
    })
})