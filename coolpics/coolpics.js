document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".my-button");
    const menu = document.querySelector(".menu");
    const gallery = document.querySelector(".gallery");

    function handleResize() {
        if (window.innerWidth > 1000) {
            menu.classList.remove('hide');
        } else {
            menu.classList.add('hide');
        }
    }

    function viewerTemplate(pic, alt) {
        return `<div class="viewer show">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
    }

    function viewHandler(event) {
        const target = event.target;
        if (target.tagName === 'IMG') {
            const src = target.src.split("-")[0];
            const fullSrc = `${src}-full.jpeg`;
            const alt = target.alt;
            const htmlToInsert = viewerTemplate(fullSrc, alt);
            document.body.insertAdjacentHTML("afterbegin", htmlToInsert);

            const closeViewerButton = document.querySelector(".close-viewer");
            closeViewerButton.addEventListener("click", closeViewer);
        }
    }

    function closeViewer() {
        const viewer = document.querySelector(".viewer");
        if (viewer) {
            viewer.remove();
        }
    }

    menuButton.addEventListener("click", function() {
        menu.classList.toggle("hide");
    });

    window.addEventListener("resize", handleResize);
    handleResize();

    gallery.addEventListener("click", viewHandler);
});
