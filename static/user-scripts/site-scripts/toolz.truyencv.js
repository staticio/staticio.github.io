console.log("truyencv");

var url = window.location.href;
var chaptersLink = $("a[aria-controls='truyencv-detail-chap']").get(0);

if(chaptersLink!=null){
    console.log("truyencv: Show chapters list");
    chaptersLink.click(function(){
        console.log("truyencv: Show all chapters");
        var allChapters = $(".panel-body nav ul:first-child li a").get(0);
        allChapters.click();
    });
}