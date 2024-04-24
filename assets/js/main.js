var acc = document.getElementsByClassName("faq-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active");
        var arrow = this.firstElementChild.lastElementChild;

        if (arrow.classList.contains('up')) {
            arrow.classList.remove('up');
            arrow.classList.add('down');
        } else {
            arrow.classList.remove('down');
            arrow.classList.add('up');
        }
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}