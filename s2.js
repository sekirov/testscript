$(document).ready(function() {
    var HORIZONTAL_MENU_BUTTONS_SELECTOR = '.primary-nav';

    var newMenuSection = `
        <li class="nav-item nav-item-new-section inlb ">
            <a class="nav-item-url" href="#new-section"> New Section</a>
        </li>
    `;

    $(HORIZONTAL_MENU_BUTTONS_SELECTOR).append(newMenuSection);
});
