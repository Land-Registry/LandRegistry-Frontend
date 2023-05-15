'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var styled = require('styled-components');
var dateFns = require('date-fns');
var HTMLReactParser = require('html-react-parser');
var PushAPI = require('@pushprotocol/restapi');
require('ethers');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var HTMLReactParser__default = /*#__PURE__*/_interopDefaultLegacy(HTMLReactParser);
var PushAPI__namespace = /*#__PURE__*/_interopNamespace(PushAPI);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$o = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$n = fails$o;

var functionBindNative = !fails$n(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$j = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$j, call$j);

var functionUncurryThisRaw = function (fn) {
  return NATIVE_BIND$3 ? uncurryThisWithBind(fn) : function () {
    return call$j.apply(fn, arguments);
  };
};

var uncurryThisRaw$1 = functionUncurryThisRaw;

var toString$b = uncurryThisRaw$1({}.toString);
var stringSlice$6 = uncurryThisRaw$1(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$6(toString$b(it), 8, -1);
};

var classofRaw$1 = classofRaw$2;
var uncurryThisRaw = functionUncurryThisRaw;

var functionUncurryThis = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThisRaw(fn);
};

var uncurryThis$l = functionUncurryThis;
var fails$m = fails$o;
var classof$7 = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$l(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$m(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$6 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$5 = isNullOrUndefined$6;

var $TypeError$f = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$8 = function (it) {
  if (isNullOrUndefined$5(it)) throw $TypeError$f("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$7 = requireObjectCoercible$8;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$7(it));
};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$n =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var shared$4 = {exports: {}};

var global$m = global$n;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$m, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$m[key] = value;
  } return value;
};

var global$l = global$n;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$l[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.5',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$6 = requireObjectCoercible$8;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$6 = function (argument) {
  return $Object$3(requireObjectCoercible$6(argument));
};

var uncurryThis$k = functionUncurryThis;
var toObject$5 = toObject$6;

var hasOwnProperty$1 = uncurryThis$k({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$1(toObject$5(it), key);
};

var uncurryThis$j = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$a = uncurryThis$j(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$a(++id + postfix, 36);
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$n = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var global$k = global$n;
var isCallable$m = isCallable$n;

var aFunction = function (argument) {
  return isCallable$m(argument) ? argument : undefined;
};

var getBuiltIn$8 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$k[namespace]) : global$k[namespace] && global$k[namespace][method];
};

var getBuiltIn$7 = getBuiltIn$8;

var engineUserAgent = getBuiltIn$7('navigator', 'userAgent') || '';

var global$j = global$n;
var userAgent$5 = engineUserAgent;

var process$4 = global$j.process;
var Deno$1 = global$j.Deno;
var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$5) {
  match = userAgent$5.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$5.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version;
var fails$l = fails$o;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$l(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$i = global$n;
var shared$3 = shared$4.exports;
var hasOwn$b = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$i.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$j = function (name) {
  if (!hasOwn$b(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$b(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var isCallable$l = isCallable$n;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$a = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$l(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$l(it);
};

var isObject$9 = isObject$a;

var $String$3 = String;
var $TypeError$e = TypeError;

// `Assert: Type(argument) is Object`
var anObject$f = function (argument) {
  if (isObject$9(argument)) return argument;
  throw $TypeError$e($String$3(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$k = fails$o;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$k(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$b = descriptors;
var fails$j = fails$o;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$b && fails$j(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty = {};

var global$h = global$n;
var isObject$8 = isObject$a;

var document$3 = global$h.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$8(document$3) && isObject$8(document$3.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$a = descriptors;
var fails$i = fails$o;
var createElement$1 = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$a && !fails$i(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND$2 = functionBindNative;

var call$i = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$i.bind(call$i) : function () {
  return call$i.apply(call$i, arguments);
};

var uncurryThis$i = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$i({}.isPrototypeOf);

var getBuiltIn$6 = getBuiltIn$8;
var isCallable$k = isCallable$n;
var isPrototypeOf$4 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$k($Symbol) && isPrototypeOf$4($Symbol.prototype, $Object$2(it));
};

var $String$2 = String;

var tryToString$5 = function (argument) {
  try {
    return $String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$j = isCallable$n;
var tryToString$4 = tryToString$5;

var $TypeError$d = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$8 = function (argument) {
  if (isCallable$j(argument)) return argument;
  throw $TypeError$d(tryToString$4(argument) + ' is not a function');
};

var aCallable$7 = aCallable$8;
var isNullOrUndefined$4 = isNullOrUndefined$6;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$4(func) ? undefined : aCallable$7(func);
};

var call$h = functionCall;
var isCallable$i = isCallable$n;
var isObject$7 = isObject$a;

var $TypeError$c = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$i(fn = input.toString) && !isObject$7(val = call$h(fn, input))) return val;
  if (isCallable$i(fn = input.valueOf) && !isObject$7(val = call$h(fn, input))) return val;
  if (pref !== 'string' && isCallable$i(fn = input.toString) && !isObject$7(val = call$h(fn, input))) return val;
  throw $TypeError$c("Can't convert object to primitive value");
};

var call$g = functionCall;
var isObject$6 = isObject$a;
var isSymbol$1 = isSymbol$2;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$i = wellKnownSymbol$j;

var $TypeError$b = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$i('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$g(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw $TypeError$b("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$e = anObject$f;
var toPropertyKey$2 = toPropertyKey$3;

var $TypeError$a = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$e(O);
  P = toPropertyKey$2(P);
  anObject$e(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$a('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil = Math.ceil;
var floor$2 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$2 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max$2 = Math.max;
var min$3 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$4 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$3 = toLength$4;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$4 = function (obj) {
  return toLength$3(obj.length);
};

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$3(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var hiddenKeys$4 = {};

var uncurryThis$h = functionUncurryThis;
var hasOwn$a = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$2 = uncurryThis$h([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$a(hiddenKeys$3, key) && hasOwn$a(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$a(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$8 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$5 = objectDefineProperty;
var anObject$d = anObject$f;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$8 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$d(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$5.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$5 = getBuiltIn$8;

var html$2 = getBuiltIn$5('document', 'documentElement');

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys$1 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$c = anObject$f;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$4;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$2('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys$1.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$2[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$c(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$h = wellKnownSymbol$j;
var create$2 = objectCreate;
var defineProperty$5 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$h('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$5(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$g = global$n;
var isCallable$h = isCallable$n;

var WeakMap$1 = global$g.WeakMap;

var weakMapBasicDetection = isCallable$h(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$4 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$7 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;

var createNonEnumerableProperty$6 = DESCRIPTORS$7 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$f = global$n;
var isObject$5 = isObject$a;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$9 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$f.TypeError;
var WeakMap = global$f.WeakMap;
var set$1, get, has$3;

var enforce = function (it) {
  return has$3(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store$1 = shared$1.state || (shared$1.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store$1.get = store$1.get;
  store$1.has = store$1.has;
  store$1.set = store$1.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$1 = function (it, metadata) {
    if (store$1.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store$1.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store$1.get(it) || {};
  };
  has$3 = function (it) {
    return store$1.has(it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$1[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$9(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$9(it, STATE) ? it[STATE] : {};
  };
  has$3 = function (it) {
    return hasOwn$9(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has$3,
  enforce: enforce,
  getterFor: getterFor
};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$3(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var DESCRIPTORS$6 = descriptors;
var call$f = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$8 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$1(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$8(O, P)) return createPropertyDescriptor$2(!call$f(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$5 = descriptors;
var hasOwn$7 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$g = functionUncurryThis;
var isCallable$g = isCallable$n;
var store = sharedStore;

var functionToString = uncurryThis$g(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$g(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store.inspectSource;

var fails$h = fails$o;
var isCallable$f = isCallable$n;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$4 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$2 = internalState;

var enforceInternalState$1 = InternalStateModule$2.enforce;
var getInternalState$2 = InternalStateModule$2.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$h(function () {
  return defineProperty$4(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$4) defineProperty$4(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$4(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$4) defineProperty$4(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$1(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$f(this) && getInternalState$2(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$e = isCallable$n;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$8 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$e(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$3.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$4 = getBuiltIn$8;
var uncurryThis$f = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$b = anObject$f;

var concat$2 = uncurryThis$f([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$b(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$5 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$g = fails$o;
var isCallable$d = isCallable$n;

var replacement = /#|\.prototype\./;

var isForced$3 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$d(detection) ? fails$g(detection)
    : !!detection;
};

var normalize = isForced$3.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$3.data = {};
var NATIVE = isForced$3.NATIVE = 'N';
var POLYFILL = isForced$3.POLYFILL = 'P';

var isForced_1 = isForced$3;

var global$e = global$n;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var defineBuiltIn$7 = defineBuiltIn$8;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$2 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$e;
  } else if (STATIC) {
    target = global$e[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$e[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$2(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$4(sourceProperty, 'sham', true);
    }
    defineBuiltIn$7(target, key, sourceProperty, options);
  }
};

var fails$f = fails$o;

var correctPrototypeGetter = !fails$f(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$4 = hasOwnProperty_1;
var isCallable$c = isCallable$n;
var toObject$4 = toObject$6;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$4(O);
  if (hasOwn$4(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$c(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$e = fails$o;
var isCallable$b = isCallable$n;
var isObject$4 = isObject$a;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$6 = defineBuiltIn$8;
var wellKnownSymbol$g = wellKnownSymbol$j;

var ITERATOR$5 = wellKnownSymbol$g('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$4(IteratorPrototype$2) || fails$e(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$b(IteratorPrototype$2[ITERATOR$5])) {
  defineBuiltIn$6(IteratorPrototype$2, ITERATOR$5, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$3 = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var wellKnownSymbol$f = wellKnownSymbol$j;

var TO_STRING_TAG$3 = wellKnownSymbol$f('toStringTag');

var setToStringTag$3 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$3(target, TO_STRING_TAG$3)) {
    defineProperty$3(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;
var setToStringTag$2 = setToStringTag$3;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable$a = isCallable$n;

var $String$1 = String;
var $TypeError$9 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$a(argument)) return argument;
  throw $TypeError$9("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$e = functionUncurryThis;
var anObject$a = anObject$f;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$e(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$a(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$d = _export;
var call$e = functionCall;
var FunctionName = functionName;
var isCallable$9 = isCallable$n;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
var defineBuiltIn$5 = defineBuiltIn$8;
var wellKnownSymbol$e = wellKnownSymbol$j;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$4 = wellKnownSymbol$e('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$4]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$2) {
          setPrototypeOf$2(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$9(CurrentIteratorPrototype[ITERATOR$4])) {
          defineBuiltIn$5(CurrentIteratorPrototype, ITERATOR$4, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$3(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$e(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$5(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$d({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
    defineBuiltIn$5(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators$2 = iterators;
var InternalStateModule$1 = internalState;
var defineProperty$2 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$3 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$1(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$3 && values.name !== 'values') try {
  defineProperty$2(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$d = global$n;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var wellKnownSymbol$d = wellKnownSymbol$j;

var ITERATOR$3 = wellKnownSymbol$d('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$d('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
      createNonEnumerableProperty$2(CollectionPrototype, ITERATOR$3, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$3] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$2]) {
      createNonEnumerableProperty$2(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$d[COLLECTION_NAME] && global$d[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var DESCRIPTORS$2 = descriptors;
var uncurryThis$d = functionUncurryThis;
var call$d = functionCall;
var fails$d = fails$o;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$3 = toObject$6;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$1 = Object.defineProperty;
var concat$1 = uncurryThis$d([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign$1 = !$assign || fails$d(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$2 && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$1(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$3(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$2 || call$d(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$c = _export;
var assign$1 = objectAssign$1;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$c({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$1 }, {
  assign: assign$1
});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$2(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject$2(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has$2;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has = has$2;
var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var classof$6 = classofRaw$2;
var global$c = global$n;

var engineIsNode = classof$6(global$c.process) == 'process';

var getBuiltIn$3 = getBuiltIn$8;
var definePropertyModule$1 = objectDefineProperty;
var wellKnownSymbol$c = wellKnownSymbol$j;
var DESCRIPTORS$1 = descriptors;

var SPECIES$3 = wellKnownSymbol$c('species');

var setSpecies$2 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule$1.f;

  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES$3]) {
    defineProperty(Constructor, SPECIES$3, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var isPrototypeOf$3 = objectIsPrototypeOf;

var $TypeError$8 = TypeError;

var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$3(Prototype, it)) return it;
  throw $TypeError$8('Incorrect invocation');
};

var wellKnownSymbol$b = wellKnownSymbol$j;

var TO_STRING_TAG$1 = wellKnownSymbol$b('toStringTag');
var test$1 = {};

test$1[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test$1) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$8 = isCallable$n;
var classofRaw = classofRaw$2;
var wellKnownSymbol$a = wellKnownSymbol$j;

var TO_STRING_TAG = wellKnownSymbol$a('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
};

var uncurryThis$c = functionUncurryThis;
var fails$c = fails$o;
var isCallable$7 = isCallable$n;
var classof$4 = classof$5;
var getBuiltIn$2 = getBuiltIn$8;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$2('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$c(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  switch (classof$4(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$c(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString$3 = tryToString$5;

var $TypeError$7 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$7(tryToString$3(argument) + ' is not a constructor');
};

var anObject$9 = anObject$f;
var aConstructor = aConstructor$1;
var isNullOrUndefined$3 = isNullOrUndefined$6;
var wellKnownSymbol$9 = wellKnownSymbol$j;

var SPECIES$2 = wellKnownSymbol$9('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$9(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$3(S = anObject$9(C)[SPECIES$2]) ? defaultConstructor : aConstructor(S);
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$c = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$c.bind(apply$2) : function () {
  return call$c.apply(apply$2, arguments);
});

var uncurryThis$b = functionUncurryThis;
var aCallable$6 = aCallable$8;
var NATIVE_BIND = functionBindNative;

var bind$4 = uncurryThis$b(uncurryThis$b.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$6(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$4(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var uncurryThis$a = functionUncurryThis;

var arraySlice$2 = uncurryThis$a([].slice);

var $TypeError$6 = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw $TypeError$6('Not enough arguments');
  return passed;
};

var userAgent$4 = engineUserAgent;

var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

var global$b = global$n;
var apply$1 = functionApply;
var bind$3 = functionBindContext;
var isCallable$6 = isCallable$n;
var hasOwn$2 = hasOwnProperty_1;
var fails$b = fails$o;
var html = html$2;
var arraySlice$1 = arraySlice$2;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;

var set = global$b.setImmediate;
var clear = global$b.clearImmediate;
var process$3 = global$b.process;
var Dispatch = global$b.Dispatch;
var Function$1 = global$b.Function;
var MessageChannel = global$b.MessageChannel;
var String$1 = global$b.String;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$b.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn$2(queue$1, id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global$b.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$6(handler) ? handler : Function$1(handler);
    var args = arraySlice$1(arguments, 1);
    queue$1[++counter] = function () {
      apply$1(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$1[id];
  };
  // Node.js 0.8-
  if (IS_NODE$3) {
    defer = function (id) {
      process$3.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind$3(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$b.addEventListener &&
    isCallable$6(global$b.postMessage) &&
    !global$b.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$b(post)
  ) {
    defer = post;
    global$b.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var userAgent$3 = engineUserAgent;
var global$a = global$n;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && global$a.Pebble !== undefined;

var userAgent$2 = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

var global$9 = global$n;
var bind$2 = functionBindContext;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;

var MutationObserver = global$9.MutationObserver || global$9.WebKitMutationObserver;
var document$2 = global$9.document;
var process$2 = global$9.process;
var Promise$1 = global$9.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$1(global$9, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$1();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$2(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$2) {
    notify$1 = function () {
      process$2.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind$2(macrotask, global$9);
    notify$1 = function () {
      macrotask(flush);
    };
  }
}

var microtask$1 = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify$1();
  } last = task;
};

var global$8 = global$n;

var hostReportErrors$1 = function (a, b) {
  var console = global$8.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var Queue$1 = function () {
  this.head = null;
  this.tail = null;
};

Queue$1.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

var queue = Queue$1;

var global$7 = global$n;

var promiseNativeConstructor = global$7.Promise;

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
  && typeof window == 'object'
  && typeof document == 'object';

var global$6 = global$n;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$5 = isCallable$n;
var isForced$1 = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$8 = wellKnownSymbol$j;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$1 = wellKnownSymbol$8('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$5(global$6.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES$1] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$5 = aCallable$8;

var $TypeError$5 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$5('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$5(resolve);
  this.reject = aCallable$5(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$b = _export;
var IS_NODE = engineIsNode;
var global$5 = global$n;
var call$b = functionCall;
var defineBuiltIn$4 = defineBuiltIn$8;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag = setToStringTag$3;
var setSpecies$1 = setSpecies$2;
var aCallable$4 = aCallable$8;
var isCallable$4 = isCallable$n;
var isObject$3 = isObject$a;
var anInstance = anInstance$1;
var speciesConstructor = speciesConstructor$1;
var task = task$1.set;
var microtask = microtask$1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue;
var InternalStateModule = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$5.TypeError;
var document$1 = global$5.document;
var process$1 = global$5.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$5.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$3(it) && isCallable$4(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$b(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$5.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$5['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$b(task, global$5, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE) {
          process$1.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$b(task, global$5, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$1 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$b(then, value,
            bind$1(internalResolve, wrapper, state),
            bind$1(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$4(executor);
    call$b(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$4(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$4(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$4(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process$1.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$4(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$4(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$b(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf$1) {
      setPrototypeOf$1(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

$$b({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies$1(PROMISE);

var wellKnownSymbol$7 = wellKnownSymbol$j;
var Iterators$1 = iterators;

var ITERATOR$2 = wellKnownSymbol$7('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var classof$3 = classof$5;
var getMethod$3 = getMethod$5;
var isNullOrUndefined$2 = isNullOrUndefined$6;
var Iterators = iterators;
var wellKnownSymbol$6 = wellKnownSymbol$j;

var ITERATOR$1 = wellKnownSymbol$6('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$2(it)) return getMethod$3(it, ITERATOR$1)
    || getMethod$3(it, '@@iterator')
    || Iterators[classof$3(it)];
};

var call$a = functionCall;
var aCallable$3 = aCallable$8;
var anObject$8 = anObject$f;
var tryToString$2 = tryToString$5;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$4 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$3(iteratorMethod)) return anObject$8(call$a(iteratorMethod, argument));
  throw $TypeError$4(tryToString$2(argument) + ' is not iterable');
};

var call$9 = functionCall;
var anObject$7 = anObject$f;
var getMethod$2 = getMethod$5;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$7(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$9(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$7(innerResult);
  return value;
};

var bind = functionBindContext;
var call$8 = functionCall;
var anObject$6 = anObject$f;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;
var isPrototypeOf$2 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;

var $TypeError$3 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$2 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$6(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError$3(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$2(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$2(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$8(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$2(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol$5 = wellKnownSymbol$j;

var ITERATOR = wellKnownSymbol$5('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
});

var $$a = _export;
var call$7 = functionCall;
var aCallable$2 = aCallable$8;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$a({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$7($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$9 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$8;
var isCallable$3 = isCallable$n;
var defineBuiltIn$3 = defineBuiltIn$8;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$9({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable$3(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn$3(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$8 = _export;
var call$6 = functionCall;
var aCallable$1 = aCallable$8;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$8({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable$1(C.resolve);
      iterate(iterable, function (promise) {
        call$6($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$7 = _export;
var call$5 = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$7({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call$5(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$5 = anObject$f;
var isObject$2 = isObject$a;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject$5(C);
  if (isObject$2(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$6 = _export;
var getBuiltIn = getBuiltIn$8;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$6({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

function httpRequest(url, options) {
  return __awaiter(this, void 0, void 0, function* () {
    const _a = options !== null && options !== void 0 ? options : {},
          {
      body
    } = _a,
          customConfig = __rest(_a, ["body"]);

    const headers = {
      "Content-Type": "application/json"
    };
    const config = Object.assign(Object.assign({
      method: options === null || options === void 0 ? void 0 : options.method
    }, customConfig), {
      headers: Object.assign(Object.assign({}, body ? headers : {}), customConfig.headers)
    });

    if (body) {
      config.body = JSON.stringify(body);
    }

    let data;

    try {
      const response = yield window.fetch(url, config);
      data = yield response.json();

      if (response.ok) {
        return data;
      }

      throw new Error(response.statusText); // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err) {
      return Promise.reject(err.message ? err.message : data);
    }
  });
}

var isCallable$2 = isCallable$n;
var isObject$1 = isObject$a;
var setPrototypeOf = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$2(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject$1(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var isObject = isObject$a;
var classof$2 = classofRaw$2;
var wellKnownSymbol$4 = wellKnownSymbol$j;

var MATCH$2 = wellKnownSymbol$4('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$2(it) == 'RegExp');
};

var classof$1 = classof$5;

var $String = String;

var toString$9 = function (argument) {
  if (classof$1(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var anObject$4 = anObject$f;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$4(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var call$4 = functionCall;
var hasOwn$1 = hasOwnProperty_1;
var isPrototypeOf$1 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$3 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$3) && !hasOwn$1(R, 'flags') && isPrototypeOf$1(RegExpPrototype$3, R)
    ? call$4(regExpFlags, R) : flags;
};

var fails$a = fails$o;
var global$4 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$4.RegExp;

var UNSUPPORTED_Y$2 = fails$a(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$a(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$a(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY$1,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var defineProperty = objectDefineProperty.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var fails$9 = fails$o;
var global$3 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$3.RegExp;

var regexpUnsupportedDotAll = fails$9(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$8 = fails$o;
var global$2 = global$n;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$2.RegExp;

var regexpUnsupportedNcg = fails$8(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

var DESCRIPTORS = descriptors;
var global$1 = global$n;
var uncurryThis$9 = functionUncurryThis;
var isForced = isForced_1;
var inheritIfRequired = inheritIfRequired$1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var isPrototypeOf = objectIsPrototypeOf;
var isRegExp$1 = isRegexp;
var toString$8 = toString$9;
var getRegExpFlags$1 = regexpGetFlags;
var stickyHelpers$1 = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$2 = defineBuiltIn$8;
var fails$7 = fails$o;
var hasOwn = hasOwnProperty_1;
var enforceInternalState = internalState.enforce;
var setSpecies = setSpecies$2;
var wellKnownSymbol$3 = wellKnownSymbol$j;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var MATCH$1 = wellKnownSymbol$3('match');
var NativeRegExp = global$1.RegExp;
var RegExpPrototype$2 = NativeRegExp.prototype;
var SyntaxError = global$1.SyntaxError;
var exec$1 = uncurryThis$9(RegExpPrototype$2.exec);
var charAt$4 = uncurryThis$9(''.charAt);
var replace$3 = uncurryThis$9(''.replace);
var stringIndexOf$2 = uncurryThis$9(''.indexOf);
var stringSlice$5 = uncurryThis$9(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY;
var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1 || fails$7(function () {
    re2[MATCH$1] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt$4(string, index);
    if (chr === '\\') {
      result += chr + charAt$4(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt$4(string, index);
    if (chr === '\\') {
      chr = chr + charAt$4(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec$1(IS_NCG, stringSlice$5(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype$2, this);
    var patternIsRegExp = isRegExp$1(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype$2, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$8(pattern);
    flags = flags === undefined ? '' : toString$8(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf$2(flags, 's') > -1;
      if (dotAll) flags = replace$3(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf$2(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y$1) flags = replace$3(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG$1) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$2, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$1(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype$2.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$2;
  defineBuiltIn$2(global$1, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$3 = functionCall;
var uncurryThis$8 = functionUncurryThis;
var toString$7 = toString$9;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$8(''.charAt);
var indexOf = uncurryThis$8(''.indexOf);
var replace$2 = uncurryThis$8(''.replace);
var stringSlice$4 = uncurryThis$8(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$3(nativeExec, re1, 'a');
  call$3(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$7(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$3(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$3(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$2(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$4(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$3(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$4(match.input, charsAdded);
        match[0] = stringSlice$4(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$3(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$5 = _export;
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$5({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var defineBuiltIn$1 = defineBuiltIn$8;
var anObject$3 = anObject$f;
var $toString = toString$9;
var fails$6 = fails$o;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype$1 = RegExp.prototype;
var nativeToString = RegExpPrototype$1[TO_STRING];

var NOT_GENERIC = fails$6(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$1(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$3(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$7 = functionUncurryThis;
var defineBuiltIn = defineBuiltIn$8;
var regexpExec$1 = regexpExec$2;
var fails$5 = fails$o;
var wellKnownSymbol$2 = wellKnownSymbol$j;
var createNonEnumerableProperty = createNonEnumerableProperty$6;

var SPECIES = wellKnownSymbol$2('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$2(KEY);

  var DELEGATES_TO_SYMBOL = !fails$5(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$5(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$7(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$7(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var uncurryThis$6 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$6 = toString$9;
var requireObjectCoercible$5 = requireObjectCoercible$8;

var charAt$2 = uncurryThis$6(''.charAt);
var charCodeAt = uncurryThis$6(''.charCodeAt);
var stringSlice$3 = uncurryThis$6(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$6(requireObjectCoercible$5($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$2(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$3(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var uncurryThis$5 = functionUncurryThis;
var toObject$1 = toObject$6;

var floor$1 = Math.floor;
var charAt = uncurryThis$5(''.charAt);
var replace$1 = uncurryThis$5(''.replace);
var stringSlice$2 = uncurryThis$5(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$1(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$1(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$2(str, 0, position);
      case "'": return stringSlice$2(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$2(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor$1(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var call$2 = functionCall;
var anObject$2 = anObject$f;
var isCallable$1 = isCallable$n;
var classof = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$2 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = call$2(exec, R, S);
    if (result !== null) anObject$2(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call$2(regexpExec, R, S);
  throw $TypeError$2('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call$1 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$4 = fails$o;
var anObject$1 = anObject$f;
var isCallable = isCallable$n;
var isNullOrUndefined$1 = isNullOrUndefined$6;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength$2 = toLength$4;
var toString$5 = toString$9;
var requireObjectCoercible$4 = requireObjectCoercible$8;
var advanceStringIndex$1 = advanceStringIndex$2;
var getMethod$1 = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec$1 = regexpExecAbstract;
var wellKnownSymbol$1 = wellKnownSymbol$j;

var REPLACE = wellKnownSymbol$1('replace');
var max$1 = Math.max;
var min$1 = Math.min;
var concat = uncurryThis$4([].concat);
var push$1 = uncurryThis$4([].push);
var stringIndexOf$1 = uncurryThis$4(''.indexOf);
var stringSlice$1 = uncurryThis$4(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$4(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$4(this);
      var replacer = isNullOrUndefined$1(searchValue) ? undefined : getMethod$1(searchValue, REPLACE);
      return replacer
        ? call$1(replacer, searchValue, O, replaceValue)
        : call$1(nativeReplace, toString$5(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$1(this);
      var S = toString$5(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf$1(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString$5(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null) break;

        push$1(results, result);
        if (!global) break;

        var matchStr = toString$5(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$2(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString$5(result[0]);
        var position = max$1(min$1(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push$1(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$1(replacerArgs, namedCaptures);
          var replacement = toString$5(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$1(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var call = functionCall;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject = anObject$f;
var isNullOrUndefined = isNullOrUndefined$6;
var toLength$1 = toLength$4;
var toString$4 = toString$9;
var requireObjectCoercible$3 = requireObjectCoercible$8;
var getMethod = getMethod$5;
var advanceStringIndex = advanceStringIndex$2;
var regExpExec = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$3(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$4(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString$4(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString$4(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

/* eslint-disable no-useless-escape */
// Download Helper Function
const MediaHelper = {
  // validate a CTA
  validURL: function (str) {
    if (!str) return false;
    const pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\S*)?$", "i"); // fragment locator

    return !!pattern.test(str);
  },
  // To get Save File Name
  getSaveFileName: function (fileURL, useTempLocation) {
    // Remove all http, https protocols first
    fileURL = fileURL.replace(/(^\w+:|^)\/\//, ''); // /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi
    // Remove all special characters

    fileURL = fileURL.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, ''); // Remove all but 250 characters

    if (fileURL.length > 250) {
      fileURL = fileURL.substr(-250);
    }

    if (useTempLocation) {
      return fileURL + '.temp';
    } else {
      return fileURL;
    }
  },
  // Determine if media is supported video
  isMediaSupportedVideo: function (fileURL) {
    if (!fileURL) return; // check if media external embed first

    const mediaURL = MediaHelper.isMediaExternalEmbed(fileURL);

    if (mediaURL) {
      return mediaURL;
    } else {
      // check if mp4 extension
      if (fileURL.split('.').pop() === "mp4") {
        return true;
      }
    } // if all else fail


    return false;
  },
  // check if media is external embed, like youtube, soundcloud, etc
  isMediaExternalEmbed: function (fileURL) {
    return MediaHelper.isMediaYoutube(fileURL);
  },
  // Determine if youtube
  isMediaYoutube: function (fileURL) {
    if (fileURL !== undefined || fileURL !== '') {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      const match = fileURL.match(regExp);

      if (match && match[2].length === 11) {
        // embed url
        const embedURL = 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0&enablejsapi=1';
        return embedURL;
      }
    }

    return "";
  },
  // Get youtube id
  getYoutubeID: function (fileURL) {
    if (fileURL !== undefined || fileURL !== '') {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      const match = fileURL.match(regExp);

      if (match && match[2].length === 11) {
        return match[2];
      }
    }

    return "";
  }
};

/**
 * @description Parse the contents of the markdown version of the notification body
 * @param message the notification body we wish to parse
 * @returns
 */
const FormatBody = message => {
  // firstly replace all new line content of the text with <br />
  // in order to parse it as HTML i.e "\n\n" => "<br /><br />"
  const parsedNewLine = message.replace(/\n/g, "<br />"); // remove leading slashes from text i.e \alex => alex

  const removedLeadingSlash = parsedNewLine.replace(/^\\/g, "");
  return removedLeadingSlash;
};

/**
 * @description parse and extract the timestamp from the body of the notification and remove the text from the body
 * @param notificationBody the text which would represent the body of the notification
 * @returns
 */

function extractTimeStamp(notificationBody) {
  const parsedBody = {
    notificationBody: FormatBody(notificationBody),
    timeStamp: "",
    originalBody: notificationBody
  };
  const matches = notificationBody.match(/\[timestamp:(.*?)\]/);

  if (matches) {
    parsedBody.timeStamp = matches[1];
    const textWithoutTimeStamp = notificationBody.replace(/ *\[timestamp:[^)]*\] */g, "");
    parsedBody.notificationBody = FormatBody(textWithoutTimeStamp);
    parsedBody.originalBody = textWithoutTimeStamp;
  }

  return parsedBody;
}
function convertTimeStamp(timeStamp) {
  return dateFns.format(new Date(Number(timeStamp) * 1000), 'dd MMM yyyy | hh:mm a');
}

var $$4 = _export;
var $includes = arrayIncludes.includes;
var fails$3 = fails$o;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$3(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$4({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isRegExp = isRegexp;

var $TypeError$1 = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError$1("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol = wellKnownSymbol$j;

var MATCH = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$3 = _export;
var uncurryThis$3 = functionUncurryThis;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$2 = requireObjectCoercible$8;
var toString$3 = toString$9;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;

var stringIndexOf = uncurryThis$3(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$3({ target: 'String', proto: true, forced: !correctIsRegExpLogic$1('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString$3(requireObjectCoercible$2(this)),
      toString$3(notARegExp$1(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

const IPFS_BASE_URL = "https://ipfs.io/ipfs/";
/**
 * @description extract the ipfs HASH from the name of an image i.e www.xyz.com/abc/ipfshash.jpg => ipfshash
 * @param notificationBody
 * @returns the ipfs hash extracted from the image name
 */

function extractIPFSHashFromImageURL(imageURL) {
  if (!imageURL) return {
    type: "http",
    url: ""
  };
  if (imageURL.includes("ipfs")) return {
    type: "ipfs",
    url: imageURL
  };
  if (imageURL.includes("base64")) return {
    type: "base64",
    url: imageURL
  };
  const match = imageURL.match(/(\w+).jpg/);
  const output = match ? `${IPFS_BASE_URL}${match[1]}` : "";
  return {
    type: "http",
    url: output
  };
}

const IPFSIcon = ({
  icon
}) => {
  const [imageInBase64, setImageInBase64] = React__namespace.useState(''); // fetch and pin the icons using ipfs hash

  React__namespace.useEffect(() => {
    // extract the IPFS image url from the url of the icon
    const {
      type,
      url: ipfsHash
    } = extractIPFSHashFromImageURL(icon);
    if (!ipfsHash) return; // fetch the image directly from ipfs

    if (type === "http") {
      httpRequest(ipfsHash) // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then(res => {
        setImageInBase64(res['icon']);
      }).catch(err => {
        console.log(err);
      });
    } else {
      setImageInBase64(ipfsHash);
    }
  }, [icon]);
  return jsxRuntime.jsx("img", {
    style: {
      width: "100%"
    },
    src: imageInBase64,
    alt: ""
  });
};

const ImageOverlayItem = ({
  imageOverlay,
  setImageOverlay
}) => {
  const onCloseOverlay = () => {
    setImageOverlay('');
  };

  return jsxRuntime.jsx(ImageWrapper, Object.assign({
    onClick: onCloseOverlay,
    visible: Boolean(imageOverlay)
  }, {
    children: jsxRuntime.jsx("img", {
      src: imageOverlay,
      alt: "overlay full-screen"
    })
  }));
};

const ImageWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "overlay__ImageWrapper",
  componentId: "sc-1e2lr8x-0"
})(["height:100vh;width:100vw;background:rgba(0,0,0,0.75);position:fixed;top:0;left:0;justify-content:center;align-items:center;display:", ";z-index:2;img{max-width:80vw;height:auto;border-radius:10px;}"], props => props.visible ? 'flex' : 'none');

/**
 * If you want to provide a custom regexp, this is the configuration to use.
 * -- For historical reasons, all regexps are processed as if they have the global flag set.
 * -- Use the nonExhaustiveModeMaxMatchCount property to match a limited number of matches.
 * Note: any additional keys/props are permitted, and will be returned as-is!
 * @typedef {Object} CustomParseShape
 * @property {RegExp} pattern
 * @property {number} [nonExhaustiveModeMaxMatchCount] Enables "non-exhaustive mode", where you can limit how many matches are found. -- Must be a positive integer or Infinity matches are permitted
 * @property {Function} [renderText] arbitrary function to rewrite the matched string into something else
 */

/**
 * Class to encapsulate the business logic of converting text into matches & props
 */
class TextExtraction {
  constructor(text, patterns) {
    this.text = text;
    this.patterns = patterns || [];
  }
  /**
   * Returns parts of the text with their own props
   * @public
   * @return {Object[]} - props for all the parts of the text
   */


  parse() {
    let parsedTexts = [{
      children: this.text
    }];
    this.patterns.forEach(pattern => {
      let newParts = [];
      const tmp = pattern.nonExhaustiveModeMaxMatchCount || 0;
      const numberOfMatchesPermitted = Math.min(Math.max(Number.isInteger(tmp) ? tmp : 0, 0) || Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
      let currentMatches = 0;
      parsedTexts.forEach(parsedText => {
        // Only allow for now one parsing
        if (parsedText._matched) {
          newParts.push(parsedText);
          return;
        }

        const parts = [];
        let textLeft = parsedText.children;
        let indexOfMatchedString = 0;
        /** @type {RegExpExecArray} */

        let matches; // Global RegExps are stateful, this makes it start at 0 if reused
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

        pattern.pattern.lastIndex = 0;

        while (textLeft && (matches = pattern.pattern.exec(textLeft))) {
          const previousText = textLeft.substr(0, matches.index);
          indexOfMatchedString = matches.index;

          if (++currentMatches > numberOfMatchesPermitted) {
            // Abort if we've exhausted our number of matches
            break;
          }

          parts.push({
            children: previousText
          });
          parts.push(this.getMatchedPart(pattern, matches[0], matches, indexOfMatchedString));
          textLeft = textLeft.substr(matches.index + matches[0].length);
          indexOfMatchedString += matches[0].length - 1; // Global RegExps are stateful, this makes it operate on the "remainder" of the string

          pattern.pattern.lastIndex = 0;
        }

        parts.push({
          children: textLeft
        });
        newParts = newParts.concat(parts);
      });
      parsedTexts = newParts;
    }); // Remove _matched key.

    parsedTexts.forEach(parsedText => delete parsedText._matched);
    return parsedTexts.filter(t => !!t.children);
  } // private

  /**
   * @protected
   * @param {ParseShape} matchedPattern - pattern configuration of the pattern used to match the text
   * @param {String} text - Text matching the pattern
   * @param {String[]} matches - Result of the RegExp.exec
   * @param {Integer} index - Index of the matched string in the whole string
   * @return {Object} props for the matched text
   */


  getMatchedPart(matchedPattern, text, matches, index) {
    const props = {};
    Object.keys(matchedPattern).forEach(key => {
      if (key === 'pattern' || key === 'renderText' || key === 'nonExhaustiveModeMaxMatchCount') {
        return;
      }

      if (typeof matchedPattern[key] === 'function') {
        // Support onPress / onLongPress functions
        props[key] = () => matchedPattern[key](text, index);
      } else {
        // Set a prop with an arbitrary name to the value in the match-config
        props[key] = matchedPattern[key];
      }
    });
    let children = text;

    if (matchedPattern.renderText && typeof matchedPattern.renderText === 'function') {
      children = matchedPattern.renderText(text, matches);
    }

    return Object.assign(Object.assign({}, props), {
      children: children,
      _matched: true
    });
  }

}

function renderStyles(matchingString) {
  // matches => ["[@michel:5455345]", "@michel", "5455345"]
  const pattern = /\[([^:]+):([^\]]+)\]/i;
  const match = matchingString.match(pattern);
  return `${match ? match[2] : ""}`;
} // -------- Define the required colors


const COLORS = {
  PRIMARY: 'rgba(27.0, 150.0, 227.0, 1.0)',
  LINKS: 'rgba(20.0, 126.0, 251.0, 1.0)',
  GRADIENT_PRIMARY: 'rgba(226.0, 8.0, 128.0, 1.0)',
  GRADIENT_SECONDARY: 'rgba(53.0, 197.0, 243.0, 1.0)',
  GRADIENT_THIRD: 'rgba(103.0, 76.0, 159.0, 1.0)',
  TRANSPARENT: 'transparent',
  WHITE: 'rgba(255.0, 255.0, 255.0, 1.0)',
  DARK_WHITE: 'rgba(255.0, 255.0, 255.0, 0.75)',
  MID_WHITE: 'rgba(255.0, 255.0, 255.0, 0.5)',
  LIGHT_WHITE: 'rgba(255.0, 255.0, 255.0, 0.25)',
  SLIGHTER_GRAY: 'rgba(250.0, 250.0, 250.0, 1)',
  SLIGHT_GRAY: 'rgba(231.0, 231.0, 231.0, 1)',
  LIGHT_GRAY: 'rgba(225.0, 225.0, 225.0, 1)',
  MID_GRAY: 'rgba(200.0, 200.0, 200.0, 1)',
  DARK_GRAY: 'rgba(160.0, 160.0, 160.0, 1)',
  DARKER_GRAY: 'rgba(100.0, 100.0, 100.0, 1)',
  LIGHT_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.1)',
  SEMI_MID_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.25)',
  MID_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.5)',
  DARK_BLACK_TRANS: 'rgba(0.0, 0.0, 0.0, 0.75)',
  BLACK: 'rgba(0.0, 0.0, 0.0, 1.0)',
  CONFIRM: 'rgba(34.0, 139.0, 34.0, 1.0)',
  WARNING: 'rgba(255.0, 153.0, 0.0, 1.0)',
  SUBLIME_RED: 'rgba(237.0, 59.0, 72.0, 1.0)',
  BADGE_RED: 'rgba(208.0, 44.0, 30.0, 1.0)',
  LIGHT_MAROON: 'rgba(159.0, 0.0, 0.0, 1.0)',
  LIGHTER_MAROON: 'rgba(129.0, 0.0, 0.0, 1.0)'
}; // -------- Define the default styles for the framework

const styles = {
  // Styling
  container: {},
  name: {
    color: COLORS.SUBLIME_RED
  },
  username: {
    color: COLORS.GRADIENT_SECONDARY
  },
  text: {
    color: COLORS.BLACK
  },
  primary: {
    color: COLORS.GRADIENT_PRIMARY
  },
  secondary: {
    color: COLORS.GRADIENT_SECONDARY
  },
  third: {
    color: COLORS.GRADIENT_THIRD
  },
  error: {
    color: COLORS.SUBLIME_RED
  },
  white: {
    color: COLORS.WHITE
  },
  midgray: {
    color: COLORS.MID_GRAY
  },
  darkgray: {
    color: COLORS.DARK_GRAY
  },
  darkergray: {
    color: COLORS.DARKER_GRAY
  },
  link: {
    color: COLORS.GRADIENT_PRIMARY
  },
  underline: {
    textDecorationLine: 'underline'
  },
  bold: {
    fontWeight: 'bold'
  },
  italics: {
    fontStyle: 'italic'
  },
  pointer: {
    cursor: 'pointer'
  }
}; // -------- Define the default patterns for the framework

const DEFAULT_PATTERNS = [{
  pattern: /\[(u):([^\]]+)\]/i,
  style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.primary), styles.bold), styles.italics), styles.underline), styles.pointer),
  renderText: renderStyles
}, {
  pattern: /\[(ub):([^\]]+)\]/i,
  style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.secondary), styles.bold), styles.italics), styles.underline), styles.pointer),
  renderText: renderStyles
}, {
  pattern: /\[(ut):([^\]]+)\]/i,
  style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, styles.third), styles.bold), styles.italics), styles.underline), styles.pointer),
  renderText: renderStyles
}, {
  pattern: /\[(up):([^\]]+)\]/i,
  style: Object.assign(Object.assign(Object.assign(Object.assign({}, styles.primary), styles.italics), styles.underline), styles.pointer),
  renderText: renderStyles
}, {
  pattern: /\[(d):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.primary), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(s):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.secondary), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(t):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.third), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(e):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.error), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(b):([^\]]+)\]/i,
  style: styles.bold,
  renderText: renderStyles
}, {
  pattern: /\[(i):([^\]]+)\]/i,
  style: styles.italics,
  renderText: renderStyles
}, {
  pattern: /\[(bi):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.bold), styles.italics),
  renderText: renderStyles
}, {
  pattern: /\[(w):([^\]]+)\]/i,
  style: styles.white,
  renderText: renderStyles
}, {
  pattern: /\[(wb):([^\]]+)\]/i,
  style: Object.assign(Object.assign({}, styles.white), styles.bold),
  renderText: renderStyles
}, {
  pattern: /\[(mg):([^\]]+)\]/i,
  style: styles.midgray,
  renderText: renderStyles
}, {
  pattern: /\[(dg):([^\]]+)\]/i,
  style: styles.darkgray,
  renderText: renderStyles
}, {
  pattern: /\[(ddg):([^\]]+)\]/i,
  style: styles.darkergray,
  renderText: renderStyles
}];

const ParseMarkDown = props => {
  const _a = Object.assign({}, props),
        {
    patterns
  } = _a,
        remainder = __rest(_a, ["patterns"]);

  function getPatterns() {
    return DEFAULT_PATTERNS.concat(patterns);
  }

  function getParsedText() {
    if (!props.patterns) {
      return props.children;
    }

    if (typeof props.children !== 'string') {
      return props.children;
    }

    const textExtraction = new TextExtraction(props.children, getPatterns());
    return textExtraction.parse().map((props, index) => {
      const {
        style,
        children
      } = props;
      return jsxRuntime.jsx("span", Object.assign({
        style: Object.assign({}, style)
      }, props.childrenProps, {
        children: HTMLReactParser__default["default"](FormatBody(children))
      }), `parsedText-${index}`);
    });
  }

  return jsxRuntime.jsx("div", Object.assign({}, remainder, {
    children: getParsedText()
  }));
}; // ================= Define default props


ParseMarkDown.propTypes = {
  patterns: propTypes.exports.array.isRequired
};

const ParseMarkdownText = props => {
  const {
    text,
    patterns
  } = props;
  const actualPatters = patterns || [];
  return jsxRuntime.jsx("div", Object.assign({
    style: {
      wordBreak: 'break-all'
    }
  }, {
    children: jsxRuntime.jsx(ParseMarkDown, Object.assign({
      patterns: actualPatters
    }, {
      children: text
    }))
  }));
};

const StyledCircularLoader2 = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "loader__StyledCircularLoader2",
  componentId: "sc-1p4z6sw-0"
})(["width:20px;height:20px;.lds-ring{display:inline-block;position:relative;width:20px;height:20px;}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:20px;height:20px;margin:0px;border:2px solid ", ";border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:", " transparent transparent transparent;}.lds-ring div:nth-child(1){animation-delay:-0.45s;}.lds-ring div:nth-child(2){animation-delay:-0.3s;}.lds-ring div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"], ({
  color
}) => color, ({
  color
}) => color);

const CircularProgressSpinner = ({
  color: _color = "#fff"
}) => {
  return jsxRuntime.jsx(StyledCircularLoader2, Object.assign({
    color: _color
  }, {
    children: jsxRuntime.jsxs("div", Object.assign({
      className: "lds-ring"
    }, {
      children: [jsxRuntime.jsx("div", {}), jsxRuntime.jsx("div", {}), jsxRuntime.jsx("div", {}), jsxRuntime.jsx("div", {})]
    }))
  }));
};

var Loader = /*#__PURE__*/React__namespace.memo(CircularProgressSpinner);

const ActionButton = /*#__PURE__*/styled__default["default"].button.withConfig({
  displayName: "ActionButton",
  componentId: "sc-18nzz3z-0"
})(["all:unset;background:", ";color:", ";padding:10px 20px;font-weight:500;border-radius:3px;cursor:", ";opacity:", ";transition:300ms;margin-left:auto;&:hover{opacity:", ";}@media (max-width:600px){padding:8px 20px;}"], props => props.bgColor || 'rgb(226, 8, 128)', props => props.color || '#fff', props => props.disabled ? 'default' : 'pointer', props => props.disabled ? '0.5' : '1', props => props.disabled ? '0.5' : '0.9');

const buttonText = {
  revealed: 'decrypted',
  notRevealed: 'decrypt'
};

const DecryptButton = ({
  decryptFn,
  isSecretRevealed
}) => {
  const [isLoading, setIsLaoding] = React__namespace.useState(false);
  const btnText = isSecretRevealed ? buttonText.revealed : buttonText.notRevealed;

  const onClickHandler = clickEvent => __awaiter(void 0, void 0, void 0, function* () {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    if (!decryptFn || isSecretRevealed) return;

    try {
      setIsLaoding(true);
      yield decryptFn();
    } finally {
      setIsLaoding(false);
    }
  });

  return jsxRuntime.jsx(ActionButton, Object.assign({
    disabled: isSecretRevealed,
    onClick: onClickHandler,
    bgColor: "#674C9F"
  }, {
    children: isLoading ? jsxRuntime.jsx(Loader, {}) : btnText
  }));
};

function useDecrypt(initialValues, isSecret) {
  const [notifAttributes, setNotifAttributes] = React__namespace.useState({
    notifTitle: initialValues.notificationTitle || '',
    notifBody: initialValues.parsedBody || '',
    notifCta: initialValues.cta || '',
    notifImage: initialValues.image || '',
    isSecretRevealed: false // avoids extra render

  });
  const hideSecretAttributes = isSecret ? (notifAttributes === null || notifAttributes === void 0 ? void 0 : notifAttributes.isSecretRevealed) ? false : true : false;

  const setDecryptedValues = ({
    title,
    body,
    cta,
    image
  }) => {
    setNotifAttributes({
      notifTitle: title || '',
      notifBody: body || '',
      notifCta: cta || '',
      notifImage: image || '',
      isSecretRevealed: true
    });
  };

  return {
    notifTitle: notifAttributes.notifTitle,
    notifBody: notifAttributes.notifBody,
    notifCta: hideSecretAttributes ? '' : notifAttributes.notifCta,
    notifImage: hideSecretAttributes ? '' : notifAttributes.notifImage,
    isSecretRevealed: notifAttributes.isSecretRevealed,
    setDecryptedValues
  };
}

var img$6 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fillRule='evenodd' clipRule='evenodd' viewBox='0 0 784.37 1277.39'%3e%3cg fillRule='nonzero'%3e%3cpath fill='%23343434' d='m392.07 0-8.57 29.11v844.63l8.57 8.55 392.06-231.75z'/%3e%3cpath fill='%238C8C8C' d='M392.07 0 0 650.54l392.07 231.75V472.33z'/%3e%3cpath fill='%233C3C3B' d='m392.07 956.52-4.83 5.89v300.87l4.83 14.1 392.3-552.49z'/%3e%3cpath fill='%238C8C8C' d='M392.07 1277.38V956.52L0 724.89z'/%3e%3cpath fill='%23141414' d='m392.07 882.29 392.06-231.75-392.06-178.21z'/%3e%3cpath fill='%23393939' d='m0 650.54 392.07 231.75V472.33z'/%3e%3c/g%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38.4 33.5' style='enable-background:new 0 0 38.4 33.5' xml:space='preserve'%3e%3cpath d='M29 10.2c-.7-.4-1.6-.4-2.4 0L21 13.5l-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0L5 16.3c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0L16 7.2c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2V7c0-.8-.4-1.6-1.2-2.1l-8-4.7c-.7-.4-1.6-.4-2.4 0L1.2 5C.4 5.4 0 6.2 0 7v9.4c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1L29 28.8c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1V21l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l8.1-4.7c.7-.4 1.2-1.2 1.2-2.1V17c0-.8-.4-1.6-1.2-2.1L29 10.2z' style='fill:%238247e5'/%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='40 22 18 58' style='enable-background:new 0 0 96 96' xml:space='preserve'%3e%3cdefs%3e%3clinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3e%3cstop offset='0%25' style='stop-color:%2351d1e4%3bstop-opacity:1'/%3e%3cstop offset='100%25' style='stop-color:%233a72d8%3bstop-opacity:1'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath d='M135.3 106.2c-7.1 0-12.8-5.7-12.8-12.8 0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.8 5.7 12.8 12.8 0 7.1-5.7 12.8-12.8 12.8m0-32c10.6 0 19.2 8.6 19.2 19.2s-8.6 19.2-19.2 19.2-19.2-8.6-19.2-19.2 8.6-19.2 19.2-19.2zm18.3 39.4c1.3 1.3 1.3 3.3 0 4.5l-12.8 12.8c-1.3 1.3-3.3 1.3-4.5 0-1.3-1.3-1.3-3.3 0-4.5l12.8-12.8c1.2-1.3 3.3-1.3 4.5 0zm7.4-36.2c0 1.8-1.4 3.2-3.2 3.2-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.7 0 3.2 1.4 3.2 3.2z' style='fillRule:evenodd%3bclipRule:evenodd%3bfill:url(%23a)' transform='translate(-88 -52)'/%3e%3c/svg%3e";

const createSVGIcon = (url, alt) => {
  return jsxRuntime.jsx("img", {
    src: url,
    alt: alt
  });
};

var chainDetails = {
  ETH_TEST_GOERLI: {
    label: "ETHEREUM GOERLI",
    icon: createSVGIcon(img$6, "ETHEREUM GOERLI")
  },
  ETH_MAINNET: {
    label: "ETHEREUM MAINNET",
    icon: createSVGIcon(img$6, "ETHEREUM MAINNET")
  },
  POLYGON_TEST_MUMBAI: {
    label: "POLYGON MUMBAI",
    icon: createSVGIcon(img$5, "POLYGON MUMBAI")
  },
  POLYGON_MAINNET: {
    label: "POLYGON MAINNET",
    icon: createSVGIcon(img$5, "POLYGON MAINNET")
  },
  THE_GRAPH: {
    label: "THE GRAPH",
    icon: createSVGIcon(img$4, "THE GRAPH")
  }
};

const NotificationItem = ({
  notificationTitle,
  notificationBody,
  cta,
  app,
  icon,
  image,
  url,
  isSpam,
  //for rendering the spam conterpart of the notification component
  isSubscribedFn,
  //A function for getting if a user is subscribed to the channel in question
  subscribeFn,
  //A function for subscribing to the spam channel
  theme,
  //for specifying light and dark theme
  chainName,
  isSecret,
  decryptFn
}) => {
  const {
    notificationBody: parsedBody,
    timeStamp
  } = extractTimeStamp(notificationBody || "");
  const {
    notifTitle,
    notifBody,
    notifCta,
    notifImage,
    setDecryptedValues,
    isSecretRevealed
  } = useDecrypt({
    notificationTitle,
    parsedBody,
    cta,
    image
  }, isSecret); // store the image to be displayed in this state variable

  const [imageOverlay, setImageOverlay] = React__namespace.useState("");
  const [subscribeLoading, setSubscribeLoading] = React__namespace.useState(false);
  const [isSubscribed, setIsSubscribed] = React__namespace.useState(true); //use this to confirm if this is s

  const showMetaInfo = isSecret || timeStamp; // console.log({
  //   chainName,
  //   rightIcon,
  //   ai: ChainImages['CHAIN_ICONS']
  // })

  const gotToCTA = e => {
    e.stopPropagation();
    if (!MediaHelper.validURL(notifCta)) return;
    window.open(notifCta, "_blank");
  };

  const goToURL = e => {
    e.stopPropagation();
    if (!MediaHelper.validURL(url)) return;
    window.open(url, "_blank");
  };
  /**
   * A function which wraps around the function to subscribe a user to a channel
   * @returns
   */


  const onSubscribe = clickEvent => __awaiter(void 0, void 0, void 0, function* () {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    if (!subscribeFn) return;

    try {
      setSubscribeLoading(true);
      yield subscribeFn();
      setIsSubscribed(true);
    } finally {
      setSubscribeLoading(false);
    }
  });

  const onDecrypt = () => __awaiter(void 0, void 0, void 0, function* () {
    if (decryptFn) {
      try {
        const decryptedPayload = yield decryptFn(); // to check if always both title, body are present

        if (decryptedPayload) {
          setDecryptedValues(decryptedPayload);
        }
      } catch (e) {
        console.error(e);
      }
    }
  });

  React__namespace.useEffect(() => {
    if (!isSpam || !isSubscribedFn) return;
    isSubscribedFn().then(res => {
      setIsSubscribed(Boolean(res));
    });
  }, [isSubscribedFn, isSpam]);
  if (isSubscribed && isSpam) return null; // render

  return jsxRuntime.jsxs(Container$6, Object.assign({
    timestamp: timeStamp,
    cta: MediaHelper.validURL(notifCta),
    onClick: gotToCTA,
    theme: theme
  }, {
    children: [jsxRuntime.jsxs(MobileHeader, Object.assign({
      onClick: goToURL,
      theme: theme
    }, {
      children: [jsxRuntime.jsxs(HeaderButton, Object.assign({
        theme: theme
      }, {
        children: [jsxRuntime.jsx(ImageContainer, Object.assign({
          theme: theme
        }, {
          children: jsxRuntime.jsx(IPFSIcon, {
            icon: icon
          })
        })), app]
      })), chainName && chainDetails[chainName] ? jsxRuntime.jsxs(BlockchainContainer, {
        children: [jsxRuntime.jsxs(NetworkDetails, Object.assign({
          theme: theme
        }, {
          children: [jsxRuntime.jsx(DelieveredViaText, {
            children: "DELIVERED VIA"
          }), jsxRuntime.jsx(NetworkName, {
            children: chainDetails[chainName].label
          })]
        })), jsxRuntime.jsx(ChainIconSVG, {
          children: chainDetails[chainName].icon
        })]
      }) : null]
    })), jsxRuntime.jsxs(ContentSection, {
      children: [notifImage && ( // if its an image then render this
      !MediaHelper.isMediaSupportedVideo(notifImage) ? jsxRuntime.jsx(MobileImage, Object.assign({
        theme: theme,
        style: {
          cursor: "pointer"
        },
        onClick: () => setImageOverlay(notifImage || "")
      }, {
        children: jsxRuntime.jsx("img", {
          src: notifImage,
          alt: ""
        })
      })) : // if its a youtube url, RENDER THIS
      MediaHelper.isMediaYoutube(notifImage) ? jsxRuntime.jsx(MobileImage, Object.assign({
        theme: theme
      }, {
        children: jsxRuntime.jsx("iframe", {
          id: "ytplayer",
          width: "640",
          allow: "fullscreen;",
          height: "360",
          src: MediaHelper.isMediaExternalEmbed(notifImage),
          title: "Youtube"
        })
      })) : // if its aN MP4 url, RENDER THIS
      jsxRuntime.jsx(MobileImage, Object.assign({
        theme: theme
      }, {
        children: jsxRuntime.jsxs("video", Object.assign({
          width: "360",
          height: "100%",
          controls: true
        }, {
          children: [jsxRuntime.jsx("source", {
            src: notifImage,
            type: "video/mp4"
          }), "Your browser does not support the video tag."]
        }))
      }))), jsxRuntime.jsxs(ChannelDetailsWrapper, {
        children: [jsxRuntime.jsx(ChannelTitle, {
          children: jsxRuntime.jsx(ChannelTitleLink, Object.assign({
            theme: theme
          }, {
            children: notifTitle
          }))
        }), jsxRuntime.jsx(ChannelDesc, {
          children: jsxRuntime.jsx(ChannelDescLabel, Object.assign({
            theme: theme
          }, {
            children: jsxRuntime.jsx(ParseMarkdownText, {
              text: notifBody
            })
          }))
        })]
      }), jsxRuntime.jsx(ButtonGroupContainer, {
        children: jsxRuntime.jsxs(ButtonGroup, {
          children: [isSpam && jsxRuntime.jsx(ActionButton, Object.assign({
            onClick: onSubscribe
          }, {
            children: subscribeLoading ? jsxRuntime.jsx(Loader, {}) : "opt-in"
          })), isSecret ? jsxRuntime.jsx(DecryptButton, {
            decryptFn: onDecrypt,
            isSecretRevealed: isSecretRevealed
          }) : null]
        })
      })]
    }), jsxRuntime.jsxs(ChannelMetaInfo, Object.assign({
      hidden: !showMetaInfo,
      hasLeft: false
    }, {
      children: [jsxRuntime.jsx(ChannelMetaInfoLeft, {
        hidden: true
      }), jsxRuntime.jsxs(ChannelMetaInfoRight, Object.assign({
        hidden: !showMetaInfo
      }, {
        children: [isSecret ? jsxRuntime.jsx(SecretIconContainer, {
          children: jsxRuntime.jsx(SecretIcon, {})
        }) : null, timeStamp ? jsxRuntime.jsx(TimestampLabel, Object.assign({
          theme: theme
        }, {
          children: convertTimeStamp(timeStamp)
        })) : null]
      }))]
    })), jsxRuntime.jsx(ImageOverlayItem, {
      imageOverlay: imageOverlay,
      setImageOverlay: setImageOverlay
    })]
  }));
}; // ================= Define default props

NotificationItem.propTypes = {
  notificationBody: propTypes.exports.string,
  notificationTitle: propTypes.exports.string,
  cta: propTypes.exports.string,
  image: propTypes.exports.string,
  app: propTypes.exports.string,
  url: propTypes.exports.string,
  isSpam: propTypes.exports.bool,
  subscribeFn: propTypes.exports.func,
  isSubscribedFn: propTypes.exports.func,
  theme: propTypes.exports.string
};
NotificationItem.defaultProps = {
  notificationTitle: "",
  notificationBody: "",
  cta: "",
  app: "",
  image: "",
  url: "",
  isSpam: false,
  theme: "light"
}; // ================= Define styled components
// ================= Define styled components

const MD_BREAKPOINT = "50050px"; //set an arbitrarily large number because we no longer use this breakpoint

const SM_BREAKPOINT = "900px";
const GUTTER_SPACE = {
  LARGE: '8px',
  SMALL: '8px'
};
const ContentSection = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__ContentSection",
  componentId: "v9nuxx-0"
})(["display:flex;padding:12px;@media (min-width:", "){align-items:flex-start;flex-direction:row;gap:20px;justify-content:space-between;}@media (max-width:", "){flex-direction:column;}"], SM_BREAKPOINT, SM_BREAKPOINT);
const BlockchainContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__BlockchainContainer",
  componentId: "v9nuxx-1"
})(["display:flex;align-items:center;justify-content:center;font-weight:700;"]);
const NetworkDetails = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__NetworkDetails",
  componentId: "v9nuxx-2"
})(["text-align:right;padding-right:8px;color:", ";@media (max-width:", "){display:none;}"], props => props.theme === "light" ? "#000000" : "#FFFFFF", SM_BREAKPOINT);
const DelieveredViaText = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__DelieveredViaText",
  componentId: "v9nuxx-3"
})(["font-size:10px;line-height:10px;opacity:30%;@media (max-width:", "){font-size:10px;line-height:10px;}"], SM_BREAKPOINT);
const NetworkName = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__NetworkName",
  componentId: "v9nuxx-4"
})(["font-size:10px;line-height:10px;opacity:50%;@media (max-width:", "){font-size:8px;line-height:8px;}"], SM_BREAKPOINT);
const ChainIconSVG = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__ChainIconSVG",
  componentId: "v9nuxx-5"
})(["width:18px;height:18px;svg,svg image,img{width:100%;height:100%;}@media (max-width:", "){width:18px;height:18px;}"], SM_BREAKPOINT);
const MobileImage = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__MobileImage",
  componentId: "v9nuxx-6"
})(["img,iframe,video{max-width:100% !important;height:100% !important;object-fit:fill;border-radius:10px;border:0;}@media (min-width:", "){border:1px solid ", ";border-radius:10px;min-width:220px;width:220px;height:200px;}@media (max-width:", "){display:block;width:100%;max-height:200px;margin-bottom:12px;border:0;img,iframe,video{border:0;border-radius:0;}}"], SM_BREAKPOINT, props => props.theme === 'light' ? '#ededed' : '#444', SM_BREAKPOINT);
const ImageContainer = /*#__PURE__*/styled__default["default"].span.withConfig({
  displayName: "notification__ImageContainer",
  componentId: "v9nuxx-7"
})(["background:", ";display:inline-block;margin-right:10px;border-radius:5px;width:24px;height:24px;@media (max-width:", "){width:24px;height:24px;}"], props => props.theme === "light" ? "#ededed" : "#444", SM_BREAKPOINT);
const ChannelDetailsWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__ChannelDetailsWrapper",
  componentId: "v9nuxx-8"
})(["display:flex;flex-direction:column;flex-grow:4;"]);
const Container$6 = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__Container",
  componentId: "v9nuxx-9"
})(["position:relative;overflow:hidden;font-family:\"Source Sans Pro\",Arial,sans-serif;flex:1;display:flex;flex-wrap:wrap;border:", ";cursor:", ";background:", ";border-radius:10px;margin:15px 0px;justify-content:center;justify-content:space-between;@media (max-width:", "){flex-direction:column;}"], props => props.cta ? "0.7px solid #35C5F3" : props.theme === "light" ? "1px solid rgba(231.0, 231.0, 231.0, 1);" : "1px solid #444", props => props.cta ? "pointer" : "", props => props.theme === "light" ? "#fff" : "#000", MD_BREAKPOINT);
const MobileHeader = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__MobileHeader",
  componentId: "v9nuxx-10"
})(["display:none;@media (max-width:", "){cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:", ";font-size:14px;border-bottom:", ";background:", ";border-top-left-radius:10px;border-top-right-radius:10px;text-align:left;}@media (max-width:", "){padding:", ";font-size:14px;}"], MD_BREAKPOINT, GUTTER_SPACE.LARGE, props => props.theme === "light" ? "1px solid #ededed" : "1px solid #444", props => props.theme === "light" ? "#fafafa" : "#222", SM_BREAKPOINT, GUTTER_SPACE.SMALL);
const HeaderButton = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__HeaderButton",
  componentId: "v9nuxx-11"
})(["display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:400;color:", ";"], props => props.theme === "light" ? "#000000" : "#FFFFFF");
const ChannelTitle = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__ChannelTitle",
  componentId: "v9nuxx-12"
})(["text-align:left;margin-bottom:8px;@media (max-width:", "){margin-bottom:6px;}"], SM_BREAKPOINT);
const ChannelTitleLink = /*#__PURE__*/styled__default["default"].a.withConfig({
  displayName: "notification__ChannelTitleLink",
  componentId: "v9nuxx-13"
})(["text-decoration:none;color:#000;font-size:18px;font-weight:600;@media (max-width:", "){font-weight:300;color:", ";}"], MD_BREAKPOINT, props => props.theme === "light" ? "#000000" : "#FFFFFF");
const ChannelDesc = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__ChannelDesc",
  componentId: "v9nuxx-14"
})(["line-height:20px;flex:1;display:flex;font-size:14px;color:rgba(0,0,0,0.75);font-weight:400;flex-direction:column;"]);
const ChannelDescLabel = /*#__PURE__*/styled__default["default"].label.withConfig({
  displayName: "notification__ChannelDescLabel",
  componentId: "v9nuxx-15"
})(["color:", ";flex:1;margin:0px;text-align:left;"], props => props.theme === "light" ? "#000" : "#fff");
const ChannelMetaInfo = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__ChannelMetaInfo",
  componentId: "v9nuxx-16"
})(["display:", ";flex-direction:row;justify-content:", ";"], props => props.hidden ? "none" : "flex", props => props.hasLeft ? "space-between" : "end");
const ChannelMetaSection = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__ChannelMetaSection",
  componentId: "v9nuxx-17"
})(["display:", ";align-items:center;"], props => props.hidden ? "none" : "flex");
const ChannelMetaInfoLeft = /*#__PURE__*/styled__default["default"](ChannelMetaSection).withConfig({
  displayName: "notification__ChannelMetaInfoLeft",
  componentId: "v9nuxx-18"
})(["justify-content:start;"]);
const ChannelMetaInfoRight = /*#__PURE__*/styled__default["default"](ChannelMetaSection).withConfig({
  displayName: "notification__ChannelMetaInfoRight",
  componentId: "v9nuxx-19"
})(["justify-content:end;"]);
const TimestampLabel = /*#__PURE__*/styled__default["default"].label.withConfig({
  displayName: "notification__TimestampLabel",
  componentId: "v9nuxx-20"
})(["color:#808080;border-radius:0;border-top-left-radius:6px;border-bottom-right-radius:10px;border-right:0;border-bottom:0;margin-bottom:-1px;margin-right:-1px;font-weight:600;font-size:10px;padding:6px 10px 6px 0px;"]);
const SecretIconContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__SecretIconContainer",
  componentId: "v9nuxx-21"
})(["margin:6px;"]);
const SecretIcon = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__SecretIcon",
  componentId: "v9nuxx-22"
})(["   width:12px;height:12px;border-radius:50%;background:linear-gradient( 135deg,#e20880 12.5%,#674c9f 49.89%,#35c5f3 87.5% );"]);
const ButtonGroupContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__ButtonGroupContainer",
  componentId: "v9nuxx-23"
})(["display:flex;align-items:center;justify-content:flex-end;"]);
const ButtonGroup = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "notification__ButtonGroup",
  componentId: "v9nuxx-24"
})(["display:flex;gap:20px;"]);

const defaultEvents = ['mousedown', 'touchstart'];

function on(obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args);
  }
}

function off(obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args);
  }
}

const useClickAway = (ref, onClickAway, events = defaultEvents) => {
  const savedCallback = React.useRef(onClickAway);
  React.useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  React.useEffect(() => {
    const handler = event => {
      const {
        current: el
      } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };

    for (const eventName of events) {
      on(document, eventName, handler);
    }

    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

/**
 * A list of links to different components of the EPNS eco system
 */
const LINKS = [{
  text: "Push Browser Extension",
  link: "https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg",
  img: "https://backend-kovan.epns.io/assets/googlechromeicon.png"
}, {
  text: "Push App (iOS)",
  link: "https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",
  img: "https://backend-kovan.epns.io/assets/apple.png"
}, {
  text: "Push App (Android)",
  link: "https://play.google.com/store/apps/details?id=io.epns.epns",
  img: "https://backend-kovan.epns.io/assets/playstorecolor@3x.png"
}, {
  text: "Visit our dApp",
  link: "https://app.push.org/",
  img: "https://backend-kovan.epns.io/assets/dappcolor@3x.png"
}];

const SubscribedModal = ({
  onClose
}) => {
  const modalRef = React__namespace.useRef(null);

  const goto = url => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  useClickAway(modalRef, onClose);
  return jsxRuntime.jsx(Overlay, Object.assign({
    className: "overlay"
  }, {
    children: jsxRuntime.jsxs(Modal$1, Object.assign({
      className: "modal",
      ref: modalRef
    }, {
      children: [jsxRuntime.jsx(CloseButton, {
        onClick: onClose
      }), jsxRuntime.jsxs(Item, Object.assign({
        className: "modal__heading"
      }, {
        children: [jsxRuntime.jsxs(CustomHeaderTwo, {
          children: [jsxRuntime.jsx(CustomSpan, {
            children: "Receive"
          }), jsxRuntime.jsx(StyledSpan, {
            children: "Notifications"
          })]
        }), jsxRuntime.jsxs(H3, {
          children: ["Receive notifications from ", jsxRuntime.jsx("b", {
            children: "Push"
          }), " via the following platforms."]
        })]
      })), jsxRuntime.jsx(Item, Object.assign({
        className: "modal__content"
      }, {
        children: LINKS.map(oneLink => jsxRuntime.jsxs(ItemLink, Object.assign({
          onClick: () => goto(oneLink.link)
        }, {
          children: [jsxRuntime.jsx("img", {
            src: oneLink.img,
            alt: ""
          }), oneLink.text]
        }), oneLink.link))
      }))]
    }))
  }));
};
const CloseButton = /*#__PURE__*/styled__default["default"].a.withConfig({
  displayName: "subscribemodal__CloseButton",
  componentId: "sc-1gg76ik-0"
})(["position:absolute;right:10px;top:37px;width:40px;height:40px;opacity:0.3;cursor:pointer;&:hover{opacity:1;}&:before,&:after{position:absolute;content:\" \";height:33px;width:2px;background-color:#333;}&:before{transform:rotate(45deg);}&:after{transform:rotate(-45deg);}"]);
const ItemLink = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "subscribemodal__ItemLink",
  componentId: "sc-1gg76ik-1"
})(["width:260px;height:62px;padding-left:22px;background:#fafafa;border:0.2px solid rgba(0,0,0,0.16);box-sizing:border-box;border-radius:5px;font-size:0.75em;text-transform:uppercase;display:flex;align-items:center;gap:1.3125em;cursor:pointer;transition:300ms;&:hover{box-shadow:0px 4px 4px rgba(0,0,0,0.25);}"]);
const CustomHeaderTwo = /*#__PURE__*/styled__default["default"].h2.withConfig({
  displayName: "subscribemodal__CustomHeaderTwo",
  componentId: "sc-1gg76ik-2"
})(["margin-top:0;margin-bottom:1em;color:rgb(0,0,0);font-weight:600;font-size:1.5625em;letter-spacing:0.1em;text-transform:uppercase;padding:0px;font-family:inherit;text-align:inherit;@media (max-width:1000px){font-size:1.2625em;}"]);
const Item = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "subscribemodal__Item",
  componentId: "sc-1gg76ik-3"
})(["display:flex;flex-direction:column;text-transform:capitalise;&.modal__heading{margin-bottom:3.3125rem;}&.modal__content{display:grid;grid-template-columns:50% 50%;grid-row-gap:3.3125em;}"]);
const CustomSpan = /*#__PURE__*/styled__default["default"].span.withConfig({
  displayName: "subscribemodal__CustomSpan",
  componentId: "sc-1gg76ik-4"
})(["flex:initial;align-self:auto;color:rgb(0,0,0);background:transparent;font-weight:400;font-size:inherit;text-transform:inherit;margin:0px;padding:0px;letter-spacing:inherit;text-align:initial;position:initial;inset:auto;z-index:auto;margin-right:10px;@media (max-width:600px){display:block;margin-bottom:7px;}"]);
const StyledSpan = /*#__PURE__*/styled__default["default"](CustomSpan).withConfig({
  displayName: "subscribemodal__StyledSpan",
  componentId: "sc-1gg76ik-5"
})(["background:rgb(226,8,128);color:#fff;font-weight:600;padding:3px 8px;@media (max-width:600px){display:inline;}"]);
const H3 = /*#__PURE__*/styled__default["default"].h3.withConfig({
  displayName: "subscribemodal__H3",
  componentId: "sc-1gg76ik-6"
})(["color:rgb(0 0 0 / 0.5);font-weight:300;font-size:1em;text-transform:uppercase;margin:-15px 0px 20px 0px;padding:0px;letter-spacing:0.1em;font-family:\"Source Sans Pro\",Helvetica,sans-serif;text-align:inherit;max-width:initial;@media (max-width:600px){margin-top:0;margin-bottom:-7px;}@media (max-width:1000px){width:90%;}"]);
const Overlay = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "subscribemodal__Overlay",
  componentId: "sc-1gg76ik-7"
})(["top:0;left:0;right:0;background:rgba(0,0,0,0.85);height:100%;width:100%;z-index:1000;position:fixed;display:flex;justify-content:center;align-items:center;overflow-y:scroll;"]);
const Modal$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "subscribemodal__Modal",
  componentId: "sc-1gg76ik-8"
})(["padding:3.875em;background:white;text-align:left;border:1px solid rgba(0,0,0,0.16);box-sizing:border-box;box-shadow:0px 4px 4px rgba(0,0,0,0.25);border-radius:15px;position:relative;& > img{position:absolute;right:40px;top:40px;cursor:pointer;}@media (max-width:1000px){width:max(70vw,350px);padding:2em;.modal__content{display:flex !important;flex-direction:column !important;align-items:center !important;gap:10px !important;}}"]);

var tryToString = tryToString$5;

var $TypeError = TypeError;

var deletePropertyOrThrow$1 = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$4;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var createProperty = createProperty$1;

var $Array = Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$1(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

var arraySlice = arraySliceSimple;

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

var arraySort = mergeSort;

var fails$2 = fails$o;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$2(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var userAgent$1 = engineUserAgent;

var firefox = userAgent$1.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent = engineUserAgent;

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $$2 = _export;
var uncurryThis$2 = functionUncurryThis;
var aCallable = aCallable$8;
var toObject = toObject$6;
var lengthOfArrayLike = lengthOfArrayLike$4;
var deletePropertyOrThrow = deletePropertyOrThrow$1;
var toString$2 = toString$9;
var fails$1 = fails$o;
var internalSort = arraySort;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var test = [];
var nativeSort = uncurryThis$2(test.sort);
var push = uncurryThis$2(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$1(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$1(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails$1(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString$2(x) > toString$2(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$2({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

var img$3 = "data:image/svg+xml,%3csvg width='29' height='28' viewBox='0 0 29 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0.625 10.3438V26.3168C0.625 27.1922 1.67028 27.6451 2.30894 27.0463L7.89958 21.8051C8.0444 21.6693 8.23548 21.5938 8.434 21.5938H18.2031C24.028 21.5938 28.75 16.8718 28.75 11.0469C28.75 5.222 24.028 0.5 18.2031 0.5H10.4688C5.0322 0.5 0.625 4.9072 0.625 10.3438Z' fill='white'/%3e%3c/svg%3e";

// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$1 = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$8;
var toString$1 = toString$9;
var whitespaces$1 = whitespaces$2;

var replace = uncurryThis$1(''.replace);
var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$1(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails = fails$o;
var whitespaces = whitespaces$2;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var $$1 = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$$1({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

var $ = _export;
var uncurryThis = functionUncurryThis;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var toLength = toLength$4;
var toString = toString$9;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$8;
var correctIsRegExpLogic = correctIsRegexpLogic;

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});

var img$2 = "data:image/svg+xml,%3csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.4625 3.24124L20.9125 26.4787C20.8033 26.8722 20.5755 27.2225 20.2602 27.4819C19.9448 27.7414 19.5572 27.8974 19.15 27.9287H18.975C18.5983 27.9279 18.2295 27.8207 17.9111 27.6194C17.5926 27.4182 17.3375 27.1311 17.175 26.7912L12.7125 17.3662C12.6687 17.2716 12.6548 17.1659 12.6727 17.0631C12.6906 16.9604 12.7394 16.8655 12.8125 16.7912L19.225 10.3787C19.3254 10.2878 19.4063 10.1774 19.4627 10.0542C19.5191 9.93107 19.55 9.79773 19.5533 9.6623C19.5566 9.52688 19.5324 9.39219 19.4821 9.26641C19.4318 9.14063 19.3565 9.02637 19.2607 8.93058C19.1649 8.8348 19.0507 8.75947 18.9249 8.70917C18.7991 8.65888 18.6644 8.63466 18.529 8.638C18.3936 8.64133 18.2602 8.67214 18.1371 8.72857C18.0139 8.785 17.9035 8.86585 17.8125 8.96624L11.4 15.3912C11.3258 15.4644 11.2309 15.5132 11.1282 15.5311C11.0254 15.549 10.9197 15.5351 10.825 15.4912L1.45004 11.0537C1.08311 10.8804 0.775053 10.6033 0.563988 10.2567C0.352924 9.91016 0.248118 9.50928 0.262542 9.10374C0.284668 8.68619 0.437922 8.28625 0.700498 7.96083C0.963074 7.63542 1.32159 7.40111 1.72504 7.29124L25.0125 0.728741C25.4198 0.612421 25.8536 0.628425 26.2512 0.774446C26.6488 0.920467 26.9898 1.18896 27.225 1.54124C27.3829 1.79158 27.4857 2.07261 27.5266 2.3657C27.5676 2.65879 27.5457 2.95723 27.4625 3.24124Z' fill='%23D53A94'/%3e%3c/svg%3e";

const ChatPropsContext = /*#__PURE__*/React.createContext({});

const ChatMainStateContext = /*#__PURE__*/React.createContext({});

const ChatInput = () => {
  React.useState(false);
  React.useRef(null);
  const [filesUploading, setFileUploading] = React.useState(false);
  const {
    account,
    env,
    supportAddress,
    apiKey
  } = React.useContext(ChatPropsContext);
  const {
    messageBeingSent,
    message,
    setMessage,
    setFooterError,
    connectedUser,
    chats,
    setChatsSorted,
    setConnectedUser
  } = React.useContext(ChatMainStateContext);

  const handleSubmit = e => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();

    if (message.trim() !== '' && connectedUser) {
      const sendResponse = yield PushAPI__namespace.chat.send({
        messageContent: message,
        messageType: 'Text',
        receiverAddress: supportAddress,
        account: account,
        pgpPrivateKey: connectedUser === null || connectedUser === void 0 ? void 0 : connectedUser.privateKey,
        apiKey,
        env
      });

      if (typeof sendResponse !== 'string') {
        sendResponse.messageContent = message;
        setChatsSorted([...chats, sendResponse]);
        setMessage('');
      }
    }
  });

  const handleKeyPress = e => {
    const x = e.keyCode;

    if (x === 13) {
      handleSubmit(e);
    }
  };

  const textOnChange = e => {
    if (!messageBeingSent) {
      setMessage(e.target.value);
    }
  };

  return jsxRuntime.jsx(Container$5, {
    children: messageBeingSent ? jsxRuntime.jsx(ItemHV2, {
      children: "Loading..."
    }) : jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [jsxRuntime.jsx(TextInput, {
        placeholder: "Type your message...",
        onKeyDown: handleKeyPress,
        onChange: textOnChange,
        value: message
      }), jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsx("label", {}), filesUploading ? jsxRuntime.jsx("div", Object.assign({
          className: "imageloader"
        }, {
          children: "Loading..."
        })) : jsxRuntime.jsx(jsxRuntime.Fragment, {
          children: jsxRuntime.jsx(Image$4, {
            src: img$2,
            alt: "Send Message",
            height: "27px",
            width: "27px",
            onClick: handleSubmit
          })
        })]
      })]
    })
  });
}; //styles
const Image$4 = /*#__PURE__*/styled__default["default"].img.withConfig({
  displayName: "ChatInput__Image",
  componentId: "sc-1kc6hzk-1"
})(["display:flex;max-height:initial;vertical-align:middle;overflow:initial;cursor:pointer;height:", ";width:", ";justify-content:flex-end;"], props => props.height || '24px', props => props.width || '20px');
const Container$5 = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "ChatInput__Container",
  componentId: "sc-1kc6hzk-3"
})(["padding:8px 10px 8px 8px;display:flex;align-items:center;justify-content:space-between;background:#ffffff;border:1px solid #e4e8ef;margin:10px 0;border-radius:16px;"]);
const TextInput = /*#__PURE__*/styled__default["default"].textarea.withConfig({
  displayName: "ChatInput__TextInput",
  componentId: "sc-1kc6hzk-5"
})(["font-family:'Strawford';font-size:16px;width:100%;height:25px;outline:none;padding-top:4px;border:none;resize:none;background:transparent;color:black;&&::-webkit-scrollbar{width:0;height:0;}::placeholder{color:#494D5F;}"]);
const ItemHV2 = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "ChatInput__ItemHV2",
  componentId: "sc-1kc6hzk-8"
})(["position:absolute;top:0;right:10px;bottom:0;justifycontent:flex-end;background:transparent;"]);

var img$1 = "data:image/svg+xml,%3csvg width='24' height='2' viewBox='0 0 24 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 1H23' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e";

const Constants = {
  ENV: {
    PROD: 'prod',
    STAGING: 'staging',
    DEV: 'dev'
  },
  COLOR: {
    PRIMARY: '#D53893'
  },
  DEFAULT_TITLE: 'Chat with us!',
  DEFAULT_GREETING_MSG: 'Hi there!',
  DEFAULT_PROFILE_PICTURE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg=='
};

const handleOnChatIconClick = ({
  isModalOpen,
  setIsModalOpen
}) => {
  console.log(isModalOpen);
  setIsModalOpen(!isModalOpen);
};
const walletToPCAIP10 = account => {
  if (account.includes('eip155:')) {
    return account;
  }

  return 'eip155:' + account;
};
const pCAIP10ToWallet = wallet => {
  wallet = wallet.replace('eip155:', '');
  return wallet;
};
const createUserIfNecessary = options => __awaiter(void 0, void 0, void 0, function* () {
  const {
    account,
    env = Constants.ENV.PROD
  } = options || {};
  let connectedUser = yield PushAPI__namespace.user.get({
    account: account,
    env
  });

  if (!(connectedUser === null || connectedUser === void 0 ? void 0 : connectedUser.encryptedPrivateKey)) {
    connectedUser = yield PushAPI__namespace.user.create({
      account: account,
      env
    });
  }

  const decryptedPrivateKey = yield PushAPI__namespace.chat.decryptWithWalletRPCMethod(connectedUser.encryptedPrivateKey, account);
  return Object.assign(Object.assign({}, connectedUser), {
    privateKey: decryptedPrivateKey
  });
});
const getChats = options => __awaiter(void 0, void 0, void 0, function* () {
  const {
    account,
    pgpPrivateKey,
    supportAddress,
    env = Constants.ENV.PROD
  } = options || {};
  const threadhash = yield PushAPI__namespace.chat.conversationHash({
    account: account,
    conversationId: supportAddress,
    env
  });

  if (threadhash.threadHash) {
    const chats = yield PushAPI__namespace.chat.history({
      account: account,
      pgpPrivateKey: pgpPrivateKey,
      threadhash: threadhash.threadHash,
      limit: 30,
      env
    });
    console.log(chats);
    return chats;
  }

  return [];
});

const ModalHeader = () => {
  const {
    modalTitle
  } = React.useContext(ChatPropsContext);
  const {
    isModalOpen,
    setIsModalOpen
  } = React.useContext(ChatMainStateContext);
  return jsxRuntime.jsxs(Container$4, {
    children: [jsxRuntime.jsx(Span$2, {
      children: modalTitle
    }), jsxRuntime.jsx(Section, Object.assign({
      onClick: () => handleOnChatIconClick({
        isModalOpen,
        setIsModalOpen
      })
    }, {
      children: jsxRuntime.jsx(Image$3, {
        src: img$1,
        alt: "minimize chat"
      })
    }))]
  });
}; //styles

const Container$4 = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "ModalHeader__Container",
  componentId: "sc-1j69gr2-0"
})(["display:flex;border-bottom:1px solid #e4e8ef;align-items:center;justify-content:space-between;padding:17px;"]);
const Section = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "ModalHeader__Section",
  componentId: "sc-1j69gr2-1"
})(["padding:10px 5px;cursor:pointer;"]);
const Image$3 = /*#__PURE__*/styled__default["default"].img.withConfig({
  displayName: "ModalHeader__Image",
  componentId: "sc-1j69gr2-2"
})(["display:flex;max-height:initial;vertical-align:middle;overflow:initial;cursor:pointer;justify-content:flex-end;"]);
const Span$2 = /*#__PURE__*/styled__default["default"].span.withConfig({
  displayName: "ModalHeader__Span",
  componentId: "sc-1j69gr2-3"
})(["font-weight:500;font-size:20px;line-height:28px;display:flex;align-items:center;text-align:center;color:#1e1e1e;margin-left:27%;flex:none;order:0;flex-grow:0;"]);

const AddressInfo = () => {
  const {
    supportAddress,
    env
  } = React.useContext(ChatPropsContext);
  const [ensName, setEnsName] = React.useState('');
  const [user, setUser] = React.useState({});
  const walletAddress = pCAIP10ToWallet(supportAddress);
  React.useEffect(() => {
    const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
      const user = yield PushAPI__namespace.user.get({
        account: walletAddress,
        env
      });
      setUser(user);
    });

    getUser();
  }, [supportAddress]);
  return jsxRuntime.jsxs(Container$3, {
    children: [jsxRuntime.jsx(Image$2, {
      src: (user === null || user === void 0 ? void 0 : user.profilePicture) ? user === null || user === void 0 ? void 0 : user.profilePicture : Constants.DEFAULT_PROFILE_PICTURE,
      alt: "address profile"
    }), jsxRuntime.jsxs(Span$1, {
      children: [ensName && `${ensName}`, !ensName && `${walletAddress.substring(0, 8)}...${walletAddress.substring(walletAddress.length - 8)}`]
    })]
  });
}; //styles

const Container$3 = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "AddressInfo__Container",
  componentId: "sc-1bzsbji-0"
})(["display:flex;flex-direction:row;box-sizing:border-box;background:#ffffff;border:1px solid #e4e8ef;padding:5px;margin:13px 0;border-radius:29px;"]);
const Image$2 = /*#__PURE__*/styled__default["default"].img.withConfig({
  displayName: "AddressInfo__Image",
  componentId: "sc-1bzsbji-2"
})(["display:flex;max-height:initial;vertical-align:middle;overflow:initial;height:48px;width:47.5px;border-radius:99px;"]);
const Span$1 = /*#__PURE__*/styled__default["default"].span.withConfig({
  displayName: "AddressInfo__Span",
  componentId: "sc-1bzsbji-3"
})(["font-weight:500;font-size:17px;display:flex;flex-wrap:wrap;margin:0 10px;align-items:center;line-height:25px;letter-spacing:-0.019em;color:#1e1e1e;"]);

var img = "data:image/svg+xml,%3csvg width='145' height='18' viewBox='0 0 145 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.592 12V10.056H2.728C3.808 10.056 4.616 9.216 4.616 8.2C4.616 7.2 3.768 6.4 2.728 6.4H0.752V12H1.592ZM1.592 7.16H2.592C3.248 7.16 3.728 7.608 3.728 8.2C3.728 8.816 3.248 9.28 2.592 9.28H1.592V7.16ZM9.69231 12.08C11.3243 12.08 12.6043 10.816 12.6043 9.2C12.6043 7.584 11.3243 6.32 9.69231 6.32C8.05231 6.32 6.78031 7.584 6.78031 9.2C6.78031 10.816 8.05231 12.08 9.69231 12.08ZM9.69231 11.264C8.52431 11.264 7.67631 10.352 7.67631 9.2C7.67631 8.048 8.52431 7.136 9.69231 7.136C10.8603 7.136 11.7163 8.048 11.7163 9.2C11.7163 10.352 10.8603 11.264 9.69231 11.264ZM17.1454 12.08L18.5854 7.816L20.0894 12.08H20.5614L22.3614 6.4H21.4654L20.2974 10.288L18.9614 6.4H18.2094L16.9374 10.288L15.7454 6.4H14.8494L16.6734 12.08H17.1454ZM28.2831 12V11.232H25.5871V9.488H28.0511V8.736H25.5871V7.168H28.2831V6.4H24.7551V12H28.2831ZM33.008 9.84H33.104C34.272 9.84 34.968 9.016 34.968 8.104C34.968 7.192 34.232 6.4 33.104 6.4H31.152V12H31.992V9.856L34.112 12H35.24L33.008 9.84ZM33.008 7.168C33.688 7.168 34.088 7.56 34.088 8.104C34.088 8.664 33.688 9.072 33.008 9.072H31.992V7.168H33.008ZM41.2566 12V11.232H38.5606V9.488H41.0246V8.736H38.5606V7.168H41.2566V6.4H37.7286V12H41.2566ZM46.1494 12C47.7174 12 48.9574 10.744 48.9574 9.192C48.9574 7.656 47.7174 6.4 46.1494 6.4H44.1254V12H46.1494ZM44.9654 7.176H46.0134C47.1654 7.176 48.0694 7.96 48.0694 9.192C48.0694 10.432 47.1654 11.224 46.0134 11.224H44.9654V7.176ZM57.5403 12C58.5163 12 59.2683 11.352 59.2683 10.384C59.2683 9.688 58.9003 9.248 58.5003 9.064C58.7323 8.92 59.0843 8.528 59.0843 7.944C59.0843 7.064 58.3723 6.4 57.4123 6.4H55.3723V12H57.5403ZM56.1963 7.144H57.3163C57.8363 7.144 58.2283 7.448 58.2283 7.96C58.2283 8.528 57.8363 8.8 57.3163 8.8H56.1963V7.144ZM56.1963 9.52H57.4523C58.0523 9.52 58.4123 9.896 58.4043 10.384C58.4043 10.872 58.0683 11.272 57.4523 11.272H56.1963V9.52ZM64.0884 12V9.96L66.1764 6.4H65.2004L63.6484 9.136L62.0964 6.4H61.1124L63.2324 9.976V12H64.0884Z' fill='%23494D5F'/%3e%3cpath d='M94.388 13V10.084H96.092C97.712 10.084 98.924 8.824 98.924 7.3C98.924 5.8 97.652 4.6 96.092 4.6H93.128V13H94.388ZM94.388 5.74H95.888C96.872 5.74 97.592 6.412 97.592 7.3C97.592 8.224 96.872 8.92 95.888 8.92H94.388V5.74ZM102.098 13.132C103.718 13.132 104.51 12.004 104.51 10.636V7.552H103.37V10.66C103.37 11.5 102.878 12.04 102.098 12.04C101.306 12.04 100.826 11.5 100.826 10.66V7.552H99.6865V10.636C99.6865 12.004 100.466 13.132 102.098 13.132ZM107.386 13.132C108.766 13.132 109.474 12.328 109.474 11.416C109.474 10.6 109.006 9.94 107.602 9.688C107.038 9.592 106.678 9.412 106.678 8.992C106.678 8.668 106.954 8.404 107.446 8.404C107.842 8.404 108.226 8.632 108.346 9.04L109.294 8.608C109.042 7.912 108.394 7.42 107.434 7.42C106.246 7.42 105.538 8.164 105.538 9.004C105.538 10.144 106.45 10.552 107.374 10.72C107.962 10.84 108.322 11.032 108.322 11.44C108.322 11.836 107.986 12.076 107.398 12.076C106.942 12.076 106.534 11.812 106.354 11.392L105.358 11.848C105.658 12.544 106.294 13.132 107.386 13.132ZM111.636 13V9.928C111.636 9.064 112.2 8.488 112.956 8.488C113.724 8.488 114.204 9.028 114.204 9.808V13H115.344V9.568C115.344 8.356 114.468 7.42 113.184 7.42C112.416 7.42 111.888 7.768 111.636 8.08V4.6H110.496V13H111.636ZM123.704 13.12C125.288 13.12 126.62 12.352 127.352 11.164L126.272 10.516C125.768 11.332 124.844 11.896 123.704 11.896C122 11.896 120.692 10.54 120.692 8.8C120.692 7.06 122 5.704 123.704 5.704C124.844 5.704 125.768 6.256 126.272 7.084L127.352 6.424C126.608 5.248 125.324 4.48 123.704 4.48C121.268 4.48 119.36 6.376 119.36 8.8C119.36 11.224 121.268 13.12 123.704 13.12ZM129.666 13V9.928C129.666 9.064 130.23 8.488 130.986 8.488C131.754 8.488 132.234 9.028 132.234 9.808V13H133.374V9.568C133.374 8.356 132.498 7.42 131.214 7.42C130.446 7.42 129.918 7.768 129.666 8.08V4.6H128.526V13H129.666ZM136.625 13.132C137.477 13.132 138.053 12.712 138.257 12.4V13H139.313V9.556C139.313 8.452 138.473 7.42 136.937 7.42C135.797 7.42 135.053 8.032 134.705 8.812L135.557 9.364C135.773 8.848 136.205 8.452 136.937 8.452C137.765 8.452 138.161 8.92 138.161 9.28C138.161 9.58 137.945 9.784 137.597 9.784H136.349C135.293 9.784 134.525 10.396 134.525 11.356C134.525 12.34 135.341 13.132 136.625 13.132ZM136.721 12.148C136.073 12.148 135.713 11.8 135.713 11.368C135.713 10.972 136.025 10.672 136.481 10.672H138.185V10.744C138.185 11.56 137.633 12.148 136.721 12.148ZM143.918 13.072V12.016H143.27C142.754 12.016 142.274 11.752 142.274 11.02V8.548H143.918V7.552H142.274V6.232H141.434V6.256C141.434 7.228 140.846 7.72 140.21 7.72H140.174V8.548H141.134V11.128C141.134 12.436 141.926 13.072 143.126 13.072H143.918Z' fill='black'/%3e%3cpath d='M81.4773 16.2944C81.9092 16.2941 82.3317 16.1728 82.6935 15.9452C83.0553 15.7176 83.3408 15.3935 83.5151 15.0123C83.5353 14.97 83.544 14.9234 83.5404 14.877C83.5368 14.8306 83.5211 14.7858 83.4947 14.7469C83.4683 14.7079 83.432 14.6761 83.3894 14.6543C83.3467 14.6326 83.299 14.6216 83.2508 14.6225H79.7038C79.6556 14.6217 79.608 14.6328 79.5654 14.6546C79.5229 14.6764 79.4867 14.7082 79.4604 14.7472C79.4341 14.7861 79.4184 14.8308 79.4148 14.8772C79.4113 14.9236 79.42 14.97 79.4401 15.0123C79.6145 15.3934 79.8998 15.7174 80.2614 15.945C80.6231 16.1726 81.0455 16.294 81.4773 16.2944V16.2944Z' fill='url(%23paint0_linear_3808_9309)'/%3e%3cpath d='M86.9221 12.5533C86.6451 12.5533 86.3794 12.4471 86.1835 12.2581C85.9876 12.0691 85.8775 11.8128 85.8775 11.5455V7.88416C85.8773 6.94002 85.5509 6.02288 84.95 5.27774C84.349 4.53261 83.5077 4.00199 82.5592 3.76978C82.5244 3.5131 82.3938 3.27746 82.1919 3.10698C81.99 2.9365 81.7306 2.84287 81.4623 2.84363C81.194 2.84439 80.9351 2.93948 80.7342 3.1111C80.5334 3.28272 80.4042 3.51909 80.371 3.77596C79.525 3.9893 78.7641 4.44078 78.185 5.07287C77.606 5.70497 77.2351 6.48907 77.1196 7.32526C77.1196 7.35069 77.1125 7.37544 77.1097 7.40088C77.1068 7.42631 77.1018 7.46962 77.099 7.504C77.0961 7.53837 77.0933 7.57274 77.0904 7.60643C77.0876 7.64011 77.0869 7.66348 77.0854 7.69236C77.0854 7.75079 77.0812 7.80854 77.0805 7.86766V11.5448C77.0805 11.8108 76.9715 12.066 76.7773 12.2548C76.5831 12.4436 76.3194 12.5506 76.0437 12.5526C75.9789 12.5519 75.9147 12.5635 75.8546 12.5867C75.7945 12.61 75.7397 12.6444 75.6934 12.6881C75.647 12.7317 75.6101 12.7838 75.5846 12.8412C75.5592 12.8986 75.5457 12.9604 75.5449 13.0228V13.027C75.5449 13.1528 75.5967 13.2734 75.6889 13.3624C75.7811 13.4513 75.9062 13.5013 76.0366 13.5013H86.9221C87.0492 13.4966 87.1694 13.4446 87.2576 13.3563C87.3458 13.2679 87.395 13.15 87.395 13.0273C87.395 12.9046 87.3458 12.7867 87.2576 12.6983C87.1694 12.61 87.0492 12.558 86.9221 12.5533V12.5533Z' fill='url(%23paint1_linear_3808_9309)'/%3e%3cpath d='M84.6296 3.05068C85.2306 3.17935 85.7742 3.48793 86.1826 3.93237C86.5911 4.37681 86.8436 4.93438 86.904 5.52549C86.9069 5.55738 86.9163 5.58841 86.9316 5.61677C86.947 5.64514 86.9681 5.67028 86.9936 5.69074C87.0191 5.7112 87.0486 5.72657 87.0803 5.73597C87.112 5.74536 87.1453 5.7486 87.1784 5.74548C87.2449 5.73934 87.3063 5.70824 87.3494 5.65886C87.3706 5.63427 87.3865 5.60588 87.3963 5.57532C87.4061 5.54477 87.4095 5.51265 87.4064 5.48081C87.3405 4.78434 87.0458 4.12637 86.5653 3.60271C86.0848 3.07906 85.4436 2.71707 84.735 2.56946C84.7177 2.56597 84.7 2.56413 84.6823 2.56396C84.6201 2.56411 84.5602 2.58642 84.514 2.62661C84.4678 2.66681 84.4386 2.72205 84.4321 2.78174C84.4255 2.84142 84.4421 2.90133 84.4785 2.94995C84.515 2.99858 84.5688 3.03249 84.6296 3.04518V3.05068Z' fill='url(%23paint2_linear_3808_9309)'/%3e%3cpath d='M84.9128 1.48117C85.8483 1.68062 86.6944 2.16038 87.3302 2.85182C87.9661 3.54327 88.3589 4.41099 88.4527 5.33088C88.4557 5.36273 88.4651 5.39371 88.4805 5.42203C88.4959 5.45035 88.517 5.47546 88.5425 5.4959C88.568 5.51635 88.5974 5.53172 88.6291 5.54116C88.6607 5.55059 88.694 5.55389 88.727 5.55086C88.7936 5.54473 88.855 5.51362 88.898 5.46424C88.9192 5.43965 88.9352 5.41126 88.945 5.38071C88.9547 5.35015 88.9582 5.31803 88.955 5.28619C88.855 4.26214 88.4196 3.29542 87.7119 2.52612C87.0042 1.75683 86.061 1.22493 85.019 1.00751C85.0016 1.00402 84.9839 1.00218 84.9662 1.00201C84.904 1.00199 84.8439 1.02418 84.7976 1.06432C84.7512 1.10446 84.7219 1.15971 84.7153 1.21945C84.7087 1.27918 84.7252 1.33916 84.7616 1.38786C84.7981 1.43656 84.8519 1.47053 84.9128 1.48323V1.48117Z' fill='url(%23paint3_linear_3808_9309)'/%3e%3cpath d='M78.3258 3.05061C78.3866 3.03792 78.4404 3.00401 78.4768 2.95539C78.5133 2.90676 78.5298 2.84685 78.5233 2.78717C78.5167 2.72749 78.4876 2.67224 78.4414 2.63205C78.3952 2.59185 78.3352 2.56954 78.273 2.5694C78.2553 2.56957 78.2376 2.57141 78.2203 2.5749C77.5129 2.72209 76.8726 3.08297 76.3922 3.60513C75.9118 4.12729 75.6165 4.78356 75.549 5.47868C75.5458 5.51052 75.5493 5.54264 75.5591 5.57319C75.5688 5.60375 75.5848 5.63214 75.606 5.65673C75.627 5.68147 75.653 5.70188 75.6824 5.71676C75.7118 5.73164 75.7439 5.74068 75.777 5.74335C75.81 5.74647 75.8433 5.74323 75.8751 5.73384C75.9068 5.72444 75.9362 5.70907 75.9618 5.68861C75.9873 5.66815 76.0083 5.64301 76.0237 5.61464C76.0391 5.58628 76.0485 5.55525 76.0513 5.52336C76.1122 4.93262 76.3649 4.37551 76.7733 3.93148C77.1817 3.48745 77.725 3.17917 78.3258 3.05061V3.05061Z' fill='url(%23paint4_linear_3808_9309)'/%3e%3cpath d='M78.0427 1.48121C78.1035 1.46853 78.1573 1.43461 78.1937 1.38599C78.2302 1.33736 78.2467 1.27745 78.2402 1.21777C78.2337 1.15809 78.2045 1.10284 78.1583 1.06265C78.1121 1.02245 78.0521 1.00014 77.9899 1C77.9722 1.00013 77.9546 1.00197 77.9372 1.0055C76.8952 1.22292 75.9519 1.75482 75.2443 2.52411C74.5366 3.2934 74.1011 4.26013 74.0011 5.28418C73.998 5.31601 74.0014 5.34813 74.0112 5.37869C74.021 5.40925 74.0369 5.43764 74.0581 5.46223C74.0792 5.48697 74.1052 5.50738 74.1345 5.52226C74.1639 5.53714 74.1961 5.54618 74.2291 5.54884C74.2621 5.55187 74.2954 5.54857 74.3271 5.53914C74.3588 5.52971 74.3882 5.51433 74.4137 5.49389C74.4392 5.47344 74.4603 5.44834 74.4757 5.42002C74.4911 5.3917 74.5005 5.36072 74.5035 5.32886C74.5977 4.40947 74.9907 3.54234 75.6263 2.85133C76.262 2.16031 77.1077 1.68078 78.0427 1.48121V1.48121Z' fill='url(%23paint5_linear_3808_9309)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_3808_9309' x1='83.8614' y1='11.0044' x2='81.1098' y2='15.8527' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF94A6'/%3e%3cstop offset='0.32' stop-color='%23E03DC1'/%3e%3cstop offset='1' stop-color='%238247E5'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_3808_9309' x1='85.2526' y1='5.7345' x2='79.4177' y2='14.3293' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF94A6'/%3e%3cstop offset='0.32' stop-color='%23E03DC1'/%3e%3cstop offset='1' stop-color='%238247E5'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_3808_9309' x1='90.186' y1='1.42074' x2='75.6444' y2='11.4259' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF94A6'/%3e%3cstop offset='0.32' stop-color='%23E03DC1'/%3e%3cstop offset='1' stop-color='%238247E5'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_3808_9309' x1='90.0467' y1='1.21856' x2='75.5051' y2='11.223' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF94A6'/%3e%3cstop offset='0.32' stop-color='%23E03DC1'/%3e%3cstop offset='1' stop-color='%238247E5'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_3808_9309' x1='87.4086' y1='-2.61534' x2='72.8677' y2='7.38912' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF94A6'/%3e%3cstop offset='0.32' stop-color='%23E03DC1'/%3e%3cstop offset='1' stop-color='%238247E5'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_3808_9309' x1='86.678' y1='-3.67671' x2='72.1427' y2='6.32344' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FF94A6'/%3e%3cstop offset='0.32' stop-color='%23E03DC1'/%3e%3cstop offset='1' stop-color='%238247E5'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";

//   content: string;
//   name: string;
//   type: string;
//   size: number;
// };

const Chats = ({
  msg,
  caip10,
  messageBeingSent
}) => {
  React.useState(false);
  React.useState('');
  const time = new Date(msg.timestamp);
  const time1 = time.toLocaleTimeString('en-US');
  const date = time1.slice(0, -6) + time1.slice(-2);
  return jsxRuntime.jsx(Container$2, {
    children: jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: msg.messageType === 'Text' ? jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: msg.fromCAIP10 === caip10 ? jsxRuntime.jsx(MessageWrapper, Object.assign({
          align: "row-reverse"
        }, {
          children: jsxRuntime.jsxs(SenderMessage, {
            children: [jsxRuntime.jsx(TextMessage, {
              children: msg.messageContent
            }), jsxRuntime.jsx(TimeStamp, {
              children: date
            })]
          })
        })) : jsxRuntime.jsx(MessageWrapper, Object.assign({
          align: "row"
        }, {
          children: jsxRuntime.jsxs(ReceivedMessage, {
            children: [jsxRuntime.jsx(TextMessage, {
              children: msg.messageContent
            }), jsxRuntime.jsx(TimeStamp, {
              children: date
            })]
          })
        }))
      }) : // : msg.messageType === 'Image' ? (
      //   <>
      //     {msg.fromCAIP10 === caip10 ? (
      //       <MessageWrapper height="138px" align="row-reverse">
      //         <SenderMessage color="transparent">
      //           <ImageMessage
      //             src={
      //               (JSON.parse(msg.messageContent) as FileMessageContent)
      //                 .content
      //             }
      //             onClick={() => {
      //               setShowImageModal(true);
      //               setImageUrl(
      //                 (JSON.parse(msg.messageContent) as FileMessageContent)
      //                   .content
      //               );
      //             }}
      //           />
      //         </SenderMessage>
      //       </MessageWrapper>
      //     ) : (
      //       <MessageWrapper height="138px" align="row">
      //         <ReceivedMessage color="transparent">
      //           <ImageMessage
      //             src={
      //               (JSON.parse(msg.messageContent) as FileMessageContent)
      //                 .content
      //             }
      //             onClick={() => {
      //               setShowImageModal(true);
      //               setImageUrl(
      //                 (JSON.parse(msg.messageContent) as FileMessageContent)
      //                   .content
      //               );
      //             }}
      //           />
      //         </ReceivedMessage>
      //       </MessageWrapper>
      //     )}
      //     {/* {showImageModal && (
      //     //   <Modal
      //     //     showImageModal={showImageModal}
      //     //     onClose={() => setShowImageModal(false)}
      //     //     src={imageUrl}
      //     //     time={msg.timestamp}
      //     //   />
      //     )} */}
      //   </>
      //  )
      // : msg.messageType === 'File' ? (
      //   <>
      //     {msg.fromCAIP10 === caip10 ? (
      //       <MessageWrapper align="row-reverse">
      //         <SenderMessage color="transparent">
      //           <FileMessage>
      //             {/* <Files msg={msg} /> */}
      //           </FileMessage>
      //         </SenderMessage>
      //       </MessageWrapper>
      //     ) : (
      //       <MessageWrapper align="row">
      //         <ReceivedMessage color="transparent">
      //           <FileMessage>
      //             {/* <Files msg={msg} /> */}
      //           </FileMessage>
      //         </ReceivedMessage>
      //       </MessageWrapper>
      //     )}
      //   </>
      // )
      null
    })
  });
}; //styles

const Container$2 = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "Chats__Container",
  componentId: "sc-1cbuvl-0"
})(["display:flex;flex-direction:column;background:#ffffff;"]);
const TextMessage = /*#__PURE__*/styled__default["default"].p.withConfig({
  displayName: "Chats__TextMessage",
  componentId: "sc-1cbuvl-5"
})(["word-wrap:break-word;padding:0 30px 7px 0;text-align:left;font-weight:400;font-size:15px;line-height:130%;margin:0px;"]);
const TimeStamp = /*#__PURE__*/styled__default["default"].span.withConfig({
  displayName: "Chats__TimeStamp",
  componentId: "sc-1cbuvl-6"
})(["min-width:44px;font-weight:400;font-size:13px;line-height:130%;display:flex;justify-content:flex-end;align-items:flex-end;position:absolute;right:10px;bottom:5px;"]);
const MessageWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "Chats__MessageWrapper",
  componentId: "sc-1cbuvl-7"
})(["width:100%;min-height:", ";padding:0;margin-bottom:10px;display:flex;flex-direction:", ";"], props => props.height || '48px', props => props.align || 'row');
const ReceivedMessage = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "Chats__ReceivedMessage",
  componentId: "sc-1cbuvl-8"
})(["box-sizing:border-box;position:relative;max-width:250px;padding:", ";background:", ";text-align:left;border:1px solid #e4e8ef;border-radius:2px 16px 16px 16px;display:flex;justify-content:space-between;align-items:center;color:#000000;"], props => props.padding || '12px 15px 12px 20px', props => props.color || '#ffffff');
const SenderMessage = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "Chats__SenderMessage",
  componentId: "sc-1cbuvl-9"
})(["box-sizing:border-box;position:relative;max-width:250px;text-align:left;padding:", ";background:", ";border:1px solid #e4e8ef;border-radius:16px 2px 16px 16px;display:flex;justify-content:flex-strt;align-items:center;color:#ffffff;"], props => props.padding || '12px 15px 12px 20px', props => props.color || '#ca599b');

const Modal = () => {
  const {
    supportAddress,
    env,
    account
  } = React.useContext(ChatPropsContext);
  const {
    chats,
    setChatsSorted,
    connectedUser,
    setConnectedUser
  } = React.useContext(ChatMainStateContext);

  const getChatCall = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!connectedUser) return;
    const chatsResponse = yield getChats({
      account,
      pgpPrivateKey: connectedUser.privateKey,
      supportAddress,
      env
    });
    setChatsSorted(chatsResponse);
  });

  const connectUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield createUserIfNecessary({
      account,
      env
    });
    setConnectedUser(user);
  });

  React.useEffect(() => {
    getChatCall();
  }, [connectedUser]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      getChatCall();
    }, 3000);
    return () => clearInterval(interval);
  }, [connectedUser]);
  return jsxRuntime.jsxs(Container$1, {
    children: [jsxRuntime.jsxs(HeaderSection, {
      children: [jsxRuntime.jsx(ModalHeader, {}), jsxRuntime.jsx(AddressInfo, {})]
    }), jsxRuntime.jsx(ChatSection, {
      children: connectedUser && chats.length ? chats.map(chat => jsxRuntime.jsx(Chats, {
        msg: chat,
        caip10: walletToPCAIP10(account),
        messageBeingSent: true
      })) : jsxRuntime.jsx(jsxRuntime.Fragment, {})
    }), !connectedUser && jsxRuntime.jsxs(ConnectSection, {
      children: [jsxRuntime.jsx(Button$1, Object.assign({
        onClick: () => connectUser()
      }, {
        children: "Connect"
      })), jsxRuntime.jsx(Span, {
        children: "Connect your wallet to conitnue"
      })]
    }), jsxRuntime.jsxs(InputSection, {
      children: [connectedUser && jsxRuntime.jsx(ChatInput, {}), jsxRuntime.jsx(Image$1, {
        src: img,
        alt: "Powered by Push Protocol",
        height: "18px",
        width: "145px"
      })]
    })]
  });
}; //styles

const Container$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "Modal__Container",
  componentId: "sc-1bmzqyr-0"
})(["display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;background:#ffffff;border:1px solid #e4e8ef;box-shadow:0px 0px 5px rgba(0,0,0,0.07);border-radius:24px;height:585px;max-height:585px;width:350px;max-width:350px;padding:0 15px 9px 15px;"]);
const ChatSection = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "Modal__ChatSection",
  componentId: "sc-1bmzqyr-1"
})(["height:350px;overflow:auto;"]);
const ConnectSection = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "Modal__ConnectSection",
  componentId: "sc-1bmzqyr-2"
})(["display:flex;flex-direction:column;margin-bottom:25%;"]);
const Button$1 = /*#__PURE__*/styled__default["default"].button.withConfig({
  displayName: "Modal__Button",
  componentId: "sc-1bmzqyr-3"
})(["background:#d53a94;border-radius:15px;align-self:center;padding:11px 36px;border:none;font-weight:500;font-size:17px;line-height:150%;display:flex;align-items:center;text-align:center;letter-spacing:-0.019em;color:#ffffff;margin-bottom:10px;cursor:pointer;"]);
const HeaderSection = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "Modal__HeaderSection",
  componentId: "sc-1bmzqyr-4"
})([""]);
const InputSection = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "Modal__InputSection",
  componentId: "sc-1bmzqyr-5"
})(["display:flex;flex-direction:column;"]);
const Image$1 = /*#__PURE__*/styled__default["default"].img.withConfig({
  displayName: "Modal__Image",
  componentId: "sc-1bmzqyr-6"
})(["display:flex;max-height:initial;vertical-align:middle;overflow:initial;cursor:pointer;height:", ";width:", ";align-self:center;"], props => props.height || '24px', props => props.width || '20px');
const Span = /*#__PURE__*/styled__default["default"].span.withConfig({
  displayName: "Modal__Span",
  componentId: "sc-1bmzqyr-7"
})(["font-weight:400;font-size:15px;line-height:140%;display:flex;text-align:center;justify-content:center;margin-bottom:30%;color:#657795;"]);

const Chat = ({
  account,
  supportAddress,
  // greetingMsg = Constants.DEFAULT_GREETING_MSG,
  modalTitle: _modalTitle = Constants.DEFAULT_TITLE,
  primaryColor: _primaryColor = Constants.COLOR.PRIMARY,
  apiKey: _apiKey = '',
  env: _env = Constants.ENV.PROD
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [connectedUser, setConnectedUser] = React.useState(null);
  const [messageBeingSent, setMessageBeingSent] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [footerError, setFooterError] = React.useState('');
  const [chats, setChats] = React.useState([]);

  const setChatsSorted = chats => {
    chats.sort((a, b) => {
      return a.timestamp > b.timestamp ? 1 : -1;
    });
    setChats(chats);
  };

  const chatPropsData = {
    account,
    supportAddress,
    // greetingMsg,
    modalTitle: _modalTitle,
    primaryColor: _primaryColor,
    apiKey: _apiKey,
    env: _env
  };
  React.useEffect(() => {
    setChats([]);
    setConnectedUser(null);
  }, [account, supportAddress]);
  const chatMainStateData = {
    isModalOpen,
    setIsModalOpen,
    connectedUser,
    setConnectedUser,
    messageBeingSent,
    setMessageBeingSent,
    message,
    setMessage,
    chats,
    setChatsSorted,
    footerError,
    setFooterError
  };
  return jsxRuntime.jsx(Container, {
    children: jsxRuntime.jsx(ChatPropsContext.Provider, Object.assign({
      value: chatPropsData
    }, {
      children: jsxRuntime.jsxs(ChatMainStateContext.Provider, Object.assign({
        value: chatMainStateData
      }, {
        children: [!isModalOpen && jsxRuntime.jsx(Button, Object.assign({
          bgColor: _primaryColor,
          onClick: () => handleOnChatIconClick({
            isModalOpen,
            setIsModalOpen
          })
        }, {
          children: jsxRuntime.jsx(Image, {
            src: img$3,
            alt: "chat"
          })
        })), isModalOpen && jsxRuntime.jsx(Modal, {})]
      }))
    }))
  });
}; //styles

const Container = /*#__PURE__*/styled__default["default"].div.withConfig({
  displayName: "chat__Container",
  componentId: "sc-1nrfhfd-0"
})(["font-family:'Strawford';flex:1;display:flex;position:fixed;bottom:0;right:0;width:fit-content;margin:0 3rem 2rem 0;align-items:center;justify-content:center;"]);
const Button = /*#__PURE__*/styled__default["default"].button.withConfig({
  displayName: "chat__Button",
  componentId: "sc-1nrfhfd-1"
})(["background:", ";border:none;cursor:pointer;border-radius:18px;padding:16.5px 16.5px 13px 18.5px;"], props => props.bgColor);
const Image = /*#__PURE__*/styled__default["default"].img.withConfig({
  displayName: "chat__Image",
  componentId: "sc-1nrfhfd-2"
})([""]);

exports.Chat = Chat;
exports.NotificationItem = NotificationItem;
exports.ParseMarkdownText = ParseMarkdownText;
exports.SubscribedModal = SubscribedModal;
