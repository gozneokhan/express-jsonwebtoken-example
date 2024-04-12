/**
 * jwt를 적용하지 않은 로그인 API
 */
import express from 'express';
import jwt from 'jsonwebtoken'; // (2)

const app = express();

app.post('/login', function async(req, res, next) {
    // (2) async
    const user = {
        // 사용자 정보
        userId: 203, // 사용자의 고유 아이디(Primart keyt)
        email: 'gozneok@gmail.com', // 사용자의 이메일
        name: '셍이', // 사용자의 이름
    };

    // (2) 사용자 정보를 JWT로 생성
    const userJWT = jwt.sign(
        user, // user 변수의 데이터를 payload에 할당
        'mysecretkey', // JWT의 비밀키를 mysecretkey라는 문자열로 할당
        { expiresIn: '1h' } //발급 후 한 시간 후 만료
    );

    // userJWT 변수를 jwt-express라는 이름을 가진 쿠키에 Bearer 토큰 형식으로 할당
    res.cookie('jwt-express', `Bearer ${userJWT}`);
    return res.status(200).end();
    // (1)
    // res.cookie('gozneok', user); // gozneok 이라는 이름을 가진 쿠키에 user 객체를 할당
    // return res.status(200).end();
});

app.listen(5002, () => {
    console.log(5002, '포트로 서버가 열렸습니다.');
});
