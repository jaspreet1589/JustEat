const dateTime = Date.now ();

exports.config = {
    allScriptsTimeout: 60000,
    capabilities: {
        browserName: "chrome",
    },
    directConnect: true,
    framework: "jasmine",
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000,
        isVerbose: true,
        showColors: true,
    },
    noGlobals: false,
    specs: [
        "../spec/login.spec.ts",
    ],
    onPrepare ()
    {
        require ("ts-node").register ({
            project: "./tsconfig.json"
        });
        browser.driver.manage ().window ().maximize ();
        browser.driver.manage ().timeouts ().pageLoadTimeout (60000);
        const fs = require ("fs-extra");
        fs.emptyDir (`./report/${dateTime}/screenshots/`, (err) =>
        {
            console.log (err);
        });
        const jasmineReporters = require ("../../utilities/customreport");
        jasmine.getEnv ().addReporter (new jasmineReporters.CustomXmlReporter ({
            consolidateAll: true,
            filePrefix: "xmlresults",
            savePath: `./report/${dateTime}`,
        }));
        jasmine.getEnv ().addReporter ({
            specDone: (result) =>
            {
                // if (result.status !== "failed")
                // {
                //     return;
                // }
                browser.getCapabilities ().then ((caps) =>
                {
                    const browserName = caps.get ("browserName");
                    browser.takeScreenshot ().then ((png) =>
                    {
                        const stream = fs.createWriteStream (`./report/${dateTime}/screenshots/${browserName}-${result.id}.png`);
                        stream.write (Buffer.from (png, "base64"));
                        stream.end ();
                    });
                });
            },
        });
    },

    onComplete ()
    {
        let browserName;
        let browserVersion;
        let platform;
        let testConfig;
        const capsPromise = browser.getCapabilities ();

        capsPromise.then ((caps) =>
        {
            browserName = caps.get ("browserName");
            browserVersion = caps.get ("version");
            platform = caps.get ("platform");

            const HTMLReport = require ("../../utilities/customreport");

            testConfig = {
                browserVersion,
                modifiedSuiteName: false,
                outputFilename: "ProtractorTestReport",
                outputPath: `./report/${dateTime}`,
                reportTitle: "Protractor Test Execution Report",
                screenshotPath: "./screenshots",
                screenshotsOnlyOnFailure: false,
                testBrowser: browserName,
                testPlatform: platform,
            };
            new HTMLReport ().from (`./report/${dateTime}/xmlresults.xml`, testConfig);
        });
    },

};