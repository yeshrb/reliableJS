describe("ReliableJavaScript.extend(target, mixin)", function () {
    'use strict';

    var notObjects = ["", null, undefined, 1];

    it("throws if the target argument is not an object", function () {
        notObjects.forEach(function (notObj) {
            expect(function shouldThrow() {
                ReliableJavaScript.extend(notObj, {});
            }).toThrowError(ReliableJavaScript.extend.messages.targetNotObject);
        });
    });

    it("throws if the mixin argument is not an object", function () {
        notObjects.forEach(function (notObj) {
            expect(function shouldThrow() {
                ReliableJavaScript.extend({}, notObj);
            }).toThrowError(ReliableJavaScript.extend.messages.mixinNotObject);
        });
    });

    it("doesn't alter target if mixin is a bare object", function () {
        var target = {
                property1: "a property",
                method1: function method1() {
                    return "a method";
                }
            },
            method = target.method1;

        ReliableJavaScript.extend(target, {});

        // ensure that the target hasn't had any keys added or removed
        expect(Object.keys(target).sort()).toEqual(["method1", "property1"]);

        // ensure that the target's functionality hasn't been changed
        expect(target.property1).toEqual("a property");
        expect(target.method1).toBe(method);
    });

    it("adds properties to a bare target", function () {
        var target = {},
            mixin = {
                property1: "first property",
                property2: "second property",
                method1: function method1() {
                    return "first method";
                },
                method2: function method2() {
                    return "second method";
                }
            };

        ReliableJavaScript.extend(target, mixin);

        // Since target was initially bare, it should now be equivalent to mixin
        expect(target).toEqual(mixin);
    });
});