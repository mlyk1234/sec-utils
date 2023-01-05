import { IDexSwap, IIndexFund, ILiquidity, Securo } from "./src"


async function main() {

    // const test = new Securo("13fb9206-933d-4d68-Ad93-E28ad94eca74", "38199f608ff20edf91530990f9796c90c188d12aabcfb252d086082dd4e1a683");
    // test.sandboxMode();
    const test = new Securo("6baf9e9d-afa6-4985-abbb-d298b6611953", "db32293d5d35fe83f390c8eac09c6c157b746109a1fca40023188b5cd6621dc6");
    test.maintenanceMode();
    // const prod = await test.indexFund.getPriceOf("MWI")
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

    // const fund = await test.dexSwap.getTokenAddress(5,"ETH")
    // console.log(fund)

    // try {
    //     const body: IDexSwap = {
    //         tokenIn :"USDC",
    //         tokenOut: "WBTC",
    //         amount: "100",
    //         chain:"optimismTestnet",
    //         isNative: false,
    //         slippagePercentage: "5",
    //         exactIn: true,
    //         userEmail: "leeyondking1997@hotmail.com",
    //         successURL: "https://google.com",
    //         cancelURL: "https://google.com"
    //     };
    
    //     const fund = await test.dexSwap.createSwapSession(body)
    //     console.log(fund)
    // } catch (error) {
    //     console.log(error)
    // }


    try {
        const body: ILiquidity = {
            "pair":"WBTC-USDC",
            "amount0": "0.001",
            "amount1": "67.717571",
            "chain": "fuji",
            "isNative": false,
            "addLiquidity": true,
            "userEmail": "morganlyk97@gmail.com",
            "successURL": "https://google.com",
            "cancelURL": "https://google.com"
        };
    
        const addLiquidity = await test.dexSwap.createLiquiditySession(body)
        console.log(addLiquidity)
    } catch (error) {
        console.log(error)
    }


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

    // try {
    //     const createPaymentRequest = await test.fiatToCrypto.createPaymentRequest(
    //         {
    //             network: "solanass",
    //             walletAddress: "0xC6c1663165A4CC686569ceEE4795FF34598713e7",
    //             emailAddress: "leeyondking1997@hotmail.com",
    //             trxType: "Buy",
    //             fiatCurrency: "SGD",
    //             fiatAmount: 41,
    //             cryptoCurrency: "SOL",
    //             redirectURL: "https://google.com",
    //             isDisableCrypto: false,
    //             cancellationUrl: "https://youtube.com",
    //             paymentMethod: "credit_debit_card"
    //         }
    //     );
    //     console.log(createPaymentRequest)
    // } catch (error) {
    //     console.log(error)
    // }


    // const expirePaymentRequest = await test.fiatToCrypto.expirePaymentRequest("9261-305274-8667");
    // console.log(expirePaymentRequest)

    // const getPaymentHistory = await test.fiatToCrypto.getPaymentHistory({
    //     txType: "Buy",
    //     fiatCurrency: "SGD",
    //     status: ["success", "void"]
    // });
    // console.log(getPaymentHistory)
    // test.sandboxMode();
    // const getByInvoiceId = await test.fiatToCrypto.getByInvoiceId("9261-305274-8667");
    // console.log(getByInvoiceId)
}

main()