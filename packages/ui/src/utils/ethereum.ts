import { ethers } from "ethers"

export type Address = string;
export type AccountIndex = number;
export type EthereumSigner = ethers.Signer | Address | AccountIndex;
export type EthereumProvider = string | ethers.providers.ExternalProvider;
export type EthereumClient = ethers.providers.JsonRpcProvider | ethers.providers.Web3Provider;

export interface EthereumConfig {
  provider: EthereumProvider;
  signer?: EthereumSigner;
}

export class Ethereum {
  // @ts-ignore: initialized within setProvider
  private _client: EthereumClient;

  constructor(private _config: EthereumConfig) {
    const { provider, signer } = _config;

    this.setProvider(provider, signer !== undefined ? signer : 0);
  }

  public setProvider(
    provider: EthereumProvider,
    signer?: EthereumSigner
  ): void {
    this._config.provider = provider;

    if (typeof provider === "string") {
      this._client = new ethers.providers.JsonRpcProvider(provider);
    } else {
      this._client = new ethers.providers.Web3Provider(provider);
    }

    if (signer !== undefined) {
      this.setSigner(signer);
    }

    void this._client
      .getSigner(0)
      .getAddress()
      .then((address) => console.log("SIGNER: " + address));
  }

  public setSigner(signer: EthereumSigner): void {
    if (typeof signer === "string") {
      this._config.signer = ethers.utils.getAddress(signer);
    } else if (ethers.Signer.isSigner(signer)) {
      this._config.signer = signer;

      if (signer.provider !== this._config.provider) {
        throw Error(
          `Signer's connected provider does not match the config's ` +
            `provider. Please call "setProvider(...)" before calling ` +
            `"setSigner(...)" if a different provider is desired.`
        );
      }
    } else {
      this._config.signer = signer;
    }
  }

  public getSigner(): ethers.Signer {
    const { signer } = this._config;

    if (this._config.signer === undefined) {
      throw Error("Signer is undefined, this should never happen.");
    }

    if (typeof signer === "string" || typeof signer === "number") {
      return this._client.getSigner(signer);
    } else if (ethers.Signer.isSigner(signer)) {
      return signer;
    } else {
      throw Error(
        `Signer is an unrecognized type, this should never happen. \n${signer}`
      );
    }
  }

  public getContract(address: Address, abi: string[]): ethers.Contract {
    return new ethers.Contract(address, abi, this.getSigner());
  }

  public async deployContract(
    abi: ethers.ContractInterface,
    bytecode: string,
    ...args: unknown[]
  ): Promise<Address> {
    const signer = this.getSigner();
    const factory = new ethers.ContractFactory(abi, bytecode, signer);
    const contract = await factory.deploy(...args);
    await contract.deployTransaction.wait();
    return contract.address;
  }

  public async callView(
    address: Address,
    method: string,
    args: string[]
  ): Promise<string> {
    const contract = this.getContract(address, [method]);
    const funcs = Object.keys(contract.interface.functions);
    const res = await contract[funcs[0]](...args);
    return res.toString();
  }

  public async sendTransaction(
    address: Address,
    method: string,
    args: (string | Record<string, string | number> )[]
  ): Promise<any> {
    const contract = this.getContract(address, [method]);
    const funcs = Object.keys(contract.interface.functions);
    try {
      const tx = await contract[funcs[0]](...args);
      return await tx.wait();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}