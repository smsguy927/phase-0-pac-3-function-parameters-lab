function introduction (text) {
    return `Hi, my name is ${text}.`
}

function introductionWithLanguage (text, lang) {
    return `Hi, my name is ${text} and I am learning to program in ${lang}.`
}

function introductionWithLanguageOptional (text, lang = 'JavaScript') {
    return `Hi, my name is ${text} and I am learning to program in ${lang}.`
}