$(document).ready(function() {
    $('.featured-card').click(function(event) {
        event.stopPropagation(); 
        
        $('.card-content').not($(this).find('.card-content')).slideUp();
        
        $(this).find('.card-content').slideToggle();
    });

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
