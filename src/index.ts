import moment from "moment";
const crypto = require('crypto');
import axios from "axios";

const baseUrl = "https://api.securo.dev/api/v1/";

export interface IIndexFund {
    product: string,
    type: string,
    amount: string,
    userEmail: string,
    successURL: string,
    cancelURL: string
}

export interface IDexSwap {
    chain: string,
    tokenIn: string,
    tokenOut: string,
    isNative?: boolean,
    exactIn?: boolean,
    amount: string,
    slippagePercentage?: string,
    userEmail: string,
    successURL?: string,
    cancelURL?: string
}

export interface ILiquidity {
    chain: string,
    pair: string,
    addLiquidity: boolean,
    amount0: string,
    amount1: string,
    isNative?: boolean,
    userEmail: string,
    successURL?: string,
    cancelURL?: string
}

export interface ICurrencyRate {
    cryptoAmount?: number,
    fiatAmount?: number,
    cryptoCurrency: string,
    fiatCurrency: string,
    isBuyOrSell: string,
    network: string,
    paymentMethod: string
}

export interface IPaymentRequest {
    network: string,
    walletAddress: string,
    emailAddress: string,
    trxType: string,
    fiatCurrency: string,
    fiatAmount?: number,
    cryptoCurrency: string,
    redirectURL?: string,
    cryptoAmount?: number,
    isDisableCrypto?: boolean,
    cancellationUrl?: string,
    paymentMethod: string
}

export interface IPaymentHistory {
    page?: number,
    limit?: number,
    orderBy?: string,
    orderSequence?: number,
    txType?: string,
    network?: string,
    emailAddress?: string,
    paymentMethod?: string,
    walletAddress?: string,
    fiatCurrency?: string,
    cryptoCurrency?: string,
    status?: Array<string>,
    fromDate?: number,
    toDate?: number
}

export class Securo {
    email: string;
    apiKey: string;
    secretKey: string;
    indexFundUtil: Object;
    anything: string;
    baseUrl: string;
    constructor(apiKey: string, secretKey: string) {
        this.apiKey = apiKey;
        this.secretKey = secretKey;
        this.anything = "tester";
        this.baseUrl = baseUrl;
    }

    sandboxMode() {
        this.baseUrl = "https://sandbox.securo.dev/api/v1/";
    }

    maintenanceMode() {
        this.baseUrl = "https://test-api.securo.dev/api/v1/";
    }

    getVersion() {
        this.anything = "1.0.0"
        return {
            test: () => { return this.anything }
        }
    }

    getSession = async (sessionId: string | null = null) => {
        let url = this.baseUrl + "sessions";
        if(sessionId) url = url + `/${sessionId}`;
        const config = this.configGeneration("GET", url);
        try {
            const { data } = await axios(config);
            return data.data;
        } catch (error) {
            throw error.response.data.message;
        }
    }

    expireSession = async (sessionId: string) => {
        let url = this.baseUrl + `sessions/${sessionId}/expire`;
        const config = this.configGeneration("POST", url);
        try {
            const { data } = await axios(config);
            return data.message;
        } catch (error) {
            throw error.response.data.message;
        }
    }

