@typedef {{name: string, key: string, tooltip?: string, checked?: boolean, sub?: {name: string, tooltip?: string, checked?: string}[]}[]} Options
@typedef {{name: 'y', img: 'y.png', opts: Object<string, boolean|number[]}[]} CharData
 
@type {Object.<string, {options: Options, characterData: CharData}>}
 
const dataSet = {};

/** 
 * Data set version, in YYYY-MM-DD form.
 * 
 * @example '2018-02-20'
*/
let dataSetVersion = '2024-11-01';

/**
 * Image root, will be appended to the start of every image URL.
 */
const imageRoot = 'https://file.garden/';
