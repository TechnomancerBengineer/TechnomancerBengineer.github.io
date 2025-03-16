document.addEventListener('DOMContentLoaded', function() {
    // Handle dropdown menu (click instead of hover)
    const dropdown = document.querySelector('.dropdown');
    const dropdownButton = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Track if dropdown is open or closed
    let isDropdownOpen = false;

    // Toggle dropdown on button click
    dropdownButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent this click from being detected by document
        
        if (!isDropdownOpen) {
            dropdownContent.style.display = 'block';
            isDropdownOpen = true;
        } else {
            dropdownContent.style.display = 'none';
            isDropdownOpen = false;
        }
    });
    
    // Close dropdown when clicking elsewhere on the page
    document.addEventListener('click', function() {
        if (isDropdownOpen) {
            dropdownContent.style.display = 'none';
            isDropdownOpen = false;
        }
    });
    
    // Prevent clicks inside dropdown content from closing the dropdown
    dropdownContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Handle button animations
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.remove('pulseSheen');
            void button.offsetWidth;
            button.classList.add('pulseSheen');
        });
    });
});

document.getElementById('myAppButton').addEventListener('click', function() {
    window.open('https://myflutterapp-c0fa3.web.app', '_blank');
});