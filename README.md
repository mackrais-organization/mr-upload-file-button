# mr-upload-file-button

## Content
- [Installation](#installation)
- [Features](#features)
- [How to use](#how-to-use)
- **Documentation**
  - [Attributes](docs/attributes.md)
  - [Events](docs/events.md)
  - [Functions](docs/functions.md)
- [Demos (examples)]()
- [License](LICENSE.md)

## Installation

Plugin to display bootstrap popup alert. Used default bootstrap class 'bb-alert'.

The preferred way to install this extension is through [bower](https://bower.io/).

Either run

```
bower install mr-fu-bootstrap-bb-alert
```

to the require section of your `bower.json` file.

## Features
- Drag and Drop area.
- Easily customize to fit your needs.
- You can use both a separate widget or part of the form.
- Previews to images, (extensions to file)
- Own gallery to view images
- Support multi language
- Sortable thumbnail
- Remove thumbnail
- Ajax upload
- Mobile device gallery support. Needed [JqueryMobile](https://jquerymobile.com/)


## How to use

```js
    $('your_selector').mrUploadFileButton({});

```

Or use html data-attributes

```html 
    <input type="file" data-mr-upload-file-button="true" multiple />
```


## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
