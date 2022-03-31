import { groupAnagrams, isEqualMap } from "../../leetcode/49.字母异位词分组.js";

describe("leetCode测试用例", () => {
    // test("用例1", () => {
    //     const expectedAnswer = expect.arrayContaining([
    //         ["bat"],
    //         expect.arrayContaining(["nat", "tan"]),
    //         expect.arrayContaining(["ate", "eat", "tea"]),
    //     ]);

    //     const output = groupAnagrams([
    //         "eat",
    //         "tea",
    //         "tan",
    //         "ate",
    //         "nat",
    //         "bat",
    //     ]);

    //     expect(output).toStrictEqual(expectedAnswer);
    //     expect(output).toHaveLength(3);
    // });

    test("用例2", () => {
        const expectedAnswer = [[""]];

        const output = groupAnagrams([""]);

        expect(output).toStrictEqual(expectedAnswer);
        expect(output).toHaveLength(1);
    });

    test("用例3", () => {
        const expectedAnswer = [["a"]];

        const output = groupAnagrams(["a"]);

        expect(output).toStrictEqual(expectedAnswer);
        expect(output).toHaveLength(1);
    });
});

// describe("自定义", () => {});

describe("Map是否相同", () => {
    test("用例1", () => {
        const m = new Map();
        m.set(1, 1);

        const m2 = m;

        expect(isEqualMap(m, m2)).toBe(true);
    });

    test("用例2", () => {
        const m = new Map();
        m.set(1, 1);

        const m2 = new Map();
        m2.set(1, 1);

        expect(isEqualMap(m, m2)).toBe(true);
    });

    test("用例3", () => {
        const m = new Map();
        m.set(1, 1);

        const m2 = new Map();
        m2.set(2, 1);

        expect(isEqualMap(m, m2)).toBe(false);
    });
});
