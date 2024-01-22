function solution(spell, dic) {
    let sortedSpell = spell.sort().join('');

    for (let word of dic) {
        let sortedWord = word.split('').sort().join('');
        if (sortedSpell === sortedWord) {
            return 1;
        }
    }
    return 2;
}
