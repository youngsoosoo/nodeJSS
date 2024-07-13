// dto/member.dto.js
class LoginResponseDto {
    constructor(data) {
        this.token = data.token;
    }
}
  
module.exports = LoginResponseDto;
  