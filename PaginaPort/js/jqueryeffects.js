$(document).ready(function () {

    // Handler para todas las anclas internas EXCEPTO ir-arriba
    $("a[href^='#']:not(.ir-arriba)").on("click", function (event) {
        event.preventDefault();

        let targetId = this.getAttribute("href").substring(1);

        if (targetId.trim() === "") return;

        let target = $("#" + targetId);

        if (target.length) {
            let navbarHeight = $("#header").outerHeight() || 90;
            let offsetTop = targetId === "inicio" ? 0 : target.offset().top - navbarHeight;
            $("html, body").animate({ scrollTop: offsetTop }, 350);
        }
    });

    // Cierra el menú lateral (sidebar)
    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Abre el menú lateral (sidebar)
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
});

/////////////////////////ARRIBA/////////////////////////////////////////////
$(document).ready(function(){ irArriba(); });

function irArriba(){
    // Click directo en la flecha — sin pasar por el handler general
    $('.ir-arriba').on("click", function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.ir-arriba').slideDown(600);
        } else {
            $('.ir-arriba').slideUp(600);
        }
    });
}
