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
bot_1.default.command('help', (ayiin) => __awaiter(void 0, void 0, void 0, function* () {
    let helpText = 'Perintah yang tersedia di bot ini\n\n\n';
    for (let key in bot_1.help) {
        helpText += `CMD: ${key}\nINFO: ${bot_1.help[key]}\n\n`;
    }
    return yield ayiin.sendMessage(helpText);
}));
(0, bot_1.addHelp)('/help', 'Untuk melihat perintah di bot');
