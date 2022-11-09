import Model from './model.js';
import View from './view.js';
//Para que se ejecute despues de haber renderizado todo el html
document.addEventListener("DOMContentLoaded", () => {
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);
});


