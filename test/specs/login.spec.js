var expect = require('chai').expect;
var fs = require('fs')
var HomePage = require('../pageobjects/appdirect.home.page');
var SignUpPage = require('../pageobjects/appdirect.signup.page');
var LoginPage = require('../pageobjects/appdirect.login.page');


describe('Singup form', function () {

    it('should singup with valid email', function () {

        HomePage.open();
        HomePage.signup.click();
        SignUpPage.signup('test13@email.com');
        SignUpPage.signupSuccess();
        SignUpPage.login();
        LoginPage.loginApp('test11@email.com','tester2013');

    });
});