$(document).ready(function () {
	var sections      = $('section');
	var navbar        =	$('#nav');
	var navbarHeight  = navbar.height();

	var sectionOffset = [];

	sections.each(function() {
		var section = $(this);

        var position = section.offset().top - navbarHeight;
        var backgroundColor = section.css("background-color");

        sectionOffset.push({'postion': position,'color': backgroundColor});
       
    });

	$(window).on('scroll', function(){
		var scrollPos = $(document).scrollTop();

		$.each(sectionOffset, function(index, section){
			if (scrollPos >= section.postion) {
				navbar.css("background-color", section.color);
			}
		}) 
	});

});

$(document).ready( function(){
  $('[data-social-icon~=facebook]').mouseover( function(){
    $('.follow').addClass('facebook');
  });
  $('[data-social-icon~=facebook]').mouseout( function(){
    $('.follow').removeClass('facebook');
  });
  $('[data-social-icon~=twitter]').mouseover( function(){
    $('.follow').addClass('twitter');
  });
  $('[data-social-icon~=twitter]').mouseout( function(){
    $('.follow').removeClass('twitter');
  });
  $('[data-social-icon~=instagram]').mouseover( function(){
    $('.follow').addClass('instagram');
  });
  $('[data-social-icon~=instagram]').mouseout( function(){
    $('.follow').removeClass('instagram');
  });
  $('[data-social-icon~=tumblr]').mouseover( function(){
    $('.follow').addClass('tumblr');
  });
  $('[data-social-icon~=tumblr]').mouseout( function(){
    $('.follow').removeClass('tumblr');
  });
  $('[data-social-icon~=youtube]').mouseover( function(){
    $('.follow').addClass('youtube');
  });
  $('[data-social-icon~=youtube]').mouseout( function(){
    $('.follow').removeClass('youtube');
  });
})