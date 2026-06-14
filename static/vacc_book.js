document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const vaccineName = document.getElementById("vaccineName").value;
    const vaccineCentre = document.getElementById("vaccineCentre").value;
    const bookingDate = document.getElementById("bookingDate").value;
    const userId = localStorage.getItem("user_id"); 

    fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            user_id: userId,
            vaccine_name: vaccineName, 
            vaccine_centre: vaccineCentre, 
            booking_date: bookingDate 
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Booking Successful") {
            alert("Booking Successful!");
            window.location.href = "/schedule";
        } else {
            alert("Booking Failed: " + data.message);
        }
    });
});