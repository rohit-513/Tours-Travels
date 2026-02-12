document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let selectedPackage = document.getElementById("package").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("bookingMessage");

    if (name && email && selectedPackage && date) {
        message.style.color = "green";
        message.textContent = "Booking Successful! We will contact you soon.";
        this.reset();
    } else {
        message.style.color = "red";
        message.textContent = "Please fill all fields.";
    }
});
