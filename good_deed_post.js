document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        var preloader = document.getElementById('preloader');
        var content = document.getElementById('content');
        
        // Simulate a delay (e.g., 3 seconds)
        setTimeout(function() {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 3000); // Delay time in milliseconds
    }
});