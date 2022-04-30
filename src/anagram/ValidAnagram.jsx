function validAnagram(first, second){
    if(first.length !== second.length){
        return false
    }
    const lookup = {}

    for (let i = 0; i <first.length; i ++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i <second.length; i++){
        let letter = second[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
// {
//     a:2
//     n:1
// }
// {a:0,n:0,g:0,r:0,m:0,s:1}
validAnagram('anagram', 'nagaram')