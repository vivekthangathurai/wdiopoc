var Page = require('./Page')

var HomePage = Object.create(Page,{

    signup:{get:function () {
            browser.timeouts('script', 60000);
            return browser.element('=Sign Up');
        }},

    open: { value: function() {
            Page.open.call(this, 'home');
            this.signup.waitForExist();
        } },
});

module.exports = HomePage;

