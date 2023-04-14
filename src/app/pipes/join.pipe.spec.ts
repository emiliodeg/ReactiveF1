import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  let pipe: JoinPipe;

  beforeEach(() => {
    pipe = new JoinPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return nothing', () => {
      const result = pipe.transform([], '');

      expect(result).toBe('');
    });

    it('should contains hello', () => {
      const someKey = 'hello';
      const result = pipe.transform([{ someKey }], 'someKey');

      expect(result).toContain(someKey);
    });

    it('should contains hello and world', () => {
      const result = pipe.transform(
        [{ someKey: 'hello' }, { someKey: 'world', otherKey: 'moon' }],
        'someKey'
      );

      expect(result).toContain('hello');
      expect(result).toContain('world');
    });
  });
});
