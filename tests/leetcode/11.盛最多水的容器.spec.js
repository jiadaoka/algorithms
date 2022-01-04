import { maxArea } from "../../leetcode/11.盛最多水的容器.js";

describe("11.盛最多水的容器", () => {
    test("[2,3,4,5,18,17,6]", () => {
        expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17);
    });

    test("[1,8,6,2,5,4,8,3,7]", () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });
});
