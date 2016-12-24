/**
 * Created by lijunjie on 16/12/24.
 */
'use strict';
import {Dicontainer} from "../DiContainer";

describe('DiContainer', function () {
    var container;
    beforeEach(function () {
        container = new Dicontainer();
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
                }).toThrow();
            });
        });
    });
});
