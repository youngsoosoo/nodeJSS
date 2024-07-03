const { isValidName, isValidEmail, isValidPassword } = require('../util/validator');

class JoinRequestDto {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
    }

    static validate(data) {
        isValidName(data.name);
        isValidEmail(data.email);
        isValidPassword(data.password);

        return new JoinRequestDto(data);
    }
}
  
class LoginRequestDto {
    constructor(data) {
        this.email = data.email;
        this.password = data.password;
    }

    static validate(data) {
        isValidEmail(data.email);
        isValidPassword(data.password);

        return new LoginRequestDto(data);
    }
}
  
module.exports = {
    JoinRequestDto,
    LoginRequestDto
};
  