# Userscript Library Documentation

## How to use:
**Materials for getting started:**
- Code Editor (Visual Studio Code, Atom, Notepad++, etc)
- A Code Injector (Tampermonkey, etc)
- Some JavaScript Experience
- Some HTML Experience
- *Some CSS Experience (Optional)*

For this tutorial, i'll be using Visual Studio Code.

**1. Open up VS Code**

**2. Create a new project or JS file** 

Hitting *Ctrl + N* creates a new file.

**3. Getting the library**
```js
import Userscript from 'https://erts57.github.io/userscript/lib/library.js';

const creationArea = document.createElement("div");
document.body.appendChild(creationArea);

const userscript = new Userscript(creationArea);

userscript.createCreationArea();
```
Putting this code will get the library from Erts57 (my) github page so you can use the library without having to download it. If you do download the library to your desktop for some reason you can put the path to the library.js file instead of the url to my github page.
```js
import Userscript from '*path to library.js*';
```

**4. Making a window**
```js
userscript.newWindow(param1, param2, param3, param4);
```
This code adds a new draggable window.
- **param1** - The id of the window
- **param2** - The header of the window
- **param3** - x position of the window *(Only positive values)*
- **param4** - y position of the window *(Only positive values)*
```js
userscript.newWindow("window", "Window", 0, 0);
```
I would recommend using id names that are not very basic like *window*.

**5. Adding text**
```js
userscript.addConent({
	type: "text", // This parameter is optional when adding text
	name: "text",
	id: "window",
	content: "This is a sentence."
});
```
When adding text you don't have to put the type parameter.
- **type** - the type of content that is being added
- **name** - the id for the content
- **id** - the id of the window the content will be added to
- **content** - the inside text of the content

**6. Adding more content**

Adding a button:
```js
userscript.addContent({
	type: "button",
	name: "button",
	id: "window",
	content: "CLICK ME",
	callback: "alert" // TODO Change this to not be a string
});
```
If a callback is not provided, the button will do nothing.

Adding a slider:
```js
userscript.addContent({
	type:  "slider",
	name:  "slider",
	id:  "window",
	defaultValue:  5, // This parameter is optional if min and max is set
	min:  0,
	max:  10
});
```
Adding a space:
```js
userscript.addContent({
	type: "space",
	name: "space",
	id: "window"
});
```
Extra parameters:
- **callback** - function to be run for a button when it is clicked
- **defaultValue** - default value for a slider
- **min** - minimum value for a slider
- **max** - maximum value for a slider

**7. Custom Formatting *(CSS)***
```js
userscript.reloadStyles("*url to stylesheet.css*");
```
One way to add custom css for the userscript elements is to host them on a website like github pages. Once this runs it will inject this to override the default styles.

**8. Injecting**

Copying the code and pasting it into an extension like Tampermonkey is so much easier to inject code.

**9. Modifying Code**
```js
userscript.addContent({
	type: "button",
	name: "change-color",
	id: "window",
	content: "RED to YELLOW",
	callback: "redToYellow"
});

function redToYellow() {
	document.getElementById("red").style.backgroundColor = "yellow";
}
```
This set of code makes a button change the style of a button using the id of *red* to the color yellow.


Some example scripts can be found in the [example folder](https://github.com/erts57/userscript/example).