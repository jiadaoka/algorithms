import { productSum, multiply } from "../../leetcode/43.字符串相乘.js";

describe("leetCode测试用例", () => {
    test('num1 = "2", num2 = "3"', () => {
        expect(multiply("2", "3")).toBe("6");
    });

    test('num1 = "123", num2 = "456"', () => {
        expect(multiply("123", "456")).toBe("56088");
    });

    test('num1 = "9133", num2 = "0"', () => {
        expect(multiply("9133", "0")).toBe("0");
    });
});

describe("自定义", () => {
    for (let i = 0; i < 1000; i++) {
        const num1 = Math.floor(Math.random() * 10 ** 5);
        const num2 = Math.floor(Math.random() * 10 ** 5);

        const result = num1 * num2;

        test(
            "num1 = " + num1 + ", num2 = " + num2 + " : result = " + result,
            () => {
                expect(multiply(num1 + "", num2 + "")).toBe(result + "");
            }
        );
    }
});

describe("字符串数值之和", () => {
    test("用例1", () => {
        expect(productSum("10", "11")).toBe("21");
    });

    test("用例2", () => {
        expect(productSum("180", "81")).toBe("261");
    });

    test("用例3", () => {
        expect(productSum("1000", "11")).toBe("1011");
    });

    test("用例4", () => {
        expect(productSum("", "")).toBe("");
    });

    test("用例5", () => {
        expect(productSum("10", "")).toBe("10");
    });

    test("用例5", () => {
        expect(productSum("", "10")).toBe("10");
    });

    for (let i = 0; i < 1000; i++) {
        const bNum = Math.floor(Math.random() * 10 ** 8);
        const sNum = Math.floor(Math.random() * 10 ** 8);

        const result = bNum + sNum;

        test(
            "bNum = " + bNum + ", sNum = " + sNum + " : result = " + result,
            () => {
                expect(productSum(bNum + "", sNum + "")).toBe(result + "");
            }
        );
    }
});
