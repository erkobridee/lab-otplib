// https://github.com/yeojz/otplib
import { authenticator } from "otplib";

// https://github.com/yeojz/otplib#length-of-secrets
const secret = authenticator.generateSecret(20);

console.log(`otp secret: ${secret}\n`);

const user = "user@domain.ext";
const service = "nodejs";

const otpauth = authenticator.keyuri(user, service, secret);

console.log(`otpauth:\n\n${otpauth}\n`);
