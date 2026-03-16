import { expect } from "chai";
import { ethers } from "hardhat";
import { BasicStorage } from "../typechain-types";

describe("Storage", function () {
  it("Should store and retrieve value", async function () {
    const BasicStorage = await ethers.getContractFactory("Storage");
    const basicStorage: Storage = await Storage.deploy();
    await basicStorage.waitForDeployment();

    await basicStorage.store(42);
    expect(await basicStorage.retrieve()).to.equal(42);
  });
});