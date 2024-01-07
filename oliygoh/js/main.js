$(document).ready(function () {
    let toggleButtonAndShadow = () => {
        $(".header__menu-open").toggle();
        $(".header__menu-close").toggle();
        $(".header").toggleClass("header--shaded");
    };

    $(".header__menu-open").click(() => {
        $(".nav").css({
            top: "7.6rem",
            opacity: "1",
            "pointer-events": "visible",
            transition: "top 0.5s, opacity 0.001s",
        });

        toggleButtonAndShadow();
    });

    $(".header__menu-close").click(() => {
        $(".nav").css({
            top: "-80%",
            opacity: "0",
            "pointer-events": "none",
            transition: "top 0.5s, opacity 1s",
        });

        toggleButtonAndShadow();
    });

    $(".header__languages").click(() => {
        $(".header__languages-container").toggle();
    });
});
