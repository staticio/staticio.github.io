console.log("truyencv");

var url = window.location.href;
var chaptersLink = $("a[aria-controls='truyencv-detail-chap']").get(0);

if(chaptersLink!=null){
    chaptersLink.click();
}