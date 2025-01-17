export class PasswordChecker {

    isValidPassword(password) {
        if (this.hasLessThan8Numbers(password)) return false; 
        if (!this.hasSymbol(password)) return false;
        if (!this.hasNumber(password)) return false;
        return true;
    }

    hasSymbol(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }

    hasNumber(password) {
        return /[0-9]/.test(password);
    }

    hasLessThan8Numbers(password) {
        return password.length < 8;
    }
}
