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
exports.onStart = exports.default = exports.addHelp = exports.help = void 0;
const telegraf_1 = require("telegraf");
const dotenv_1 = require("dotenv");
const mongo_1 = __importDefault(require("../database/mongo"));
const plugins_1 = require("../plugins");
(0, dotenv_1.config)();
const botToken = process.env.BOT_TOKEN;
if (botToken === undefined) {
    console.log("BOT_TOKEN Is Required!!!");
    process.exit(0);
}
const bot = new telegraf_1.Telegraf(botToken);
exports.default = bot;
exports.help = {};
const addHelp = (command, description) => {
    exports.help[command] = description;
};
exports.addHelp = addHelp;
const onStart = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Memulai BlacklistKeywordBot\n");
    try {
        yield (0, mongo_1.default)();
        console.log("\nImport modul...");
        const mod = yield (0, plugins_1.loadModules)();
        console.log(`📂 Modules loaded: ${mod.join(" - ")}`);
        bot.launch();
        console.log('\nBlacklistKeywordBot Berhasil Diaktifkan');
    }
    catch (error) {
        console.log(error);
        return;
    }
});
exports.onStart = onStart;
