import Userscript from './../lib/library.js';

const creationArea = document.createElement("div");
document.body.appendChild(creationArea);

const helper = new Userscript(creationArea);

helper.createCreationArea();

helper.newWindow("window", "Window", 0, 0);

helper.addContent({
    name: "text",
    id: "window",
    content: "This is a sentence."
});
helper.addContent({
    type: "button",
    name: "button",
    id: "window",
    content: "CLICK ME"
});
helper.addContent({
    type: "slider",
    name: "slider",
    id: "window",
    defaultValue: 5,
    min: 0,
    max: 10
});

helper.addContent({type: "space", name: "space", id: "window"});

helper.addContent({
    name: "text",
    id: "window",
    content: "This is another sentence."
});
helper.addContent({
    type: "button",
    name: "button",
    id: "window",
    content: "CLICK ME ALSO"
});
helper.addContent({
    type: "slider",
    name: "slider",
    id: "window",
    defaultValue: 2,
    min: 1,
    max: 5
});

helper.start();
