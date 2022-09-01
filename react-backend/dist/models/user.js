"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
    },
    password: { type: String, required: true },
    preferences: {
        walk: { type: Boolean, required: true, default: false },
        run: { type: Boolean, required: true, default: false },
        cycle: { type: Boolean, required: true, default: false }
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    followers: [{
            userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }
        }],
    following: [{
            userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }
        }],
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map