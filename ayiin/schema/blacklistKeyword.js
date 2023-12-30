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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blacklistKeywordSchema = new mongoose_1.Schema({
    chatId: {
        type: Number,
        required: true
    },
    keywords: {
        type: Array,
        required: true,
        default: []
    }
});
const blacklistKeyword = (0, mongoose_1.model)('blacklistKeyword', blacklistKeywordSchema);
exports.default = blacklistKeyword;
