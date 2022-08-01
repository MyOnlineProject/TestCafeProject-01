fixture `authentication`
.page("https://devexpress.github.io/testcafe/example/");


test("First test", async t=>{
    await t
        .setTestSpeed(0.01)
        .typeText("#developer-name","Raju")
        .click("#macos")
        .click("#submit-button")
});
