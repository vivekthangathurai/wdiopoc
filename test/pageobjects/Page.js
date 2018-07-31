function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url(path)
    browser.addCommand("select", function (element,text) {

        element.selectByVisibleText(text);
    });
}

Page.prototype.select = function (text){

    browser.selectByVisibleText(text);
}



module.exports = new Page()