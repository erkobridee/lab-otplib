import { authenticator } from "otplib";

import { SECRET } from "./definitions.js";

// https://www.digitalocean.com/community/tutorials/nodejs-command-line-arguments-node-scripts
const token = process.argv.slice(2)[0];
if (!token) {
  console.log("Expected the otp code to verify!\n");
  process.exit(1);
}

const isValid = authenticator.check(token, SECRET);

console.log(`is the otp code [ ${token} ] valid? ${isValid ? "yes" : "no"}`);
