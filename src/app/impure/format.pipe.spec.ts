import { FormatPipe } from './format.pipe';

describe('AddPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatPipe();
    expect(pipe).toBeTruthy();
  });
});
