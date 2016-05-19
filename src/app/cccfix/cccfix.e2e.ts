describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });


  it('should have a <video-container>', () => {
    let subject = element(by.css('video-container')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });
  it('<video-container> should have any child', () => {
    let parent = element(by.css('video-container'));
    let subject = parent.element(by.css('*')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });
  it('should have a <captions-editor>', () => {
    let subject = element(by.css('captions-editor')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });
  it('<captions-editor> should have any child', () => {
    let parent = element(by.css('captions-editor'));
    let subject = parent.element(by.css('*')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });
});
