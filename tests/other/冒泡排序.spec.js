import { bubbleSort } from "../../other/冒泡排序.js";
import example from "../sortExample.js";

describe("冒泡排序", () => {
    example.forEach(({ question, result }) => {
        test(question.join(","), () => {
            expect(bubbleSort(question)).toStrictEqual(result);
        });
    });
});
