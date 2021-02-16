$(document).ready(function () {
    var waypoint = new Waypoint({
        element: $("#js--section-about"),
        handler: function (direction) {
            $(".hero__bar-arrow--a").toggleClass("scrolled");
            $(".hero__bar-arrow--x").toggleClass("scrolled");

            $(".nav").toggleClass("scrolled");
        },
        offset: "99%",
    });

    $("#js--scroll-to-about").click(function () {
        $("html, body").animate({ scrollTop: $("#js--section-about").offset().top - 95 }, 1000);
    });
});
