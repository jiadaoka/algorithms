import { simplifyPath } from "../../leetcode/71.简化路径.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(simplifyPath("/home/")).toBe("/home");
    });

    test("用例2", () => {
        expect(simplifyPath("/../")).toBe("/");
    });

    test("用例3", () => {
        expect(simplifyPath("/home//foo/")).toBe("/home/foo");
    });

    test("用例4", () => {
        expect(simplifyPath("/a/./b/../../c/")).toBe("/c");
    });
});

describe("自定义", () => {});
