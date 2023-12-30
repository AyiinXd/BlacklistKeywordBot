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
const textStart = (user) => {
    const text = `
Hello ${user.first_name}

Jika anda membutuhkan saya untuk membantu grup anda menghapus pesan yang ada di daftar hitam.
silahkan masukkan saya ke grup anda.

Klik tombol dibawah untuk menambahkan saya ke grup anda.
`;
    return text;
};
bot_1.default.command('start', (ayiin) => __awaiter(void 0, void 0, void 0, function* () {
    const user = ayiin.from;
    const caption = textStart(user);
    const me = yield bot_1.default.telegram.getMe();
    yield ayiin.sendMessage(caption, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "Tambahkan Saya",
                        url: `https://t.me/${me.username}?startgroup=true`
                    }],
                [
                    {
                        text: 'Support',
                        url: 'https://t.me/AyiinChats'
                    },
                    {
                        text: 'Update',
                        url: 'https://t.me/AyiinChannel'
                    },
                ]
            ]
        }
    });
}));
(0, bot_1.addHelp)('/start', 'Untuk memulai bot');
