import {Selector} from 'testcafe';

const dropdownName = Selector("select#preferred-interface");
const dropdownOptions = dropdownName.find('option');

fixture `authentication`
.page("https://devexpress.github.io/testcafe/example/");


test("First test", async t=>{
    await t
        .click(dropdownName)
        .click(dropdownOptions.withText('Both'));
});
