import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("StorageModule", (m) => {
  const basicStorage = m.contract("Storage");
  return { basicStorage };
});
