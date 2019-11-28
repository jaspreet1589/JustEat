import { browser } from "protractor";
import { Home } from "../pages/home.page";
import { Login } from "../pages/login.page";
import { TestData } from "../testData";

describe (" Use the website to find restaurants ", () =>
{
    const url = TestData.proSyncUrlQA;
    const login: Login = new Login ()
    const fiveThousand = 5000;
    it ("Open Just Eat Website", async () =>
    {
        browser.waitForAngularEnabled (false);
        browser.get (TestData.appURL, 30000);
        browser.waitForAngularEnabled (false);
        await browser.sleep (fiveThousand);
        expect (browser.getCurrentUrl ()).toEqual (TestData.appURL);
    });

    it ("Search for restaurants in an area based on Postal Code", async () =>
    {
        // const login: Login = new Login ();
        await login.enterPostalCode (TestData.postalCode);
        // await login.enterPassword (TestData.password);
        await login.ClickSearch ();
        await browser.sleep (fiveThousand);
        browser.waitForAngularEnabled (false);

    });
    it ("Selecting restaurent from the search results", async () =>
    {
        await login.selectRestaurent ();
        browser.waitForAngularEnabled (false);
        await browser.sleep (fiveThousand);
    });
    it ("Adding items into Cart", async () =>
    {
        await login.addMenuItems ();
        browser.waitForAngularEnabled (false);
        await browser.sleep (fiveThousand);
    });
    it ("Checkout", async () =>
    {
        await browser.waitForAngularEnabled (false);
        await login.checkout ();
        await browser.sleep (fiveThousand);
    });
    it ("Enter Username", async () =>
    {
        await login.enterUsername (TestData.username);
        browser.waitForAngularEnabled (false);
        await browser.sleep (fiveThousand);
    });
    it ("Enter password", async () =>
    {
        await login.enterPassword (TestData.password);
        browser.waitForAngularEnabled (false);
        await browser.sleep (fiveThousand);
    });
    xit ("Capcha handler", async () =>
    {
        await login.capchaHandler ();
        browser.waitForAngularEnabled (false);
        await browser.sleep (fiveThousand);
    });
    it ("Login ", async () =>
    {
        await login.loginBtn ();
        browser.waitForAngularEnabled (false);
        await browser.sleep (fiveThousand);
    });

});
