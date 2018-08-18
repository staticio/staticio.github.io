console.log("truyencv");

var url = window.location.href;
var chaptersLink = $("a[aria-controls='truyencv-detail-chap']").get(0);

if(chaptersLink!=null){
    chaptersLink.click();
    var allChapters = $(".panel-body nav ul:first-child li a").get(0);
    allChapters.click();
}