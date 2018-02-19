
# Attribute `ajaxOptions`

Base info current attribute 

| attribute     | default              | type           |
| -----------   | -------------------- |----------------|
| ajaxOptions   | {}                   | objet          |

**Note:** This attribute can not be used in the data attributes html.

## Content
- [Description](#description)
- [Request data](#request-data)
- [Response data](#response-data)
- [How to use](#how-to-use)
- [Demo](#demo)
- [License](#license)

## Description

This attribute is intended to specify the parameters jquery ajax request. 
You can see a list of all available options [here](http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings). 
But there are also exceptions:
- url - see attribute [uploadUrl](upload-url.md)
- data - default format data see [Request](#request-data)
- type - **only POST**
- contentType - **false**
- processData - **false**
- beforeSend - see event [mr:fileUpload:ajaxBeforeSend](/docs/events/ajax-before-send.md)
- success - see event [mr:fileUpload:ajaxDone](/docs/events/ajax-done.md)
- error - see event [mr:fileUpload:ajaxError](/docs/events/ajax-error.md)
- complete - see event [mr:fileUpload:ajaxComplete](/docs/events/ajax-complete.md)

## Request data
Format request post data, where 
- requestParamDeletedIDs - name from options see [requestParamDeletedIDs](request-param-deleted-ids.md)
- requestParamSortingData - name from options see [requestParamSortingData](request-param-sorting-data.md)

```
  [requestParamDeletedIDs] => 2
    [requestParamSortingData] => Array
        (
            [0] => Array
                (
                    [id] => 1
                    [index] => 0
                    [sortNumber] => 1
                    [isNewFile] => false
                    [isImage] => true
                )

            [1] => Array
                (
                    [id] => 3
                    [index] => 1
                    [sortNumber] => 2
                    [isNewFile] => false
                    [isImage] => false
                )

            [2] => Array
                (
                    [id] => null
                    [index] => 2
                    [sortNumber] => 3
                    [isNewFile] => true
                    [isImage] => false
                )

        )
```

Format request file data , where 
- requestParamFiles - name from options see [requestParamSortingData](request-param-files.md)

```
  [requestParamFile] => Array
        (
          // array data info file
        )

```

## Response data
Default response data include the following elements: 
- Successful request
```
{
  'status': 'ok',
  'message': 'File(s) uploaded successfully!',
}
```
- Failed request
```
{
  'status': 'error',
  'message': 'Server error!',
}
```
Also you can create custom response used event [mr:fileUpload:ajaxDone](/docs/events/ajax-done.md) 

## How to use
```js
    $('your_selector').mrUploadFileButton({
      'ajaxOptions': {
        'async': false, // enable synchronous request
        'cache': false  // disable cahce request
        // .... other see http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings
      }
    });
```

## Demo
[link to demo](https://mackrais.github.io/mr-upload-file-button/#use_in_custom_form_example)

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
