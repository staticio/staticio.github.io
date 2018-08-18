console.log("truyencv");

var chaptersLink = $("a[aria-controls='truyencv-detail-chap']").get(0);
if (chaptersLink.length !== 0) {
    console.log("truyencv: Show chapters list");
    chaptersLink.click();

    var allChapters = $(".panel-body nav ul:first-child li a").get(0);
    console.log(allChapters);
    if (allChapters != null) {
        allChapters.click();
    }
}