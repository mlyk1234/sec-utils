
![Logo](https://gateway.pinata.cloud/ipfs/QmQ4J1gaUkyUH5471WuNo15a6XorZUDPzvzrVbUZ8KRpDm)



[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/daoventures)


### A complete and seamless Securo Library for interacting with Securo utilities in Javascript.
### Features
- Index Fund Integration [Reference](https://securo.readme.io/reference/index-funds-overview)
- DeX Swap Integration [Reference](https://securo.readme.io/reference/dexswap-overview)
- Liquidity Provider Integration [Reference](https://securo.readme.io/reference/create-liquidity-session)
- Fiat-To-Crypto Integration [Reference](https://securo.readme.io/reference/payment-overview)
## Installation

```bash
  npm i test-securo
```


## Usage
```javascript
  /// ESM6
  import { Securo } from "test-securo";
```
### How to perform Index Fund
- To get products
```javascript
  const securo = new Securo("APIKEY", "SECRETKEY");
  const getIndexProducts = securo.indexFund.getProducts();
  // This will return all available Index Fund Products
```
- To invest in LCI (Low-Risk Crypto Index)
```javascript
  // ...continue
  const body: IIndexFund = {
      product: "LCI",
      type: "deposit",
      amount: "10",
      userEmail: "developer@mail.com",
      successURL: "http://localhost:3000/complete",
      cancelURL: "http://localhost:3000/"
  };

  const getIndexProducts = securo.indexFund.createSession(body);
  // That's all!
```
### Sandbox Mode
```javascript
  // ...continue
  const securo = new Securo("APIKEY", "SECRETKEY");
  securo.sandboxMode(); // Just add this to activate sandbox mode
  const getIndexProducts = securo.indexFund.getProducts();
  // That's all!
```
## Documentation

### Index Funds
- getProducts() - Return all indexes product
- getPriceOf("Product_Name") - Return price of a index
- getPoolValueOf("Product_Name") - Return pool value of index
- createSession(body) - Invest to a specific index [See Usage above]

### DeX Swap
- getSupportedTokens("chain") - Return supported tokens of a chain - [Reference](https://securo.readme.io/reference/dexswap-overview)
- getSupportedPools("chain") - Return supported pools of a chain
- getTokenPrice("token_symbol") - Return supported token price
- getTokenAddress("token_symbol") - Return token address
- getEstimatedSwap(..., ..., ...) - Return estimated swap fees
- getLiquidity(..., ..., ...) - Return liquidity pool value
- createSwapSession(body) - Instantiate swapping session
- createLiquiditySession(body) - Instantiate deposit/withdraw into liquidity provider session

### Fiat-To-Crypto
- To be updated

[Documentation - Coming soon]


## Socials
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/securo_dev)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/securo-dev/)