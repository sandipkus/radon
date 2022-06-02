const trim = function(){
    const text = 'FunctionUp '
    const result = text.trim();

    console.log(result);

}

const changetoLowerCase = function(){
    const text = 'FunctionUp';
    const result = text.toLowerCase();
    console.log(result);
}

const changetoUpperCase = function(){
    const text = 'FunctionUp';
    const result = text.toUpperCase();
    console.log(result);
}

module.exports.trim = trim;

module.exports.changetoLowerCase = changetoLowerCase;

module.exports.changetoUpperCase = changetoUpperCase;