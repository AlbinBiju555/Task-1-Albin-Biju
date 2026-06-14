document.addEventListener("DOMContentLoaded", function() {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("user_id");
    const container = document.getElementById("recordsContainer");
    const pageTitle = document.getElementById("pageTitle");

    let apiUrl = '/api/records';
    
    
    if (role === "patient" && userId) {
        apiUrl += `?user_id=${userId}`;
        pageTitle.innerText = "My Vaccination Records";
    } else {
        pageTitle.innerText = "Global Patient Master Log";
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(res => {
            if (res.data && res.data.length > 0) {
                container.innerHTML = ""; 
                
                const table = document.createElement("table");
                
                
                table.innerHTML = `
                    <thead>
                        <tr>
                            ${role !== 'patient' ? '<th>User ID</th>' : ''}
                            <th>Patient Name</th>
                            <th>Vaccine Name</th>
                            <th>Date Administered</th>
                            <th>Dose #</th>
                            <th>Administered By</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody"></tbody>
                `;
                
                container.appendChild(table);
                const tbody = document.getElementById("tableBody");

                res.data.forEach(item => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        ${role !== 'patient' ? `<td><strong>#${item.user_id}</strong></td>` : ''}
                        <td>${item.patient_name}</td>
                        <td>${item.vaccine_name}</td>
                        <td>${item.vaccination_date}</td>
                        <td>${item.dose_number}</td>
                        <td>${item.status || 'Completed'}</td>
                        <td>${item.administered_by}</td>
                        <td><small>${item.remarks || '-'}</small></td>
                    `;
                    tbody.appendChild(row);
                });
            }
        })
        .catch(err => console.error("Error displaying record rows:", err));
});


