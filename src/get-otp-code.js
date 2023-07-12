import { authenticator } from "otplib";

import { SECRET } from "./definitions.js";

const otpCode = authenticator.generate(SECRET);
const timeRemaining = authenticator.timeRemaining();
const timeUsed = authenticator.timeUsed();

const message = `otp code: ${otpCode}
time remaining: ${timeRemaining} s 
time used: ${timeUsed} s
`;

console.log(message);
