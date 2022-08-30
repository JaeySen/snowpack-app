"use strict";
exports.__esModule = true;
var nanoid_1 = require("nanoid");
var list = document.querySelector("#list");
var form = document.querySelector("#new-task-form");
var input = document.querySelector("#new-task-title");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    var newTask = {
        id: (0, nanoid_1.nanoid)(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
    addListItem(newTask);
    input.value = "";
});
function addListItem(task) {
    var item = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    label.append(checkbox, task.title);
    item.append(label);
    list === null || list === void 0 ? void 0 : list.append(item);
}
