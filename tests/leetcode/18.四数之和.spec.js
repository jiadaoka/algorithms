import { fourSum } from "../../leetcode/18.四数之和.js";

describe("18.四数之和", () => {
    test("[1,-2,-5,-4,-3,3,3,5],-11", () => {
        const result = expect.arrayContaining([
            expect.arrayContaining([-5, -4, -3, 1]),
        ]);
        const arr = fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11);

        expect(arr).toStrictEqual(result);
        expect(arr).toHaveLength(1);
    });

    test("[1,0,-1,0,-2,2],0", () => {
        const result = expect.arrayContaining([
            expect.arrayContaining([-2, -1, 1, 2]),
            expect.arrayContaining([-2, 0, 0, 2]),
            expect.arrayContaining([-1, 0, 0, 1]),
        ]);
        const arr = fourSum([1, 0, -1, 0, -2, 2], 0);

        expect(arr).toStrictEqual(result);
        expect(arr).toHaveLength(3);
    });
});
