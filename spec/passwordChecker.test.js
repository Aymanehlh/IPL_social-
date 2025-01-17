import { PasswordChecker } from '../src/passwordChecker.js';

describe('isValidPassword', () => {
    const passwordChecker = new PasswordChecker();

    it('should return false for an empty password', () => {
        const password = '';

        const result = passwordChecker.isValidPassword(password);

        expect(result).toBe(false);
    });

    it('should return false for 1 password length', () => {
        const password = '1';

        const result = passwordChecker.isValidPassword(password);

        expect(result).toBe(false);
    });
    
    it('should return false for 3 password length', () => {
        const password = '123';

        const result = passwordChecker.isValidPassword(password);

        expect(result).toBe(false);
    });

    it('should return false for 8 password length', () => {
        const password = '12345678';

        const result = passwordChecker.isValidPassword(password);

        expect(result).toBe(true);
    });

    it('should return false for 9 password length', () => {
        const password = '123456789';

        const result = passwordChecker.isValidPassword(password);

        expect(result).toBe(true);
    });

});