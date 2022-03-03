import { findSubstring } from "../../leetcode/30.串联所有单词的子串.js";

describe("30.串联所有单词的子串", () => {
    test(`s = "abaababbaba", words = ["ab","ba","ab","ba"]`, () => {
        const arr = findSubstring("abaababbaba", ["ab", "ba", "ab", "ba"]);
        expect(arr).toStrictEqual(expect.arrayContaining([1, 3]));
        expect(arr).toHaveLength(2);
    });

    test(`s = "bcabbcaabbccacacbabccacaababcbb", words = ["c","b","a","c","a","a","a","b","c"]`, () => {
        const arr = findSubstring("bcabbcaabbccacacbabccacaababcbb", [
            "c",
            "b",
            "a",
            "c",
            "a",
            "a",
            "a",
            "b",
            "c",
        ]);
        expect(arr).toStrictEqual(
            expect.arrayContaining([6, 16, 17, 18, 19, 20])
        );
        expect(arr).toHaveLength(6);
    });

    test(`s = "aaaaaaaaaaaaaa", words = ["aa","aa"]`, () => {
        const arr = findSubstring("aaaaaaaaaaaaaa", ["aa", "aa"]);
        expect(arr).toStrictEqual(
            expect.arrayContaining([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        );
        expect(arr).toHaveLength(11);
    });

    test(`s = "aaa", words = ["a","a"]`, () => {
        const arr = findSubstring("aaa", ["a", "a"]);
        expect(arr).toStrictEqual(expect.arrayContaining([0, 1]));
        expect(arr).toHaveLength(2);
    });

    test(`s = "wordgoodgoodgoodbestword", words = ["word","good","best","good"]`, () => {
        const arr = findSubstring("wordgoodgoodgoodbestword", [
            "word",
            "good",
            "best",
            "good",
        ]);
        expect(arr).toStrictEqual([8]);
        expect(arr).toHaveLength(1);
    });

    test(`s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]`, () => {
        const arr = findSubstring("barfoofoobarthefoobarman", [
            "bar",
            "foo",
            "the",
        ]);
        expect(arr).toStrictEqual(expect.arrayContaining([6, 9, 12]));
        expect(arr).toHaveLength(3);
    });

    test(`s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]`, () => {
        const arr = findSubstring("wordgoodgoodgoodbestword", [
            "word",
            "good",
            "best",
            "word",
        ]);
        expect(arr).toStrictEqual([]);
        expect(arr).toHaveLength(0);
    });

    test(`s = "barfoothefoobarman", words = ["foo","bar"]`, () => {
        const arr = findSubstring("barfoothefoobarman", ["foo", "bar"]);
        expect(arr).toStrictEqual(expect.arrayContaining([0, 9]));
        expect(arr).toHaveLength(2);
    });
});
