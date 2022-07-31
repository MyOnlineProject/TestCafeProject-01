fixture `authentication`
.page("https://devexpress.github.io/testcafe/example/");


test("First test", async t=>{
    await t
        .typeText("#developer-name","Raju")
        .click("#macos")
        .click("#submit-button")
});
