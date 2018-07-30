var Page = require('./Page');

var LoginPage = Object.create(Page, {

    emailinput: {get: function () { return browser.element('#username');}},
    passwordinput: {get: function () { return browser.element('#password');}},
    login :{get: function(){return browser.element('button[name=\'signin\']')}},


    loginApp : {value : function (username,password) {
            this.emailinput.setValue(username);
            this.passwordinput.setValue(password);
            this.login.click();
        }}

});

module.exports = LoginPage;