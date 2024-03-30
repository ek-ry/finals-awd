function DarkMode() {
    var element = document.body;
    element.classList.toggle("darkmode");
}
 
window.onscroll = function() {myFunction()};

$(document).ready(function() {
    function handleCardClick(cardId, itemId) {
        $(cardId).click(function(event) {
            $(itemId).toggleClass("hidden");
        });

        $(document).click(function(event) {
            if (!$(event.target).closest(itemId + ', ' + cardId).length) {
                $(itemId).addClass("hidden");
            }
        });
    }

    // Fashion Items
    handleCardClick("#fcard1", "#fitem1");
    handleCardClick("#fcard2", "#fitem2");
    handleCardClick("#fcard3", "#fitem3");
    handleCardClick("#fcard4", "#fitem4");
    handleCardClick("#fcard5", "#fitem5");

    // Office Supplies Items
    handleCardClick("#oscard1", "#ositem1");
    handleCardClick("#oscard2", "#ositem2");
    handleCardClick("#oscard3", "#ositem3");
    handleCardClick("#oscard4", "#ositem4");
    handleCardClick("#oscard5", "#ositem5");

    // Technology Items
    handleCardClick("#tcard1", "#titem1");
    handleCardClick("#tcard2", "#titem2");
    handleCardClick("#tcard3", "#titem3");
    handleCardClick("#tcard4", "#titem4");
    handleCardClick("#tcard5", "#titem5");

    // Furniture Items
    handleCardClick("#fucard1", "#fuitem1");
    handleCardClick("#fucard2", "#fuitem2");
    handleCardClick("#fucard3", "#fuitem3");
    handleCardClick("#fucard4", "#fuitem4");
    handleCardClick("#fucard5", "#fuitem5");
});
