$('.info-panel-btn').on('click', function () {
  var id = $(this).attr('href');
  var isOpen = $(this).hasclass('info-panel-btn-active');
  $('.info-panel').attr('hidden', true);
  $('.info-panel-btn').removeClass('info-panel-btn-active');
  if (!isOpen) {
    $(this).addClass('info-panel-btn-active');
    $(id).removeAttr('hidden');
  }
});
