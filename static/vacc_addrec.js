document.getElementById("recordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const payload = {
        patient_id: document.getElementById("addPatientId").value,
        patient_name: document.getElementById("addPatientName").value,
        vaccine_name: document.getElementById("addVaccineName").value,
        vaccination_date: document.getElementById("addVaccinationDate").value,
        dose_number: document.getElementById("addDoseNumber").value,
        status: document.getElementById("addStatus").value,
        administered_by: document.getElementById("addAdministeredBy").value,
        remarks: document.getElementById("addRemarks").value
    };

    fetch('/api/addrecord', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        return response.json().then(data => {
            if (!response.ok) {
                throw new Error(data.message);
            }
            return data;
        });
    })
    .then(data => {
        alert("Record Added Successfully!");
        window.location.href = "/records"; 
    })
    .catch(err => {
        alert("Failed to add record: " + err.message);
    });
});