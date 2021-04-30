import config from './config';

describe('config', () => {
  it('has defaults', () => {
    expect(config.port).toBe(4247);
  });
});
