const methodClose = openMenu();
function openMenu(){
    const openBtn = document.querySelector('.beats-menu-button');
    const closeBtn = document.querySelector('.beats-menu-closed');
    const menu = document.querySelector('.hide-menu');
    


        openBtn.addEventListener('click', function () {
            removeActiveLink(menuLinks);
            menu.classList.remove('hide-menu');
            menu.classList.add('visible');
            menu.style.opacity= 0;
            let op = 0.1;
            setTimeout (function foo(){
                if (op < 1) {
                    op += 0.1;
                    menu.style.opacity= op;
                    setTimeout (foo, 50);
                }
            }, 50);
        });
        closeBtn.addEventListener('click', function () {
            menu.style.opacity= 1;
            let op = 1;
            setTimeout (function doo(){
                if (op > 0) {
                    op -= 0.1;
                    menu.style.opacity= op;
                    setTimeout (doo, 50);
                }
            },50)
            setTimeout (function (){
                menu.classList.add('hide-menu');
            }, 1000);
        })
        
        return  {
            close() {
                closeBtn.click();
            }
        }
}

const menuLinks = document.querySelectorAll('.full-menu__link');
for (const link of menuLinks) {
    link.addEventListener('click', e=> {
        const curLink = e.currentTarget;
        const isClosedLink = curLink.classList.contains("active-link");
        if (isClosedLink) {
            removeActiveLink(menuLinks);
        } else {
            removeActiveLink(menuLinks);
            curLink.classList.add('active-link');
            setTimeout(methodClose.close(), 1000);
        }
    })
}

function removeActiveLink(menuLinks) {
    Array.from(menuLinks).forEach(link=>{
        link.classList.remove('active-link');
    })
}
openMenu();