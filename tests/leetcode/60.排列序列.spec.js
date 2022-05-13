import { getPermutation } from "../../leetcode/60.排列序列.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(getPermutation(3, 3)).toBe("213");
    });

    test("用例2", () => {
        expect(getPermutation(4, 9)).toBe("2314");
    });

    test("用例3", () => {
        expect(getPermutation(3, 1)).toBe("123");
    });

    test("用例4", () => {
        expect(getPermutation(3, 2)).toBe("132");
    });
});

describe("自定义", () => {
    test("用例1", () => {
        expect(getPermutation(5, 1)).toBe("12345");
    });

    test("用例2", () => {
        expect(getPermutation(5, 2)).toBe("12354");
    });

    test("用例3", () => {
        expect(getPermutation(5, 3)).toBe("12435");
    });
});
