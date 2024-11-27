document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    
    // Set initial sidebar state
    const sidebarState = sessionStorage.getItem('sidebarOpen');
    if (sidebarState === 'true') {
        sidebar.classList.add('show');
    } else {
        sidebar.classList.remove('show');
    }

    // Handle menu icon click
    menuIcon.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('show');
        sessionStorage.setItem('sidebarOpen', isOpen);
    });

    // Handle navigation before page changes
    window.addEventListener('beforeunload', () => {
        const isOpen = sidebar.classList.contains('show');
        sessionStorage.setItem('sidebarOpen', isOpen);
    });
});