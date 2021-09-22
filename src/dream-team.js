import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  function isStr(str) {
    return typeof str === 'string';
  }
  let arrSort = members.sort();
  
  let filtered = arrSort.filter(isStr);
  let results = filtered.map(function (word) {
    return word.charAt(0).toUpperCase();
  });
  return results.join('');
}
