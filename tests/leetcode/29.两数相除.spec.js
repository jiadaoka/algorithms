import { divide } from "../../leetcode/29.两数相除.js";

describe("29.两数相除", () => {
    test("-2147483648,2", () => {
        expect(divide(-2147483648, 2)).toBe(-1073741824);
    });

    test("-2147483648,2", () => {
        expect(divide(-231, 3)).toBe(-77);
    });
});
