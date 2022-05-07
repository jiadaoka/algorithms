import { lengthOfLastWord } from "../../leetcode/58.最后一个单词的长度.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(lengthOfLastWord("Hello World")).toBe(5);
    });

    test("用例2", () => {
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
    });

    test("用例3", () => {
        expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
    });
});

describe("自定义", () => {});
