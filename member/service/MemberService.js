const Member = require('../entity/Member');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {DuplicateEmailError, LoginFailedError} = require('../../util/Errors');

const memberService = {
  join: async (userData) => {
    const { name, email, password } = userData;

    if (await Member.findOne({ where: { email } })) {
        throw new DuplicateEmailError();
    }

    // 비밀번호 해싱(10 : 중간 수준)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 회원 생성
    const member = await Member.create({
      name,
      email,
      password: hashedPassword
    });

    // JWT 토큰 응답
    return generateToken({ id: member.id });
  },

  login: async (id) => {
    // 회원 정보 조회
    const member = await Member.findByPk(id);
    // 비밀번호 비교
    const isPasswordValid = await bcrypt.compare(password, member.password);
    if (!member || !isPasswordValid) {
      throw new LoginFailedError();
    }

    // JWT 토큰 응답
    return generateToken({ id: member.id });;
  }
};
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, process.env.TOKEN_TIME);
};

module.exports = memberService;
