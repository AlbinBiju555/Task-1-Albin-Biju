const searchSection = document.getElementById("searchSection");
const updateForm = document.getElementById("updateForm");
const searchPatientId = document.getElementById("searchPatientId");


document.getElementById("searchBtn").addEventListener("click", function() {
    const patientId = searchPatientId.value.trim();
    
    if (!patientId) {
        alert("Please provide a valid Patient ID.");
        return;
    }

    fetch(`/api/get_record_by_patient/${patientId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("No vaccination record found for this Patient ID.");
            }
            return response.json();
        })
        .then(res => {
            const record = res.data;
            
           
            document.getElementById("recordId").value = record.id;
            document.getElementById("displayPatientId").value = record.patient_id;
            document.getElementById("patientName").value = record.patient_name;
            document.getElementById("vaccineName").value = record.vaccine_name;
            document.getElementById("vaccinationDate").value = record.vaccination_date;
            document.getElementById("doseNumber").value = record.dose_number;
            document.getElementById("administeredBy").value = record.administered_by;
            document.getElementById("remarks").value = record.remarks;

            searchSection.style.display = "none";
            updateForm.style.display = "flex";
        })
        .catch(err => alert(err.message));
});


updateForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const recordId = document.getElementById("recordId").value;
    const payload = {
        patient_name: document.getElementById("patientName").value,
        vaccine_name: document.getElementById("vaccineName").value,
        vaccination_date: document.getElementById("vaccinationDate").value,
        dose_number: document.getElementById("doseNumber").value,
        administered_by: document.getElementById("administeredBy").value,
        remarks: document.getElementById("remarks").value
    };

    fetch(`/api/updaterecord/${recordId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        resetToSearch();
    })
    .catch(err => alert("Error updating record: " + err));
});


document.getElementById("backBtn").addEventListener("click", resetToSearch);

function resetToSearch() {
    updateForm.reset();
    updateForm.style.display = "none";
    searchSection.style.display = "block";
    searchPatientId.value = "";
}