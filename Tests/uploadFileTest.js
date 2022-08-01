import { Selector } from "testcafe";

const chooseFile = Selector("input#file-upload");
const uploadButton = Selector("input#file-submit");


fixture("Navigate to URL")
.page("https://the-internet.herokuapp.com/upload");

test("File Upload Test", async t=>{
    await t
        .setFilesToUpload(chooseFile,"../Upload/Skoda-Slavia-150320221202.jpg")
        .click(uploadButton);
});