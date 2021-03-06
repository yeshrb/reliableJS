var ReliableJavaScript = ReliableJavaScript || {};

ReliableJavaScript.extend = function (target, mixin) {
    'use strict';

    if (!target || typeof(target) !== "object") {
        throw new Error(ReliableJavaScript.extend.messages.targetNotObject);
    }

    if (!mixin || typeof(mixin) !== "object") {
        throw new Error(ReliableJavaScript.extend.messages.mixinNotObject);
    }
};
ReliableJavaScript.extend.messages = {
    targetNotObject: "target is not an object",
    mixinNotObject: "mixin is not an object"
};