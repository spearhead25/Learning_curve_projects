const time = document.getElementById('clock');
const date = document.getElementById('date');

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    
    const options = {
       weekday: "long",
       year: "numeric",
       month: "long",
       day: "numeric",
    };

    const dateString = now.toLocaleDateString(undefined, options);
    time.textContent = `${hours}:${minutes}:${seconds} ${ampm}`
    date.textContent = `${dateString}`;
}

setInterval(updateClock, 1000);

updateClock();