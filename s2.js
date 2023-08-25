// Wrap the code in a ready function to ensure it executes when the DOM is fully loaded
$(document).ready(function() {
    // Selector for the horizontal menu container
    var HORIZONTAL_MENU_CONTAINER_SELECTOR = '.header-container nav .primary-nav';

    // HTML code for the new menu section
    var newMenuSection = `
        <li class="nav-item nav-item-new-section inlb ">
            <a class="nav-item-url" href="#new-section"> New Section</a>
        </li>
    `;

    // Add the new menu section to the horizontal menu
    $(HORIZONTAL_MENU_CONTAINER_SELECTOR).append(newMenuSection);
});
