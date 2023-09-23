const { delay } = require("../../helper/delayHelper.js");
const followAccountPage = require("../pageObject/followAccountPage.js");

describe("test fitur follow", () => {
  it("success follow account", async () => {
    await delay(1000);
    await followAccountPage.clickTabSearch();
    await followAccountPage.inputSearch("sanbercode");
    await followAccountPage.clickUsernameAccount();
    await followAccountPage.clickButtonFollow();

    const follow = await followAccountPage.assertFollow();
    await expect(follow).toContain("Mengikuti");
  });
});
