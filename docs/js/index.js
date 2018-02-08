$(document).ready(function () {
  function setUrl (stringParams) {
    if (history.pushState) {
      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + stringParams;
      window.history.pushState({ path: newurl }, '', newurl);
    }
  }

  function setActiveMenuItem () {
    if (window.location.hash && window.location.hash !== '#') {
      var selector = 'a[href="' + window.location.hash + '"]';
      if ($(selector).length) {

        if ($(selector).parents('.dropdown:eq(0)').length) {
          $('#navbar .active').removeClass('active');
          $(selector).parents('.dropdown:eq(0)').addClass('active');
          $(selector).parents('li:eq(0)').addClass('active');
        } else {
          $('#navbar .active').removeClass('active');
          $(selector).parents('li:eq(0)').addClass('active');
        }
      }
    } else {
      $('#navbar .active').removeClass('active');
      $('a[href^=\'#home\']').parents('li:eq(0)').addClass('active');
    }
  }

  $('a[href^=\'#\']').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);

    if ($this.parents('#navbar').length && $this.attr('href')) {
      if ($this.parents('.dropdown:eq(0)').length) {
        if (!$this.hasClass('dropdown-toggle')) {
          $this.parents('#navbar').find('.active').removeClass('active');
          $this.parents('.dropdown:eq(0)').addClass('active');
          $this.parents('li:eq(0)').addClass('active');
          setUrl($this.attr('href'));
        }
      } else {
        $this.parents('#navbar').find('.active').removeClass('active');
        $this.parents('li:eq(0)').addClass('active');
        setUrl($this.attr('href'));
      }
    }
    if ($($.attr(this, 'href')).length) {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
      }, 500);
    }
  });
  setActiveMenuItem();
});