describe('convert_to_words', function() {
    it('converts values less than a dollar', function() {
        expect(convert_to_words('0.14')).toEqual('"14/100 dollars"');
    })
    it('handles values with no leading 0', function() {
        expect(convert_to_words('.14')).toEqual('"14/100 dollars"');
    })
    it('converts one dollar', function() {
        expect(convert_to_words('1.10')).toEqual('"One and 10/100 dollars"');
    })
    it('converts teens of dollars', function() {
        expect(convert_to_words('13.45')).toEqual('"Thirteen and 45/100 dollars"');
    })
    it('converts tens of dollars', function() {
        expect(convert_to_words('33.33')).toEqual('"Thirty-three and 33/100 dollars"');
    })
    it('converts hundreds of dollars', function() {
        expect(convert_to_words('333.33')).toEqual('"Three hundred thirty-three and 33/100 dollars"');
    })
    it('converts thousands of dollars', function() {
        expect(convert_to_words('3000.33')).toEqual('"Three thousand and 33/100 dollars"');
    })
    it('converts teens of thousands of dollars', function() {
        expect(convert_to_words('13333.33')).toEqual('"Thirteen thousand three hundred thirty-three and 33/100 dollars"');
    })
    it('converts tens of thousands of dollars', function() {
        expect(convert_to_words('33333.33')).toEqual('"Thirty-three thousand three hundred thirty-three and 33/100 dollars"');
    })
    it('converts hundreds of thousands of dollars', function() {
        expect(convert_to_words('333333.33')).toEqual('"Three hundred thirty-three thousand three hundred thirty-three and 33/100 dollars"');
    })
})

describe('convert_decimal_to_string', function() {
    it('converts 0 cents', function() {
        expect(convert_decimal_to_string('00')).toEqual('00/100');
    })
    it('converts 5 cents', function() {
        expect(convert_decimal_to_string('05')).toEqual('05/100');
    })
    it('converts 14 cents', function() {
        expect(convert_decimal_to_string('14')).toEqual('14/100');
    })
    it('converts 99 cents', function() {
        expect(convert_decimal_to_string('99')).toEqual('99/100');
    })
})

describe('convert_singles_to_word', function() {
    it('does not convert 0', function() {
        expect(convert_singles_to_word(0)).toEqual(undefined);
    })
    it('converts 1', function() {
        var res = convert_singles_to_word(1);
        expect(res.weight).toEqual(1);
        expect(res.word).toEqual('one');
    })
    it('converts 2', function() {
        var res = convert_singles_to_word(2);
        expect(res.weight).toEqual(2);
        expect(res.word).toEqual('two');
    })
    it('converts 3', function() {
        var res = convert_singles_to_word(3);
        expect(res.weight).toEqual(3);
        expect(res.word).toEqual('three');
    })
    it('converts 4', function() {
        var res = convert_singles_to_word(4);
        expect(res.weight).toEqual(4);
        expect(res.word).toEqual('four');
    })
    it('converts 5', function() {
        var res = convert_singles_to_word(5);
        expect(res.weight).toEqual(5);
        expect(res.word).toEqual('five');
    })
    it('converts 6', function() {
        var res = convert_singles_to_word(6);
        expect(res.weight).toEqual(6);
        expect(res.word).toEqual('six');
    })
    it('converts 7', function() {
        var res = convert_singles_to_word(7);
        expect(res.weight).toEqual(7);
        expect(res.word).toEqual('seven');
    })
    it('converts 8', function() {
        var res = convert_singles_to_word(8);
        expect(res.weight).toEqual(8);
        expect(res.word).toEqual('eight');
    })
    it('converts 9', function() {
        var res = convert_singles_to_word(9);
        expect(res.weight).toEqual(9);
        expect(res.word).toEqual('nine');
    })
    it('does not convert 10', function() {
        expect(convert_singles_to_word(10)).toEqual(undefined);
    })
})

