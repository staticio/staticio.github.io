console.log("truyencv");

var chaptersLink = $("a[aria-controls='truyencv-detail-chap']").get(0);
if (typeof chaptersLink !== undefined) {
    console.log("truyencv: Show chapters list");
    chaptersLink.click();

    var counter = 0;
    var timer = setInterval(function () {
        console.log(counter);
        var allChapters = $(".panel-body nav ul:first-child li a").get(0);
        console.log(allChapters);
        if (typeof allChapters !== undefined) {
            allChapters.click();
            clearInterval(timer);
            console.log("truyencv: Show all chapters");
        }

        if (counter > 60) {
            clearInterval(timer);
            console.log("Error while load all chapter");
        }
        counter++;
    }, 1000);
}