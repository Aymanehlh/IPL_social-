export class PasswordChecker {

    isValidPassword(password) {
        if (password.length <8) return false; 
        if (password.length >=8) return true; 
        if (!this.hasSymbol(password)) return false;
        if (this.hasSymbol(password)) return true;
    return true;
}

    hasSymbol(password) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
};}
