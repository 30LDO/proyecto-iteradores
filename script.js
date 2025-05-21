let story = 'Last weekend, I took literally the most beautifull hike of \
my life. The trail is called "The High Peak Loop" and \
it stretches all the way from Lake Placid to Mount Marcy, \
New York. Itâ€™s really an adventure from beginning to end! \
It is a 15-mile trek, and it literally took me an entire day. \
I stopped at Mirror Lake to take some artsy photos. \
It was a short stop, though,\
because I had a freaking steep climb ahead. \
After a quick break at the scenic Adirondack Lodge,\
I began my ascent up the rocky path. \
The summit is a breathtaking 5,344 feet high! \
I was already exhausted by the time I reached the h\
alfway point. \
Two hours later, I arrived at Indian Falls, \
an extremely beautifull cascade hidden in the forest.\
Something that surprised me was that near the end,\
 you literally loop back to the starting point! \
 At this stage, youâ€™re very close to finishing.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';


console.log(storyWords);

let count = 0;

storyWords = storyWords.filter(word => {
    return word != unnecessaryWord ? true : false;
})

storyWords = storyWords.map(word => {
    return word == misspelledWord ? 'beautiful' : word;
})

let badWordIndex = storyWords.findIndex((word) => {
    return word == badWord;
});

console.log(badWordIndex)

lengthCheck = storyWords.every(word => {
    word.length < 10;
})

console.log(lengthCheck)

storyWords = storyWords.map(word => {
    return word.length > 10 ? 'um' : word
});


storyWords.forEach(() => {
    count ++;

})

storyWords[badWordIndex] = 'really'

console.log(count);

console.log(storyWords.join(' '));



