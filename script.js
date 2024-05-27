//your JS code here. If required.
 
 const sub = document.getElementById("submit");
sub.addEventListener('click', event);

function event(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    alert('First Name: ' + first + 'Last Name: ' + last + 'Phone Number: ' + phone + 'Email ID: ' + email);
}

