/*ページ内リンク*/
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    $("html, body").animate(
        {scrollTop: target.offset().top}, speed, "swing");
    return false;
  });
});

$('#humber a[href]').on('click', function(event) {
  $('.drawer-open').trigger('click');
});
/*ハンバーガーメニュークリック*/
$('.drawer-open').on('click',function(){
  $('body').toggleClass('nonscroll');/*ハンバーガーメニュー開いたときスクロールしない*/
})