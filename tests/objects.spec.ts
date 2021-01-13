import {containsFalsyFields} from "../src/objects";

describe('containsFalsyFields', () => {
    it('should detect if an object contains falsyFields', () => {
        expect(containsFalsyFields({ name: '' })).toBe(true);
    });

    it('should return true if the object is empty', () => {
        expect(containsFalsyFields({})).toBe(true);
    });
})