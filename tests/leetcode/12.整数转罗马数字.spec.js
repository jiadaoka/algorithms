import { intToRoman } from "../../leetcode/12.整数转罗马数字.js";

describe("12.整数转罗马数字", () => {
    test("1994", () => {
        expect(intToRoman(1994)).toBe("MCMXCIV");
    });

    test("58", () => {
        expect(intToRoman(58)).toBe("LVIII");
    });

    test("3", () => {
        expect(intToRoman(3)).toBe("III");
    });
});
