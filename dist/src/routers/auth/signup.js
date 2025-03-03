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
exports.signupRouter = void 0;
const express_1 = require("express");
const user_1 = require("../../models/user");
const common_1 = require("../../../common");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
exports.signupRouter = router;
router.post('/signup', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new common_1.BadRequestError('Email and password are required'));
        }
        const existingUser = yield user_1.user.findOne({ email });
        if (existingUser) {
            return next(new Error('User with this email already exists'));
        }
        const hashedPassword = yield common_1.authenticationService.hashPassword(password);
        const newUser = new user_1.user({ email, password: hashedPassword });
        yield newUser.save();
        const token = jsonwebtoken_1.default.sign({ email, userId: newUser._id }, process.env.JWT_KEY, { expiresIn: "1h" });
        req.session = { jwt: token };
        res.status(201).json({ message: 'User registered successfully', token, user: newUser });
    }
    catch (error) {
        next(error);
    }
}));
