import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import bottomClass from './bottomClass.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends bottomClass {
    /**
     * define selectors using getter methods
     */
    get usernameField () {
        return $('#user-name');
    }

    get passwordField () {
        return $('#password');
    }

    get menuShowing () {
        return $('[aria-hidden="false"]');
    }

    get menuNotShowing () {
        return $('[hidden="true"]');
    }

    get loginButton () {
        return $('[name="login-button"]');
    }

    get failCredsAlert () {
        return $('[data-test="error"]')
    }

    get burgerMenu(){
        return $('.bm-burger-button')
    }

    get productPageTitle () {
        return $('//span[@class="title"][contains(text(), "Products")]')
    }

    get logoutButtom () {
        return $('#logout_sidebar_link')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username,password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async failCredentialsAlert(username,password){
        await this.login(username,password)
        await expect(this.failCredsAlert).toExist()
    }

    async correctUserLogin(username,password){
        await this.login(username,password);
        await expect(this.productPageTitle).toExist();
    }

    async logout(){
        await this.menuNotShowing.waitForEnabled({ timeout: 3000 })
        await this.burgerMenu.click();
        await this.burgerMenu.moveTo();
        await this.menuShowing.waitForEnabled({ timeout: 3000 }) 
        await this.logoutButtom.click();
    }

    async burguerMenu (){
        await this.burgerMenu.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    goToUrl () {
        return super.goToUrl();
    }
}

export default new LoginPage();