function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

function pickCard() {
    let tarotCards = [
        { name: "The Fool", meaning: "A new journey is beginning. Take a leap of faith." },
        { name: "The Magician", meaning: "You have all the power and skills to create your destiny." },
        { name: "The High Priestess", meaning: "Trust your intuition. Hidden secrets may be revealed soon." },
        { name: "The Empress", meaning: "Abundance, love, and creativity are entering your life." },
        { name: "The Emperor", meaning: "Stability and leadership will guide your future." },
        { name: "The Lovers", meaning: "A major relationship decision is coming. Choose wisely." },
        { name: "The Chariot", meaning: "Victory is near. Stay determined and focused." },
        { name: "Death", meaning: "A big transformation is coming. Something ends to begin anew." },
        { name: "The Star", meaning: "Hope and healing are coming. Your wishes may soon come true." },
        { name: "The Moon", meaning: "Illusions and emotions may confuse you. Trust your instincts." }
    ];

    let randomIndex = Math.floor(Math.random() * tarotCards.length);
    let selectedCard = tarotCards[randomIndex];

    document.getElementById("tarotResult").innerHTML = `
        <h3>✨ Your Tarot Card: ${selectedCard.name}</h3>
        <p>${selectedCard.meaning}</p>
    `;
}

function submitBooking() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || service === "" || message === "") {
        alert("Please fill all details!");
        return false;
    }

    document.getElementById("bookingMsg").innerHTML =
        "✅ Thank you " + name + "! Your booking request for " + service + " has been submitted.";

    document.querySelector(".booking-form").reset();
    return false;
}