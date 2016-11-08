import { NgBookPage } from './app.po';

describe('ng-book App', function() {
  let page: NgBookPage;

  beforeEach(() => {
    page = new NgBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
