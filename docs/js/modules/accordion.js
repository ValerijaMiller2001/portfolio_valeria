function accordion() {
    //FAQ 

    const accordionItems = document.querySelectorAll('.questions_wrapper_item');

    accordionItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const accordionContent = this.querySelector('.questions_wrapper_item-descr');
            const accordionArrow = this.querySelector('.questions_wrapper_item_header-arrow');

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
        const accordionContents = document.querySelectorAll('.questions_wrapper_item-descr');
        const accordionArrows = document.querySelectorAll('.questions_wrapper_item_header-arrow');

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