import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osName = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture.meta('version','1.0') `authentication`
.page("https://devexpress.github.io/testcafe/example/");


test.meta('environment','production')("First test", async t=>{
    await t
        .typeText(developerName,"Raju")
        .click(osName)
        .click(submitButton);
});

test.meta('environment','UAT')("second test", async t=>{
    await t
        .typeText(developerName,"Raju")
        .click(osName)
        .click(submitButton);
});

