let input = 'image.png'

let fileType = function (input) {
    let dotPos = input.lastIndexOf('.');
    if (typeof input === 'string') console.log(input.substring(dotPos + 1, input.length));
}

fileType(input);