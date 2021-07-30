import hre from "hardhat";
import { writeFileSync, readFileSync } from "fs";

const outputFilePath = `./deployments/${hre.network.name}.json`;

async function main() {
  const FarmFactory = await hre.ethers.getContractFactory("FarmFactory");
  const farmFactory = await FarmFactory.deploy();
  await farmFactory.deployed();
  console.log("FarmFactory deployed to:", farmFactory.address);

  let output = JSON.parse(readFileSync(outputFilePath, 'utf-8'));
  output.FarmFactory = farmFactory.address;
  writeFileSync(outputFilePath, JSON.stringify(output, null, 2));

  console.log(output)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
