import { AnoChatPage } from './app.po';

describe('ano-chat App', () => {
  let page: AnoChatPage;

  beforeEach(() => {
    page = new AnoChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
