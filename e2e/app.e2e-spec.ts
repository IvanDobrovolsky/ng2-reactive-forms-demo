import { Ng2ReactiveFormsDemoPage } from './app.po';

describe('ng2-reactive-forms-demo App', function() {
  let page: Ng2ReactiveFormsDemoPage;

  beforeEach(() => {
    page = new Ng2ReactiveFormsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
