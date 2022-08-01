import createTestCafe, { Selector } from "testcafe";

const iframe = Selector("iframe#mce_0_ifr");
const textArea = Selector("body#tinymce.mce-content-body")

fixture("launch the URL")
.page("https://the-internet.herokuapp.com/iframe");

test("iframe Test", async t=>{
    await t
        .switchToIframe(iframe)
        .click(textArea)
        .pressKey("ctrl+a delete")
        .typeText(textArea, "Hello from Raju")
        .expect(textArea.innerText).contains("Vamshi")
        .switchToMainWindow();
});
