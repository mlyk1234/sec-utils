import { IDexSwap, IIndexFund, ILiquidity, Securo } from "./src"


async function main() {

    const test = new Securo("13fb9206-933d-4d68-Ad93-E28ad94eca74", "38199f608ff20edf91530990f9796c90c188d12aabcfb252d086082dd4e1a683");
    // const prod = await test.indexFund.getProducts()
    // console.log(prod)

    // const body: IIndexFund = {
    //     product: "LCI",
    //     type: "deposit",
    //     amount: "1",
    //     userEmail: "leeyondking1997@hotmail.com",
    //     successURL: "http://localhost:3000/complete",
    //     cancelURL: "http://localhost:3000/"
    // };

    // const fund = await test.indexFund.createSession(body)
    // console.log(fund)

    // const price = await test.indexFund.getPriceOf("LCI");
    // console.log(price)

    // const pool = await test.indexFund.getPoolValueOf("BNI");
    // console.log(pool)

    // const WBTCtokenPrice = await test.dexSwap.getTokenPrice('WBTC');
    // console.log(WBTCtokenPrice)
    // const tokenAddress = await test.dexSwap.getTokenAddress(5, 'ETH');
    // console.log(tokenAddress)
    // const estimate = await test.dexSwap.getEstimatedSwap("goerli", "WBTC", "USDC", "0.01");
    // console.log(estimate)
    // const lpAmount = await test.dexSwap.getLiquidity("goerli", "WBTC", "USDC", 0.01);
    // console.log(lpAmount)

    // const body: IDexSwap = {
    //     tokenIn :"USDC",
    //     tokenOut: "WBTC",
    //     amount: "100",
    //     chain:"optimismTestnet",
    //     isNative: false,
    //     slippagePercentage: "5",
    //     exactIn: true,
    //     userEmail: "leeyondking1997@hotmail.com",
    //     successURL: "https://google.com",
    //     cancelURL: "https://google.com"
    // };

    // const fund = await test.dexSwap.createSwapSession(body)
    // console.log(fund)

    // const body: ILiquidity = {
    //     "pair":"WBTC-USDC",
    //     "amount0": "0.000095",
    //     "amount1": "1.60300",
    //     "chain": "bscTestnet",
    //     "isNative": false,
    //     "addLiquidity": true,
    //     "userEmail": "leeyondking1997@hotmail.com",
    //     "successURL": "https://google.com",
    //     "cancelURL": "https://google.com"
    // };

    // const addLiquidity = await test.dexSwap.createLiquiditySession(body)
    // console.log(addLiquidity)

    // const allSessions = await test.getSession();
    // console.log(allSessions)

    // const oneSessions = await test.getSession("VTJGc2RHVmtYMSt2SEFlcUNzWHppRzNhNW1XQTdSa25mQUN5ZjVkNW4zZ2xWNUdRUTFpQWZDWlJLc3ZOQXpkag==");
    // console.log(oneSessions)

    // const expireSession = await test.expireSession("VTJGc2RHVmtYMSt2SEFlcUNzWHppRzNhNW1XQTdSa25mQUN5ZjVkNW4zZ2xWNUdRUTFpQWZDWlJLc3ZOQXpkag==");
    // console.log(expireSession)

    // const getPaymentCountries = await test.fiatToCrypto.getPaymentCountries();
    // console.log(getPaymentCountries)

    // const getPaymentCryptoCurrencies = await test.fiatToCrypto.getPaymentCryptoCurrencies();
    // console.log(getPaymentCryptoCurrencies)

    // const getFiatCurrencies = await test.fiatToCrypto.getFiatCurrencies();
    // console.log(getFiatCurrencies)

    const body = {

    }
    // const getEstimatedCurrencyRate = await test.fiatToCrypto.getEstimatedCurrencyRate(
    //     {
    //         cryptoAmount: 1,
    //         fiatAmount: 2,
    //         cryptoCurrency: "ETH",
    //         fiatCurrency: "USD",
    //         isBuyOrSell: "BUY",
    //         network: "ethereum",
    //         paymentMethod: "credit_debit_card"
    //     }
    // );
    // console.log(getEstimatedCurrencyRate)

    // const createPaymentRequest = await test.fiatToCrypto.createPaymentRequest(
    //     {
    //         network: "solana",
    //         walletAddress: "0xC6c1663165A4CC686569ceEE4795FF34598713e7",
    //         emailAddress: "leeyondking1997@hotmail.com",
    //         trxType: "Buy",
    //         fiatCurrency: "SGD",
    //         fiatAmount: 1,
    //         cryptoCurrency: "SOL",
    //         redirectURL: "https://google.com",
    //         isDisableCrypto: false,
    //         cancellationUrl: "https://youtube.com",
    //         paymentMethod: "credit_debit_card"
    //     }
    // );
    // console.log(createPaymentRequest)

    // const expirePaymentRequest = await test.fiatToCrypto.expirePaymentRequest("9261-305274-8667");
    // console.log(expirePaymentRequest)

    // const getPaymentHistory = await test.fiatToCrypto.getPaymentHistory({
    //     txType: "Buy",
    //     fiatCurrency: "SGD",
    //     status: ["success", "void"]
    // });
    // console.log(getPaymentHistory)

    const getByInvoiceId = await test.fiatToCrypto.getByInvoiceId("9261-305274z-8667")
    console.log(getByInvoiceId)
}

main()