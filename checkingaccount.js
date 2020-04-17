"use strict";
exports.__esModule = true;
// to be able to import the class
var CheckAccount = /** @class */ (function () {
    function CheckAccount(title) {
        this._balance = 0;
        this._title = title;
    }
    Object.defineProperty(CheckAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            this._balance = val;
        },
        enumerable: true,
        configurable: true
    });
    CheckAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    CheckAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    Object.defineProperty(CheckAccount.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (name) {
            this._title = name;
        },
        enumerable: true,
        configurable: true
    });
    return CheckAccount;
}());
exports.CheckAccount = CheckAccount;
