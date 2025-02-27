"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentRouter = exports.newCommentRouter = exports.showpostRouter = exports.updatePostRouter = exports.deletepostRouter = exports.newPostRouter = void 0;
// src/routers/index.ts
const new_1 = require("./post/new");
Object.defineProperty(exports, "newPostRouter", { enumerable: true, get: function () { return new_1.newPostRouter; } });
const delete_1 = require("./post/delete");
Object.defineProperty(exports, "deletepostRouter", { enumerable: true, get: function () { return delete_1.deletepostRouter; } });
const update_1 = require("./post/update");
Object.defineProperty(exports, "updatePostRouter", { enumerable: true, get: function () { return update_1.updatePostRouter; } });
const show_1 = require("./post/show");
Object.defineProperty(exports, "showpostRouter", { enumerable: true, get: function () { return show_1.showpostRouter; } });
const new_2 = require("./comment/new");
Object.defineProperty(exports, "newCommentRouter", { enumerable: true, get: function () { return new_2.newCommentRouter; } });
const delete_2 = require("./comment/delete");
Object.defineProperty(exports, "deleteCommentRouter", { enumerable: true, get: function () { return delete_2.deleteCommentRouter; } });
