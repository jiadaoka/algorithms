import { convert } from "../../leetcode/6.z-字形变换.js";

describe("6.z-字形变换", () => {
    test("AB", () => {
        expect(convert("AB", 1)).toBe("AB");
    });

    test("A", () => {
        expect(convert("A", 1)).toBe("A");
    });

    test("默认示例", () => {
        expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
    });
});
