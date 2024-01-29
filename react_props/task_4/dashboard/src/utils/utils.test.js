// testing utils functions
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
    it('should return the current year', () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toEqual(currentYear);
    });
  });
  
  describe('getFooterCopy function', () => {
    it('should return the correct string when the argument is true', () => {
      const result = getFooterCopy(true);
      expect(result).toEqual('Holberton School');
    });
  
    it('should return the correct string when the argument is false', () => {
      const result = getFooterCopy(false);
      expect(result).toEqual('Holberton School main dashboard');
    });
  });
  
  describe('getLatestNotification function', () => {
    it('should return a string with the latest notification content', () => {
      const result = getLatestNotification();
      expect(result).toContain('<strong>Urgent requirement</strong> - complete by EOD');
    });
  });
