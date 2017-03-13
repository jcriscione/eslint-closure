'use strict';var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},r="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function t(){t=function(){};r.Symbol||(r.Symbol=ba)}var ca=0;function ba(a){return"jscomp_symbol_"+(a||"")+ca++}
function w(){t();var a=r.Symbol.iterator;a||(a=r.Symbol.iterator=r.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return y(this)}});w=function(){}}function y(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function da(a){w();a={next:a};a[r.Symbol.iterator]=function(){return this};return a};var B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,b){for(var c,d,h=1;h<arguments.length;h++){d=arguments[h];for(c in d)a[c]=d[c];for(var p=0;p<B.length;p++)c=B[p],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ea=require("lodash.ismatchwith");function fa(a){return function(b){return F(b,a)}}function F(a,b){var c={};return ea(a,b,function(a,b){if("function"===typeof b)return a=b(a),"object"===typeof a&&E(c,a),a})?c:!1}function ga(a){var b;return function(c){var d={},d=(d[a]=c,d);"object"===typeof b&&(b=fa(b));if("function"===typeof b){c=b(c);if("object"===typeof c)return E(d,c),d;if(!c)return!1}return d}}var G=F;function H(a,b){for(a=a.parent;!b(a)&&"Program"!==a.type;)a=a.parent;return b(a)?a:null}function I(a,b){b=void 0===b?"literal":b;return G(a,{type:"Literal",value:function(a){return"string"===typeof a&&ga(b)(a)}})}function K(a,b){return H(a,function(a){return a.type==b})}function L(a){return/^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression)$/.test(a.type)}
function ha(a){return G(a,{type:"ExpressionStatement",expression:{type:"CallExpression",callee:{type:"MemberExpression",object:{type:"Identifier",name:"goog"},property:{type:"Identifier",name:"require"}},arguments:[function(a){return I(a,"source")}]}})}
function ia(a){return G(a,{type:"ExpressionStatement",expression:{type:"CallExpression",callee:{type:"MemberExpression",object:{type:"Identifier",name:"goog"},property:{type:"Identifier",name:"provide"}},arguments:[function(a){return I(a,"source")}]}})}function ja(a){return G(a,{type:"ExpressionStatement",expression:function(a){return I(a,"directive")}})};var P={I:"constant",J:"leading",A:"no_underscore",K:"middle",L:"opt_prefix",M:"trailing",N:"var_args"};function ka(a){return""!==a&&a.length?a.toUpperCase()===a?P.I:-1===a.indexOf("_")?P.A:"var_args"===a?P.N:"opt_"===a.substring(0,4)&&"opt_"!=a?P.L:"_"===a[0]?P.J:"_"===a[a.length-1]?P.M:P.K:P.A}function Q(a){return"ClassExpression"===a.type||"ClassDeclaration"===a.type}function R(a){return a.loc.end.line===a.loc.start.line}function S(a,b){return a.loc.start.line===b.loc.start.line};var la={S:!1,P:!1,O:!0,R:!0,C:!0};
function ma(a,b){function c(a){return Object.assign(p,{message:a})}function d(d,f){return na(d,a,b)?h:c(f)}var h={node:a,message:"",U:!1},p={node:a,message:"",U:!0};switch(ka(a.name)){case P.I:return h;case P.J:return b.O?d(a.name.replace(/^_+/g,"").replace(/_+$/g,""),"Identifier '"+a.name+"' is not in camel case after the leading underscore."):c("Leading underscores are not allowed in '"+a.name+"'.");case P.A:return h;case P.K:return d(a.name,"Identifier '"+a.name+"' is not in camel case.");case P.L:return b.P?
d(a.name.replace(/^opt_/g,""),"Identifier '"+a.name+"' is not in camel case after the opt_ prefix."):c("The opt_ prefix is not allowed in '"+a.name+"'.");case P.M:return b.R?d(a.name.replace(/^_+/g,"").replace(/_+$/g,""),"Identifier '"+a.name+"' is not in camel case before the trailing underscore."):c("Trailing underscores are not allowed in '"+a.name+"'.");case P.N:return b.S?h:c("The var_args identifier is not allowed.");default:throw Error("Unknown undercore form: "+a.name);}}
function na(a,b,c){var d=b.parent;if(!(-1<a.indexOf("_")))return!0;switch(d.type){case "MemberExpression":d=b.parent;if(!c.C)return!0;if(d.property===b)return d.parent&&"AssignmentExpression"===d.parent.type?d.parent.right===d:!0;break;case "Property":d=b.parent;if(!c.C||d.parent&&"ObjectPattern"===d.parent.type&&d.key===b&&d.value!==b)return!0;break;case "CallExpression":return!0}return!1};function T(a,b,c,d){a=d?b.getLastToken(a):b.getFirstToken(a);b=b.getText(a,a.loc.start.column).split("");a=b.slice(0,b.findIndex(function(a){return" "!==a&&"\t"!==a}));b=a.filter(function(a){return" "===a}).length;a=a.filter(function(a){return"\t"===a}).length;return{H:b,tab:a,b:"space"===c?b:a,B:"space"===c?a:b}}function U(a,b,c){b=!0===c?b.getLastToken(a,1):b.getTokenBefore(a);return(!0===c?a.loc.end.line:a.loc.start.line)!==(b?b.loc.end.line:-1)}
function V(a,b){return!!b&&b.parent.loc.start.line===a.loc.start.line&&1<b.parent.declarations.length}function oa(a){if("CallExpression"!==a.parent.type)return!1;a=a.parent;if("MemberExpression"!==a.callee.type)return!1;a=a.callee;if("Identifier"!==a.object.type||"Identifier"!==a.property.type)return!1;var b=a.property;return"goog"===a.object.name&&"scope"===b.name}
function pa(a){return a.declarations.reduce(function(b,c){var d=b[b.length-1];(c.loc.start.line!==a.loc.start.line&&!d||d&&d.loc.start.line!==c.loc.start.line)&&b.push(c);return b},[])}
function qa(a){var b={D:4,F:"space",V:{SwitchCase:0,VariableDeclarator:{Y:1,W:1,T:1},l:-1,MemberExpression:-1,FunctionDeclaration:{h:-1,body:1},FunctionExpression:{h:-1,body:1}}},c=b.V;if(a.length&&("tab"===a[0]?(b.D=1,b.F="tab"):"number"===typeof a[0]&&(b.D=a[0],b.F="space"),a[1])){a=a[1];c.SwitchCase=a.SwitchCase||0;if("number"===typeof a.VariableDeclarator){var d=a.VariableDeclarator;c.VariableDeclarator={Y:d,W:d,T:d}}else"object"===typeof a.VariableDeclarator&&Object.assign(c.VariableDeclarator,
a.VariableDeclarator);"number"===typeof a.l&&(c.l=a.l);"number"===typeof a.MemberExpression&&(c.MemberExpression=a.MemberExpression);"object"===typeof a.FunctionDeclaration&&Object.assign(c.FunctionDeclaration,a.FunctionDeclaration);"object"===typeof a.FunctionExpression&&Object.assign(c.FunctionExpression,a.FunctionExpression)}return b};var W=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if("string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var ra=require("doctrine");
function X(a,b){b(a);if("NullableLiteral"!==a.type&&"AllLiteral"!==a.type&&"NullLiteral"!==a.type&&"UndefinedLiteral"!==a.type&&"VoidLiteral"!==a.type&&"StringLiteralType"!==a.type&&"NumericLiteralType"!==a.type&&"NameExpression"!==a.type)switch(a.type){case "ArrayType":a.elements.forEach(function(a){return X(a,b)});break;case "RecordType":a.fields.forEach(function(a){return X(a,b)});break;case "FunctionType":a.this&&X(a.this,b);a.params.forEach(function(a){return X(a,b)});a.result&&X(a.result,b);
break;case "FieldType":a.value&&X(a.value,b);break;case "ParameterType":case "RestType":case "NonNullableType":case "OptionalType":case "NullableType":X(a.expression,b);break;case "TypeApplication":X(a.expression,b);a.applications.forEach(function(a){return X(a,b)});break;case "UnionType":a.elements.forEach(function(a){return X(a,b)});break;default:throw Error("Unrecoginized tag type.");}}function sa(a){return"Block"===a.type&&"*"===a.value.charAt(0)}
function ta(a){var b=["FunctionExpression","ArrowFunctionExpression","ClassExpression"];return G(a,{type:"VariableDeclaration",declarations:[{type:"VariableDeclarator",init:function(a){return!!a&&-1!==b.indexOf(a.type)}}]})}function Y(a){return a.leadingComments&&a.leadingComments.length&&!ta(a)?a.leadingComments.filter(sa).reduce(function(a,c){return c||a},null):null}
function ua(a){var b="type typedef record const private package protected public export".split(" ");return a.tags.some(function(a){return 0<=W(b,a.title)})}function va(a){try{return ra.parse(a,{ha:!0,unwrap:!0,sloppy:!0})}catch(b){if(/braces/i.test(b.message))throw Error("JSDoc type missing brace.");throw Error("JSDoc syntax error.");}};var wa=require("doctrine");function xa(a){return null===a.type||a.type.name&&"void"===a.type.name||"UndefinedLiteral"===a.type.type}var ya="string number boolean Object Array Map Set".split(" ");function za(a,b){b.type&&X(b.type,function(b){"NameExpression"===b.type&&(b=b.name,-1!==ya.indexOf(b)||a.markVariableAsUsed(b))})};var Z={rules:{}};Z.rules.camelcase={meta:{docs:{description:"check identifiers for camel case with options for opt_ prefix and var_args identifiers",category:"Stylistic Issues",recommended:!0},schema:[{type:"object",properties:{S:{type:"boolean"},P:{type:"boolean"},O:{type:"boolean"},R:{type:"boolean"},C:{type:"boolean"}},i:!1}]},create:function(a){var b=Object.assign({},la,a.options[0]||{});return{Identifier:function(c){c=ma(c,b);c.U&&a.report({node:c.node,message:c.message})}}}};
Z.rules.indent={meta:{docs:{description:"enforce consistent indentation",category:"Stylistic Issues",recommended:!1},fixable:"whitespace",schema:[{o:[{g:["tab"]},{type:"integer",c:0}]},{type:"object",properties:{SwitchCase:{type:"integer",c:0},VariableDeclarator:{o:[{type:"integer",c:0},{type:"object",properties:{Y:{type:"integer",c:0},W:{type:"integer",c:0},T:{type:"integer",c:0}}}]},l:{type:"integer",c:0},MemberExpression:{type:"integer",c:0},FunctionDeclaration:{type:"object",properties:{h:{o:[{type:"integer",
c:0},{g:["first"]}]},body:{type:"integer",c:0}}},FunctionExpression:{type:"object",properties:{h:{o:[{type:"integer",c:0},{g:["first"]}]},body:{type:"integer",c:0}}}},i:!1}]},create:function(a){function b(a,b,c){a=a+" "+e+(1===a?"":"s");var g="space"+(1===b?"":"s"),z="tab"+(1===c?"":"s"),x;0<b&&0<c?x=b+" "+g+" and "+(c+" "+z):0<b?x="space"===e?b:b+" "+g:0<c?x="tab"===e?c:c+" "+z:x="0";return"Expected indentation of "+a+" but"+(" found "+x+".")}function c(g,c,x,d,f,C){var z=("space"===e?" ":"\t").repeat(c),
l=C?[g.range[1]-x-d-1,g.range[1]-1]:[g.range[0]-x-d,g.range[0]];a.report({node:g,loc:f,message:b(c,x,d),fix:function(a){return a.replaceTextRange(l,z)}})}function d(a,b){var g=T(a,m,e,!1);"ArrayExpression"!==a.type&&"ObjectExpression"!==a.type&&(g.b!==b||g.B)&&U(a,m)&&c(a,b,g.H,g.tab)}function h(a,b){a.forEach(function(a){return d(a,b)})}function p(a,b){var g=m.getLastToken(a),z=T(g,m,e,!0);(z.b!==b||z.B)&&U(a,m,!0)&&c(a,b,z.H,z.tab,{start:{line:g.loc.start.line,column:g.loc.start.column}},!0)}function u(a){var g=
T(a,m,e).b,b=a.parent;"Property"===b.type||"ArrayExpression"===b.type?g=T(a,m,e,!1).b:"CallExpression"===b.type&&1<=b.arguments.length&&b.arguments[0].loc.end.line>b.arguments[0].loc.start.line&&R(b.callee)&&!U(a,m)&&(g=T(b,m,e).b);return g}function f(a){var b=a.body,g=u(a),c=l,e;if(e=-1!==k.l)if(oa(a))e=!0;else{var d=a.parent;e=d.parent;if("CallExpression"!==d.type||d.callee!==a)e=!1;else{for(;"UnaryExpression"===e.type||"AssignmentExpression"===e.type||"LogicalExpression"===e.type||"SequenceExpression"===
e.type||"VariableDeclarator"===e.type;)if("UnaryExpression"===e.type)if(d=e,"!"===d.operator||"~"===d.operator||"+"===d.operator||"-"===d.operator)e=e.parent;else break;else e=e.parent;e=("ExpressionStatement"===e.type||"VariableDeclaration"===e.type)&&e.parent&&"Program"===e.parent.type}}e?c=k.l*l:"FunctionExpression"===a.type?c=k.FunctionExpression.body*l:"FunctionDeclaration"===a.type&&(c=k.FunctionDeclaration.body*l);g+=c;(e=K(a,"VariableDeclarator"))&&V(a,e)&&(g+=l*k.VariableDeclarator[e.parent.kind]);
v(b,g,g-c)}function n(a){if(!R(a)){var b=a.body;a=u(a);v(b,a+l,a)}}function D(a){var b=a.parent,g=K(a,"VariableDeclarator"),d=T(b,m,e).b;if(U(a,m)){if(g)if(b===g)g===g.parent.declarations[0]&&(d+=l*k.VariableDeclarator[g.parent.kind]);else{if("ObjectExpression"===b.type||"ArrayExpression"===b.type||"CallExpression"===b.type||"ArrowFunctionExpression"===b.type||"NewExpression"===b.type||"LogicalExpression"===b.type)d+=l}else("ArrayExpression"!==b.type?0:b.elements[0]&&"ObjectExpression"===b.elements[0].type&&
b.elements[0].loc.start.line===b.loc.start.line)||"MemberExpression"===b.type||"ExpressionStatement"===b.type||"AssignmentExpression"===b.type||"Property"===b.type||(d+=l);var b=d+l,f=T(a,m,e,!1);(f.b!==d||f.B)&&U(a,m)&&c(a,d,f.H,f.tab,{start:{line:a.loc.start.line,column:a.loc.start.column}})}else d=T(a,m,e).b,b=d+l;V(a,g)&&(b+=l*k.VariableDeclarator[g.parent.kind]);return b}function v(a,b,c){R(a)||(h(a.body,b),p(a,c))}function q(a){var b=T(a,m,e).b,g=b+l;"BlockStatement"===a.body.type?v(a.body,
g,b):h([a.body],g)}function A(a,b,c){"first"===c&&a.params.length?h(a.params.slice(1),a.params[0].loc.start.column):h(a.params,b*c)}function J(a,b){a="SwitchStatement"===a.type?a:a.parent;if(O[a.loc.start.line])return O[a.loc.start.line];"undefined"===typeof b&&(b=T(a,m,e).b);b=0<a.cases.length&&!k.SwitchCase?b:b+l*k.SwitchCase;return O[a.loc.start.line]=b}var C=qa(a.options),e=C.F,l=C.D,k=C.V,m=a.getSourceCode(),O={};return{Program:function(a){h(a.body,0)},ClassDeclaration:n,ClassExpression:n,BlockStatement:function(a){if(!R(a)&&
("BlockStatement"==a.parent.type||"Program"==a.parent.type)){var b=T(a,m,e).b;v(a,b+l,b)}},DoWhileStatement:q,ForStatement:q,ForInStatement:q,ForOfStatement:q,WhileStatement:q,WithStatement:q,IfStatement:function(a){var b=T(a,m,e).b,c=b+l;"BlockStatement"!==a.consequent.type?S(a,a.consequent)||d(a.consequent,c):(h(a.consequent.body,c),p(a.consequent,b));if(a.alternate){var g=m.getTokenBefore(a.alternate);d(g,b);"BlockStatement"!==a.alternate.type?S(a.alternate,g)||d(a.alternate,c):(h(a.alternate.body,
c),p(a.alternate,b))}},VariableDeclaration:function(a){if(!S(a.declarations[0],a.declarations[a.declarations.length-1])){var b=pa(a),c=T(a,m,e).b,g=b[b.length-1],c=c+l*k.VariableDeclarator[a.kind];h(b,c);m.getLastToken(a).loc.end.line<=g.loc.end.line||(b=m.getTokenBefore(g),","===b.value?p(a,T(b,m,e).b):p(a,c-l))}},ObjectExpression:function(a){if(!R(a)){var b=a.properties;if(!(0<b.length&&S(b[0],a))){var c=D(a);h(b,c);p(a,c-l)}}},ArrayExpression:function(a){if(!R(a)){var b=a.elements.filter(function(a){return null!==
a});if(!(0<b.length&&S(b[0],a))){var c=D(a);h(b,c);p(a,c-l)}}},MemberExpression:function(a){if(-1!==k.MemberExpression&&!R(a)&&!K(a,"VariableDeclarator")&&!K(a,"AssignmentExpression")){var b=T(a,m,e).b+l*k.MemberExpression,c=[a.property];a=m.getTokenBefore(a.property);"Punctuator"===a.type&&"."===a.value&&c.push(a);h(c,b)}},SwitchStatement:function(a){var b=T(a,m,e).b,c=J(a,b);h(a.cases,c);p(a,b)},SwitchCase:function(a){if(!R(a)){var b=J(a);h(a.consequent,b+l)}},ArrowFunctionExpression:function(a){R(a)||
"BlockStatement"===a.body.type&&f(a)},FunctionDeclaration:function(a){R(a)||(-1!==k.FunctionDeclaration.h&&A(a,l,k.FunctionDeclaration.h),f(a))},FunctionExpression:function(a){R(a)||(-1!==k.FunctionExpression.h&&A(a,l,k.FunctionExpression.h),f(a))}}}};
Z.rules["inline-comment-spacing"]={meta:{docs:{description:"enforce consistent spacing before the `//` at line end",category:"Stylistic Issues",recommended:!1},fixable:"whitespace",schema:[{type:"integer",c:0,ja:5}]},create:function(a){var b=null==a.options[0]?1:a.options[0];return{LineComment:function(c){var d=a.getSourceCode();d.getComments(c);if((d=d.getTokenBefore(c,1)||d.getTokenOrCommentBefore(c))&&c.loc.end.line===d.loc.start.line){var h=c.start-d.end;h<b&&a.report({node:c,message:"Expected at least "+
b+" "+(1===b?"space":"spaces")+" before inline comment.",fix:function(a){return a.insertTextBefore(c,Array(b-h+1).join(" "))}})}}}}};
Z.rules.jsdoc={meta:{docs:{description:"enforce valid JSDoc comments",category:"Possible Errors",recommended:!0},schema:[{type:"object",properties:{aa:{type:"object",i:{type:"string"}},ba:{type:"object",i:{type:"string"}},da:{type:"boolean"},ca:{type:"boolean"},ea:{type:"boolean"},X:{type:"string"},fa:{type:"boolean"}},i:!1}]},create:function(a){function b(a){h.push({G:"ArrowFunctionExpression"===a.type&&"BlockStatement"!==a.body.type||Q(a)})}function c(b,c){X(c,function(c){if("NameExpression"===
c.type){c=c.name;var e=A[c];e&&a.report({node:b,message:"Use '"+e+"' instead of '"+c+"'."})}})}function d(b){var e=p.getJSDocComment(b),d=h.pop(),k=Object.create(null),m=!1,C=!1,g=!1,A=!1,x=!1,M;if(e){try{M=wa.parse(e.value,{ha:!0,unwrap:!0,sloppy:!0})}catch(Aa){/braces/i.test(Aa.message)?a.report({node:e,message:"JSDoc type missing brace."}):a.report({node:e,message:"JSDoc syntax error."});return}M.tags.forEach(function(b){switch(b.title.toLowerCase()){case "param":case "arg":case "argument":b.type||
a.report({node:e,message:"Missing JSDoc parameter type for '"+b.name+"'."});!b.description&&D&&a.report({node:e,message:"Missing JSDoc parameter description for "+("'"+b.name+"'.")});k[b.name]?a.report({node:e,message:"Duplicate JSDoc parameter '"+b.name+"'."}):-1===b.name.indexOf(".")&&(k[b.name]=1);break;case "return":case "returns":m=!0;n||d.G||null!==b.type&&xa(b)||x?(q&&!b.type&&a.report({node:e,message:"Missing JSDoc return type."}),xa(b)||b.description||!v||a.report({node:e,message:"Missing JSDoc return description."})):
a.report({node:e,message:"Unexpected @{{title}} tag; function has no return statement.",data:{title:b.title}});break;case "constructor":case "class":C=!0;break;case "override":case "inheritdoc":A=!0;break;case "abstract":case "virtual":x=!0;break;case "interface":g=!0}f.hasOwnProperty(b.title)&&b.title!==f[b.title]&&a.report({node:e,message:"Use @{{name}} instead.",data:{name:f[b.title]}});za(a,b);J&&b.type&&c(e,b.type)});A||m||C||g||"FunctionExpression"===b.type&&b.parent&&"Property"===b.parent.type&&
"get"===b.parent.kind||"FunctionExpression"===b.type&&b.parent&&"Property"===b.parent.type&&"set"===b.parent.kind||"FunctionExpression"===b.type&&b.parent&&"MethodDefinition"===b.parent.type&&"constructor"===b.parent.kind||Q(b)||(n||d.G)&&a.report({node:e,message:"Missing JSDoc @{{returns}} for function.",data:{ga:f.ga||"returns"}});var N=Object.keys(k);b.params&&b.params.forEach(function(b,c){"AssignmentPattern"===b.type&&(b=b.left);var d=b.name;"Identifier"===b.type&&(N[c]&&d!==N[c]?a.report({node:e,
message:"Expected JSDoc for '"+d+"' but found "+("'"+N[c]+"'.")}):k[d]||A||a.report({node:e,message:"Missing JSDoc for parameter '"+d+"'."}))});u.X&&((new RegExp(u.X)).test(M.description)||a.report({node:e,message:"JSDoc description does not satisfy the regex pattern."}))}}var h=[],p=a.getSourceCode(),u=a.options[0]||{},f=u.aa||{},n=!1!==u.da,D=!1!==u.ca,v=!1!==u.ea,q=!1!==u.fa,A=u.ba||{},J=!!Object.keys(A).length;return{ArrowFunctionExpression:b,FunctionExpression:b,FunctionDeclaration:b,ClassExpression:b,
ClassDeclaration:b,"ArrowFunctionExpression:exit":d,"FunctionExpression:exit":d,"FunctionDeclaration:exit":d,"ClassExpression:exit":d,"ClassDeclaration:exit":d,ReturnStatement:function(a){var b=h[h.length-1];b&&null!==a.argument&&(b.G=!0)},VariableDeclaration:function(b){if(1===b.declarations.length){var c=Y(b);if(c){var d;try{d=va(c.value)}catch(k){return}b=b.declarations[0];"Identifier"===b.id.type&&(b=b.id.name,ua(d)&&a.markVariableAsUsed(b),d.tags.forEach(function(b){za(a,b)}))}}}}}};
Z.rules["no-undef"]={meta:{docs:{description:"disallow the use of undeclared variables unless mentioned in `/*global */` comments",category:"Variables",recommended:!0},schema:[{type:"object",properties:{ia:{type:"boolean"}},i:!1}]},create:function(a){var b=a.options[0],c=b&&!0===b.ia||!1,d=[],h=[];return{Program:function(a){d=a.body.map(ha).filter(function(a){return!!a}).map(function(a){return a.source});h=a.body.map(ia).filter(function(a){return!!a}).map(function(a){return a.source})},"Program:exit":function(){function b(a){return d.some(function(b){return a.startsWith(b)?
a===b||"."===a[b.length]:!1})}function u(a){return h.some(function(b){return a.startsWith(b)?a===b||"."===a[b.length]:!1})}a.getScope().through.forEach(function(d){d=d.identifier;for(var f=d.name,h=d;h.parent&&"MemberExpression"==h.parent.type;)h=h.parent,f+="."+h.property.name;(h=c)||(h=d.parent,h=!("UnaryExpression"===h.type&&"typeof"===h.operator));h&&(u(f)||b(f)||a.report({node:d,message:"'"+d.name+"' is not defined."}))})}}}};
Z.rules["no-unused-expressions"]={meta:{docs:{description:"disallow unused expressions",category:"Best Practices",recommended:!1},schema:[{type:"object",properties:{Z:{type:"boolean"},$:{type:"boolean"}},i:!1}]},create:function(a){function b(a){if(h&&"ConditionalExpression"===a.type)return b(a.consequent)&&b(a.alternate);if(d&&"LogicalExpression"===a.type)return b(a.right);var c=/^(?:Assignment|Call|New|Update|Yield|Await)Expression$/.test(a.type);a="UnaryExpression"===a.type&&0<=["delete","void"].indexOf(a.operator);
return c||a}var c=a.options[0]||{},d=c.Z||!1,h=c.$||!1;return{ExpressionStatement:function(c){var d;if(!(d=b(c.expression))){var f=a.getAncestors();d=f[f.length-1];f=f[f.length-2];f="BlockStatement"===d.type&&/Function/.test(f.type);if("Program"===d.type||f){a:{d=d.body;for(f=0;f<d.length;++f)if(!ja(d[f])){d=d.slice(0,f);break a}d=d.slice()}d=0<=W(d,c)}else d=!1}if(!d)if(f=Y(c))try{var h=va(f.value);d=ua(h)}catch(D){d=!1}else d=!1;d||a.report({node:c,message:"Expected an assignment or function call and instead saw an expression."})}}}};
Z.rules["no-unused-vars"]={meta:{docs:{description:"disallow unused variables",category:"Variables",recommended:!0},schema:[{o:[{g:["all","local"]},{type:"object",properties:{m:{g:["all","local"]},v:{type:"string"},j:{g:["all","after-used","none"]},f:{type:"string"},s:{g:["all","none"]},u:{type:"string"},w:{type:"boolean"}}}]}]},create:function(a){function b(a,b){return a.range[0]>=b.range[0]&&a.range[1]<=b.range[1]}function c(a,c){var d=a;for(a=a.parent;a&&b(a,c);){switch(a.type){case "SequenceExpression":var f=
a;if(f.expressions[f.expressions.length-1]!==d)return!1;break;case "CallExpression":case "NewExpression":return a.callee!==d;case "AssignmentExpression":case "TaggedTemplateExpression":case "YieldExpression":return!0;default:if(D.test(a.type))return!0}d=a;a=a.parent}return!1}function d(a){var d=a.defs.filter(function(a){return"FunctionName"===a.type}).map(function(a){return a.node}),f=0<d.length,h=null;return a.references.some(function(a){var e;e=a.identifier.parent;"VariableDeclarator"===e.type&&
(e=e.parent.parent);"ForInStatement"!==e.type?e=!1:("BlockStatement"===e.body.type?e=e.body.body[0]:e=e.body,e=e?"ReturnStatement"===e.type:!1);if(e)return!0;e=h;var l=a.identifier,k=l.parent,m=k.parent,v;if(v=a.isRead())!(k="AssignmentExpression"===k.type&&"ExpressionStatement"===m.type&&k.left===l||"UpdateExpression"===k.type&&"ExpressionStatement"===m.type)&&(k=e&&b(l,e))&&(l=H(l,L),k=!(l&&b(l,e)&&c(l,e))),v=k;e=v;l=h;k=a.identifier;m=k.parent;v=m.parent;var g;if(!(g=a.from.variableScope!==a.resolved.scope.variableScope))a:{for(g=
k;g;){if(/^(?:DoWhile|For|ForIn|ForOf|While)Statement$/.test(g.type)){g=!0;break a}if(L(g))break;g=g.parent}g=!1}h=l&&b(k,l)?l:"AssignmentExpression"!==m.type||"ExpressionStatement"!==v.type||k!==m.left||g?null:m.right;if(e=a.isRead()&&!e){if(e=f)a:{for(a=a.from;a;){if(0<=d.indexOf(a.block)){e=!0;break a}a=a.upper}e=!1}e=!e}return e})}function h(b){var c=b.defs[0];return c.index===c.node.params.length-1||f.f&&(c=a.getDeclaredVariables(c.node),c.slice(c.indexOf(b)+1).every(function(a){return!a.references.length&&
f.f.test(a.name)}))?!0:!1}function p(a,b){var c=a.variables,v=a.childScopes,q,e;if("TDZ"!==a.type&&("global"!==a.type||"all"===f.m))for(q=0,e=c.length;q<e;++q){var l=c[q];if(!("class"===a.type&&a.block.id===l.identifiers[0]||a.functionExpressionScope||l.o||"function"===a.type&&"arguments"===l.name&&!l.identifiers.length)){var k=l.defs[0];if(k){var m=k.type;if("CatchClause"===m){if("none"===f.s)continue;if(f.u&&f.u.test(k.name.name))continue}if("Parameter"===m){if("Property"===k.node.parent.type&&
"set"===k.node.parent.kind)continue;if("none"===f.j)continue;if(f.f&&f.f.test(k.name.name))continue;if("after-used"===f.j&&!h(l))continue}else if(f.v&&f.v.test(k.name.name))continue}if(!(k=d(l)))a:if(k=l.defs[0]){m=k.node;if("VariableDeclarator"===m.type)m=m.parent;else if("Parameter"===k.type){k=!1;break a}k=!m.parent.type.indexOf("Export")}else k=!1;k||b.push(l)}}q=0;for(e=v.length;q<e;++q)p(v[q],b);return b}function u(a){var b=a.eslintExplicitGlobalComment,c=b.loc.start;a=new RegExp("[\\s,]"+String(a.name).replace(/[\\^$*+?.()|[\]{}]/g,
"\\$&")+"(?:$|[\\s,:])","g");a.lastIndex=b.value.indexOf("global")+6;a=(a=a.exec(b.value))?a.index+1:0;var b=b.value.slice(0,a),d=(b.match(/\n/g)||[]).length;a=0<d?a-(1+b.lastIndexOf("\n")):a+(c.column+2);return{start:{line:c.line+d,column:a}}}var f={m:"all",j:"after-used",s:"none",w:!1},n=a.options[0];n&&("string"===typeof n?f.m=n:(f.m=n.m||f.m,f.j=n.j||f.j,f.s=n.s||f.s,n.v&&(f.v=new RegExp(n.v)),n.f&&(f.f=new RegExp(n.f)),n.u&&(f.u=new RegExp(n.u)),n.w&&(f.w=n.w)));var D=/(?:Statement|Declaration)$/;
return{"Program:exit":function(b){var c=p(a.getScope(),[]);w();for(var d=c[Symbol.iterator],c=d?d.call(c):y(c),d=c.next();!d.done;d=c.next())d=d.value,d.g?a.report({node:b,loc:u(d),message:"'{{name}}' is defined but never used.",data:d}):0<d.defs.length&&a.report({node:d.identifiers[0],message:"'{{name}}' is defined but never used.",data:d})}}}};module.exports=Z;
