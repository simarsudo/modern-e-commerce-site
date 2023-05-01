export const validateEmail = (email: string):boolean => {
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (email.match(validRegex)) {
      return true;
    }
    return false;
}

export const validatePassword = (password: string):boolean => {
    if (password.length >= 8) {
        return true
    }
    return false
}

export const validateUserName = (userName: string):boolean => {
    if (userName.length >= 3) {
        return true
    }
    return false
}
