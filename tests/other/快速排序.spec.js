import { quickSort } from "../../other/快速排序.js";
import example from "../sortExample.js";

describe("快速排序", () => {
    example.forEach(({ question, result }) => {
        test(question.join(","), () => {
            expect(quickSort(question)).toStrictEqual(result);
        });
    });
});
