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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const bot_1 = __importStar(require("../bot"));
const blacklistKeyword_1 = require("../database/blacklistKeyword");
bot_1.default.command('addbl', (ayiin) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = ayiin;
    const admin = yield ayiin.getChatMember(message.from.id);
    const arg = ayiin.args;
    const replyToMessage = message.reply_to_message;
    if (ayiin.chat.type === "private")
        return yield ayiin.sendMessage(`Apakah ini grup ? Lakukan perintah ini di grup kawan`);
    if (admin.status === 'creator' || admin.status === "administrator") {
        if (replyToMessage) {
            const keywords = replyToMessage.text.split(' ');
            const res = yield (0, blacklistKeyword_1.addBlacklistKeyword)(message.chat.id, keywords);
            if (res !== "Failed")
                return yield ayiin.sendMessage(`Berhasil menambahkan ${res.length} Kata kunci ke daftar hitam`);
        }
        else if (arg.length !== 0) {
            const res = yield (0, blacklistKeyword_1.addBlacklistKeyword)(message.chat.id, arg);
            if (res !== "Failed")
                return yield ayiin.sendMessage(`Berhasil menambahkan ${res.length} Kata kunci ke daftar hitam`);
        }
        else {
            return yield ayiin.sendMessage(`Silahkan balas ke pesan atau berikan saya beberapa kata kunci untuk di masukkan ke daftar hitam.`);
        }
    }
    else {
        return yield ayiin.sendMessage('Perintah ini hanya untuk admin dan owner group.');
    }
}));
bot_1.default.command('getbl', (ayiin) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, blacklistKeyword_1.getBlacklistById)(ayiin.chat.id);
    var textItem = `Daftar hitam ${ayiin.chat.id}\n\n`;
    if (data !== "It doesn't have") {
        data.map((keyword) => {
            textItem += `- ${keyword}\n`;
        });
        return yield ayiin.sendMessage(textItem);
    }
    else {
        return yield ayiin.sendMessage('Belum memiliki daftar hitam apapun.');
    }
}));
bot_1.default.command('delbl', (ayiin) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = ayiin;
    const admin = yield ayiin.getChatMember(message.from.id);
    const arg = ayiin.args;
    const replyToMessage = message.reply_to_message;
    if (ayiin.chat.type === "private")
        return yield ayiin.sendMessage(`Apakah ini grup ? Lakukan perintah ini di grup kawan`);
    if (admin.status === 'creator' || admin.status === "administrator") {
        if (replyToMessage) {
            const keywords = replyToMessage.text.split(' ');
            const res = yield (0, blacklistKeyword_1.deleteBlacklistKeyword)(message.chat.id, keywords);
            if (res !== "Failed")
                return yield ayiin.sendMessage(`Berhasil menghapus ${res.length} Kata kunci dari daftar hitam`);
        }
        else if (arg.length !== 0) {
            const res = yield (0, blacklistKeyword_1.deleteBlacklistKeyword)(message.chat.id, arg);
            if (res !== "Failed")
                return yield ayiin.sendMessage(`Berhasil menghapus ${res.length} Kata kunci dari daftar hitam`);
        }
        else {
            return yield ayiin.sendMessage(`Silahkan balas ke pesan atau berikan saya beberapa kata kunci untuk di hapus dari daftar hitam.`);
        }
    }
    else {
        return yield ayiin.sendMessage('Perintah ini hanya untuk admin dan owner group.');
    }
}));
(0, bot_1.addHelp)('/addbl keyword|reply', 'Untuk menambahkan kata kunci daftar hitam');
(0, bot_1.addHelp)('/getbl', 'Untuk melihat kata kunci daftar hitam');
(0, bot_1.addHelp)('/delbl keyword|reply', 'Untuk Menghapus kata kunci daftar hitam');
