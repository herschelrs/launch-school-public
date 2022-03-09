
const adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry"];
const nouns = ["fox", "dog", "head", "leg", "tail", "cat"];
const verbs = ["jumps", "lifts", "bites", "licks", "pats"];
const adverbs = ["easily", "lazily", "noisily", "excitedly"];
let parts = {ADJECTIVE: adjectives, NOUN: nouns, VERB: verbs, ADVERB: adverbs};

function madlib(template) {
  for (let partOfSpeech of Object.keys(parts).sort()) { //sorting to make sure we do adverbs before verbs
    while (template.includes(partOfSpeech)) {
      let randomIndex = Math.floor(Math.random() * parts[partOfSpeech].length);
      template = template.replace(
        new RegExp(partOfSpeech), parts[partOfSpeech][randomIndex]);
    }
  }
  return template;
}

let firstTemplate = "The ADJECTIVE NOUN ADVERB VERB the ADJECTIVE NOUN, who ADVERB VERB the NOUN.";
console.log(madlib(firstTemplate));