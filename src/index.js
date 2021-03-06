require('./scss/bootstrap.scss');

require('./css/prism.css');
require('prismjs');
require('prismjs/components/prism-clike');
require('prismjs/components/prism-markup-templating');
require('prismjs/components/prism-tt2');
require('prismjs/plugins/line-numbers/prism-line-numbers');
require('prismjs/plugins/custom-class/prism-custom-class');
Prism.plugins.customClass.map(require('./css/prism.css.json'));

require('./js/line-numbers');
