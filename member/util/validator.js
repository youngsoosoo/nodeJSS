const validator = require('validator');

module.exports = {
    isValidName: (name) => {
        if (!validator.isLength(name, { min: 1 })) {
            throw new Error('이름을 올바르게 입력해주세요.');
        }
        return true;
    },
    isValidEmail: (email) => {
        if (!validator.isEmail(email)) {
            throw new Error('이메일을 올바르게 입력해주세요.');
        }
        return true;
    },
    isValidPassword: (password) => {
        if (!validator.isLength(password, { min: 8 })) {
            throw new Error('비밀번호를 최소 8자 이상 입력해주세요.');
        }
        return true;
    },
};