$(document).ready(function() {
    $('.featured-card').click(function(event) {
        event.stopPropagation(); 
        
        // Close any open card
        $('.card-content').not($(this).find('.card-content')).slideUp();
        
        // Toggle the clicked card
        $(this).find('.card-content').slideToggle();
    });

    // Close the card when clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('.featured-card').length) {
            $('.card-content').slideUp();
        }
    });
});

function DarkMode() {
    var element = document.body;
    element.classList.toggle("darkmode");
}
