import { PrototyperPage } from './app.po';

describe('prototyper App', () => {
  let page: PrototyperPage;

  beforeEach(() => {
    page = new PrototyperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
