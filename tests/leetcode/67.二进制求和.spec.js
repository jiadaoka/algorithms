import { addBinary } from "../../leetcode/67.二进制求和.js";
import { integerRandom } from "../tools.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(addBinary("11", "1")).toBe("100");
    });
    test("用例2", () => {
        expect(addBinary("1010", "1011")).toBe("10101");
    });
});

describe("自定义", () => {
    for (let i = 0; i < 100; i++) {
        const n1 = integerRandom(5);
        const n2 = integerRandom(5);

        test(
            "用例" + (i + 1) + "：" + n1.toString(2) + "+" + n2.toString(2),
            () => {
                expect(addBinary(n1.toString(2), n2.toString(2))).toBe(
                    (n1 + n2).toString(2)
                );
            }
        );
    }
});
