function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');
    
    if (!dob) {
        result.innerHTML = "Please select a date of birth.";
        return;
    }
    
    const dobDate = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();

    // Check if the birthday has occurred this year or not
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    result.innerHTML = Your age is ${age} years old;
}