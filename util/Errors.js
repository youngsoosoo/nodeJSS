const errorMessages = {
    DUPLICATE_EMAIL: '이미 존재하는 이메일 입니다.',
    LOGIN_FAILED: '회원을 찾을 수 없습니다.',
    INVALID_TOKEN: '토큰이 유효하지 않습니다.'
};

class DuplicateEmailError extends Error {
    constructor(message = errorMessages.DUPLICATE_EMAIL) {
      super(message);
      this.name = 'DuplicateEmailError';
      this.status = 409; // HTTP 400 Bad Request
    }
  }

class LoginFailedError extends Error {
  constructor(message = errorMessages.LOGIN_FAILED) {
    super(message);
    this.name = 'LoginFailedError';
    this.status = 401; // HTTP 404 Not Found
  }
}
  
  module.exports = { DuplicateEmailError, LoginFailedError };
  