
![Logo](https://gateway.pinata.cloud/ipfs/QmQ4J1gaUkyUH5471WuNo15a6XorZUDPzvzrVbUZ8KRpDm)


## Socials
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/securo_dev)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/securo-dev/)

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
- **createSession(body)** - Initiate invest session to a specific index [See Usage above]
- getProducts() - Return all indexes product
- getPriceOf("Product_Name") - Return price of a index
- getPoolValueOf("Product_Name") - Return pool value of index

### DeX Swap
- **createSwapSession(body)** - Initiate swapping session
- **createLiquiditySession(body)** - Initiate deposit/withdraw into liquidity provider session
- getSupportedTokens("chain") - Return supported tokens of a chain - [Reference](https://securo.readme.io/reference/dexswap-overview)
- getSupportedPools("chain") - Return supported pools of a chain
- getTokenPrice("token_symbol") - Return supported token price
- getTokenAddress("token_symbol") - Return token address
- getEstimatedSwap(..., ..., ...) - Return estimated swap fees
- getLiquidity(..., ..., ...) - Return liquidity pool value

### Session Handling
- getSession("sessionId" || null) - Return all sessions or a specific session by sessionId
- expireSession("sessionId") - Expire a specific session details by sessionId


### Fiat-To-Crypto
- **createPaymentRequest({...})** - Initiate payment session
- **expirePaymentRequest("invoiceId")** - Expire an active payment session
- getPaymentCountries() - Return supported countries payment
- getPaymentCryptoCurrencies() - Return supported List of Cryptocurrencies
- getFiatCurrencies() - Return supported Fiat
- getEstimatedCurrencyRate({...}) - Return estimated rate of exchange amount fiat-crypto
- getPaymentHistory({...}) - Return payment history [Optional: Can be queried]
- getByInvoiceId("invoiceId") - Return payment details by invoiceId


## Tutorials

### How to build DeFi Exchange Swap via Securo API

```javascript
    const body: IDexSwap = {
        tokenIn :"USDC",
        tokenOut: "WBTC",
        amount: "100",
        chain:"optimismTestnet",
        isNative: false,
        slippagePercentage: "5",
        exactIn: true,
        userEmail: "ibuildtoswap@mail.com",
        successURL: 'https://myownwebsite.com/success',
        cancelURL: 'https://myownwebsite.com/home',
    };

    const fund = await test.dexSwap.createSwapSession(body)
```
Output
```json
{
    sessionId: 'VTJGc2RHVmtYMS9sSHBNK0dEckoxSGFaREdYNkZBUnJPQ0wwTEJHWjJua2ZLZlozVWhrdE93d0hZTCtHN0xWSw==',
    orderId: '9261-375699-8591',
    successURL: 'https://myownwebsite.com/success',
    cancelURL: 'https://myownwebsite.com/home',
    userEmail: 'ibuildtoswap@mail.com',
    type: 'dex_swap',
    status: 'open',
    livemode: false,
    createdDate: '2023-01-05T16:05:11.539Z',
    expireDate: '2023-01-06T16:05:11.539Z',
    amount: '100.000000000000000000',
    chainId: 420,
    apiKey: { id: 32 },
    product: { id: 4 },
    id: 177,
    updatedDate: '2023-01-05T16:05:11.548Z',
    transactionHashes: [],
    value: '0.000000000000000000',
    usdAmount: 0,
    url: 'https://sandbox-gateway.securo.dev/?session=VTJGc2RHVmtYMS9sSHBNK0dEckoxSGFaREdYNkZBUnJPQ0wwTEJHWjJua2ZLZlozVWhrdE93d0hZTCtHN0xWSw==',
    additionalParams: {
        tokenIn: 'USDC',
        tokenOut: 'WBTC',
        slippagePercentage: '5',
        chainId: 420,
        isNative: false,
        exactIn: true
    }
}
```

### How to build Liquidity Provider via Securo API

```javascript
    const body: ILiquidity = {
        pair:"WBTC-USDC",
        amount0: "0.000095",
        amount1: "1.60300",
        chain: "bscTestnet",
        isNative: false,
        addLiquidity: true,
        userEmail: "leeyondking1997@hotmail.com",
        successURL: 'https://myownwebsite.com/success',
        cancelURL: 'https://myownwebsite.com/home',
    };

    const addLiquidity = await test.dexSwap.createLiquiditySession(body)
    console.log(addLiquidity)
```
Output
```json
{
    sessionId: 'VTJGc2RHVmtYMThKK3NYZk1tb252a0VGSEwzLy9YbzR5eFd2MjRQdjFTZG5ydEw4T3dtd082MTlPblhTUTdFaw==',
    orderId: '9261-378095-6852',
    successURL: 'https://myownwebsite.com/success',
    cancelURL: 'https://myownwebsite.com/home',
    userEmail: 'leeyondking1997@hotmail.com',
    type: 'dex_liquidity',
    status: 'open',
    livemode: false,
    createdDate: '2023-01-05T16:10:14.752Z',
    expireDate: '2023-01-06T16:10:14.752Z',
    amount: '0.000000000000000000',
    chainId: 97,
    apiKey: { id: 32 },
    product: { id: 5 },
    id: 178,
    updatedDate: '2023-01-05T16:10:14.762Z',
    transactionHashes: [],
    value: '0.000000000000000000',
    usdAmount: 0,
    url: 'https://sandbox-gateway.securo.dev/?session=VTJGc2RHVmtYMThKK3NYZk1tb252a0VGSEwzLy9YbzR5eFd2MjRQdjFTZG5ydEw4T3dtd082MTlPblhTUTdFaw==',
    additionalParams: {
        pair: 'WBTC-USDC',
        amount0: '0.000095000000000000',
        amount1: '1.602999999999999980',
        addLiquidity: true,
        chainId: 97,
        isNative: false
    }
}
```

### How to create my own Fiat-to-Crypto (on-ramp) Payment via Securo API

```javascript
    const body: ILiquidity = {
        "pair":"WBTC-USDC",
        "amount0": "0.000095",
        "amount1": "1.60300",
        "chain": "bscTestnet",
        "isNative": false,
        "addLiquidity": true,
        "userEmail": "business@shopping.com",
        "successURL": "https://shopping.com/success",
        "cancelURL": "https://shopping.com/home"
    };

    const addLiquidity = await test.dexSwap.createLiquiditySession(body)
    console.log(addLiquidity)
```
Output
```json
{
  tokenUsed: 'SOL',
  fiatCurrencyUsed: 'SGD',
  status: 'P',
  trxType: 'Buy',
  walletAddress: '0xC6c1663165A4CC686569ceEE4795FF34598713e7',
  network: 'solana',
  invoiceId: '0259-340468-4622',
  webviewURL: 'https://test-api.securo.dev/payment-view/VTJGc2RHVmtYMStrZ2QxTUxnYWpmVVpGVWJVVytJY3ovbElhZGRNampPMlhJQU9KTUlOQ2dNcGVPYkFEdFEwSQ==',
  expiredDate: '2023-01-06T17:56:48.407Z',
  fiatAmount: 41,
  redirectURL: 'https://shopping.com/success',
  cancellationURL: 'https://shopping.com/home',
  createdAt: 1672941408407,
  isDisableCrypto: false,
  paymentMethod: 'credit_debit_card',
  provider: { providerName: 'Transak' },
  userEmailAddress: 'business@shopping.com'
}
```
## Support

For support, email hello@securo.dev.

