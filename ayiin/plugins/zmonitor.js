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
const bot_1 = __importDefault(require("../bot"));
const blacklistKeyword_1 = require("../database/blacklistKeyword");
bot_1.default.on('text', (ayiin) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = ayiin;
    const userId = message === null || message === void 0 ? void 0 : message.from.id;
    const admins = yield ayiin.getChatMember(userId);
    const keywords = yield (0, blacklistKeyword_1.getBlacklistById)(message === null || message === void 0 ? void 0 : message.chat.id);
    if (keywords !== "It doesn't have") {
        if (admins.status === 'member') {
            keywords.map((keyword) => {
                const detect = message.text.match(keyword);
                if (detect) {
                    ayiin.deleteMessage(message === null || message === void 0 ? void 0 : message.message_id);
                    return;
                }
            });
        }
    }
}));
