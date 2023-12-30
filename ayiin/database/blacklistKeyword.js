"use strict";
/**
 * ===========================================================
 *             Copyright (C) 2023-present AyiinXd
 * ===========================================================
 * ||                                                       ||
 * ||              _         _ _      __  __   _            ||
 * ||             / \  _   _(_|_)_ __ \ \/ /__| |           ||
 * ||            / _ \| | | | | | '_ \ \  // _` |           ||
 * ||           / ___ \ |_| | | | | | |/  \ (_| |           ||
 * ||          /_/   \_\__, |_|_|_| |_/_/\_\__,_|           ||
 * ||                  |___/                                ||
 * ||                                                       ||
 * ===========================================================
 *  Appreciating the work of others is not detrimental to you
 * ===========================================================
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlacklistKeyword = exports.addBlacklistKeyword = exports.getBlacklistById = exports.getBlacklistKeyword = void 0;
const blacklistKeyword_1 = __importDefault(require("../schema/blacklistKeyword"));
const getBlacklistKeyword = () => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield blacklistKeyword_1.default.find();
    return allData;
});
exports.getBlacklistKeyword = getBlacklistKeyword;
const getBlacklistById = (chatId) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield blacklistKeyword_1.default.findOne({ chatId });
    if (!existing)
        return "It doesn't have";
    return existing.keywords;
});
exports.getBlacklistById = getBlacklistById;
const addBlacklistKeyword = (chatId, keywords) => __awaiter(void 0, void 0, void 0, function* () {
    const existChat = yield blacklistKeyword_1.default.findOne({ chatId });
    const array = (existChat === null || existChat === void 0 ? void 0 : existChat.keywords) || [];
    const total = [];
    const regex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\n\/]/;
    keywords.map((keyword) => {
        const indexOf = array.indexOf(keyword);
        if (indexOf === -1) {
            const check = regex.test(keyword);
            if (check === true) {
                const editKeyword = keyword.split(regex)[0];
                array.push(editKeyword);
                total.push(editKeyword);
            }
            else {
                array.push(keyword);
                total.push(keyword);
            }
        }
        else
            return 'Failed';
    });
    yield blacklistKeyword_1.default.updateOne({ chatId: chatId }, {
        $set: {
            keywords: array
        }
    }, {
        upsert: true
    });
    return total;
});
exports.addBlacklistKeyword = addBlacklistKeyword;
const deleteBlacklistKeyword = (chatId, keywords) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield blacklistKeyword_1.default.findOne({ chatId });
    if (!existing)
        return 'Failed';
    const isArray = existing.keywords;
    const total = [];
    keywords.map((keyword) => {
        const indexOf = isArray.indexOf(keyword);
        if (indexOf !== -1) {
            isArray.splice(indexOf, 1);
            total.push(keyword);
        }
    });
    existing.keywords = isArray;
    yield existing.save();
    return total;
});
exports.deleteBlacklistKeyword = deleteBlacklistKeyword;
