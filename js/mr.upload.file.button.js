/**
 * Created by PhpStorm.
 * @author: MackRais
 * @site: http://mackrais.com
 * @link https://github.com/mackrais/mr-upload-file-button
 * @email: mackrais@gmail.com
 */

'use strict';

if (typeof mrDebugMode === 'undefined') {
  var mrDebugMode = false;
}

/**
 * @TODO create docs for plugin
 * @TODO fix all translation check exist translate
 *
 * trigger events
 * 1 mr:fileUpload:getError (code, message, typeError)
 * 2 mr:fileUpload:getWarning (code,message)
 * 3 mr:fileUpload:destroy
 * 4 mr:fileUpload:refresh
 * 5 mr:fileUpload:ajaxBeforeSend (jqXHR, PlainObject)
 * 6 mr:fileUpload:ajaxDone (data, textStatus, jqXHR )
 * 7 mr:fileUpload:ajaxError (jqXHR, textStatus, errorThrown)
 * 8 mr:fileUpload:ajaxComplete (jqXHR, textStatus)
 * 9 mr:fileUpload:beforeDeletePreview ($previewBlock, itemID, title, indexBlock, files )
 */
(function ($) {
  $.fn.mrUploadFileButton = function (params) {

    /**
     * Array with files
     * @type {Array}
     */
    var mFiles = [];

    /**
     * Array with ids deleted files
     * @type {Array}
     */
    var deletedFileIDs = [];

    /**
     * Array with ids deleted files
     * @type {Array}
     */
    var sortData = [];

    if (mrDebugMode) {
      if ($(this).length <= 0) {
        console.log('Undefined "' + $(this).selector + '" options!');
        return false;
      }
    }
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      isMobile = true;
    }

    var progressPercent = 0;

    /**
     *
     * @type {{progressNode: string, percentNode: string, progressBlockNode: string, preloader: string}}
     */
    var selectors = {
      'progressNode': '.mr-fu-total-progress',
      'percentNode': '.fs_total_percent',
      'progressBlockNode': '.fs_total_progress_block',
      'preloader': '.mr-fu-loader'
    };

    /**
     *
     * @type {{ajaxOptions: {}, allowedTypes: string, btnClass: string, btnClassTitle: string, disableNotification: boolean, disablePreloader: boolean, disableProgressBar: boolean, disableSortable: boolean, disabledDeletePreview: boolean, disabledDragArea: boolean, disabledGallery: boolean, language: string, maxFileSize: number, maxFilesUpload: number, preview: string, previewImageUrls: Array, requestParamDeletedIDs: string, requestParamFiles: string, requestParamSortingData: string, timeNotification: number, translations: {}, uploadBtnCssClass: string, uploadUrl: string}}
     */
    var defaultOptions = {
      'ajaxOptions': {},
      'allowedTypes': '.*',
      'btnClass': 'mr-fu-file-style-btn',
      'btnClassTitle': 'mr-fu-file-style-title',
      'disableNotification': false,
      'disablePreloader': false,
      'disableProgressBar': false,
      'disableSortable': false,
      'disabledDeletePreview': false,
      'disabledDragArea': false,
      'disabledGallery': false,
      'language': 'en',
      'maxFileSize': 1024,
      'maxFilesUpload': 30,
      'preview': 'false',
      'previewImageUrls': [],
      'requestParamDeletedIds': 'deletedFileIDs',
      'requestParamFiles': 'file',
      'requestParamSortingData': 'sortingData',
      'timeNotification': 5000,
      'translations': {},
      'uploadBtnCssClass': '',
      'uploadUrl': ''
    };

    /**
     *
     * @type {{en: {notSelectedFile: string, titleBtn: string, textSelected: string, uploadBtnText: string, msgMaxUploadFiles: string, msgMaxUploadSize: string, msgErrorEncoding: string, msgErrorNotFoundFile: string, msgErrorReadable: string, msgErrorSecurity: string, msgErrorUnknown: string, msgSuccessfulUploaded: string, msgNotAllowedFormatType: string, dragAreaText: string}}}
     */
    var translations = {
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
        'notSelectedFile': 'Файла(ов) не выбрано.',
        'titleBtn': 'Выбрать файл ...',
        'textSelected': 'Выбрано {number} файл(ы)(ов)',
        'uploadBtnText': 'Загрузить',
        'msgMaxUploadFiles': 'Максимальное количество файлов для загрузки: {number}!',
        'msgMaxUploadSize': 'Максимальный размер файла для загрузки: {number} MB!',
        'msgErrorEncoding': 'Ошибка кодирования файла {name}.',
        'msgErrorNotFoundFile': 'Файл {name} Не найдено',
        'msgErrorReadable': 'Файл {name} невозможно прочесть!',
        'msgErrorSecurity': 'Вопрос безопасности с файлом {name}!',
        'msgErrorUnknown': 'Возникла ошибка с файлом {name}!',
        'msgSuccessfulUploaded': 'Файл(ы) успешно загружено!',
        'msgNotAllowedFormatType': 'Тип файла {type} не поддерживается.',
        'dragAreaText': 'Область для перемещения и загрузки файлов',
        'unknownFileFormat': 'Неизвестный формат файла'
      }
    };

    var htmlDataAttributes = $(this).data();
    preapareDataAttibutes(htmlDataAttributes);
    var options = $.extend({}, defaultOptions, params, htmlDataAttributes);

    if (typeof options.translations === 'object') {
      translations = $.extend(true, translations, options.translations);
    } else if (mrDebugMode) {
      console.log('Option "translations" must be object!');
      return false;
    }

    // @TODO need check exist translation default language
    translations = translations[options.language] ? translations[options.language] : translations['en'];

    options.baseInput = $(this);
    options.baseInput.hide();

    options.baseBlock = $('<div></div>');
    options.titleBlock = $('<span></span>');
    options.btn = $('<span></span>');
    options.dragAreaHeader = $('<h2></h2>');

    options.dragAreaHeader.html(translations.dragAreaText);
    options.dragAreaHeader.addClass('mr-fu-drag-and-drop-title');

    options.titleBlock.addClass(options.btnClassTitle);
    options.titleBlock.text(translations.notSelectedFile);

    options.btn.addClass(options.btnClass);
    options.btn.text(translations.titleBtn);

    options.baseBlock.addClass('mr-fu-file-style-base');

    if (!options.disabledDragArea) {
      options.baseBlock.addClass('mr-fu-drag-area');
      options.baseBlock.append(options.dragAreaHeader);
    }

    options.baseBlock.append(options.btn);
    options.baseBlock.append(options.titleBlock);

    options.baseBlock.insertBefore(options.baseInput);
    options.baseBlock.insertBefore(options.baseInput);

    var $area = options.baseInput.siblings('.mr-fu-preview-area').length
      ? $(input).siblings('.mr-fu-preview-area')
      : $('<div class="mr-fu-preview-area"></div>');

    $area.prepend(templatePreloader());

    $area.insertBefore(options.baseInput);
    $area.append('<div class="mr-fu-clear"></div>');
    $('<div class="mr-fu-clear"></div>').insertAfter(options.baseInput);

    $('<div class="mr-fu-alert"></div>').insertBefore($area);
    options.notif_block = options.baseBlock.siblings('.mr-fu-alert');

    $(templateProgress()).insertAfter(options.titleBlock);

    if (!options.disabledDragArea) {
      initDragAndDrop();
    }

    // Generate all items preview urls
    generateTemplatePreviewItem();

    options.baseInput
      .off('change.mr:fileUpload:inputChange')
      .on('change.mr:fileUpload:inputChange', function (e) {
        progressPercent = 0;
        if (options.preview == false) {
          mFiles = [];
        }
        prepareUploadFiles(e.target.files);
      });

    if (options.baseInput.length > 1) {
      options.btn.parent().find('.' + options.btn.attr('class') + ':eq(0)').each(function (i, e) {
        $(e).click(function () {
          $(this).siblings('input:file').click();
        });
      });
    } else {
      options.btn
        .off('click.triggerFileChange')
        .on('click.triggerFileChange', function () {
          options.baseInput.click();
        });
    }

    /**
     * Full destroy plugin
     */
    options.baseInput
      .off('mr:fileUpload:destroy')
      .on('mr:fileUpload:destroy', function (e) {
        var $this = $(this);
        if ($this.siblings('.mr-fu-file-style-base').length) {
          $this.siblings('.mr-fu-file-style-base').remove();
        }
        if ($this.siblings('.mr-fu-alert').length) {
          $this.siblings('.mr-fu-alert').remove();
        }
        if ($this.siblings('.mr-fu-preview-area').length) {
          $this.siblings('.mr-fu-preview-area').remove();
        }
        if ($this.siblings('.mr-fu-clear').length) {
          $this.siblings('.mr-fu-clear').remove();
        }
        $this.attr('style', $this.attr('style').replace('display: none;', ''));
        $this.off('mr:fileUpload:getError');
        $this.off('mr:fileUpload:getWarning');
        $this.off('mr:fileUpload:destroy');
        $this.off('mr:fileUpload:refresh');
        $this.off('change.mr:fileUpload:inputChange');
        $this.off('mr:fileUpload:ajaxBeforeSend');
        $this.off('mr:fileUpload:ajaxDone');
        $this.off('mr:fileUpload:ajaxError');
        $this.off('mr:fileUpload:ajaxComplete');
      });

    /**
     * Refresh plugin
     */
    options.baseInput
      .off('mr:fileUpload:refresh')
      .on('mr:fileUpload:refresh', function (e) {
        $(this).trigger('mr:fileUpload:destroy');
        $(this).mrUploadFileButton(params);
      });

    /**
     * Deleted attribute object type
     * @param data
     */
    function preapareDataAttibutes (data) {
      if (data.ajaxOptions) {
        delete data.ajaxOptions;
      }
      if (data.previewImageUrls) {
        delete data.previewImageUrls;
      }
      if (data.translations) {
        delete data.translations;
      }
    }

    /**
     * Event run when file start load
     * @param e
     */
    function onLoadFileStart (e) {
      if (!options.disableProgressBar) {
        options.baseBlock.find(selectors.progressBlockNode).show();
      }
    }

    /**
     * When load files
     * @param file
     * @param index
     * @param filesList
     * @returns {Function}
     */
    function onLoadFile (file, index, filesList) {
      var $img = $('<img />');
      var $div = $('<div></div>');
      var $remove = $('<span></span>');
      var $preview = $('<span></span>');
      return function (e) {

        $remove.addClass('mr-fu-preview-remove-img');
        $remove.attr('data-index', index);
        $remove.attr('data-file', encodeURI(file.name));

        $preview.addClass('mr-fu-view-preview-btn');

        var $dragIcon = $('<span class="mr-fu-handle" ></span>');
        $dragIcon.attr('data-index', index);
        $dragIcon.attr('data-file', encodeURI(file.name));

        if (!options.disabledDeletePreview) {
          $div.empty().append($remove);
        }

        if (file.type.match('image.*')) {
          if (!options.disabledGallery) {
            $div.append($preview);
          }
          if (!options.disableSortable && !isMobile) {
            $div.append($dragIcon);
          }
          var blob = b64toBlob(e.target.result, file.type);
          var blobUrl = URL.createObjectURL(blob);
          $img.addClass('mr-fu-preview-img').attr('src', blobUrl);
          $img.attr({ 'title': encodeURI(file.name), 'alt': encodeURI(file.name) });
          $div.addClass('mr-fu-preview-block');
          $div.append($img);
        } else {

          if (!options.disableSortable && !isMobile) {
            $div.append($dragIcon);
          }
          $div.addClass('mr-fu-preview-block');
          $div.append($dragIcon);
          var typeSegments = file.name.split('.');
          if (typeSegments.length) {
            $div.append('<input ' +
              'class="mr-fu-preview-file mr-fu-file-block" ' +
              'title="' + typeSegments[typeSegments.length - 1] + '" value="' + typeSegments[typeSegments.length - 1] + '" readonly />');
          } else {
            $div.append('<input ' +
              'class="mr-fu-preview-file mr-fu-file-block" ' +
              'title="' + translations.unknownFileFormat + '" value="' + translations.unknownFileFormat + '" readonly />');
          }
        }
        // // Render thumbnail.
        var cssClass = !file.type.match('image.*') ? 'mr-fu-file-block' : '';
        $area.append('<div class="mr-fu-preview-block ' + cssClass + '">' + $div.html() + '</div>');
        if ((index + 1) === filesList.length && !options.disableSortable) {
          setTimeout(function () {
            initSortable();
          }, 500);
        }
      };
    }

    /**
     * Generate html template preview images by url
     */
    function generateTemplatePreviewItem () {
      if (typeof options.previewImageUrls === 'object' && options.previewImageUrls.length) {
        $.each(options.previewImageUrls, function (index, item) {
          var $img = $('<img />');
          var $div = $('<div></div>');
          var $remove = $('<span></span>');
          var $preview = $('<span></span>');

          $remove.addClass('mr-fu-preview-remove-img');
          $remove.attr('data-index', index);
          $remove.attr('data-file', encodeURI(item.fileName));

          $preview.addClass('mr-fu-view-preview-btn');

          var $dragIcon = $('<span class="mr-fu-handle" ></span>');
          $dragIcon.attr('data-index', index);
          $dragIcon.attr('data-file', encodeURI(item.fileName || ''));

          $remove.attr('data-item-id', item.id);

          if (!options.disabledDeletePreview) {
            $div.empty().append($remove);
          }

          if (!options.disabledGallery && item.isImage) {
            $div.append($preview);
          }

          if (!options.disableSortable && !isMobile) {
            $div.append($dragIcon);
          }

          if (item.url && item.isImage) {
            $img.addClass('mr-fu-preview-img').attr('src', item.url);
            $img.attr({ 'title': encodeURI(item.fileName), 'alt': encodeURI(item.fileName), 'data-item-id': item.id });
            $div.addClass('mr-fu-preview-block');
            $div.append($img);
          } else if (item.fileName) {
            $div.addClass('mr-fu-preview-block');
            var typeSegments = item.fileName.split('.');
            if (typeSegments.length) {
              $div.append('<input ' +
                'class="mr-fu-preview-file mr-fu-file-block" ' +
                'data-item-id="' + item.id + '" ' +
                'title="' + typeSegments[typeSegments.length - 1] + '" value="' + typeSegments[typeSegments.length - 1] + '" readonly />');
            } else {
              $div.append('<div class="mr-fu-preview-file mr-fu-file-block " data-item-id="' + item.id + '" title="' + translations.unknownFileFormat + '">?</div>');
            }
          }
          // // Render thumbnail.
          $area.append('<div class="mr-fu-preview-block" >' + $div.html() + '</div>');
        });
      }

      if (!options.disableSortable) {
        initSortable();
      }
    }

    /**
     *
     * @param event
     */
    function onProgressLoadFile (event) {
      if (event.lengthComputable) {
        progressPercent = parseInt(((event.loaded / event.total) * 100), 10);
        options.baseBlock.find(selectors.progressNode).attr('max', event.total);
        options.baseBlock.find(selectors.progressNode).val(event.loaded);
        options.baseBlock.find(selectors.percentNode).text(progressPercent + '%');
      }
    }

    /**
     * Error code:
     * @see https://developer.mozilla.org/uk/docs/Web/API/FileError
     * @see https://www.dartdocs.org/documentation/controls_and_panels/0.8.0/controls_and_panels/FileError/ABORT_ERR-constant.html
     * @param file
     * @param index
     * @returns {Function}
     */
    function onLoadEnd (file, index) {
      return function (e) {
        var error = e.target.error;
        var message = translations.msgErrorUnknown || 'An error occurred with file {name}';
        if (error !== null) {
          switch (error.code) {
            case error.ENCODING_ERR:
              message = translations.msgErrorEncoding || 'Encoding error file {name}!';
              break;
            case error.NOT_FOUND_ERR:
              message = translations.msgErrorNotFoundFile || 'File {name} not found!';
              break;
            case error.NOT_READABLE_ERR:
              message = translations.msgErrorReadable || 'File {name} could not be read!';
              break;
            case error.SECURITY_ERR:
              message = translations.msgErrorSecurity || 'Security issue with file {name}!';
              break;
          }
          if (!options.disableNotification) {
            msgError(message.replace('{name}', file.name));
          }
          options
            .baseInput
            .trigger('mr:fileUpload:getError', [error.code, message.replace('{name}', file.name), 'clientLoad']);
        } else {
          options.baseBlock.find(selectors.progressNode).attr('max', 1);
          options.baseBlock.find(selectors.progressNode).val(1);
          progressPercent = 100;
          options.baseBlock.find(selectors.percentNode).text(progressPercent + '%');
          setTimeout(function () {
            options.baseBlock.find(selectors.progressBlockNode).hide();
          }, 500);
          prepareRequestSortingData();
        }
      };
    }

    /**
     * Read file
     * @param files
     */
    function prepareUploadFiles (files) {
      if (files && files) {
        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

          if (!validateType(f.type)) {
            msgWarning(translations.msgNotAllowedFormatType.replace('{type}', f.type));
            return;
          }

          if (mFiles.length + 1 > options.maxFilesUpload) {
            if (!options.disableNotification) {
              msgWarning(translations.msgMaxUploadFiles.replace('{number}', options.maxFilesUpload));
            }
            options
              .baseInput
              .trigger('mr:fileUpload:getWarning', [1, translations.msgMaxUploadFiles.replace('{number}', options.maxFilesUpload)]);
            return false;
          }

          var sizeInMB = (f.size / (1024 * 1024)).toFixed(2);

          if (sizeInMB > options.maxFileSize) {
            if (!options.disableNotification) {
              msgWarning(translations.msgMaxUploadSize.replace('{number}', options.maxFileSize));
            }
            options
              .baseInput
              .trigger('mr:fileUpload:getWarning', [2, translations.msgMaxUploadSize.replace('{number}', options.maxFileSize)]);
            return false;
          }
          mFiles.push(f);
          if (!options.baseBlock.find('.mr-fu-upload-btn').length) {
            options.baseBlock.append('<button class="mr-fu-upload-btn ' + options.uploadBtnCssClass + '">' + (translations.uploadBtnText || "") + '</button>');
          }
          // Set default string
          options.titleBlock.text(
            translations.textSelected
              ? translations.textSelected.replace('{number}', mFiles.length)
              : ''
          );
          var reader = new FileReader();
          reader.onloadstart = onLoadFileStart;
          reader.onprogress = function (ev) { onProgressLoadFile(ev); };
          if (options.preview == true) {
            reader.onload = (onLoadFile)(f, i, files);
          }
          reader.onloadend = (onLoadEnd)(f, i);
          reader.readAsDataURL(f);

        }
      }
    }

    /**
     * REMOVE PREVIEW
     */
    options.baseBlock.siblings('.mr-fu-preview-area')
      .off('click.remove.preview')
      .on('click.remove.preview', '.mr-fu-preview-remove-img', function (e) {
        e.preventDefault();
        var $this = $(this);
        var title = decodeURI($this.data('file'));
        options
          .baseInput
          .trigger('mr:fileUpload:beforeDeletePreview', [
            $this.parents('.mr-fu-preview-block:eq(0)'),
            $this.data('item-id'),
            title,
            $this.data('index'),
            mFiles
          ]);
        if ($this.data('item-id')) {
          deletedFileIDs.push($this.data('item-id'));
        }
        $this.parents('.mr-fu-preview-block:eq(0)').remove();
        $.each(mFiles, function (i, f) {
          if (f && f.name == title) {
            mFiles.splice(i, 1);
          }
        });
        if (!mFiles.length) {
          options.baseBlock.find('.mr-fu-upload-btn').remove();
          options.titleBlock.text(translations.notSelectedFile);
        } else {
          options.titleBlock.text(translations.textSelected.replace('{number}', mFiles.length));
        }
      });

    /**
     * SHOW PREVIEW WINDOW
     */
    options.baseBlock.siblings('.mr-fu-preview-area')
      .off('click.view.preview')
      .on('click.view.preview', '.mr-fu-view-preview-btn', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($('body').find('.mr-fu-bg-view-preview').length) {
          $('body').find('.mr-fu-bg-view-preview').remove();
        }
        $('body').append(templatePreviewWindow($this));
      });

    /**
     * Upload Files
     */
    options.baseBlock
      .off('click.upload.mr_style')
      .on('click.upload.mr_style', '.mr-fu-upload-btn', function (e) {
        e.preventDefault();
        if (mFiles.length) {
          prepareRequestSortingData();
          var ajaxParams = {
            'url': options.uploadUrl,
            'data': getRequestData(),
            'type': 'POST',
            'contentType': false,
            'processData': false,
            'beforeSend': function (jqXHR, PlainObject) {
              if (!options.disablePreloader) {
                options.baseBlock.siblings('.mr-fu-preview-area').find(selectors.preloader).show();
              }
              options
                .baseInput
                .trigger('mr:fileUpload:ajaxBeforeSend', [jqXHR, PlainObject]);
            },
            'success': function (data, textStatus, jqXHR) {
              if (data) {
                if (data.status && data.status === 'ok') {
                  if (!options.disableNotification) {
                    msgSuccess(data.message ? data.message : (translations.msgSuccessfulUploaded || 'File(s) uploaded successfully!'));
                  }
                }
                if (data.status && data.status === 'error') {
                  if (!options.disableNotification) {
                    msgSuccess(data.message ? data.message : 'Server error!');
                  }
                  options
                    .baseInput
                    .trigger('mr:fileUpload:getError', [600, data.message ? data.message : 'Server error!', 'responseError'], 'ajaxError');
                }
                options
                  .baseInput
                  .trigger('mr:fileUpload:ajaxDone', [data, textStatus, jqXHR]);
              }
            },
            'error': function (jqXHR, textStatus, errorThrown) {
              if (!options.disableNotification) {
                msgError('<strong>Error ' + jqXHR.status + ' : </strong>: ' + textStatus);
              }
              options
                .baseInput
                .trigger('mr:fileUpload:getError', [jqXHR.status, textStatus, 'ajaxError']);
              options
                .baseInput.trigger('mr:fileUpload:ajaxError', [jqXHR, textStatus, errorThrown]);
            },
            'complete': function (jqXHR, textStatus) {
              options.baseBlock.siblings('.mr-fu-preview-area').find(selectors.preloader).show().hide();
              options
                .baseInput.trigger('mr:fileUpload:ajaxComplete', [jqXHR, textStatus]);
            }
          };

          if (options.ajaxOptions === 'object') {
            ajaxParams = $.extend({}, options.ajaxOptions, ajaxParams);
          }
          $.ajax(ajaxParams);
        }
      });

    /**
     * Modal window view preview images
     * @returns {*|HTMLElement}
     */
    function templatePreviewWindow ($currentBtn) {
      var images = [];
      var $template = $('<div class="mr-fu-bg-view-preview">\n' +
        '    <div class="mr-fu-nav-view-image" >\n' +
        '        <div class="mr-fu-counter-images pull-left">\n' +
        '            <strong></strong> / <span></span>\n' +
        '        </div>\n' +
        '        <div class="mr-fu-center-block" >\n' +
        '            <span class="mr-fu-view-arr-prev" ></span>\n' +
        '            <span class="mr-fu-view-arr-next "></span>\n' +
        '        </div>\n' +
        '      <div class="pull-right mr-fu-close-view" ></div>\n' +
        '    </div>\n' +
        '    <img alt="previewImage" src="" />\n' +
        '</div>\n');

      var $images = $currentBtn.parents('.mr-fu-preview-area:eq(0)').find('.mr-fu-preview-img');
      var $img = $currentBtn.parents('.mr-fu-preview-block:eq(0)').find('img:eq(0)');

      $images.each(function (i, img) {
        images.push($(img).attr('src'));
      });

      var activeIndexImg = images.indexOf($img.attr('src'));

      if ($img.length) {
        $template.find('img').attr('src', $img.attr('src'));
      }

      $template
        .find('.mr-fu-counter-images')
        .find('span:eq(0)').text(images.length);

      $template
        .find('.mr-fu-counter-images')
        .find('strong:eq(0)').text(activeIndexImg + 1);

      $template.on('click', '.mr-fu-view-arr-prev', function (e) {
        e.preventDefault();
        if (activeIndexImg > 0) {
          activeIndexImg--;
          $template.find('img').attr('src', images[activeIndexImg]);
          $template
            .find('.mr-fu-counter-images')
            .find('strong:eq(0)').text(activeIndexImg + 1);
        }
      });

      $template.on('click', '.mr-fu-view-arr-next', function (e) {
        e.preventDefault();
        if (activeIndexImg < images.length) {
          activeIndexImg++;
          $template.find('img').attr('src', images[activeIndexImg]);
          $template
            .find('.mr-fu-counter-images')
            .find('strong:eq(0)').text((activeIndexImg + 1) > images.length ? images.length : (activeIndexImg + 1));
        }
      });

      $template.on('click', '.mr-fu-close-view', function (e) {
        e.preventDefault();
        if ($('body').find('.mr-fu-bg-view-preview').length) {
          $('body').find('.mr-fu-bg-view-preview').remove();
        }
      });

      $template.on('swipeleft', function (event) {
        $template.find('.mr-fu-view-arr-next').trigger('click');
      });

      $template.on('swiperight', function (event) {
        $template.find('.mr-fu-view-arr-prev').trigger('click');
      });

      return $template;
    }

    /**
     *
     * @returns {*|HTMLElement}
     */
    function templatePreloader () {
      return $('<div class="mr-fu-loader" style=""> ' +
        '<div class="mr-fu-loader-circle"></div> ' +
        '</div>');
    }

    /**
     *
     * @returns {*|HTMLElement}
     */
    function templateProgress () {
      return $('<span class="fs_total_progress_block"  style="display: none"> '
        + '<progress class="mr-fu-total-progress" value="0" max="100"></progress>'
        + '<span  id="fs_total_percent" class="fs_total_percent">0%</span>'
        + '<span class="mr-fu-clear"></span>'
        + '</span>');
    }

    /**
     *
     * @param text
     * @param type
     * @returns {*|HTMLElement}
     */
    function templateAlert (text, type) {
      var $el = $('<div class="mr-fu-alert-body ' + type + '"><p>' + text + '</p><span class="mr-fu-rm-alert" onclick="$(this).parent().remove()">✖</span></div>');
      setTimeout(function () {
        $el.remove();
      }, options.timeNotification);
      return $el;
    }

    /**
     * Success alert
     * @param text
     */
    function msgSuccess (text) {
      var tmpl = templateAlert(text, 'mr-fu-success');
      options.notif_block.append(tmpl);
    }

    /**
     * Error alert
     * @param text
     */
    function msgError (text) {
      var tmpl = templateAlert(text, 'mr-fu-error');
      options.notif_block.append(tmpl);
    }

    /**
     * Warning alert
     * @param text
     */
    function msgWarning (text) {
      var tmpl = templateAlert(text, 'mr-fu-warning');
      options.notif_block.append(tmpl);
    }

    /**
     * Get base64 string
     * @param b64Data
     * @param contentType
     * @returns {*}
     */
    function getB64Data (b64Data, contentType) {
      b64Data = b64Data || '';
      b64Data = b64Data.replace('data:', '');
      b64Data = b64Data.replace(';base64,', '');
      b64Data = b64Data.replace(contentType, '');
      return b64Data;
    }

    /**
     * Convert  from base64 to Blob
     * @see {Blob,Uint8Array}
     * @param b64Data
     * @param contentType
     * @param sliceSize
     * @returns {*}
     */
    function b64toBlob (b64Data, contentType, sliceSize) {
      contentType = contentType || '';
      sliceSize = sliceSize || 512;
      b64Data = getB64Data(b64Data, contentType);
      var byteCharacters = atob(b64Data);
      var byteArrays = [];
      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      return new Blob(byteArrays, { type: contentType });
    }

    /**
     *  Init sort
     */
    function initSortable () {
      var handle = '.mr-fu-handle';
      var boxes_ = options.baseBlock.siblings('.mr-fu-preview-area').find('.mr-fu-preview-block');
      var dragSrcEl_ = null;
      var target = false;

      boxes_.each(function (i, box) {
        box.setAttribute('draggable', 'true');  // Enable boxes to be draggable.
        box.ondragstart = function (e) {
          if (this.querySelector(handle).contains(target)) {
            this.style.opacity = '0.5';
            e.dataTransfer.setData('text/plain', 'handle');
          } else {
            e.preventDefault();
          }
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/html', this.innerHTML);
          dragSrcEl_ = this;
          // this/e.target is the source node.
          $(this).addClass('moving');
        };
        box.ondragenter = function (e) {
          $(this).addClass('over');
        };
        box.ondragover = function (e) {
          if (e.preventDefault) {
            e.preventDefault(); // Allows us to drop.
          }
          e.dataTransfer.dropEffect = 'move';
          return false;
        };
        box.ondragleave = function (e) {
          // this/e.target is previous target element.
          $(this).removeClass('over');
        };
        box.ondrop = function (e) {
          var $this = $(this);
          // this/e.target is current target element.
          e.preventDefault();
          if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
          }
          this.style.opacity = '1';

          // Don't do anything if we're dropping on the same box we're dragging.
          if (dragSrcEl_ !== this) {
            dragSrcEl_.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
          }
          // Sort files array
          var sortArr = [];
          var tmpFiles = [];
          boxes_.each(function (i, box) {
            sortArr.push($(box).find(handle).data('file'));
          });
          $.each(mFiles, function (i, f) {
            if (f && f.name) {
              if (sortArr.indexOf(encodeURI(f.name)) !== -1)
                tmpFiles.splice(sortArr.indexOf(encodeURI(f.name)), 0, f);
            }
          });
          mFiles = tmpFiles; // replace files array
          // End sort files array
          return false;
        };
        box.ondragend = function (e) {
          // this/e.target is the source node.
          this.style.opacity = '1';
          boxes_.each(function (i, box) {
            box.style.opacity = '1';
            $(box).removeClass('over');
            $(box).removeClass('moving');
          });
        };
        box.onmousedown = function (e) {
          target = e.target;
        };
      });

    }

    /**
     * Preparing sort data
     */
    function prepareRequestSortingData () {
      sortData = [];
      $area.find('.mr-fu-preview-block').each(function (i, item) {
        var $img = $(item).find('.mr-fu-preview-img');
        var $file = $(item).find('.mr-fu-preview-file');

        if ($img.length) {
          if ($img.data('item-id')) {
            sortData.push({
              'id': $img.data('item-id'),
              'index': i,
              'sortNumber': i + 1,
              'isNewFile': false,
              'isImage': true
            });
          } else {
            sortData.push({
              'id': null,
              'index': i,
              'sortNumber': i + 1,
              'isNewFile': true,
              'isImage': true
            });
          }
        }
        if ($file.length) {
          if ($file.data('item-id')) {
            sortData.push({
              'id': $file.data('item-id'),
              'index': i,
              'sortNumber': i + 1,
              'isNewFile': false,
              'isImage': false
            });
          } else {
            sortData.push({
              'id': null,
              'index': i,
              'sortNumber': i + 1,
              'isNewFile': true,
              'isImage': false
            });
          }
        }
      });
    }

    /**
     * Init drag and drop area
     */
    function initDragAndDrop () {
      $(document).on('dragleave.mr:fileUpload', function (event) {
        var isDraggedArea = (!$(event.target).hasClass('mr-fu-drag-area') && !$(event.target).parents('.mr-fu-drag-area:eq(0)').length);
        if (isDraggedArea) {
          options.baseBlock.removeClass('mr-fu-dragentered');
        }
      });
      options.baseBlock.on('dragover.mr:fileUpload dragenter.mr:fileUpload', function (event) {
        if (event !== null) {
          event.preventDefault();
        }
        var isDraggedArea = !!($(event.target).hasClass('mr-fu-drag-area') || $(event.target).parents('.mr-fu-drag-area:eq(0)').length);

        if (isDraggedArea) {
          options.baseBlock.addClass('mr-fu-dragentered');
        }
        return false;
      });
      options.baseBlock.on('drop.mr:fileUpload', function (event) {
        try {
          event.preventDefault();
          prepareUploadFiles(event.originalEvent.dataTransfer.files);
          options.baseBlock.removeClass('mr-fu-dragentered');
          return false;
        } catch (error) {
          console.log('File Drop Zone: ' + error);
        }
      });
    }

    /**
     * Check allowed types
     * @param type
     * @returns {boolean}
     */
    function validateType (type) {
      if (options.allowedTypes === '.*' || options.allowedTypes === '') {
        return true;
      }
      var types = options.allowedTypes.split(',');
      var result = false;
      $.each(types, function (index, allowedType) {
        if (type.match(allowedType)) {
          result = true;
          return result;
        }
      });
      return result;
    }

    /**
     * Get all data to request FormData
     * @returns {FormData}
     */
    function getRequestData () {
      var formData = new FormData();
      var paramName = options.baseInput.attr('name') || options.requestParamFiles || 'file';
      var paramNameDeletedIDs = options.requestParamDeletedIds || 'deletedFileIDs';
      var paramNameSortingData = options.requestParamSortingData || 'sortingData';
      if (mFiles.length > 1) {
        $.each(mFiles, function (i, f) {
          formData.append(paramName + '[]', f);
        });
      } else if (mFiles.length) {
        formData.append(paramName, mFiles[0]);
      }

      if (deletedFileIDs.length > 1) {
        $.each(deletedFileIDs, function (i, f) {
          formData.append(paramNameDeletedIDs + '[]', f);
        });
      } else if (deletedFileIDs.length) {
        formData.append(paramNameDeletedIDs, deletedFileIDs[0]);
      }
      if (sortData.length > 1) {
        $.each(sortData, function (i, items) {
          $.each(items, function (name, value) {
            formData.append(paramNameSortingData + '[' + i + '][' + name + ']', value);
          });
        });
      } else if (sortData.length) {
        formData.append(paramNameSortingData, sortData[0]);
      }
      return formData;
    }

    /**
     * Get all data to request
     * @type {getRequestData}
     * @returns {FormData}
     */
    options.baseInput.data({ 'getRequestData': getRequestData });

    /**
     * Get all translations
     * @returns Object
     */
    options.baseInput.data({
      'getTranslations': function () {
        return translations;
      }
    });
    //$('#demo2').data('getTranslations')()
    return options.baseInput;
  };
})(jQuery);

$(document).ready(function () {
  $('[data-mr-upload-file-button="true"]').mrUploadFileButton();
});