number_to_words_converter();

function number_to_words_converter() {
    console.log('Convert ' + process.argv[2]);
    console.log('     to ' + convert_to_words(process.argv[2]));
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function is_invalid_input(stringValue) {
    var floatValue = parseFloat(stringValue);
    return floatValue < 0 || floatValue > 999999.99; 
}
   
function convert_to_words(stringValue) {
    var tokens = stringValue.split('.');
    var integer = parseInt(tokens[0]);
    var decimal = tokens[1];
    var result = '';

    if( is_invalid_input(stringValue) ) {
        return 'Only values between 0 and 999999.99 are supported. Please enter a supported number.';
    }

    if( integer > 0 ) {
        var thousands = Math.floor(integer / 1000);
        var singles = integer % 1000;

        if( thousands > 0 ) {
            result += convert_three_digit_integer_to_words(thousands) + ' thousand ';
        }
        if( singles > 0 ) {
            result += convert_three_digit_integer_to_words(singles) + ' ';
        }
        result += 'and ';
    }

    result += convert_decimal_to_string(decimal);
    
    return '"' + capitalize(result) + ' dollars"';
}

function convert_decimal_to_string(cents) {
    return cents + '/100';
}

function convert_three_digit_integer_to_words(integerValue) {
    var stringValue = '';
    var word = undefined;
    var converters = [];
    converters.push(convert_hundreds_to_words);
    converters.push(convert_tens_to_word);
    converters.push(convert_teens_to_word);
    converters.push(convert_singles_to_word);

    for(var i = 0; i < converters.length; i++){
        word = converters[i](integerValue);
        if( word ){
            stringValue += word.word;
            integerValue -= word.weight;

            if( word.separator && integerValue > 0 ) {
                stringValue += word.separator;
            }
        }
    }

    return stringValue;
}

function convert_hundreds_to_words(value) {
    var hundreds = Math.floor(value / 100);
    var word = undefined;

    if( value < 100 )
        return;

    word = convert_singles_to_word(hundreds);
    if( word ) {
        word.word += ' hundred';
        word.separator = ' ';
        word.weight *= 100;
    }
    
    return word;
}

function convert_tens_to_word(value) {
    var english = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var tens = Math.floor(value / 10);

    if( tens < 2 || tens > 9 ) {
        return;
    }

    return {
        weight: tens * 10,
        separator: '-',
        word: english[tens]
    };
}

function convert_teens_to_word(value) {
    var english = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var teens = value - 10;

    if( teens < 0 || teens > 9 ) {
        return;
    }

    return {
        weight: teens + 10,
        word: english[teens]
    };
}

function convert_singles_to_word(value) {
    var english = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    if( value < 1 || value > 9 ){
        return;
    }

    return {
        weight: value,
        word: english[value]
    };
}
