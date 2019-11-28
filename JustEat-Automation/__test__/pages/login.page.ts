import { by, element, browser } from "protractor";
import { Home } from "./home.page";

// tslint:disable: naming-convention
export namespace LoginPage{

    export const username = by.css ("input#Email");
    export const postalCode = by.css ("input[name='postcode']");
    export const password = by.model ("input#Password");
    export const loginBtn = by.css ("input.o-btn.o-btn--primary.o-btn--fwidth]");
    export const searchBtn = by.css ("span[class='Form_c-search-btn-text_1jLYr']");
    export const titleHeading = by.css ("h1.tooltitle");
    export const selectRestaurent = by.css ("div[class='c-listing-loader'] section[data-restaurant-id='76710']");
    export const addProduct = by.css ("form[data-product-id='40268589']");
    export const checkOut = by.css ("button[type='submit'][form='menuCheckout']");
    export const capchaBtn = by.css ("recaptcha-checkbox-checkmark");
}

export class Login{

    async enterPostalCode (postalCode: string): Promise<any>
    {
        return element (LoginPage.postalCode).sendKeys (postalCode);
    }

    async enterUsername (username: string): Promise<any>
    {
        return element (LoginPage.username).sendKeys (username);
    }

    async enterPassword (password: string): Promise<any>
    {
        return element (LoginPage.password).sendKeys (password);
    }

    async ClickSearch (): Promise<any>
    {
        await element (LoginPage.searchBtn).click ();

        return new Home ();
    }
    async selectRestaurent (): Promise<any>
    {
        await element (LoginPage.selectRestaurent).click ();

        return new Home ();
    }
    async addMenuItems (): Promise<any>
    {
        await element (LoginPage.addProduct).click ();

        return new Home ();
    }
    async checkout (): Promise<any>
    {
        // await element (LoginPage.checkOut).click ();
        browser.actions ().mouseMove (element (LoginPage.checkOut)).click ();

        return new Home ();
    }
    async capchaHandler (): Promise<any>
    {
        await element (LoginPage.capchaBtn).click ();

        return new Home ();
    }
    async loginBtn (): Promise<any>
    {
        await element (LoginPage.loginBtn).click ();

        return new Home ();
    }

}
