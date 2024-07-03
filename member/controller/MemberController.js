const memberService = require('../service/MemberService');
const { JoinRequestDto, LoginRequestDto } = require('../dto/MemberRequestDto');
const LoginResponseDto = require('../dto/MemberResponseDto');

exports.join = async (req, res) => {
  try {
    console.log(req.body);
    const joinRequestDto = JoinRequestDto.validate(req.body);
    const loginResponseDto = new LoginResponseDto(await memberService.join(joinRequestDto));
    console.log(loginResponseDto);
    res.status(200).json(loginResponseDto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const loginRequestDto = LoginRequestDto.validate(req.body);
    const loginResponseDto = new LoginResponseDto(await memberService.login(loginRequestDto));
    res.status(200).json(loginResponseDto);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};