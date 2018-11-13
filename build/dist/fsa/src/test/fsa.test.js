"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test('create test factory and check its base', function () {
    var testFactory = index_1.actionCreatorFactory('test');
    expect(testFactory.base).toBe("test" + index_1.factoryDelimeter);
});
test('create action from factory and check its type', function () {
    var testFactory = index_1.actionCreatorFactory('test');
    var testActionCreator = testFactory('tested');
    expect(testActionCreator().type).toBe('test/tested');
});
test('create action with payload and check payload', function () {
    var testFactory = index_1.actionCreatorFactory('test');
    var testActionCreator = testFactory('tested');
    var testActionWithPayload = testActionCreator({ testPayload: 'payload', testData: 'data' });
    expect(testActionWithPayload.payload).toEqual({ testPayload: 'payload', testData: 'data' });
});
//# sourceMappingURL=fsa.test.js.map