/**
 * Created by lijunjie on 16/12/24.
 */
'use strict';
import {DiContainer} from "../src/DiContainer";

describe('DiContainer', function () {
    var container;
    beforeEach(function () {
        container = new DiContainer();
    });

    describe('register(name,dependencies,func)', function () {
        it('throws if any argument is missing or the wrong type', function () {
            var badArgu = [
                [],
                ['name'],
                ['name', ['Dependency1', 'Dependency2']],
                ['name', function () {
                }],
                [1, ['a', 'b'], function () {
                }],
                ['name', [1, 2], function () {
                }],
                ['name', ['a', 'b'], 'should be a function']
            ];

            badArgu.forEach(function (args) {
                expect(function () {
                    container.register.apply(container, args);
                }).toThrowError(container.messages.registerRequiesArgs);
            });
        });
    });
    describe('get(name)', function () {
        it('returns undefined if name was not registered', function () {
            expect(container.get('notDefined')).toBeUndefined();
        });
        it('returns the result of executing the registered function', function () {
            var name = 'MyName';
            var resultFromRegisteredFunction = "something";
            container.register(name, [], function () {
                return resultFromRegisteredFunction
            });
            expect(container.get(name)).toBe(resultFromRegisteredFunction);
        });
        it('supplies dependencies to the registered function', function () {
            var main = 'main';
            var mainFunc = null;
            var dep1 = 'dep1';
            var dep2 = 'dep2';
            container.register(main, [dep1, dep2], function (depFunc1, dep2Func2) {
                return function () {
                    return depFunc1() + dep2Func2();
                };
            });
            container.register(dep1, [], function () {
                return function () {
                    return 1;
                };
            });
            container.register(dep2, [], function () {
                return function () {
                    return 2;
                };
            });

            mainFunc = container.get(main);
            expect(mainFunc()).toBe(3);
        });
    });
});
