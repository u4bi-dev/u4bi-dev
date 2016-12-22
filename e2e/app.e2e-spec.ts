import { U4biDevPage } from './app.po';

describe('u4bi-dev App', function() {
  let page: U4biDevPage;

  beforeEach(() => {
    page = new U4biDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
