/**
 * jwt 기본 메서드
 */
import jwt from 'jsonwebtoken';

// jwt.sign을 통해 생성하고, jwt 안에는 myPayloadData가 들어감
const token = jwt.sign({ myPayloadData: 9999 }, 'mysecretkey');
console.log(token);
// 출력: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteVBheWxvYWREYXRhIjo5OTk5LCJpYXQiOjE3MTI5MjkxNTl9.CwNJp2dDAeq49yfgPIW9frt6gVrmhSPQFLOsexqiWCI

// jwt Payload 복호화(jwt 라이브러리의 decode(생성한 jwt) 메서드 사용)
const decodedValue = jwt.decode(token);
console.log(decodedValue); // 출력: { myPayloadData: 9999, iat: 1712929159 }

// jwt 변조 검증(jwt 라이브러리 verify()메서드 사용)
//const decodedValueByVerify = jwt.verify(token, 'mysecret'); // 출력: JsonWebTokenError: invalid signature
const decodedValueByVerify = jwt.verify(token, 'mysecretkey');
console.log(decodedValueByVerify); // 출력: { myPayloadData: 9999, iat: 1712929530 }
