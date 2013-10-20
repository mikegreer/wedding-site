var isiPad,
docWidth,
docHeight,
boxHeight,
littlePeopleY,
topPadding,
heavyImage;

$(window).resize(function(){
  docWidth = $(window).width();
  docHeight = $(window).height();

  boxHeight = docHeight + 100;
  littlePeopleY = (docHeight*0.5)- 620;

  $('.leftBox').each(function(){
    topPadding = docHeight*0.5 - ($(this).height()/2) - 40;
    $('.leftBox').css('padding-top', topPadding);
  });

  $('.wedding-page').css('min-height', boxHeight);
  $('.wedding-page').css("background-position", "-80px "+littlePeopleY+"px");
});

function preloadImage(srcToLoad){
  heavyImage = new Image();
  heavyImage.src = srcToLoad;
}

function iPadFix(){
  isiPad = navigator.userAgent.match(/iPad/i) !== null;
  if(isiPad){
    $('.wedding-page').css({'background-attachment' : 'scroll', 'min-height' : 'none'});
    $('.arrow').css('position', 'relative');
    $('.arrow').css('top', '200px');
  }

}

$(document).ready(function(){
  iPadFix();

  preloadImage("img/large/directions.png");
  $(document).resize();

  $('#jumpSection').on("click",function(e){
    var t = $('#section2');
    var tOffset=t.offset().top;
    $('html,body').animate({scrollTop:tOffset}, 1500);
    e.preventDefault();
  });

  if(!isiPad){
    $('.leftBox').waypoint('sticky', {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: 'stuck'
    });
  }

  $("#fancybox-manual-c").click(function() {
    $.fancybox.open([
      { href : 'img/photos/greer_0001.jpg' },
      { href : 'img/photos/greer_0002.jpg' },
      { href : 'img/photos/greer_0003.jpg' },
      { href : 'img/photos/greer_0004.jpg' },
      { href : 'img/photos/greer_0005.jpg' },
      { href : 'img/photos/greer_0006.jpg' },
      { href : 'img/photos/greer_0007.jpg' },
      { href : 'img/photos/greer_0008.jpg' },
      { href : 'img/photos/greer_0009.jpg' },
      { href : 'img/photos/greer_0010.jpg' },
      { href : 'img/photos/greer_0011.jpg' },
      { href : 'img/photos/greer_0012.jpg' },
      { href : 'img/photos/greer_0013.jpg' },
      { href : 'img/photos/greer_0014.jpg' },
      { href : 'img/photos/greer_0015.jpg' },
      { href : 'img/photos/greer_0016.jpg' },
      { href : 'img/photos/greer_0017.jpg' },
      { href : 'img/photos/greer_0018.jpg' },
      { href : 'img/photos/greer_0019.jpg' },
      { href : 'img/photos/greer_0020.jpg' },
      { href : 'img/photos/greer_0021.jpg' },
      { href : 'img/photos/greer_0022.jpg' },
      { href : 'img/photos/greer_0023.jpg' },
      { href : 'img/photos/greer_0024.jpg' },
      { href : 'img/photos/greer_0025.jpg' },
      { href : 'img/photos/greer_0026.jpg' },
      { href : 'img/photos/greer_0027.jpg' },
      { href : 'img/photos/greer_0028.jpg' },
      { href : 'img/photos/greer_0029.jpg' },
      { href : 'img/photos/greer_0030.jpg' },
      { href : 'img/photos/greer_0031.jpg' },
      { href : 'img/photos/greer_0032.jpg' },
      { href : 'img/photos/greer_0033.jpg' },
      { href : 'img/photos/greer_0034.jpg' },
      { href : 'img/photos/greer_0035.jpg' },
      { href : 'img/photos/greer_0036.jpg' },
      { href : 'img/photos/greer_0037.jpg' },
      { href : 'img/photos/greer_0038.jpg' },
      { href : 'img/photos/greer_0039.jpg' },
      { href : 'img/photos/greer_0040.jpg' },
      { href : 'img/photos/greer_0041.jpg' },
      { href : 'img/photos/greer_0042.jpg' },
      { href : 'img/photos/greer_0043.jpg' },
      { href : 'img/photos/greer_0044.jpg' },
      { href : 'img/photos/greer_0045.jpg' },
      { href : 'img/photos/greer_0046.jpg' },
      { href : 'img/photos/greer_0047.jpg' },
      { href : 'img/photos/greer_0048.jpg' },
      { href : 'img/photos/greer_0049.jpg' },
      { href : 'img/photos/greer_0050.jpg' },
      { href : 'img/photos/greer_0051.jpg' },
      { href : 'img/photos/greer_0052.jpg' },
      { href : 'img/photos/greer_0053.jpg' },
      { href : 'img/photos/greer_0054.jpg' },
      { href : 'img/photos/greer_0055.jpg' },
      { href : 'img/photos/greer_0056.jpg' },
      { href : 'img/photos/greer_0057.jpg' },
      { href : 'img/photos/greer_0058.jpg' },
      { href : 'img/photos/greer_0059.jpg' },
      { href : 'img/photos/greer_0060.jpg' },
      { href : 'img/photos/greer_0061.jpg' },
      { href : 'img/photos/greer_0062.jpg' },
      { href : 'img/photos/greer_0063.jpg' },
      { href : 'img/photos/greer_0064.jpg' },
      { href : 'img/photos/greer_0065.jpg' },
      { href : 'img/photos/greer_0066.jpg' },
      { href : 'img/photos/greer_0067.jpg' },
      { href : 'img/photos/greer_0068.jpg' },
      { href : 'img/photos/greer_0069.jpg' },
      { href : 'img/photos/greer_0070.jpg' },
      { href : 'img/photos/greer_0071.jpg' },
      { href : 'img/photos/greer_0072.jpg' },
      { href : 'img/photos/greer_0073.jpg' },
      { href : 'img/photos/greer_0074.jpg' },
      { href : 'img/photos/greer_0075.jpg' },
      { href : 'img/photos/greer_0076.jpg' },
      { href : 'img/photos/greer_0077.jpg' },
      { href : 'img/photos/greer_0078.jpg' },
      { href : 'img/photos/greer_0079.jpg' },
      { href : 'img/photos/greer_0080.jpg' },
      { href : 'img/photos/greer_0081.jpg' },
      { href : 'img/photos/greer_0082.jpg' },
      { href : 'img/photos/greer_0083.jpg' },
      { href : 'img/photos/greer_0084.jpg' },
      { href : 'img/photos/greer_0085.jpg' },
      { href : 'img/photos/greer_0086.jpg' },
      { href : 'img/photos/greer_0087.jpg' },
      { href : 'img/photos/greer_0088.jpg' },
      { href : 'img/photos/greer_0089.jpg' },
      { href : 'img/photos/greer_0090.jpg' },
      { href : 'img/photos/greer_0091.jpg' },
      { href : 'img/photos/greer_0092.jpg' },
      { href : 'img/photos/greer_0093.jpg' },
      { href : 'img/photos/greer_0094.jpg' },
      { href : 'img/photos/greer_0095.jpg' },
      { href : 'img/photos/greer_0096.jpg' },
      { href : 'img/photos/greer_0097.jpg' },
      { href : 'img/photos/greer_0098.jpg' },
      { href : 'img/photos/greer_0099.jpg' },
      { href : 'img/photos/greer_0100.jpg' },
      { href : 'img/photos/greer_0101.jpg' },
      { href : 'img/photos/greer_0102.jpg' },
      { href : 'img/photos/greer_0103.jpg' },
      { href : 'img/photos/greer_0104.jpg' },
      { href : 'img/photos/greer_0105.jpg' },
      { href : 'img/photos/greer_0106.jpg' },
      { href : 'img/photos/greer_0107.jpg' },
      { href : 'img/photos/greer_0108.jpg' },
      { href : 'img/photos/greer_0109.jpg' },
      { href : 'img/photos/greer_0110.jpg' },
      { href : 'img/photos/greer_0111.jpg' },
      { href : 'img/photos/greer_0112.jpg' },
      { href : 'img/photos/greer_0113.jpg' },
      { href : 'img/photos/greer_0114.jpg' },
      { href : 'img/photos/greer_0115.jpg' },
      { href : 'img/photos/greer_0116.jpg' },
      { href : 'img/photos/greer_0117.jpg' },
      { href : 'img/photos/greer_0118.jpg' },
      { href : 'img/photos/greer_0119.jpg' },
      { href : 'img/photos/greer_0120.jpg' },
      { href : 'img/photos/greer_0121.jpg' },
      { href : 'img/photos/greer_0122.jpg' },
      { href : 'img/photos/greer_0123.jpg' },
      { href : 'img/photos/greer_0124.jpg' },
      { href : 'img/photos/greer_0125.jpg' },
      { href : 'img/photos/greer_0126.jpg' },
      { href : 'img/photos/greer_0127.jpg' },
      { href : 'img/photos/greer_0128.jpg' },
      { href : 'img/photos/greer_0129.jpg' },
      { href : 'img/photos/greer_0130.jpg' },
      { href : 'img/photos/greer_0131.jpg' },
      { href : 'img/photos/greer_0132.jpg' },
      { href : 'img/photos/greer_0133.jpg' },
      { href : 'img/photos/greer_0134.jpg' },
      { href : 'img/photos/greer_0135.jpg' },
      { href : 'img/photos/greer_0136.jpg' },
      { href : 'img/photos/greer_0137.jpg' },
      { href : 'img/photos/greer_0138.jpg' },
      { href : 'img/photos/greer_0139.jpg' },
      { href : 'img/photos/greer_0140.jpg' },
      { href : 'img/photos/greer_0141.jpg' },
      { href : 'img/photos/greer_0142.jpg' },
      { href : 'img/photos/greer_0143.jpg' },
      { href : 'img/photos/greer_0144.jpg' },
      { href : 'img/photos/greer_0145.jpg' },
      { href : 'img/photos/greer_0146.jpg' },
      { href : 'img/photos/greer_0147.jpg' },
      { href : 'img/photos/greer_0148.jpg' },
      { href : 'img/photos/greer_0149.jpg' }
    ]);
  });

});
