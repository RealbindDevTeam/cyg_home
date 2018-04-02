var _showIconMenu = true;

function openNav(){
    document.getElementById("sidenav-dev").classList.remove('active-sidenav');
    document.getElementById("sidenav-bg").classList.remove('active-sidenav-bg');
    
    if(_showIconMenu){
        document.getElementById("sidenav-dev").classList.add('active-sidenav');
        document.getElementById("sidenav-bg").classList.add('active-sidenav-bg');
    }
    _showIconMenu = !_showIconMenu;
}
$(function () {
    var $window = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch = Modernizr.touch;

    if (isTouch) { $('.revealOnScroll').addClass('animated'); }

    $window.on('load', revealOnScroll);
    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;

        $(".revealOnScroll:not(.animated)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function () {
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    }
});