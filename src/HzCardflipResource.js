"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
var core_1 = require("@haztivity/core");
require("./jquery.flip");
var HzCardflipResource = /** @class */ (function (_super) {
    __extends(HzCardflipResource, _super);
    /**
     * Recurso de tooltip para Haztivity.
     * @param _$
     * @param _EventEmitterFactory
     * @param _ScormService
     */
    function HzCardflipResource(_$, _EventEmitterFactory, _DataOptions) {
        var _this = _super.call(this, _$, _EventEmitterFactory) || this;
        _this._isOpen = false;
        _this._DataOptions = _DataOptions;
        return _this;
    }
    HzCardflipResource_1 = HzCardflipResource;
    HzCardflipResource.prototype.init = function (options, config) {
        this._config = config;
        this._id = new Date().getTime();
        this._namespace = HzCardflipResource_1.NAMESPACE + this._id;
        this._options = options;
        this.refresh();
    };
    HzCardflipResource.prototype.refresh = function () {
        if (this._cardflipInstance) {
            this._cardflipInstance.destroy();
        }
        var flipOptions = this._DataOptions.getDataOptions(this._$element, "flip");
        this._options.flipOptions = this._$.extend(true, {}, HzCardflipResource_1.DEFAULTS, flipOptions);
        this._$element.flip(this._options.flipOptions);
        this._cardflipInstance = this._$element.data("flipModel");
        this._assignEvents();
    };
    HzCardflipResource.prototype.getInstance = function () {
        return this._cardflipInstance;
    };
    HzCardflipResource.prototype.disable = function () {
        if (_super.prototype.disable.call(this)) {
        }
    };
    HzCardflipResource.prototype.enable = function () {
        if (_super.prototype.enable.call(this)) {
        }
    };
    HzCardflipResource.prototype._assignEvents = function () {
        this._$element.off("." + HzCardflipResource_1.NAMESPACE)
            .one("flip:done." + HzCardflipResource_1.NAMESPACE, this._onFlipDone.bind(this))
            .on("click." + HzCardflipResource_1.NAMESPACE + " hover." + HzCardflipResource_1.NAMESPACE, ">*", this._onInteraction.bind(this));
    };
    HzCardflipResource.prototype._onInteraction = function (e) {
        if (this.isDisabled()) {
            e.stopPropagation();
        }
    };
    HzCardflipResource.prototype._onFlipDone = function (e) {
        this._markAsCompleted();
    };
    HzCardflipResource.prototype.destroy = function () {
        if (this._cardflipInstance) {
        }
        _super.prototype.destroy.call(this);
    };
    HzCardflipResource.DEFAULTS = {};
    HzCardflipResource.NAMESPACE = "hzCardflip";
    HzCardflipResource = HzCardflipResource_1 = __decorate([
        core_1.Resource({
            name: "HzCardflip",
            dependencies: [
                core_1.$,
                core_1.EventEmitterFactory,
                core_1.DataOptions
            ]
        })
    ], HzCardflipResource);
    return HzCardflipResource;
    var HzCardflipResource_1;
}(core_1.ResourceController));
exports.HzCardflipResource = HzCardflipResource;
//# sourceMappingURL=HzCardflipResource.js.map