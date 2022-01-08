const hre = require("hardhat");

const main = async () => {
  // We get the contract to deploy
  const BulkAirDrop = await hre.ethers.getContractFactory("BulkAirDrop");
  const bulkAirDrop = await BulkAirDrop.deploy("Hello, Hardhat!");

  await bulkAirDrop.deployed();

  console.log("BulkAirDrop deployed to:", bulkAirDrop.address);
}

const deploy = async () => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

deploy();
