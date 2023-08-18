import {describe, expect, test} from '@jest/globals';


describe("My Stack", () => {
    test("Test something", () => {
        expect(false).toBeFalsy();
    }
    );

    test.todo("Test something else");
})
