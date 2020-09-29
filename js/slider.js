const verticalAcco = () => {
    const links = document.querySelectorAll(".menu-acco__trigger");
    const body = document.querySelector('body');

    // const calculateWidth = () => {
    // };

    function closeItem(activeElement) {
        const activeText = activeElement.querySelector(".menu-acco__content");
        activeText.style.width = "0px";
        activeElement.classList.remove("active");
    }

    links.forEach(function (elem) {
        elem.addEventListener("click", function (e) {
            e.preventDefault();
            const link = e.target.closest(".menu-acco__trigger");
            const active = document.querySelector(".menu-acco__item.active");
            if (active) {
                closeItem(active);
            }

            if (!active || active.querySelector(".menu-acco__trigger") !== link) {
                const current = link.closest(".menu-acco__item");
                current.classList.add("active");
                const currentText = current.querySelector(".menu-acco__content");
                if (body.offsetWidth > 480) {
                    currentText.style.width = calculateWidth() + 'px';

                    // width = calculateWidth();
                    // console.log(widthE)
                } else {
                    currentText.style.width = '100%';
                }
                
            }
        }

    });

    document.addEventListener("click", e => {
        e.preventDefault();
        let activePerson = document.querySelector(".menu-acco__item.active");
        const target = e.target;
        console.log(target);
        if (!target.closest("/menu-acco") && activePerson) {
            closeItem(activePerson);
        }
        if(target.closest('.close-btn')){
            closeItem(activePerson);
        }
    });
};