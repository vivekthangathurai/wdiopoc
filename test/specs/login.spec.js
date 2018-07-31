var expect = require('chai').expect;
var fs = require('fs')
var HomePage = require('../pageobjects/appdirect.home.page');
var SignUpPage = require('../pageobjects/appdirect.signup.page');
var LoginPage = require('../pageobjects/appdirect.login.page');
var SamlLoginPage = require('../pageobjects/saml.page');

describe('Singup form', function () {

    // it('should singup with valid email', function () {
    //
    //     HomePage.open();
    //     HomePage.signup.click();
    //     SignUpPage.signup('test13@email.com');
    //     SignUpPage.signupSuccess();
    //     SignUpPage.login();
    //     LoginPage.loginApp('test11@email.com','tester2013');
    //
    // });

    it('sign up for wacom', function () {



        HomePage.open();
        HomePage.loginLink.click();
        SamlLoginPage.register();

    });
});