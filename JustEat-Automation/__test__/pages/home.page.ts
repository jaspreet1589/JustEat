import { by, element, ElementFinder } from "protractor";
import { ApplicationKeywords } from "../keyword/keyword";

export namespace HomePage
{
    export const headingTitle = by.css ("h1.tooltitle");
    export const myProfileTitle = by.className ("divtitle");

}
export class Home extends ApplicationKeywords{

    async getMyProfileText (): Promise<string>
    {
        const myProfile: ElementFinder = await this.TP (element (HomePage.myProfileTitle));

        return myProfile.getText ();
    }

    async getPageHeadingTitle (): Promise<string>
    {
        return element (HomePage.headingTitle).getText ();
    }

}
