export interface IIndexFund {
    product: string;
    type: string;
    amount: string;
    userEmail: string;
    successURL: string;
    cancelURL: string;
}
export interface IDexSwap {
    chain: string;
    tokenIn: string;
    tokenOut: string;
    isNative?: boolean;
    exactIn?: boolean;
    amount: string;
    slippagePercentage?: string;
    userEmail: string;
    successURL?: string;
    cancelURL?: string;
}
export interface ILiquidity {
    chain: string;
    pair: string;
    addLiquidity: boolean;
    amount0: string;
    amount1: string;
    isNative?: boolean;
    userEmail: string;
    successURL?: string;
    cancelURL?: string;
}
export interface ICurrencyRate {
    cryptoAmount?: number;
    fiatAmount?: number;
    cryptoCurrency: string;
    fiatCurrency: string;
    isBuyOrSell: string;
    network: string;
    paymentMethod: string;
}
export interface IPaymentRequest {
    network: string;
    walletAddress: string;
    emailAddress: string;
    trxType: string;
    fiatCurrency: string;
    fiatAmount?: number;
    cryptoCurrency: string;
    redirectURL?: string;
    cryptoAmount?: number;
    isDisableCrypto?: boolean;
    cancellationUrl?: string;
    paymentMethod: string;
}
export interface IPaymentHistory {
    page?: number;
    limit?: number;
    orderBy?: string;
    orderSequence?: number;
    txType?: string;
    network?: string;
    emailAddress?: string;
    paymentMethod?: string;
    walletAddress?: string;
    fiatCurrency?: string;
    cryptoCurrency?: string;
    status?: Array<string>;
    fromDate?: number;
    toDate?: number;
}
export declare class Securo {
    email: string;
    apiKey: string;
    secretKey: string;
    indexFundUtil: Object;
    anything: string;
    constructor(apiKey: string, secretKey: string);
    getVersion(): {
        test: () => string;
    };
    getSession: (sessionId?: string | null) => Promise<any>;
    expireSession: (sessionId: string) => Promise<any>;
    indexFund: {
        getProducts: () => Promise<any>;
        getPriceOf: (type: string) => Promise<any>;
        getPoolValueOf: (type: string) => Promise<any>;
        createSession: (body: IIndexFund) => Promise<any>;
    };
    dexSwap: {
        getSupportedTokens: (chain: string) => Promise<any>;
        getSupportedPools: (chain: string) => Promise<any>;
        getTokenPrice: (token: string) => Promise<any>;
        getTokenAddress: (chainId: number, token: string) => Promise<any>;
        getEstimatedSwap: (chain: string, tokenIn: string, tokenOut: string, enteredAmount: string, slippagePerc?: number, exactIn?: boolean, chainId?: number) => Promise<any>;
        getLiquidity: (chain: string, tokenA: string, tokenB: string, amountA: number) => Promise<any>;
        createSwapSession: (body: IDexSwap) => Promise<any>;
        createLiquiditySession: (body: ILiquidity) => Promise<any>;
    };
    fiatToCrypto: {
        getPaymentCountries: () => Promise<any>;
        getPaymentCryptoCurrencies: () => Promise<any>;
        getFiatCurrencies: () => Promise<any>;
        getEstimatedCurrencyRate: (body: ICurrencyRate) => Promise<any>;
        createPaymentRequest: (body: IPaymentRequest) => Promise<any>;
        expirePaymentRequest: (invoiceId: string) => Promise<any>;
        getPaymentHistory: (body?: IPaymentHistory) => Promise<any>;
        getByInvoiceId: (invoiceId: string) => Promise<any>;
    };
    configGeneration: (method: string, url: string, body?: any) => any;
}
