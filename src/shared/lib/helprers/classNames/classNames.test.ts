import { clsx } from '@/shared/lib/helprers/classNames/classNames';

describe('classNames', () => {
    test('without arguments', () => {
        expect(clsx({})).toBe('');
    });
    test('only cls argument', () => {
        expect(clsx({ cls: 'someClass' })).toBe('someClass');
    });
    test('only mods argument', () => {
        expect(clsx({ mods: { someClass: true, someClass2: false } })).toBe('someClass');
    });
    test('only additional argument', () => {
        expect(clsx({ additional: ['someClass'] })).toBe('someClass');
    });
    test('with all arguments', () => {
        expect(clsx({ cls: 'someClass', mods: { class2: true, class3: false }, additional: ['someClass2'] })).toBe('someClass someClass2 class2');
    });
    test('with falsy values', () => {
        expect(clsx({ cls: null, mods: { class2: undefined, class3: null }, additional: [undefined] })).toBe('');
    });
});
