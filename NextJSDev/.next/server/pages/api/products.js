"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    desc: {\n        type: String,\n        required: true,\n        maxlength: 200\n    },\n    img: {\n        type: String,\n        required: true\n    },\n    prices: {\n        type: [\n            Number\n        ],\n        required: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsS0FBSyxDQUFDQyxhQUFhLEdBQUcsR0FBRyxDQUFDRCx3REFBZSxDQUFDLENBQUM7SUFDekNHLEtBQUssRUFBRSxDQUFDO1FBQ05DLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsRUFBRTtJQUNmLENBQUM7SUFDREMsSUFBSSxFQUFFLENBQUM7UUFDTEosSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxHQUFHO0lBQ2hCLENBQUM7SUFDREUsR0FBRyxFQUFFLENBQUM7UUFDSkwsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREksTUFBTSxFQUFFLENBQUM7UUFDUE4sSUFBSSxFQUFFLENBQUNPO1lBQUFBLE1BQU07UUFBQSxDQUFDO1FBQ2RMLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVOLGdFQUF1QixJQUNwQ0EscURBQWMsQ0FBQyxDQUFTLFVBQUVDLGFBQWEsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTWVkaWNhbFRyYW5zcGFyZW5jeS8uL21vZGVscy9Qcm9kdWN0LmpzPzA5YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIG1heGxlbmd0aDogNjAsXHJcbiAgfSxcclxuICBkZXNjOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIG1heGxlbmd0aDogMjAwLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHByaWNlczoge1xyXG4gICAgdHlwZTogW051bWJlcl0sXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8XHJcbiAgbW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0XCIsIFByb2R1Y3RTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJQcm9kdWN0U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJkZXNjIiwiaW1nIiwicHJpY2VzIiwiTnVtYmVyIiwibW9kZWxzIiwiUHJvZHVjdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo */ \"(api)/./utils/mongo.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Product */ \"(api)/./models/Product.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_utils_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const products = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(products);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const product = await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(product);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQ0M7QUFFOUIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQyxDQUFDLENBQUNDLE1BQU0sRUFBQyxDQUFDLEdBQUdGLEdBQUc7SUFFdEIsS0FBSyxDQUFDSCx3REFBUztJQUVmLEVBQUUsRUFBRUssTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDTCw0REFBWTtZQUNuQ0csR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNILFFBQVE7UUFDL0IsQ0FBQyxDQUFDLEtBQUssRUFBRUksR0FBRyxFQUFFLENBQUM7WUFDYk4sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNDLEdBQUc7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxFQUFFLEVBQUVMLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUN0QixHQUFHLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQ00sT0FBTyxHQUFHLEtBQUssQ0FBQ1YsOERBQWMsQ0FBQ0UsR0FBRyxDQUFDVSxJQUFJO1lBQzdDVCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0UsT0FBTztRQUM5QixDQUFDLENBQUMsS0FBSyxFQUFFRCxHQUFHLEVBQUUsQ0FBQztZQUNiTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0MsR0FBRztRQUMxQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NZWRpY2FsVHJhbnNwYXJlbmN5Ly4vcGFnZXMvYXBpL3Byb2R1Y3RzL2luZGV4LmpzPzU5NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbW9uZ29cIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Qcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuXHJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XHJcblxyXG4gIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHByb2R1Y3QpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJQcm9kdWN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByb2R1Y3RzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ }),

/***/ "(api)/./utils/mongo.js":
/*!************************!*\
  !*** ./utils/mongo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://phigeh:pass123@cluster0.kthn1.mongodb.net/medicalTransparency?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2VBRU5DLFNBQVMsR0FBRyxDQUFDO0lBQzFCLEVBQUUsRUFBRUQsVUFBVSxDQUFDRSxXQUFXLEVBQUUsQ0FBQztRQUMzQixNQUFNO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQ0MsRUFBRSxHQUFHLEtBQUssQ0FBQ0osdURBQWdCLENBQy9CLENBQXlHLDBHQUN6RyxDQUFDO1FBQ0NNLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO0lBQzFCLENBQUM7SUFHSE4sVUFBVSxDQUFDRSxXQUFXLEdBQUdDLEVBQUUsQ0FBQ0ksV0FBVyxDQUFDLENBQUMsRUFBRUMsVUFBVTtBQUN2RCxDQUFDO0FBRUQsaUVBQWVQLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL01lZGljYWxUcmFuc3BhcmVuY3kvLi91dGlscy9tb25nby5qcz83ZDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL3BoaWdlaDpwYXNzMTIzQGNsdXN0ZXIwLmt0aG4xLm1vbmdvZGIubmV0L21lZGljYWxUcmFuc3BhcmVuY3k/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXHJcbiAgICB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImRiIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();