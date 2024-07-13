const memberService = require('../service/MemberService');
const { JoinRequestDto, LoginRequestDto } = require('../dto/MemberRequestDto');

exports.join = async (req, res) => {
  try {
    console.log(req.body);
    const joinRequestDto = JoinRequestDto.validate(req.body);
    const loginResponseDto = await memberService.join(joinRequestDto);
    res.status(200).json(loginResponseDto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const loginRequestDto = LoginRequestDto.validate(req.body);
    const loginResponseDto = await memberService.login(loginRequestDto);
    res.status(200).json(loginResponseDto);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};