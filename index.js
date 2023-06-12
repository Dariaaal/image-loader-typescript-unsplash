"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api/api");
const form = document.querySelector('.search-form');
form.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.searchQuery.value.trim();
    (0, api_1.getImages)(query).then(items => {
        console.log(items);
    });
}
;
//# sourceMappingURL=index.js.map