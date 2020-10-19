const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (i = 0; i < (expr.length / 10); i++) {
        let morse = '';
        let ten = expr.substring(i * 10, i * 10 + 10);
        if (expr.substring(i * 10, i * 10 + 10) === '**********') {
            morse = ' ';
        } else {
            let rez = '';
            for (j = 0; j < (ten.length / 2); j++) {
                if (ten.substring(j * 2, j * 2 + 2) === '00') {
                    rez += '';
                } else if (ten.substring(j * 2, j * 2 + 2) === '10') {
                    rez += '.';
                } else if (ten.substring(j * 2, j * 2 + 2) === '11') {
                    rez += '-';
                };
            };
            morse = MORSE_TABLE[rez];
        };
        result += morse;
    };
    return result;
};

module.exports = {
    decode
}