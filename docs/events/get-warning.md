
# Event `mr:fileUpload:getWarning`

## Parameters

| name            | type             |
| -----------     | ---------------- |
| code            | integer          |
| message         | string           |

## Description

This event called when plugin get warning. With this event, you can make custom warning messages.

## Description parameters
- **code** - code error can be how http code error and custom  code error
  - 1 - User tries to upload files more maximum total limit
  - 2 - User tries to upload files more maximum size  limit 
- **message** - text with message warning

## How to use

```js
    $('your_selector').on('mr:fileUpload:getWarning',function(code, message, typeError){
         // ... your code 
    })
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BSD 3-Clause License. See the bundled [`LICENSE.md`](/LICENSE.md) for details.
