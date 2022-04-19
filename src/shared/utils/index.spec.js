import { durationToRatio, fansNumToString, getYear } from ".";

describe('Testing utils', () => {
    test('should return 00:00', () => {
        const actual = durationToRatio('0');
        expect(actual).toEqual('00:00');
    });

    test('should return 03:20', () => {
        const actual = durationToRatio(200);
        expect(actual).toEqual('03:20');
    });

    test('should return 00:10', () => {
        const actual = durationToRatio(10);
        expect(actual).toEqual('00:10');
    });

    test('should return 1.2k fans', () => {
        const actual = fansNumToString(1234);
        expect(actual).toEqual('1.2K');
    });

    test('should return 3.8M fans', () => {
        const actual = fansNumToString(3780034);
        expect(actual).toEqual('3.8M');
    });

    test('should return 999 fans', () => {
        const actual = fansNumToString(999);
        expect(actual).toEqual(999);
    });

    test('should return a year 2022', () => {
        const actual = getYear('2022-03-21');
        expect(actual).toEqual(2022);
    });

    test('should return a year 2021', () => {
        const actual = getYear('2021/04/23');
        expect(actual).toEqual(2021);
    });
});