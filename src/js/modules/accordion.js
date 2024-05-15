function accordion(itemSelector, descrSelector, arrowSelector) {
    //FAQ 

    const accordionItems = document.querySelectorAll(itemSelector);

    accordionItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const accordionContent = this.querySelector(descrSelector);
            const accordionArrow = this.querySelector(arrowSelector);

            if (accordionContent.classList.contains('show')) {
                accordionContent.classList.remove('show');
                accordionContent.classList.add('hide');
                accordionArrow.classList.remove('rotate');
            } else {
                closeAllAccordionItems();
                accordionContent.classList.remove('hide');
                accordionContent.classList.add('show');
                accordionArrow.classList.add('rotate');

            }
        });
    });

    function closeAllAccordionItems() {
        const accordionContents = document.querySelectorAll(descrSelector);
        const accordionArrows = document.querySelectorAll(arrowSelector);

        accordionContents.forEach(function(content) {
            content.classList.remove('show');
            content.classList.add('hide');
        });

        accordionArrows.forEach(function(arrow) {
            arrow.classList.remove('rotate');
        });
    }
}
export default accordion;