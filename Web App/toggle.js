// JavaScript to toggle the menu
/*
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuToggle.classList.toggle('open');
});
// JavaScript to toggle the menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    menu.classList.toggle('open'); // Toggle the animation class
    menuIcon.classList.toggle('open');
}
*/
function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    const openbtn = document.querySelector(".openbtn");
  
    if (sidebar.style.width === "250px") {
      closeNav();
    } else {
      openNav();
    }
}
  
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.querySelector(".openbtn").classList.add("change");
    const logo = document.getElementById("logo"); // Assuming you've added an id to your logo element

    // Toggle class on the logo for transparency
    // logo.classList.toggle("transparent-logo");
    logo.classList.add("transparent");

}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector(".openbtn").classList.remove("change");
    const logo = document.getElementById("logo");
    logo.classList.remove("transparent");
}


function goToLoginPage() {
    window.location.href = 'LoginPage.html';
}
function goToSubscribePage(){
    window.location.href='SubscribePage.html';
} 
 function goToTryItOutPage() {
    window.location.href = 'Try_it_out.html';
 }
 document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const logoContainer = document.querySelector(".logo-container");

    toggleMenuButton.addEventListener("click", function () {
        logoContainer.classList.toggle("menu-open");
    });
});
function Freesubscribe() {
    var email = document.getElementById('emailInput').value;

    // Simulate an AJAX request using setTimeout
    setTimeout(function() {
        alert('Subscribed successfully! You will receive updates.');

    // Reset the form after successful subscription
    document.getElementById('subscribeForm').reset();
}, 1000); // Simulating a delay of 1 second
}
function processSubscription() {
    var email = document.getElementById('emailInput').value;
    var isPremium = document.getElementById('premiumCheckbox').checked;

    // Make an actual AJAX request to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/subscribe", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert(xhr.responseText);
                document.getElementById('subscribeForm').reset();
            } else {
                alert('Subscription failed. Please try again.');
            }
        }
    };

    var data = JSON.stringify({
        email: email,
        premium: isPremium.toString()
    });

    xhr.send(data);
}

// Dark Mode Switch
function switchMode() {
    const switchInput = document.querySelector('.switch input');
    const body = document.body;

    if (!switchInput || !body) {
        console.error("Switch input or body not found");
        return;
    }

    // Toggle dark mode by updating CSS styles directly
    const isDarkMode = switchInput.checked;
    body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('dark-mode', isDarkMode);

    // Change the image source based on the dark mode state
    updateImage(isDarkMode);
}

function updateImage(isDarkMode) {
    const sliderBefore = document.querySelector('.slider:before');

    if (!sliderBefore) {
        console.error("Slider before element not found");
        return;
    }

    if (isDarkMode) {
        // Update styles for dark mode
        sliderBefore.style.left = 'calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)))';
        sliderBefore.style.background = '#303136';
        sliderBefore.style.boxShadow = 'inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb';
    } else {
        // Update styles for light mode
        sliderBefore.style.left = 'var(--slider-offset,0.3em)';
        sliderBefore.style.background = 'linear-gradient(40deg,#ff0080,#ff8c00 70%)';
        sliderBefore.style.boxShadow = '';
    }
}

// Check local storage for user preference
document.addEventListener('DOMContentLoaded', function () {
    const isDarkModeStored = localStorage.getItem('dark-mode');
    if (isDarkModeStored === 'true') {
        switchMode(); // Update the image and CSS styles based on stored preference
    }
});
// To handle image selection
function chooseImage() {
    const uploadForm = document.getElementById('uploadForm');
    const formData = new FormData(uploadForm);

    fetch('/chooseImage', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const originalImage = document.getElementById('originalImage');
        const imageUrl = URL.createObjectURL(blob);
        originalImage.src = imageUrl;
    })
    .catch(error => console.error('Error:', error));

    // Prevent form submission
    return false;
}

// To trigger image restoration using Denoising Autoencoders
// function restoreImage() {
//     const uploadForm = document.getElementById('uploadForm');
//     const formData = new FormData(uploadForm);

