function togglePopup_Booking(){
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup_About(){
    document.getElementById("popup-2").classList.toggle("active");
}


function saveContact() {
    // Hämta värden från formuläret
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const groupQuantity = document.getElementById("groupQuantity").value;
    const date = document.getElementById("date").value;

    // Skapa en sträng med kontaktinformationen
    var contactInfo = "Full Name: " + firstName + " " + lastName + "<br>Email: " + email + "<br>Telefonnummer: " + phoneNumber + "<br>Antal gäster: " + groupQuantity + "<br>Datum: " + date;


    // Skriv ut bokningen
    document.getElementById("output").innerHTML = "<h2>Din bokning:</h2>" + contactInfo;
}