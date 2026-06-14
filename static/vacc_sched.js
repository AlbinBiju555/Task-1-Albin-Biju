document.getElementById("scheduleForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const vaccineName = document.getElementById("schedVaccineName").value;
    const scheduleDate = document.getElementById("scheduleDate").value;

    fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vaccine_name: vaccineName, schedule_date: scheduleDate })
    })
    .then(response => response.json())
    .then(data => {
        alert("Vaccine Scheduled Successfully!");
        window.location.href = "/schedule"; 
    });
});