import { users } from "../../data/user";
// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');


// const simpleHash = str => {
//     let hash = 0;
//     for (let i = 0; i < str.length; i++) {
//         const char = str.charCodeAt(i);
//         hash = (hash << 5) - hash + char;
//         hash &= hash; // Convert to 32bit integer
//     }
//     return new Uint32Array([hash])[0].toString(36);
// };

const generateToken = (payload) => {
    const { id, email } = payload;
    // console.log("ENV", process.env.private_key);
    const accessToken = jwt.sign({ id, email },
        process.env.private_key
    );
    // const accessToken = email + password + Math.floor(Math.random() * 10);
    return accessToken;

};

export default async function handler(req, res) {

    // const auth = await req.headers.authorization;
    const success = await users.find((user) => user.email == req.body.email && user.password == req.body.password);

    if (success) {
        const token = generateToken(success);
        res.status(200).json({ success: true, user: success, token: token });
    }
    else {
        res
            .status(400)
            .json({ success: false, message: `Login failed, please try again!!` })
    }

}