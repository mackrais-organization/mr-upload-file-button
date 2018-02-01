
# Attribute `translations`

Base info current attribute 

| attribute               | default                       | type            |
| -----------             | --------------------          |---------------- |
| translations            | [here](#default-translations) | integer         |

## Content
- [Description](#description)
- [How to use](#how-to-use)
- [Default translations](#default-translations)
- [Demo](#demo)
- [License](#license)

## Description
This attribute is intended to translations. You can create custom translates or change default translations.

**Note:** If you will be create a new translation, please read about attribute [language](). See [demo custom translation]()
and [demo change default translation]

## How to use
```js
    // change default translation en
    $('your_selector').mrUploadFileButton({
      'translations': {
        'en': {
          'notSelectedFile': 'No file(s) selected. Please, select files'
        }
    });
    
    // change multi default translations
    $('your_selector').mrUploadFileButton({
      'translations': {
        'en': {
          'notSelectedFile': 'No file(s) selected. Please, select files'
        },
        'uk': {
          'notSelectedFile': 'Не вибрано жодного файлу. Будь ласка, виберіть файли'
        },
        'ru': {
          'notSelectedFile': 'Не выбрано файлов. Пожалуйста, выберите файлы'
        },
    });
    
    // add cusom translate italy
    $('your_selector').mrUploadFileButton({
      'language': 'it',
      'translations': {
        'it': {
          'notSelectedFile': 'Nessun file selezionato. Per favore, seleziona i file',
          //... other translations
        }
    });
```

## Default translations
```js
   'en': {
        'notSelectedFile': 'No file(s) selected.',
        'titleBtn': 'Select file ...',
        'textSelected': 'Selected {number} file(s)',
        'uploadBtnText': 'Upload',
        'msgMaxUploadFiles': 'Maximum number of file(s): {number} !',
        'msgMaxUploadSize': 'Maximum size of file: {number} MB !',
        'msgErrorEncoding': 'Encoding error file {name}!',
        'msgErrorNotFoundFile': 'File {name} not found!',
        'msgErrorReadable': 'File {name} could not be read!',
        'msgErrorSecurity': 'Security issue with file {name}!',
        'msgErrorUnknown': 'An error occurred with file {name}!',
        'msgSuccessfulUploaded': 'File(s) uploaded successfully!',
        'msgNotAllowedFormatType': 'The file type {type} is not supported.',
        'dragAreaText': 'Drag and Drop file(s)',
        'unknownFileFormat': 'Unknown file format'
      },
      'uk': {
        'notSelectedFile': 'Не вибрано жодного файлу(ів).',
        'titleBtn': 'Вибрати файл ...',
        'textSelected': 'Вибрано {number} файл(и)(ів)',
        'uploadBtnText': 'Завантажити',
        'msgMaxUploadFiles': 'Максимальна кількість файлів для завантаження: {number} !',
        'msgMaxUploadSize': 'Максимальний розмір файлу для завантаження: {number} MB !',
        'msgErrorEncoding': 'Помилка кодування файлу {name}.',
        'msgErrorNotFoundFile': 'Файл {name} не знайдено',
        'msgErrorReadable': 'Файл {name} неможливо прочитати!',
        'msgErrorSecurity': 'Питання безпеки з файлом {name}!',
        'msgErrorUnknown': 'Виникла помилка з файлом {name}!',
        'msgSuccessfulUploaded': 'Файл(и) успішно завантажено!',
        'msgNotAllowedFormatType': 'Тип файлу {type} не підтримується.',
        'dragAreaText': 'Область для переміщення і завантаження файлів',
        'unknownFileFormat': 'Невідомий формат файлу'
      },
      'ru': {
        'NotSelectedFile': 'Файла(ов) не выбрано.',
        'TitleBtn': 'Выбрать файл ...',
        'TextSelected': 'Выбрано {number} файл(ы)(ов)',
        'UploadBtnText': 'Загрузить',
        'MsgMaxUploadFiles': 'Максимальное количество файлов для загрузки: {number}!',
        'MsgMaxUploadSize': 'Максимальный размер файла для загрузки: {number} MB!',
        'MsgErrorEncoding': 'Ошибка кодирования файла {name}.',
        'MsgErrorNotFoundFile': 'Файл {name} Не найдено',
        'MsgErrorReadable': 'Файл {name} невозможно прочесть!',
        'MsgErrorSecurity': 'Вопрос безопасности с файлом {name}!',
        'MsgErrorUnknown': 'Возникла ошибка с файлом {name}!',
        'MsgSuccessfulUploaded': 'Файл(ы) успешно загружено!',
        'MsgNotAllowedFormatType': 'Тип файла {type} не поддерживается.',
        'DragAreaText': 'Область для перемещения и загрузки файлов',
        'UnknownFileFormat': 'Неизвестный формат файла'
      }
```

## Demo
[link to demo]()

## License

**mr-upload-file-button** is released under the BS