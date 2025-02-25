"use strict";
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
exports.showpostRouter = void 0;
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../../models/post"));
const router = express_1.default.Router();
exports.showpostRouter = router;
router.get('/api/post/show/:id?', (req, res, next) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            if (!id) {
                const allPosts = yield post_1.default.find();
                return res.status(200).json({ posts: allPosts });
            }
            const post = yield post_1.default.findById(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }
            return res.status(200).json({ post });
        }
        catch (error) {
            next(error);
        }
    }))();
});
