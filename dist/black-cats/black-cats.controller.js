"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackCatsController = void 0;
const common_1 = require("@nestjs/common");
let BlackCatsController = class BlackCatsController {
    getPoint(name) {
        return Object.assign({ endPoint: "get" }, name);
    }
    postPoint(body) {
        return { endpoint: 'post', bodyInfo: Object.assign({}, body) };
    }
    putPoint(param, body) {
        return { endpoint: 'put', param, bodyInfo: Object.assign({}, body) };
    }
    deletePoint(param) {
        return { endPoint: "delete", param };
    }
};
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BlackCatsController.prototype, "getPoint", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BlackCatsController.prototype, "postPoint", null);
__decorate([
    (0, common_1.Put)(':param'),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], BlackCatsController.prototype, "putPoint", null);
__decorate([
    (0, common_1.Delete)(':param'),
    __param(0, (0, common_1.Param)('param')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BlackCatsController.prototype, "deletePoint", null);
BlackCatsController = __decorate([
    (0, common_1.Controller)('black-cats')
], BlackCatsController);
exports.BlackCatsController = BlackCatsController;
//# sourceMappingURL=black-cats.controller.js.map