// Data storage (to simulate backend responses)
let patients = [];
let doctors = [];
let appointments = [];
let records = [];
let notifications = [];
let prescriptions = [];

// Utility functions
function renderData(id, data) {
    const container = document.getElementById(id);
    container.innerHTML = data.length
        ? `<ul>${data.map(item => `<li>${JSON.stringify(item)}</li>`).join("")}</ul>`
        : `<p>No data available.</p>`;
}

// Patients
function addPatient() {
    const patient = { id: Date.now(), name: "Patient " + (patients.length + 1) };
    patients.push(patient);
    renderData("patientsData", patients);
}

// Doctors
function addDoctor() {
    const doctor = { id: Date.now(), name: "Doctor " + (doctors.length + 1) };
    doctors.push(doctor);
    renderData("doctorsData", doctors);
}

// Appointments
function scheduleAppointment() {
    const appointment = { id: Date.now(), patient: "Patient X", doctor: "Doctor Y", date: new Date().toDateString() };
    appointments.push(appointment);
    renderData("appointmentsData", appointments);
}

// Medical Records
function addRecord() {
    const record = { id: Date.now(), patient: "Patient X", type: "Checkup", date: new Date().toDateString() };
    records.push(record);
    renderData("recordsData", records);
}

// Notifications
function sendNotification() {
    const notification = { id: Date.now(), message: "Reminder for appointment", date: new Date().toDateString() };
    notifications.push(notification);
    renderData("notificationsData", notifications);
}

// Prescriptions
function addPrescription() {
    const prescription = { id: Date.now(), patient: "Patient X", medication: "Medicine Y" };
    prescriptions.push(prescription);
    renderData("prescriptionsData", prescriptions);
}
