describe('Aop', function () {
    var targetObj, executionPoints;
    beforeEach(function () {
        targetObj = {
            targetFn: function () {
                executionPoints.push('targetFn');
            }
        };
        executionPoints = [];
    });
    describe('Aop.around(fnName,advice,targetObj)', function () {

        it('cause a call to the target function to execute the advice', function () {
            var targetObj = {
                targetFn: function () {

                }
            };

            var executeAdvice = false;
            var advice = function () {
                executeAdvice = true;
            };

            Aop.around('targetFn', advice, targetObj);
            targetObj.targetFn();
            expect(executeAdvice).toBe(true);

        });

        it('allow the advice to wrap a call the target', function () {
            var wrappingAdvice = function (targetInfo) {
                executionPoints.push('wrappingAdvice - begin');
                targetInfo.fn();
                executionPoints.push('wrappingAdvice - end');
            };
            Aop.around('targetFn', wrappingAdvice, targetObj);
            targetObj.targetFn();
            expect(executionPoints).toEqual(
                ['wrappingAdvice - begin', 'targetFn', 'wrappingAdvice - end']);
        });
    });
});