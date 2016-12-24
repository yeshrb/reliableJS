describe('DiContainer', function () {
    var container;
    beforeEach(function () {
        container = new DiContainer();
    });

    describe('register(name,dependencies,func)', function () {
        it('should throws exception if any argument is missing or the wrong type',
            function () {
                var badArgs = [[],
                    ['Name'],
                    ['Name', ['D1', 'D2']],
                    ['Name', function () {
                    }],
                    [1, ['a', 'b'], function () {
                    }],
                    ['Name', [1, 2], function () {
                    }],
                    ['Name', ['a', 'b'], 'should be a function']
                ];
                badArgs.forEach(function (args) {
                    expect(function () {
                        container.register.apply(container, args);
                    }).toThrowError(container.messages.registerRequiesArgs);

                });

            });

    });

    describe('get(name)', function () {
        it('returns undefinded if name was not registered', function () {
            expect(container.get('notDefined')).toBeUndefined();
        });

        it('return the resule of executing the registered function', function () {
            var name = 'MyName';
            var returnFromReisteredFunction = "something";
            container.register(name, [], function () {
                return returnFromReisteredFunction;
            });
            expect(container.get(name)).toBe(returnFromReisteredFunction);
        });

        it('supplies dependencies to the registered function', function () {
            var main = 'main',
                mainFunc,
                dep1 = 'dep1',
                dep2 = 'dep2';
            container.register(main, [dep1, dep2], function (dep1Func, dep2Func) {
                return function () {
                    return dep1Func() + dep2Func();
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
