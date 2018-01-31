
# Attribute `previewImageUrls`

Base info current attribute 

| attribute         | default                | type            |
| -----------       | --------------------   |---------------- |
| previewImageUrls  | []                     | array          |

## Description
This attribute is intended to displaying custom preview item. 

**Note:** This attribute will only work if the [`preview`](preview.md) attribute is enabled

Structure one object in array must have next items:
- fileName  - name file for example (testimage.png)
- isImage   - if file is image  then value `true` else `false`
- url       - url to file
- id        - identification for send when user delete preview see [request data](docs/attributes/ajax-options.md#request-data)

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'preview': true, // enabled preview item area
      'previewImageUrls':[
        {
          'fileName': 'apple-7.jpg',
          'isImage': true,
          'url': 'https://i2.wp.com/www.thebrandbite.com/wp-content/media/2015/07/apple-7.jpg',
          'id':1
        },
        {
          'fileName': '2929036588_8f7a7490e1_b.jp',
          'isImage': true,
          'url': 'https://c1.staticflickr.com/4/3011/2929036588_8f7a7490e1_b.jpg',
          'id':2
        },
        {
          'fileName': 'Eloquent_JavaScript.pdf',
          'isImage': false,
          'url': 'http://eloquentjavascript.net/Eloquent_JavaScript.pdf',
          'id':3
        }
      ]
    });
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.