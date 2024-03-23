function findGoodCharacters(s){
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const goodIndices = [];

    for(let i = 0; i < s.length; i++ ){
        if(vowels.has(s[i])){
            goodIndices.push(i);
        }
        else if(i > 0 && s[i] === s[i-1]){
            goodIndices.push(i);
        }
        else if(i < s.length - 1 && s[i] === s[i + 1]){
            goodIndices.push(i);
        }
    }
    return goodIndices;
}

const inputString = "example";
const resultIndices = findGoodCharacters(inputString) ;

console.log("indices of good character: ", resultIndices);