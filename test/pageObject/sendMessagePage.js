class SendMessagePage {
  get iconMessage() {
    return $("id:action_bar_inbox_button");
  }

  get textAccountUser() {
    return $('xpath://android.widget.TextView[@content-desc="dewimwddh"]');
  }

  get messageInput() {
    return $("id:row_thread_composer_edittext");
  }

  get textSend() {
    return $("id:row_thread_composer_button_send");
  }

  async clickIconMessage() {
    await this.iconMessage.click();
  }

  async clickTextAccountUser() {
    await this.textAccountUser.click();
  }

  async inputMessage(value) {
    await this.messageInput.click();
    await this.messageInput.setValue(value);
  }

  async clickTextSend() {
    await this.textSend.click();
  }
}

module.exports = new SendMessagePage();
