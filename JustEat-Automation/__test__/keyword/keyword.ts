import { browser, by, element, ElementArrayFinder, ElementFinder, protractor } from "protractor";

export namespace CommonSelectors
{
    export const loadingIcon = by.css (".loading");
}

export class ApplicationKeywords{

    thousand: number = 1000;
    async TP<T> (ele: ElementFinder | ElementArrayFinder)
    {
        return ele as any as Promise<T>;
    }

    async waitForLoading (): Promise<any>
    {
        browser.waitForAngularEnabled (false);

        const waitTimeInSeconds = 15;
        const EC = protractor.ExpectedConditions;

        return browser.wait (EC.invisibilityOf (element (CommonSelectors.loadingIcon)),
                             waitTimeInSeconds * this.thousand,
                             "page loading should disappear");
    }
}