//     // Use fetch to send the image data to the server
//     fetch('/restore', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.blob())
//     .then(blob => {
//         // Display the original image
//         const originalImage = document.getElementById('originalImage');
//         const imageUrl = URL.createObjectURL(blob);
//         originalImage.src = imageUrl;

//         // Use fetch again to get the restored image data
//         fetch('/get_restored_image')
//             .then(response => response.blob())
//             .then(restoredBlob => {
//                 // Display the restored image
//                 const restoredImage = document.getElementById('restoredImage');
//                 const restoredImageUrl = URL.createObjectURL(restoredBlob);
//                 restoredImage.src = restoredImageUrl;
//             })
//             .catch(error => console.error('Error:', error));
//     })
//     .catch(error => console.error('Error:', error));
// }

// Function to perform Denoising Autoencoder restoration
// function performDenoisingAutoencoder() {
//     // Use fetch to send the request to the server for Denoising Autoencoder restoration
//     fetch('/restoreDenoisingAutoencoder', {
//         method: 'POST'
//     })
//     .then(response => response.blob())
//     .then(blob => {
//         const restoredImage = document.getElementById('restoredImage');
//         const restoredImageUrl = URL.createObjectURL(blob);
//         restoredImage.src = restoredImageUrl;
//     })
//     .catch(error => console.error('Error:', error));
// }

function displayImage() {
    const input = document.getElementById("imageInput");
    const originalImageElement = document.getElementById("originalImage");

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            originalImageElement.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// function to logout
function logout() {
    // Clear any client-side session data
    localStorage.removeItem('user_token'); // assuming you use a token for client-side session

    // Redirect to the login page
    window.location.href = 'login.htm';
}

// Function to submit form for sign up
function submitForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Perform client-side validation as needed

    // Simulate form submission logic
    if (password === confirmPassword) {
        // On success, you might handle the response as needed
        alert('Sign up successful!');
    } else {
        // On failure, you might handle the response as needed
        alert('Passwords do not match!');
    }
}
// function to Login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Replace with your actual user authentication logic
    // Example: Check for a hardcoded username and password
    if (username === 'your_username' && password === 'your_password') {
        // Simulate setting session variables (client-side)
        localStorage.setItem('logged_in', true);
        localStorage.setItem('username', username);

        // Redirect to the home page
        window.location.href = 'home.htm'; // Change the URL to your home page
    } else {
        // Redirect back to the login page with an error message if login fails
        window.location.href = 'login.htm?error=1';
    }
}

//  function to restore the image using Hybrid machine learning algorithm
// function restoreImage() {
//     // var formData = new FormData($('#imageForm')[0]);
//     var formData = new FormData();
//     var fileInput = document.getElementById('imageInput');
//     if (fileInput.files.length > 0) {
//         var selectedFile = fileInput.files[0];
//         // Append the file to FormData with the desired name
//         formData.append('image', selectedFile, 'Blurry_Image.jpg');
//         $.ajax({
//             url: '/restore_image',
//             type: 'POST',
//             data: formData,
//             processData: false,
//             contentType: false,
//             success: function(data) {
//                 // Update UI with restored image path
//                 $('#result').html(`<h2>After</h2><img id="restoredImage" alt="Restored Image" class="imforbefore">`);

//                 // Set the source of the restored image
//                 $('#restoredImage').attr('src', 'C:\Users\user\Documents\GitHub\Deblurring' + );
//             },
//             error: function(error) {
//                 console.error(error);
//             }
//         });
//     }
//     else{
//         alert('Please choose an image before restoring.');
//     }
// }

// JavaScript to toggle the fixed position dropdown
function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Close the fixed position dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.user-dropdown')) {
        const dropdownContent = document.getElementById('dropdownContent');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
};

// Update username and email dynamically
document.getElementById('username').innerText = 'JohnDoe';  // Replace with actual username
document.getElementById('email').innerText = 'johndoe@example.com';  // Replace with actual email
