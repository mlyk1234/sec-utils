"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Securo = void 0;
const moment = require("moment");
const crypto = require('crypto');
const axios_1 = require("axios");
const baseUrl = "https://sandbox.securo.dev/api/v1/";
class Securo {
    constructor(apiKey, secretKey) {
        this.getSession = (sessionId = null) => __awaiter(this, void 0, void 0, function* () {
            let url = baseUrl + "sessions";
            if (sessionId)
                url = url + `/${sessionId}`;
            const config = this.configGeneration("GET", url);
            try {
                const { data } = yield (0, axios_1.default)(config);
                return data.data;
            }
            catch (error) {
                console.log('[Error]', error);
            }
        });
        this.expireSession = (sessionId) => __awaiter(this, void 0, void 0, function* () {
            let url = baseUrl + `sessions/${sessionId}/expire`;
            const config = this.configGeneration("POST", url);
            try {
                const { data } = yield (0, axios_1.default)(config);
                return data.message;
            }
            catch (error) {
                console.log('[Error]', error);
            }
        });
        this.indexFund = {
            getProducts: () => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + "product/get-products";
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getPriceOf: (type) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `product/price?symbol=${type}`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getPoolValueOf: (type) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `product/pool?symbol=${type}`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            createSession: (body) => __awaiter(this, void 0, void 0, function* () {
                const url = 'https://sandbox.securo.dev/api/v1/sessions';
                const config = this.configGeneration("POST", url, JSON.stringify(body));
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error createSession]:', error);
                }
            })
        };
        this.dexSwap = {
            getSupportedTokens: (chain) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `web3/dex/swap/listTokens/${chain}`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getSupportedPools: (chain) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `web3/dex/swap/listPools/${chain}`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getTokenPrice: (token) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `web3/dex/price`;
                const config = this.configGeneration("POST", url, JSON.stringify({ token: token }));
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getTokenAddress: (chainId, token) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `web3/dex/contractAddressAndData`;
                const config = this.configGeneration("POST", url, JSON.stringify({ chainId: chainId, token: token }));
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getEstimatedSwap: (chain, tokenIn, tokenOut, enteredAmount, slippagePerc, exactIn = true, chainId) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `web3/dex/swap/estimate/?tokenOut=${tokenOut}&exactIn=${exactIn}&chain=${chain}&tokenIn=${tokenIn}&enteredAmount=${enteredAmount}`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getLiquidity: (chain, tokenA, tokenB, amountA) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `web3/dex/lpAmounts/?chain=${chain}&tokenA=${tokenA}&tokenB=${tokenB}&amountA=${amountA}`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            createSwapSession: (body) => __awaiter(this, void 0, void 0, function* () {
                const url = 'https://sandbox.securo.dev/api/v1/sessions/swap';
                const config = this.configGeneration("POST", url, JSON.stringify(body));
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error createSession]:', error);
                }
            }),
            createLiquiditySession: (body) => __awaiter(this, void 0, void 0, function* () {
                const url = 'https://sandbox.securo.dev/api/v1/sessions/liquidity';
                const config = this.configGeneration("POST", url, JSON.stringify(body));
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error createSession]:', error);
                }
            })
        };
        this.fiatToCrypto = {
            getPaymentCountries: () => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `payment/countries`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getPaymentCryptoCurrencies: () => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `payment/crypto-currencies`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getFiatCurrencies: () => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `payment/fiat-currencies`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getEstimatedCurrencyRate: (body) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `payment/currency-price`;
                const config = this.configGeneration("POST", url, JSON.stringify(body));
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            createPaymentRequest: (body) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `payment`;
                const config = this.configGeneration("POST", url, JSON.stringify(body));
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error.response.data);
                }
            }),
            expirePaymentRequest: (invoiceId) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `payment/expire/${invoiceId}`;
                const config = this.configGeneration("PATCH", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data;
                }
                catch (error) {
                    console.log('[Error]', error.response.data);
                }
            }),
            getPaymentHistory: (body) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `payment/payment-history`;
                const config = this.configGeneration("GET", url, JSON.stringify(body));
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
            getByInvoiceId: (invoiceId) => __awaiter(this, void 0, void 0, function* () {
                const url = baseUrl + `payment/${invoiceId}`;
                const config = this.configGeneration("GET", url);
                try {
                    const { data } = yield (0, axios_1.default)(config);
                    return data.data;
                }
                catch (error) {
                    console.log('[Error]', error);
                }
            }),
        };
        this.configGeneration = (method, url, body) => {
            const apiKey = this.apiKey;
            const secretKey = this.secretKey;
            const timeStamp = moment().unix();
            let baseString = `${url}&method=${method}&timestamp=${timeStamp}`;
            if (body) {
                baseString += `&body=${JSON.stringify(JSON.parse(body))}`;
            }
            const hash = crypto.createHmac('sha256', secretKey).update(baseString).digest('hex');
            let config = {
                method: method,
                url,
                headers: {
                    'x-sec-key': apiKey,
                    'x-sec-ts': timeStamp,
                    'x-sec-sign': hash,
                    'Content-Type': 'application/json',
                }
            };
            if (body) {
                config = Object.assign(Object.assign({}, config), { data: body });
            }
            return config;
        };
        this.apiKey = apiKey;
        this.secretKey = secretKey;
        this.anything = "tester";
    }
    getVersion() {
        this.anything = "1.0.0";
        return {
            test: () => { return this.anything; }
        };
    }
}
exports.Securo = Securo;
