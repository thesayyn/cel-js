
/**
 * Returns a type with traits
 * @param {string} name 
 * @param {number[]} traits
 */
export function type(name, ...traits) {
    let trait_mask = 0;
    for (const trait of traits) {
        trait_mask |= trait;
    }
    return {
        name,
        trait_mask,
    }
}

export const Type = {

    // scalar types
	Bool   : 0,
	Bytes  : 1,
	Double : 2,
	Int    : 3,
	Null   : 4,
	String : 5,
	Uint   : 6,
    /* Javascript does not have a builtin unsigned integers. We will make sure that the number is unsigned by 
    using a third party library */



    // well known types
    Any       : 7,
	Duration  : 8,
	Timestamp : 9,
}