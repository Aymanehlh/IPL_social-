import { PasswordChecker } from '../src/passwordChecker.js';

describe('isValidPassword', () => {
    const passwordChecker = new PasswordChecker();

    it('should return false for an empty password', () => {
        const password = '';

        const result = passwordChecker.isValidPassword(password);

        expect(result).toBe(false);
    });

});