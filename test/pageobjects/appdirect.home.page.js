var Page = require('./Page')
var SamlLoginPage = require('../pageobjects/saml.page');

var HomePage = Object.create(Page,{


    loginLink :{get: function(){return browser.element('=Log In')}},

    signup:{get:function () {
            return browser.element('=Sign Up');

        }},

    open: { value: function() {
            Page.open.call(this, 'home');

            //this.signup.waitForExist();
            this.loginLink.waitForExist();
        } },
});

module.exports = HomePage;

