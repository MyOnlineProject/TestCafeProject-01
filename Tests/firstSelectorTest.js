import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osName = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture `authentication`
.page("https://devexpress.github.io/testcafe/example/");


test("First test", async t=>{
    await t
        .typeText(developerName,"Raju")
        .click(osName)
        .click(submitButton);
});
