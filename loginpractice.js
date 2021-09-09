let puppeteer=require("puppeteer");
const id="wehilod822@0ranges.com";
const password="123456";
let tab;
let openBrowswerpromise=puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
});
openBrowswerpromise.then(function(browserinstance){
    let pagesPromise= browserinstance.pages();
    return pagesPromise;
})
.then(function(pages){
    
    let page=pages[0];
    tab=page;
    let gotoPage=tab.goto("https://www.hackerrank.com/auth/login");
    return gotoPage;
})
.then(function(){
    let typeid=tab.type("#input-1",id);
    return typeid;
})
.then(function(){
    let typepw=tab.type("#input-2",password);
    return typepw;
})
 .then(function(){
     let clicklogin=tab.click(".ui-btn.ui-btn-large");
     return clicklogin;
 })
