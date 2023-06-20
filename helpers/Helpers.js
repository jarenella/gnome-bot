//helpers are organized as mostly methods within Helpers object
const Helpers = {
  quotes: [ //array
    `"All cars should be hanged" - ster`,
    `(reading a comment) 'whats up sluts?'\n"woah, feelin called out" - ster`,
    `"anyone staring into my eyes playing with their worm?" - ster`,
    `"im going to sit down on the toilet and piss up into my face" - jerma`,
    `“yo…… merry christmas” - ster`,
    `"back me up here etalix, jerma is alway nude in the hotel room" - ster`,
    `"piss in- piss on me, piss it, piss in my face! Do it! I'm fine! I can hold my breath!" - jerma`,
    `"Maybe I'll go walk around you and really humilate you. I'll drop your trousers" - jerma`,
    `"Get your hands off me" - jerma, giving into his violent tendencies`,
    `"I don't shatter at negativity!" - jerma\n"Look where he's going right now, straight to negativity" - ster`,
    `"Where's my chapstick? I'm about to freak the fuck out" - jerma\n"I've got some on my lips" - ster`,
    `"I wear dress shoes to the doctor! Is that weird? To make sure I'm over 5'8 and 1/2" - jerma`,
    `"You're pogging about his feet? Alright" - ster`,
    `"Stop the making me make my decision for me, daddy" - ster`,
    `"I'm gonna punch you in the face as hard as I can" - jerma, revealing his violent tendencies`,
    `"It takes me six hours to drink a coffee" - jerma`,
    `"Ster... I would rather... I would rather be naked on camera than play League Of Legends with you for an        hour" - jerma`,
    `"No! No guys! No! No, I don't wanna show my dick on camera! No! Oh no! Nonono, I don't wanna show my dick       on camera!" - jerma`,
    `"Die, you motherfucker!" - evil jerma`,
    `"In fact, yeah, you're gonna get punished with a Stewie Griffin impression" - jerma`,
    `"For those of you who don't know... I'm The Sus Guy." - jerma`,
    `"you're the fated straight man" - moonmoon in the myraid`,
    `"i'm glad tamales are cannon in myriad" - octopimp in the myriad`,
    `"An adult diaper to me is like- I don't know... sometimes I do like a full 60 second piss. I don't think it   would work" - jerma`,
    `"IT'S OVAH!" - jerma`
  ],

  matchesRegex(input) {
    let regex = /!rtd\s[0-9]+/i;
    return regex.test(input);
  },

  getQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)]
  }
}

module.exports = Helpers;