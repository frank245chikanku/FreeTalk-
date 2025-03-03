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
exports.signinRouter = void 0;
const express_1 = require("express");
const user_1 = require("../../models/user");
const common_1 = require("../../../common");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
exports.signinRouter = router;
router.post('/signin', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const existingUser = yield user_1.user.findOne({ email });
    if (!existingUser) {
        return next(new Error('Wrong credentials'));
    }
    const isEqual = yield common_1.authenticationService.pwdCompare(existingUser.password, password);
    if (!isEqual) {
        return next(new Error('Wrong credentials'));
    }
    const token = jsonwebtoken_1.default.sign({ email, userId: existingUser._id }, process.env.JWT_KEY, { expiresIn: "1h" });
    req.session = { jwt: token };
    res.status(200).json({ message: 'Signed in successfully', token, user: existingUser });
}));
