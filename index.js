
 
// first test
function introduction (name){
   return `Hi, my name is ${name}.`;
} 
introduction ("Josh");


// second test 
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Josh", "Ember");


// third test 
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("Josh", "Ember");