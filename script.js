// https://developer.chrome.com/extensions/content_scripts
var deBounce = 1000;
var doIt = function() { 
    var ddwn = document.getElementById("filter-dropdown-option");
    if (!ddwn) { 
        console.log("FirstParent: filter not visible yet");
        deBounce += 1000;
        if (deBounce < 5000) {
            setTimeout(doIt, deBounce);
        }
        return;
    }
    if (ddwn.children[0].innerHTML == 'First parent') { console.log("already set."); return ;}
    ddwn.click();
    var firstParent = document.getElementsByClassName("ms-Dropdown-optionText optionText_14ffa1bb")[1]; // second item in list
    firstParent.click();
    setTimeout(scrollBottom, 500);
 }
 var scrollBottom = function() {
     var bottom = 20000;
     document.getElementsByClassName("vc-hl-auto-scroll-absolute")[0].scrollTop = bottom;
     // todo: keep looping until loaded all
 }
setTimeout(doIt, deBounce);


//popstate works for back/forward button in browser, as well as url change
//from user action in TFS
window.onpopstate = function(event) {
  console.log(`onpopstate location: : ${window.location}`);
  setTimeout(doIt, 1000);
};