    indexFund = {
        getProducts: async () => {
            const url = this.baseUrl + "product/get-products";
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getPriceOf: async (type: string) => {
            const url = this.baseUrl + `product/price?symbol=${type}`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);
                if(!data.data) return data.message;

                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getPoolValueOf: async (type: string) => {
            const url = this.baseUrl + `product/pool?symbol=${type}`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);
                if(!data.data) return data.message;

                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        createSession: async (body: IIndexFund) => {
            const url = this.baseUrl + `sessions`;
            const config = this.configGeneration("POST", url, JSON.stringify(body));
            try {
                const { data } = await axios(config);
                if(!data.data) return data.message;

                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        }
    }

    dexSwap = {
        getSupportedTokens: async (chain: string) => {
            const url = this.baseUrl + `web3/dex/swap/listTokens/${chain}`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);

                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getSupportedPools: async (chain: string) => {
            const url = this.baseUrl + `web3/dex/swap/listPools/${chain}`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);
                
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getTokenPrice: async (token: string) => {
            const url = this.baseUrl + `web3/dex/price`;
            const config = this.configGeneration("POST", url, JSON.stringify({token: token}));
            try {
                const { data } = await axios(config);

                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getTokenAddress: async (chainId: number, token: string) => {
            const url = this.baseUrl + `web3/dex/contractAddressAndData`;
            const config = this.configGeneration("POST", url, JSON.stringify({chainId: chainId, token: token}));
            try {
                const { data } = await axios(config);
                
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getEstimatedSwap: async (chain: string, tokenIn: string, tokenOut: string, enteredAmount: string, slippagePerc?: number, exactIn: boolean = true, chainId?: number) => {
            const url = this.baseUrl + `web3/dex/swap/estimate/?tokenOut=${tokenOut}&exactIn=${exactIn}&chain=${chain}&tokenIn=${tokenIn}&enteredAmount=${enteredAmount}`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);

                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getLiquidity: async (chain: string, tokenA: string, tokenB: string, amountA: number) => {
            const url = this.baseUrl + `web3/dex/lpAmounts/?chain=${chain}&tokenA=${tokenA}&tokenB=${tokenB}&amountA=${amountA}`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);

                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        createSwapSession: async (body: IDexSwap) => {
            const url = this.baseUrl + `sessions/swap`;
            const config = this.configGeneration("POST", url, JSON.stringify(body));
            try {
                const { data } = await axios(config);
                
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        createLiquiditySession: async (body: ILiquidity) => {
            const url = this.baseUrl + `sessions/liquidity`;
            const config = this.configGeneration("POST", url, JSON.stringify(body));
            try {
                const { data } = await axios(config);

                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        }
    }

    fiatToCrypto = {
        getPaymentCountries: async () => {
            const url = this.baseUrl + `payment/countries`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getPaymentCryptoCurrencies: async () => {
            const url = this.baseUrl + `payment/crypto-currencies`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getFiatCurrencies: async () => {
            const url = this.baseUrl + `payment/fiat-currencies`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getEstimatedCurrencyRate: async (body: ICurrencyRate) => {
            const url = this.baseUrl + `payment/currency-price`;
            const config = this.configGeneration("POST", url, JSON.stringify(body));
            try {
                const { data } = await axios(config);
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        createPaymentRequest: async (body: IPaymentRequest) => {
            const url = this.baseUrl + `payment`;
            const config = this.configGeneration("POST", url, JSON.stringify(body));
            try {
                const { data } = await axios(config);
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }  
        },
        expirePaymentRequest: async (invoiceId: string) => {
            const url = this.baseUrl + `payment/expire/${invoiceId}`;
            const config = this.configGeneration("PATCH", url);
            try {
                const { data } = await axios(config);
                return data;
            } catch (error) {
                throw error.response.data.message;
            }  
        },
        getPaymentHistory: async (body?: IPaymentHistory) => {
            const url = this.baseUrl + `payment/payment-history`;
            const config = this.configGeneration("GET", url, JSON.stringify(body));
            try {
                const { data } = await axios(config);
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
        getByInvoiceId: async (invoiceId: string) => {
            const url = this.baseUrl + `payment/${invoiceId}`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = await axios(config);
                return data.data;
            } catch (error) {
                throw error.response.data.message;
            }
        },
    }

    configGeneration = (method: string, url: string, body?: any) => {
        const apiKey = this.apiKey;
        const secretKey = this.secretKey;
    
        const timeStamp = moment().unix();
        console.log(timeStamp)
        let baseString = `${url}&method=${method}&timestamp=${timeStamp}`;
    
        if(body) {
            baseString += `&body=${JSON.stringify(JSON.parse(body))}`;
        }
        const hash = crypto.createHmac('sha256', secretKey).update(baseString).digest('hex');
    
        let config: any = {
            method: method,
            url,
            headers: {
                'x-sec-key': apiKey,
                'x-sec-ts': timeStamp,
                'x-sec-sign': hash,
                'Content-Type': 'application/json',
            }
        };
    
        if(body) {
            config = {
                ...config,
                data: body
            }
        }
    
        return config;
    }
}