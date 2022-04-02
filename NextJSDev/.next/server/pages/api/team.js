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
exports.id = "pages/api/team";
exports.ids = ["pages/api/team"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Team.js":
/*!************************!*\
  !*** ./models/Team.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TeamSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    img: {\n        type: String,\n        required: true,\n        maxlength: 200\n    },\n    bio: {\n        type: String,\n        required: true,\n        maxlength: 2000\n    },\n    role: {\n        type: String,\n        required: true,\n        maxlength: 200\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Team) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Team\", TeamSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVGVhbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsS0FBSyxDQUFDQyxVQUFVLEdBQUcsR0FBRyxDQUFDRCx3REFBZSxDQUNwQyxDQUFDO0lBQ0NHLElBQUksRUFBRSxDQUFDO1FBQ0xDLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsRUFBRTtJQUNmLENBQUM7SUFDREMsR0FBRyxFQUFFLENBQUM7UUFDSkosSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxHQUFHO0lBQ2hCLENBQUM7SUFDREUsR0FBRyxFQUFFLENBQUM7UUFDSkwsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxJQUFJO0lBQ2pCLENBQUM7SUFDREcsSUFBSSxFQUFFLENBQUM7UUFDTE4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxHQUFHO0lBQ2hCLENBQUM7QUFDSCxDQUFDLEVBQ0QsQ0FBQztJQUFDSSxVQUFVLEVBQUUsSUFBSTtBQUFDLENBQUM7QUFHdEIsaUVBQWVYLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLENBQU0sT0FBRUMsVUFBVSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NZWRpY2FsVHJhbnNwYXJlbmN5Ly4vbW9kZWxzL1RlYW0uanM/YWI1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBUZWFtU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1heGxlbmd0aDogNjAsXHJcbiAgICB9LFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1heGxlbmd0aDogMjAwLFxyXG4gICAgfSxcclxuICAgIGJpbzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtYXhsZW5ndGg6IDIwMDAsXHJcbiAgICB9LFxyXG4gICAgcm9sZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtYXhsZW5ndGg6IDIwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlRlYW0gfHwgbW9uZ29vc2UubW9kZWwoXCJUZWFtXCIsIFRlYW1TY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJUZWFtU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsImltZyIsImJpbyIsInJvbGUiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiVGVhbSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Team.js\n");

/***/ }),

/***/ "(api)/./pages/api/team/index.js":
/*!*********************************!*\
  !*** ./pages/api/team/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo */ \"(api)/./utils/mongo.js\");\n/* harmony import */ var _models_Team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Team */ \"(api)/./models/Team.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_utils_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const teams = await _models_Team__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(teams);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const team = await _models_Team__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(team);\n        } catch (err) {\n            res.status(500).json(err);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVhbS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDTDtBQUV4QixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxFQUFDLENBQUMsR0FBR0YsR0FBRztJQUV0QixLQUFLLENBQUNILHdEQUFTO0lBRWYsRUFBRSxFQUFFSyxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNMLHlEQUFTO1lBQzdCRyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0gsS0FBSztRQUM1QixDQUFDLENBQUMsS0FBSyxFQUFFSSxHQUFHLEVBQUUsQ0FBQztZQUNiTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0MsR0FBRztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELEVBQUUsRUFBRUwsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDTSxJQUFJLEdBQUcsS0FBSyxDQUFDViwyREFBVyxDQUFDRSxHQUFHLENBQUNVLElBQUk7WUFDdkNULEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRSxJQUFJO1FBQzNCLENBQUMsQ0FBQyxLQUFLLEVBQUVELEdBQUcsRUFBRSxDQUFDO1lBQ2JOLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDQyxHQUFHO1FBQzFCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL01lZGljYWxUcmFuc3BhcmVuY3kvLi9wYWdlcy9hcGkvdGVhbS9pbmRleC5qcz81ZjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21vbmdvXCI7XHJcbmltcG9ydCBUZWFtIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvVGVhbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcblxyXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0ZWFtcyA9IGF3YWl0IFRlYW0uZmluZCgpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0ZWFtcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0ZWFtID0gYXdhaXQgVGVhbS5jcmVhdGUocmVxLmJvZHkpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih0ZWFtKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiVGVhbSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0ZWFtcyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwidGVhbSIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/team/index.js\n");

/***/ }),

/***/ "(api)/./utils/mongo.js":
/*!************************!*\
  !*** ./utils/mongo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://phigeh:pass123@cluster0.kthn1.mongodb.net/medicalTransparency?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2VBRU5DLFNBQVMsR0FBRyxDQUFDO0lBQzFCLEVBQUUsRUFBRUQsVUFBVSxDQUFDRSxXQUFXLEVBQUUsQ0FBQztRQUMzQixNQUFNO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQ0MsRUFBRSxHQUFHLEtBQUssQ0FBQ0osdURBQWdCLENBQUNNLHlHQUFxQixFQUFFLENBQUM7UUFDeERHLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO0lBQzFCLENBQUM7SUFFRFQsVUFBVSxDQUFDRSxXQUFXLEdBQUdDLEVBQUUsQ0FBQ08sV0FBVyxDQUFDLENBQUMsRUFBRUMsVUFBVTtBQUN2RCxDQUFDO0FBRUQsaUVBQWVWLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL01lZGljYWxUcmFuc3BhcmVuY3kvLi91dGlscy9tb25nby5qcz83ZDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/team/index.js"));
module.exports = __webpack_exports__;

})();