"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const tslib_1 = require("tslib");
const axios_1 = require("axios");
const address_1 = require("../helpers/address");
const helpers_1 = require("../helpers");
const constants_1 = require("../constants");
/**
 *  GET /v1/users/
 */
const get = (options) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { account, env = constants_1.default.ENV.PROD } = options || {};
    if (!(0, address_1.isValidETHAddress)(account)) {
        throw new Error(`Invalid address!`);
    }
    const caip10 = (0, address_1.walletToPCAIP10)(account);
    const API_BASE_URL = (0, helpers_1.getAPIBaseUrls)(env);
    const requestUrl = `${API_BASE_URL}/v1/users/?caip10=${caip10}`;
    return axios_1.default
        .get(requestUrl)
        .then((response) => {
        return response.data;
    })
        .catch((err) => {
        console.error(`[EPNS-SDK] - API ${requestUrl}: `, err);
        throw Error(`[EPNS-SDK] - API ${requestUrl}: ${err}`);
    });
});
exports.get = get;
//# sourceMappingURL=getUser.js.map