"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
/**
 * 洗牌算法，复杂度 O(n)
 * @param param0 数组
 * @returns
 */
const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};
exports.shuffle = shuffle;
