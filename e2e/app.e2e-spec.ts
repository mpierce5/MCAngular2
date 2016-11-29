import { MCNg2TrainingPage } from './app.po';

describe('mc-ng2-training App', function() {
  let page: MCNg2TrainingPage;

  beforeEach(() => {
    page = new MCNg2TrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
