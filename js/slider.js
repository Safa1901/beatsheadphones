$(function(){
    $('.menu-acco__trigger').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
        container = $this.closest('.menu-acco'),
        item = $this.closest('.menu-acco__item'),
        items = container.find('.menu-acco__item'),
        activeItem = items.filter('.active'),
        content = item.find('.menu-acco__content'),
        activeContent = activeItem.find('.menu-acco__content');

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');
            activeContent.animate ({
                'width' : '0px'
            });
            content.animate ({
                'widht' : '530px'
            });
        } else {
            item.removeClass('active');
            content.animate ({
                'width' : '0px'
            });
        }
    });
    $(document).on('click', function (e) {
        var $this = $(e.target);
        if (!$this.closest('.menu-acco').length) {
            $('.menu-acco__content').animate ({
                'width' : '0px'
            });
            $('.menu-acco__item').removeClass('active');
        }
    });
});

