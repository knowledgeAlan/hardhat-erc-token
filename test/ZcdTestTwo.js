const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
const { decrypt } = require("dotenv");

  // import "hardhat/console.sol";

  describe("ZcdTestTwo",function () {

    async function deployStart(){

        
        const [owner, otherAccount] = await ethers.getSigners();
    
        const zcdTestTwocontract = await ethers.getContractFactory("ZcdTestTwo");

        const deployAddress = await zcdTestTwocontract.deploy(owner);
    
        return {  owner, otherAccount,deployAddress };
    }

 
    describe("Deployment", function () {
      it("Deploy owner", async function () {
        const { owner, otherAccount,deployAddress } = await loadFixture(deployStart);
  
        expect(await deployAddress.owner()).to.equal(owner.address);
      });
      it("Deploy public owner", async function () {
        const { owner, otherAccount,deployAddress } = await loadFixture(deployStart);
  
        expect(await deployAddress.ownerTest()).to.equal(owner.address);
      });
       
    });
    
  });