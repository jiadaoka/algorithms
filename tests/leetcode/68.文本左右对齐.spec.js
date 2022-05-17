import { fullJustify } from "../../leetcode/68.文本左右对齐.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(
            fullJustify(
                ["This", "is", "an", "example", "of", "text", "justification."],
                16
            )
        ).toStrictEqual([
            "This    is    an",
            "example  of text",
            "justification.  ",
        ]);
    });

    test("用例2", () => {
        expect(
            fullJustify(
                ["What", "must", "be", "acknowledgment", "shall", "be"],
                16
            )
        ).toStrictEqual([
            "What   must   be",
            "acknowledgment  ",
            "shall be        ",
        ]);
    });

    test("用例3", () => {
        expect(
            fullJustify(
                [
                    "Science",
                    "is",
                    "what",
                    "we",
                    "understand",
                    "well",
                    "enough",
                    "to",
                    "explain",
                    "to",
                    "a",
                    "computer.",
                    "Art",
                    "is",
                    "everything",
                    "else",
                    "we",
                    "do",
                ],
                20
            )
        ).toStrictEqual([
            "Science  is  what we",
            "understand      well",
            "enough to explain to",
            "a  computer.  Art is",
            "everything  else  we",
            "do                  ",
        ]);
    });
});

describe("自定义", () => {});
