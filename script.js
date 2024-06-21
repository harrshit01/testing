function scrollToServices() {      
  const servicesSection = document.getElementById('services');
  servicesSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    var menuDropdown = document.querySelector('.menu-dropdown');
    var dropdownShow = document.querySelector('.dropdown-show');

    menuDropdown.addEventListener('click', function() {
        // Toggle visibility of dropdownShow
        if (dropdownShow.style.display === 'none') {
            dropdownShow.style.display = 'block';
        } else {
            dropdownShow.style.display = 'none';
        }
    });

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuDropdown.contains(event.target) && event.target !== menuDropdown) {
            dropdownShow.style.display = 'none';
        }
    });
});
