"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer = require("multer");
// import { Request, Response,  } from 'express';
// const storage = multer.diskStorage({
//     destination: function(req: Request, file: Express.Multer.File, cb){
//         cb(null, "src/public")
//     },
//     filename: function(req: Request, file: Express.Multer.File, cb){
//         cb(null, file.originalname)
//     }
// })
var storage = multer.memoryStorage();
var data = multer({ storage: storage });
exports.upload = data;
//# sourceMappingURL=UploadFiles.js.map