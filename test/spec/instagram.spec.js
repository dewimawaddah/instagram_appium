const { delay } = require("../../helper/delayHelper.js");
const followAccountPage = require("../pageObject/followAccountPage.js");
const sendMessagePage = require("../pageObject/sendMessagePage");

describe("test fitur follow", () => {
  it("success follow account", async () => {
    await delay(5000);
    await followAccountPage.clickTabSearch();
    await followAccountPage.inputSearch("sanbercode");
    await followAccountPage.clickUsernameAccount();
    await followAccountPage.clickButtonFollow();

    const follow = await $("id:profile_header_follow_button");
    await expect(follow).toHaveText("Mengikuti");

    await followAccountPage.clickTabHome();
  });

  it("success send message", async () => {
    await delay(5000);
    await sendMessagePage.clickIconMessage();
    await sendMessagePage.clickTextAccountUser();
    await sendMessagePage.inputMessage("welcome");
    await sendMessagePage.clickTextSend();

    const message = await $("id:thread_title");
    await expect(message).toHaveText("dewimwddh");
  });
});
