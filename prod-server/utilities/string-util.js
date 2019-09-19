"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Performs common operations for strings, such as checking
 * if the string is empty or null
 */
var StringUtil = exports.StringUtil = function () {
    function StringUtil() {
        _classCallCheck(this, StringUtil);
    }

    _createClass(StringUtil, null, [{
        key: "isEmpty",
        value: function isEmpty(value) {
            return !value || !value.trim();
        }
    }, {
        key: "capitalize",
        value: function capitalize(word) {
            return word.charAt(0).toUpperCase();
        }
    }]);

    return StringUtil;
}();