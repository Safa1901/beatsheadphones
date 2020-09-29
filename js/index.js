const findBlockByAlias = alias => {
    return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with")== alias
    });
};

$(".interactive-avatar__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".reviews__sound-item");

    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
});

const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();

    container.addClass("active");
    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.team__content');
    const itemsContainer = container.find(".team__item");

    itemsContainer.removeClass("active");
    items.height(0);
}

$('.team__title').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const elemContainer = $this.closest(".team__item");

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this);
    }
    
})

const slider = $('.wrapper__color').bxSlider({
    pager: false,
    controls: false,
});

$('.color-slider__arrow--direction--prev').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
});


$('.color-slider__arrow--direction--next').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
});

const validateFields = (form, fieldsArray) => {

    fieldsArray.forEach(field => {
        field.removeClass("input-error");
        if (field.val().trim() == "") {
            field.addClass("input-error");
        }
    });


    const errorFields = form.find(".input-error");

    return errorFields.length == 0;
}

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal");
    const content = modal.find(".modal__content");

    modal.removeClass("error-modal");
    
    const isValid = validateFields(form, [name, phone, comment, to]);

    if (isValid) {
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },
            success: data => {
                content.text(data.message);
                // console.log(data);
                
                $.fancybox.open({
                    src: "#modal",
                    type: "inline"
                });
            },
            error: data => {
                const message = data.responseJSON.message;
                content.text(message);
                modal.addClass("error-modal");

                $.fancybox.open({
                    src: "#modal",
                    type: "inline"
                });
            }
        });
    }
});

$(".app-submit-btn").click(e => {
    e.preventDefault();

    $.fancybox.close();
});



