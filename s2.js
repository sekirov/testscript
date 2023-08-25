$(function() {
    // Selector for the horizontal menu buttons
    var HORIZONTAL_MENU_BUTTONS_SELECTOR = '.global-actions > .global-actions-list:last-child';

    // HTML code for the new menu section
    var newMenuSection = `
        <li class="global-action-item inlb force-login" title="New Section">
            <a class="nav-item-url" href="#new-section">
                <i class="icon fi-star"></i>
                New Section
            </a>
        </li>
    `;

    // Add the new menu section to the horizontal menu buttons
    $(HORIZONTAL_MENU_BUTTONS_SELECTOR).append(newMenuSection);
});
