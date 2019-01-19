
function toggle_setup() {
if (typeof code_show == 'undefined') {
    code_show = true
} else {
    code_show = false
}

}



function code_toggle() {
    console.log('code_toggle');
    console.log(code_show);

    if (!code_show){
	$('div.input').hide();
	//$('div.prompt.output_prompt').hide();  //unnecessary since I'm hiding all prompts anyways in css
    } else {
	$('div.input').show();
    }
 code_show = !code_show
}

// Fade in https://stackoverflow.com/questions/27747970/how-to-make-images-fade-visible-when-im-scrolling
function showImages(el) {
    console.log('showImages');
    console.log(el)
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
}


