
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
- url - see attribute [uploadUrl](btn-class-title.md)
- data - default format data see [Request](#request-data)
- type - **only POST**
- contentType - **false**
- processData - **false**
- beforeSend - see event [mr:fileUpload:ajaxBeforeSend]()
- success - see event [mr:fileUpload:ajaxDone]()
- error - see event [mr:fileUpload:ajaxError]()
- complete - see event [mr:fileUpload:ajaxComplete]()

## Request data
Format request post data, where 
- requestParamDeletedIDs - name from options see [requestParamDeletedIDs]()
- requestParamSortingData - name from options see [requestParamSortingData]()

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
- requestParamFile - name from options see [requestParamFile]()

```
  [requestParamFile] => Array
        (
          // array data info file
        )

```

## Response dat
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
Also you can create custom response used event [mr:fileUpload:ajaxDone]() see [demo custom response]()

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
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](LICENSE.md) for details.
