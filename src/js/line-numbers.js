var classMap = require('../css/prism.css.json');
var classLineNumbers = classMap['line-numbers'];
var classLineNumbersRows = classMap['line-numbers-rows'];

Prism.hooks.add('complete', function(env) {
    var pre = env.element.parentElement;
    if (pre.classList.contains('line-numbers')) {
        pre.classList.add(classLineNumbers);
        
        env.element.getElementsByClassName('line-numbers-rows')[0]
                   .classList.add(classLineNumbersRows);
    }
});
