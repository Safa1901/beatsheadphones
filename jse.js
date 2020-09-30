$(function() {
    //обрабатываем клик по блоку с классом trigger
    $('.trigger').on('click', function(e){
        e.preventDefault();
    //получаем нужные нам данные
            var $this = $(this),
            //получаем всё блоки menu
            container = $this.closest('.menu'),
            //получаем li по которому кликнули
            item = $this.closest('.item'),
            //получаем все другие li
            items = container.find('.item'),
            //выбираем из li активный
            activeItem = items.filter('.active'),
            //выбираем из li по которому кликнули блок контен
            content = item.find('.content'),
            //выбираем у li с классом active блок контент
            activeContent = activeItem.find('.content');
    
            //если нет li с классом active по которому кликнули
            if (!item.hasClass('active')) {
                //убираем класс active
                items.removeClass('active');
                //добавляем active кликнутому
                item.addClass('active');
                //у того у кого был active задаём ширину 0
                activeContent.animate({
                       'width' : '0px'
                });
                //кликнутому 530        
                content.animate({
                       'width' : '530px'
                });
            //иначе
            } else {
                item.removeClass('active');
                content.animate({
                       'width' : '0px'
                });
    
            }
    });
    
    // клик вне аккордеона
    $(document).on('click', function (e) {
       var $this = $(e.target);
       if (!$this.closest('.menu').length) {
             $('.content').animate({
                   'width' : '0px'
             });
             $('.item').removeClass('active');
       }
    });
    });