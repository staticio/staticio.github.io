// ==UserScript==
// @name          AtoZ website toolz
// @include       *
// @description   All my scripts for specific websites
// @version       1.0.1
// @updateURL     https://staticio.github.io/static/user-scripts/toolz.user.js
// @downloadURL   https://staticio.github.io/static/user-scripts/toolz.user.js
// @author        Libraz
// @namespace     Libraz.scripts
// @license       MIT License
// ==/UserScript==

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var siteScript = document.createElement('script');
    siteScript.type = 'text/javascript';

var url = window.location.href;
var wikidich = new RegExp("https:\/\/wikidich\.com\/truyen\/.{1,}", "g");
var tangthuvien = new RegExp("https:\/\/truyen\.tangthuvien\.vn\/doc-truyen\/.{1,}\/.{1,}", "g");
var googleSearch = new RegExp("https:\/\/www\.?google\..+?\/search.{1,}", "g");
var outlookMail = new RegExp("https:\/\/outlook\.live\.com\/.{1,}", "g");
var truyencv = new RegExp("http:\/\/truyencv\.com\/.{1,}\/.{1,}", "g");

if (truyencv.test(url)) {    
    siteScript.src = 'https://staticio.github.io/static/user-scripts/site-scripts/toolz.truyencv.js';
    document.getElementsByTagName('body')[0].appendChild(siteScript);
} else
if (wikidich.test(url)) {
    console.log("Wikidich");
    var wikidichContent = document.getElementById("bookContent");
    wikidichContent.style.width = "760px";
    wikidichContent.style.margin = "auto";
    wikidichContent.style.alignItems = "flex-start";
    wikidichContent.style.fontSize = "24px";
    wikidichContent.style.textAlign = "justify";
} else
if (tangthuvien.test(url)) {
    console.log("tangthuvien");
    document.getElementsByClassName("bg-background").item(0).remove();
} else
if (googleSearch.test(url)) {
    console.log("google-search");

    if (isGoogleImgs()) {
        makeObserver();
    }


    //adds view image buttons to all immersive containers (usually 3 of them)
    function addButtons() {
        var containers = document.getElementsByClassName('immersive-container');

        for (let c = 0; c < containers.length; c++) { //put a button in each immersive container
            var container = containers[c];
            var table = container.getElementsByClassName('irc_but_r')[0];
            var row = table.getElementsByTagName('tr')[0];

            var oldLinks = table.getElementsByClassName('viewImg');
            for (let l = 0; l < oldLinks.length; l++) { //get rid of the old view image button
                oldLinks[l].remove();
            }

            var newBtn = document.createElement('td');
            newBtn.setAttribute('class', 'viewImg');
            var btnLink = document.createElement('a');
            btnLink.href = container.getElementsByClassName('irc_mi')[0].src;
            newBtn.appendChild(btnLink);
            var text = document.createElement('span');
            text.innerText = "View image";
            btnLink.appendChild(text);

            row.childNodes[0].after(newBtn);
        }
    }


    //creates a mutation observer that adds view image buttons every time an image is clicked
    function makeObserver() {
        var observer = new MutationObserver(function (mutation) {
            observer.disconnect();
            addButtons();
            reconnect(this);
        });
        reconnect(observer);

        function reconnect(observer) {
            var config = {
                'childList': true,
                'subtree': true
            };
            observer.observe(document, config);
        }
    }

    //checks if we're on google images
    function isGoogleImgs() {
        return document.getElementsByClassName('rg_ic').length !== 0;
    }
} else
if (outlookMail.test(url)) {
    console.log("outlook-mail");
    getElementByXpath("//html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[4]").remove();
}
