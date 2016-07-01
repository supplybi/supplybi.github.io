/**
 * Created by Fasusi on 18/05/2016.
 */

function pebbleCarousel() {
    var cards = document.getElementById("cards");
    var pebbles = cards.getElementsByTagName("img");
    var imagPaths = [];
    var time = 2000;

    //get the original src to replace after loop

    $.each(pebbles, function (i, pebbles) {
        setTimeout(function () {

            $("#pebble1").attr({ src: pebbles.getAttribute("src") });
        }, i * time);
    });
}

function resetPebble() {
    var cards = document.getElementById("cards");
    var pebbles = cards.getElementsByTagName("img");
}

$("document").ready(function () {
    //
    //    var pebbles = ["#pebble1", "#pebble2", "#pebble3"];
    //    var image = ["/assets/boxes.png", "/assets/brain.png", "/assets/map.png"];
    //    var colors = ["#3ac53e", "#4bc53e", "#5cc53e", "#6dc53e", "#8dc53e"];
    $("#main-logo").hide(0).delay(500).fadeIn(4000);
    //
    //    for (var i = 0; i < pebbles.length; i++) {
    //        $(pebbles[i]).animate({width: "+=120", height: "+=120"}, 4000, "linear")
    //            .attr({src: image[i]})
    //            .delay(5000)
    //            .fadeIn(4000);
    //
    //        //random color background for pebble
    //        //$(pebbles[i]).css({'background': colors[Math.floor((Math.random() * 5))]})
    //        //    .delay(5000)
    //        //    .fadeIn(4000);
    //
    //       // $(pebbles[i]).css({'background': "#8dc53e"})
    //       //     .delay(3000)
    //       //     .fadeIn(1000);
    //    }
    //
    ////pebbleCarousel();
    ////resetPebble();
    ////$("#pebble1").on("mousover mouseleave", change_background);
    //
    ////function change_background(evt) {
    ////    $("#pebble1").toggleClass(" .pebblebk");
    ////}
    //
});

//# sourceMappingURL=main-compiled.js.map