import { BalanceUiPage } from './app.po';

describe('balance-ui App', function() {
  let page: BalanceUiPage;

  beforeEach(() => {
    page = new BalanceUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
