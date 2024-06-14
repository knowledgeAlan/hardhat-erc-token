const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

 require("dotenv").config();

module.exports = buildModule("ZcdTestTwoModule",  (m) => {
      

  const token = m.contract("ZcdTestTwo", [process.env.Address]);

 
  return { token };
});