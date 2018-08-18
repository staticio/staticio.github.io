console.log("truyencv");

var chaptersLink = $("a[aria-controls='truyencv-detail-chap']").get(0);
if (typeof chaptersLink !== undefined) {
    console.log("truyencv: Show chapters list");
    chaptersLink.click();

    var count = 0;
    do {
        setTimeout(function () {
            var allChapters = $(".panel-body nav ul:first-child li a").get(0);
            console.log(allChapters);
            if (typeof allChapters !== undefined) {
                allChapters.click();
                break;
            }
        }, 1000);

        count++;
        if (count > 60) {
            break;
        }
    }
    while (true);
}