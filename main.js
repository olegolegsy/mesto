(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._idCard=e._id,this._idMy=e.idMy,this._id=e.owner._id,this._likes=e.likes,this._templateSelector=n,this._handleOpenPopup=r,this._handleConfirmPopup=o,this._handleLike=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__img"),this._elementLikeBtn=this._element.querySelector(".element__like"),this._elementDeleteBtn=this._element.querySelector(".element__delete"),this._elementCounter=this._element.querySelector(".element__counter"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._setEventListeners(),this._element}},{key:"_isLiked",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._idMy||t._elementLikeBtn.classList.add("element__like_active")}))}},{key:"_setLikes",value:function(){this._elementCounter.textContent=this._likes.length}},{key:"toggleLike",value:function(t){this._likes=t.likes,this._elementLikeBtn.classList.toggle("element__like_active"),this._setLikes()}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._elementLikeBtn.addEventListener("click",(function(){t._handleLike(t._elementLikeBtn,t._idCard)})),this._elementImage.addEventListener("click",(function(){t._handleOpenPopup(t._name,t._link)})),this._idMy===this._id?this._elementDeleteBtn.addEventListener("click",(function(){t._handleConfirmPopup(t,t._idCard)})):(this._elementDeleteBtn.remove(),this._elementDeleteBtn=null),this._setLikes(),this._isLiked()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._saveButtonSelector=e.saveButtonSelector,this._inactiveSaveButtonClass=e.inactiveSaveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClassActive=e.errorClassActive,this._form=n,this._formInputs=Array.from(n.querySelectorAll(this._inputSelector)),this._formButton=n.querySelector(this._saveButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){var t=this;this._formInputs.forEach((function(e){e.addEventListener("input",(function(){t._toggleButtonState(),t._isValid(e)}))}))}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_showInputError",value:function(t){var e=this._form.querySelector(".".concat(t.name,"-error"));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClassActive)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.name,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClassActive)}},{key:"_hasInvalidInput",value:function(){return this._formInputs.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"disableSubmitButton",value:function(){this._formButton.classList.add(this._inactiveSaveButtonClass),this._formButton.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._formButton.classList.remove(this._inactiveSaveButtonClass),this._formButton.disabled=!1}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._formInputs.forEach((function(e){t._hideInputError(e)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this.renderer=r}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"setItems",value:function(t){var e=this;t.forEach((function(t){e.renderer(t)}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e.name),this._about=document.querySelector(e.about),this._avatar=document.querySelector(e.avatar)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about}},{key:"setUserAvatar",value:function(t){this._avatar.src=t.avatar}},{key:"setId",value:function(t){this.id=t}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,v(r.key),r)}}function h(t,e,n){return(e=v(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var m=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"_handlePopupWithEscBtn",(function(t){"Escape"===t.key&&n.close()})),h(this,"_handlePopupWithCloseBtn",(function(){n.close()})),h(this,"_handlePopupWithLayout",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handlePopupWithEscBtn)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handlePopupWithEscBtn)}},{key:"setEventListeners",value:function(){this._popupCloseBtn=this._popup.querySelector(".popup__cls-btn"),this._popupCloseBtn.addEventListener("click",this._handlePopupWithCloseBtn),this._popup.addEventListener("click",this._handlePopupWithLayout)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._button=n._popup.querySelector(".popup__save-btn"),n._buttonText=n._button.textContent,n}return e=u,(n=[{key:"buttonLoading",value:function(){this._button.textContent="Сохранение..."}},{key:"buttonWait",value:function(){this._button.textContent=this._buttonText}},{key:"close",value:function(){d(g(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputsValue",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputsValue",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;d(g(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t.buttonLoading(),t._handleSubmit(t._getInputsValue())}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function C(t){var e=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===w(e)?e:String(e)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(n);if(r){var o=j(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return P(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=P(n=o.call(this,t)),a=function(t,r){n._popupImg.src=r,n._popupImg.alt=t,n._popupCaption.textContent=t,E((e=P(n),j(i.prototype)),"open",e).call(e)},(u=C(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImg=n._popup.querySelector(".popup__image-photo"),n._popupCaption=n._popup.querySelector(".popup__image-caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(m);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,A(r.key),r)}}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}function A(t){var e=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===B(e)?e:String(e)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return q(t)}(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=q(r=i.call(this,t)),c=function(t,e){R((n=q(r),x(u.prototype)),"open",n).call(n),r._card=t,r._idCard=e},(a=A(a="open"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r._handleSubmit=e,r._form=r._popup.querySelector(".popup__form"),r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;R(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._card,t._idCard)}))}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var W=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._token=this._headers.authorization}var e,n;return e=t,(n=[{key:"_isOk",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"removeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then(this._isOk)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then(this._isOk)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then(this._isOk)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._isOk)}},{key:"setAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._isOk)}},{key:"setCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.title,link:t.link})}).then(this._isOk)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then(this._isOk)}},{key:"removeLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then(this._isOk)}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),M={formSelector:".popup__form",inputSelector:".popup__input",saveButtonSelector:".popup__save-btn",inactiveSaveButtonClass:"popup__save-btn_disabled",inputErrorClass:"popup__input_error",errorClassActive:"popup__input-error_active"},z=document.querySelector(".profile__edit-btn"),N=document.querySelector(".popup__form_profile"),J=document.querySelector(".profile__add-btn"),H=document.querySelector(".popup__form_place"),$=document.querySelector(".profile__avatar-edt-btn"),F=document.querySelector(".popup__form_avatar");function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var K=new f({name:".profile__title",about:".profile__about",avatar:".profile__avatar"}),Q=new W({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-71",headers:{authorization:"63e51c94-2a20-4ac4-b2ef-ac2b1cdb1198","Content-Type":"application/json"}}),X=new c({renderer:function(t){var e=new n(t,".template",tt.open,nt.open,(function(t,n){t.classList.contains("element__like_active")?Q.removeLike(n).then((function(t){e.toggleLike(t)})).catch((function(t){return console.error("Ошибка: ".concat(t))})):Q.addLike(n).then((function(t){e.toggleLike(t)})).catch((function(t){return console.error("Ошибка: ".concat(t))}))}));X.addItem(e.generateCard())}},".elements"),Y=new k(".popup_type_place",(function(t){Q.setCard(t).then((function(t){t.idMy=K.id,X.renderer(t),Y.close()})).catch((function(t){return console.error("Ошибка: ".concat(t))})).finally(Y.buttonWait())}));Y.setEventListeners();var Z=new k(".popup_type_profile",(function(t){Q.setUserInfo(t).then((function(){K.setUserInfo(t),Z.close()})).catch((function(t){return console.error("Ошибка: ".concat(t))})).finally(Z.buttonWait())}));Z.setEventListeners();var tt=new L(".popup_type_image");tt.setEventListeners();var et=new k(".popup_type_avatar",(function(t){Q.setAvatar(t).then((function(t){K.setUserAvatar(t),et.close()})).catch((function(t){return console.error("Ошибка: ".concat(t))})).finally(et.buttonWait())}));et.setEventListeners();var nt=new U(".popup_type_confirm",(function(t,e){Q.removeCard(e).then((function(){t.removeCard(),nt.close()})).catch((function(t){return console.error("Ошибка: ".concat(t))}))}));nt.setEventListeners();var rt=new i(M,N),ot=new i(M,H),it=new i(M,F);rt.enableValidation(),ot.enableValidation(),it.enableValidation(),J.addEventListener("click",(function(){ot.resetValidation(),ot.disableSubmitButton(),Y.open()})),z.addEventListener("click",(function(){rt.resetValidation(),rt.disableSubmitButton(),Z.setInputsValue(K.getUserInfo()),Z.open()})),$.addEventListener("click",(function(){it.resetValidation(),it.disableSubmitButton(),et.open()})),Promise.all([Q.getUserInfo(),Q.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];i.forEach((function(t){t.idMy=o._id})),K.setId(o._id),K.setUserInfo(o),K.setUserAvatar(o),X.setItems(i)})).catch((function(t){return console.error("Ошибка: ".concat(t))}))})();