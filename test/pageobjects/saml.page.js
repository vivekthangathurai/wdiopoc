var Page = require('./Page')

var SamlLoginPage = Object.create(Page,{


    registerAccount :{get: function(){return browser.element('=Click here')}},
    email: {get: function () { return browser.element('input[aria-label=\'Email address\']');}},
    password: {get: function () { return browser.element('input[aria-label=\'Password\']');}},
    retypePassword: {get: function () { return browser.element('input[aria-label=\'Re-enter password\']');}},
    firstName: {get: function () { return browser.element('input[aria-label=\'First name\']');}},
    lastName: {get: function () { return browser.element('input[aria-label=\'Last name\']');}},
    selectCountry: {get: function () {return browser.element('select[aria-required=\'true\'][name=\'profile.country\']');}},
    privicyPolicyCheckbox: {get: function () {return browser.element('input[name=\'preferences.privacy.policy.isConsentGranted\'][aria-required=\'true\']');}},
    termsOfUseCheckbox: {get: function () {return browser.element('input[name=\'preferences.terms.termsOfUse.isConsentGranted\'][aria-required=\'true\']');}},
    submit: {get: function () { return browser.element('input[value=\'Submit\']');}},


    register:{value :function () {
            this.registerAccount.waitForExist();
            this.registerAccount.click();
            this.email.waitForVisible();
            this.email.click();
            this.email.setValue('abc@bac.com');
            this.password.setValue('Tester2018');
            this.retypePassword.setValue('Tester2018');
            this.firstName.setValue('Vivek');
            this.lastName.setValue('thangathurai');
            browser.select(this.selectCountry,'India');
            this.privicyPolicyCheckbox.click();
            this.termsOfUseCheckbox.click();
            this.submit.click();
        }},

});

module.exports = SamlLoginPage;

