
function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Convert time into 12-hour format
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    // Add leading zero
    const formatTime = (value) =>
        String(value).padStart(2, "0");

    // Update time
    document.getElementById("hours").textContent =
        formatTime(hours);

    document.getElementById("minutes").textContent =
        formatTime(minutes);

    document.getElementById("seconds").textContent =
        formatTime(seconds);

    document.getElementById("ampm").textContent = ampm;

    // Update date and day
    const options = {
        day: "2-digit",
        month: "long",
        year: "numeric"
    };

    document.getElementById("day").textContent =
        now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-GB", options);
}

// Display clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
