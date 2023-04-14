import { Driver } from '../model/driver.model';
import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  let pipe: FullNamePipe;
  beforeEach(() => {
    pipe = new FullNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return full name of a driver', () => {
      const driver = {
        familyName: 'Doe',
        givenName: 'John',
        code: '42'
      }

      const result = pipe.transform(driver);

      expect(result).toContain(driver.familyName)
      expect(result).toContain(driver.givenName)
    })
  })
});
