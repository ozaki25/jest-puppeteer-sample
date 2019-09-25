beforeAll(async () => {
  await page.goto('http://localhost:3000');
});

afterAll(async done => {
  done();
});

describe('E2Eテスト', () => {
  it('ページが表示されること', async () => {
    const text = await page.evaluate(
      () => document.querySelector('p').textContent,
    );
    expect(text).toBe('Edit src/App.js and save to reload.');
  });
});
