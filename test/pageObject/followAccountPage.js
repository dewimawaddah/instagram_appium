class FollowAccountPage {
  get tabSearch() {
    return $("id:search_tab");
  }

  get textFieldSearch() {
    return $("id:action_bar_search_edit_text");
  }

  get textUsername() {
    return $("id:row_search_user_username");
  }

  get buttonFollow() {
    return $("id:profile_header_follow_button");
  }

  get textFollowing() {
    return $('xpath://android.widget.Button[@content-desc="Mengikuti SanberCode"]');
  }

  async clickTabSearch() {
    await this.tabSearch.click();
  }

  async inputSearch(username) {
    await this.textFieldSearch.click();
    await this.textFieldSearch.setValue(username);
  }

  async clickUsernameAccount() {
    await this.textUsername.click();
  }

  async clickButtonFollow() {
    await this.buttonFollow.click();
  }

  async assertFollow() {
    return this.textFollowing.getAttribute("text");
  }
}

module.exports = new FollowAccountPage();
