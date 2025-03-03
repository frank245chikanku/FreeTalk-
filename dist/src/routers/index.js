"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentRouter = exports.newCommentRouter = exports.showpostRouter = exports.updatePostRouter = exports.deletepostRouter = exports.newPostRouter = void 0;
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
__exportStar(require("./auth/current-user"), exports);
__exportStar(require("./auth/signup"), exports);
__exportStar(require("./auth/signin"), exports);
__exportStar(require("./auth/signout"), exports);