describe('convert_teens_to_word', function() {
    it('does not convert 9', function() {
        expect(convert_teens_to_word(9)).toEqual(undefined);
    })
    it('converts 10', function() {
        var res = convert_teens_to_word(10);
        expect(res.weight).toEqual(10);
        expect(res.word).toEqual('ten');
    })
    it('converts 11', function() {
        var res = convert_teens_to_word(11);
        expect(res.weight).toEqual(11);
        expect(res.word).toEqual('eleven');
    })
    it('converts 12', function() {
        var res = convert_teens_to_word(12);
        expect(res.weight).toEqual(12);
        expect(res.word).toEqual('twelve');
    })
    it('converts 13', function() {
        var res = convert_teens_to_word(13);
        expect(res.weight).toEqual(13);
        expect(res.word).toEqual('thirteen');
    })
    it('converts 14', function() {
        var res = convert_teens_to_word(14);
        expect(res.weight).toEqual(14);
        expect(res.word).toEqual('fourteen');
    })
    it('converts 15', function() {
        var res = convert_teens_to_word(15);
        expect(res.weight).toEqual(15);
        expect(res.word).toEqual('fifteen');
    })
    it('converts 16', function() {
        var res = convert_teens_to_word(16);
        expect(res.weight).toEqual(16);
        expect(res.word).toEqual('sixteen');
    })
    it('converts 17', function() {
        var res = convert_teens_to_word(17);
        expect(res.weight).toEqual(17);
        expect(res.word).toEqual('seventeen');
    })
    it('converts 18', function() {
        var res = convert_teens_to_word(18);
        expect(res.weight).toEqual(18);
        expect(res.word).toEqual('eighteen');
    })
    it('converts 19', function() {
        var res = convert_teens_to_word(19);
        expect(res.weight).toEqual(19);
        expect(res.word).toEqual('nineteen');
    })
    it('does not convert 20', function() {
        expect(convert_teens_to_word(20)).toEqual(undefined);
    })
})

describe('convert tens to word', function() {
    it('does not convert 19', function() {
        expect(convert_tens_to_word(19)).toEqual(undefined);
    })
    it('converts 20', function() {
        var res = convert_tens_to_word(20);
        expect(res.weight).toEqual(20);
        expect(res.word).toEqual('twenty');
        expect(res.separator).toEqual('-');
    })
    it('converts 30', function() {
        var res = convert_tens_to_word(30);
        expect(res.weight).toEqual(30);
        expect(res.word).toEqual('thirty');
        expect(res.separator).toEqual('-');
    })
    it('converts 40', function() {
        var res = convert_tens_to_word(40);
        expect(res.weight).toEqual(40);
        expect(res.word).toEqual('forty');
        expect(res.separator).toEqual('-');
    })
    it('converts 50', function() {
        var res = convert_tens_to_word(50);
        expect(res.weight).toEqual(50);
        expect(res.word).toEqual('fifty');
        expect(res.separator).toEqual('-');
    })
    it('converts 60', function() {
        var res = convert_tens_to_word(60);
        expect(res.weight).toEqual(60);
        expect(res.word).toEqual('sixty');
        expect(res.separator).toEqual('-');
    })
    it('converts 70', function() {
        var res = convert_tens_to_word(70);
        expect(res.weight).toEqual(70);
        expect(res.word).toEqual('seventy');
        expect(res.separator).toEqual('-');
    })
    it('converts 80', function() {
        var res = convert_tens_to_word(80);
        expect(res.weight).toEqual(80);
        expect(res.word).toEqual('eighty');
        expect(res.separator).toEqual('-');
    })
    it('converts 90', function() {
        var res = convert_tens_to_word(90);
        expect(res.weight).toEqual(90);
        expect(res.word).toEqual('ninety');
        expect(res.separator).toEqual('-');
    })
})

describe('string capitalize', function() {
    it('does nothing to an empty string', function() {
        expect(capitalize('')).toEqual('');
    })
    it('capitalizes a single letter', function() {
        expect(capitalize('a')).toEqual('A');
    })
    it('does not change a capital letter', function() {
        expect(capitalize('A')).toEqual('A');
    })
    it('capitalizes the first letter in a string', function() {
        expect(capitalize('string')).toEqual('String');
    })
})

describe('is invalid input', function() {
    it('should show less than 0 is invalid', function() {
        expect(is_invalid_input('-0.01')).toBeTruthy();
    })
    it('should show 0 is valid', function() {
        expect(is_invalid_input('0.00')).toBeFalsy();
    })
    it('should show 999999.99 is valid', function() {
        expect(is_invalid_input('999999.99')).toBeFalsy();
    })
    it('should show 1000000.00 is not valid', function() {
        expect(is_invalid_input('1000000.00')).toBeTruthy();
    })
})
