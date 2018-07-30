var Page = require('./Page');
var expect = require('chai').expect;

const successText = 'Already have an account? Log In.';

var SignUpPage = Object.create(Page, {


    emailinput: {get: function () { return browser.element('input[name=\'emailAddress\']');}},
    signupbutton: {get: function () { return browser.element('button[name=\'userSignupButton\']');}},
    loginLink :{get: function(){return browser.element('=Log In')}},
    successMessage: {get: function () { return browser.element('#signupLoginLink');}},

    open: { value: function() {
            Page.open.call(this, 'signup');
        } },

    signup: {value :function (emailaddress) {
            this.emailinput.setValue(emailaddress);
            this.signupbutton.click();
    }},

    signupSuccess: {value :function () {
            expect(this.successMessage.getText()).to.equal(successText);
        }},

    login : {value :function () {
            this.loginLink.click();
        }}


});

module.exports = SignUpPage;