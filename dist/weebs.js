/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var Weebs;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Engine/2D/Components/Circle.ts":
/*!********************************************!*\
  !*** ./src/Engine/2D/Components/Circle.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Circle = void 0;\nvar Component_1 = __webpack_require__(/*! ../../Component */ \"./src/Engine/Component.ts\");\nvar Circle = /** @class */ (function (_super) {\n    __extends(Circle, _super);\n    function Circle() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.fillColor = 'blue';\n        _this.strokeColor = 'white';\n        return _this;\n    }\n    /**\n     * On component creating\n     */\n    Circle.prototype.create = function () {\n        // log\n        // console.log('component create')\n    };\n    /**\n     * On component start\n     */\n    Circle.prototype.start = function () {\n        // log\n        // console.log('component start')\n    };\n    /**\n     * On component update\n     */\n    Circle.prototype.update = function () {\n    };\n    return Circle;\n}(Component_1.Component));\nexports.Circle = Circle;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/2D/Components/Circle.ts?");

/***/ }),

/***/ "./src/Engine/2D/Components/Rectangle.ts":
/*!***********************************************!*\
  !*** ./src/Engine/2D/Components/Rectangle.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Rectangle = void 0;\nvar Component_1 = __webpack_require__(/*! ../../Component */ \"./src/Engine/Component.ts\");\nvar Rectangle = /** @class */ (function (_super) {\n    __extends(Rectangle, _super);\n    function Rectangle() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.fillColor = 'blue';\n        _this.strokeColor = 'white';\n        return _this;\n    }\n    /**\n     * On component creating\n     */\n    Rectangle.prototype.create = function () {\n        // log\n        // console.log('component create')\n    };\n    /**\n     * On component start\n     */\n    Rectangle.prototype.start = function () {\n        // log\n        // console.log('component start')\n    };\n    /**\n     * On component update\n     */\n    Rectangle.prototype.update = function () {\n    };\n    return Rectangle;\n}(Component_1.Component));\nexports.Rectangle = Rectangle;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/2D/Components/Rectangle.ts?");

/***/ }),

/***/ "./src/Engine/2D/Components/Transform.ts":
/*!***********************************************!*\
  !*** ./src/Engine/2D/Components/Transform.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Transform = void 0;\nvar Vector2_1 = __webpack_require__(/*! ../../../lib/Vector2 */ \"./src/lib/Vector2.ts\");\nvar Component_1 = __webpack_require__(/*! ../../Component */ \"./src/Engine/Component.ts\");\nvar Transform = /** @class */ (function (_super) {\n    __extends(Transform, _super);\n    function Transform() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.position = new Vector2_1.Vector2(0, 0);\n        _this.scale = new Vector2_1.Vector2(50, 50);\n        return _this;\n    }\n    /**\n     * On component creating\n     */\n    Transform.prototype.create = function () {\n        // log\n        // console.log('component create')\n    };\n    /**\n     * On component start\n     */\n    Transform.prototype.start = function () {\n        // log\n        // console.log('component start')\n    };\n    /**\n     * On component update\n     */\n    Transform.prototype.update = function () {\n    };\n    return Transform;\n}(Component_1.Component));\nexports.Transform = Transform;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/2D/Components/Transform.ts?");

/***/ }),

/***/ "./src/Engine/2D/Components/index.ts":
/*!*******************************************!*\
  !*** ./src/Engine/2D/Components/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Transform = exports.Rectangle = exports.Circle = void 0;\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/Engine/2D/Components/Circle.ts\");\nObject.defineProperty(exports, \"Circle\", ({ enumerable: true, get: function () { return Circle_1.Circle; } }));\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/Engine/2D/Components/Rectangle.ts\");\nObject.defineProperty(exports, \"Rectangle\", ({ enumerable: true, get: function () { return Rectangle_1.Rectangle; } }));\nvar Transform_1 = __webpack_require__(/*! ./Transform */ \"./src/Engine/2D/Components/Transform.ts\");\nObject.defineProperty(exports, \"Transform\", ({ enumerable: true, get: function () { return Transform_1.Transform; } }));\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/2D/Components/index.ts?");

/***/ }),

/***/ "./src/Engine/2D/Systems/ShapeRender.ts":
/*!**********************************************!*\
  !*** ./src/Engine/2D/Systems/ShapeRender.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ShapeRender = void 0;\nvar System_1 = __webpack_require__(/*! ../../System */ \"./src/Engine/System.ts\");\nvar ShapeRender = /** @class */ (function (_super) {\n    __extends(ShapeRender, _super);\n    function ShapeRender() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    ShapeRender.prototype.execute = function (context) {\n        this.drawShapeRectangle(context);\n        this.drawShapeCircle(context);\n    };\n    ShapeRender.prototype.drawShapeRectangle = function (context) {\n        var _a, _b;\n        var canvas = context.canvas, scene = context.scene;\n        if (scene && scene.entityManager) {\n            var ctx = canvas.getContext(\"2d\");\n            var allEntityHasShape = scene.entityManager.getEntityHasComponent([\"Rectangle\", \"Transform\"]);\n            for (var i = 0; i < allEntityHasShape.length; i++) {\n                var entity = allEntityHasShape[i];\n                var rectangle = (_a = entity.getComponent(\"Rectangle\")) === null || _a === void 0 ? void 0 : _a.getState();\n                var transform = (_b = entity.getComponent(\"Transform\")) === null || _b === void 0 ? void 0 : _b.getState();\n                if (rectangle && transform && ctx) {\n                    var scale = transform.scale;\n                    var position = transform.position;\n                    ctx.beginPath();\n                    ctx.fillStyle = rectangle.fillColor;\n                    ctx.strokeStyle = rectangle.strokeColor;\n                    ctx.rect(position.x, position.y, scale.x, scale.y);\n                    ctx.fill();\n                    ctx.stroke();\n                }\n            }\n        }\n    };\n    ShapeRender.prototype.drawShapeCircle = function (context) {\n        var _a, _b;\n        var canvas = context.canvas, scene = context.scene;\n        var ctx = canvas.getContext(\"2d\");\n        var allEntityHasShape = scene.entityManager.getEntityHasComponent([\n            \"Circle\",\n            \"Transform\",\n        ]);\n        for (var i = 0; i < allEntityHasShape.length; i++) {\n            var entity = allEntityHasShape[i];\n            var circle = (_a = entity.getComponent(\"Circle\")) === null || _a === void 0 ? void 0 : _a.getState();\n            var transform = (_b = entity.getComponent(\"Transform\")) === null || _b === void 0 ? void 0 : _b.getState();\n            if (circle && transform && ctx) {\n                var scale = transform.scale;\n                var position = transform.position;\n                ctx.beginPath();\n                ctx.fillStyle = circle.fillColor;\n                ctx.strokeStyle = circle.strokeColor;\n                ctx.ellipse(position.x, position.y, scale.x, scale.y, 0, 0, 2 * Math.PI);\n                ctx.fill();\n                ctx.stroke();\n            }\n        }\n    };\n    return ShapeRender;\n}(System_1.System));\nexports.ShapeRender = ShapeRender;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/2D/Systems/ShapeRender.ts?");

/***/ }),

/***/ "./src/Engine/2D/Systems/SimpleFpsUI.ts":
/*!**********************************************!*\
  !*** ./src/Engine/2D/Systems/SimpleFpsUI.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SimpleFpsUI = void 0;\nvar System_1 = __webpack_require__(/*! ../../System */ \"./src/Engine/System.ts\");\nvar SimpleFpsUI = /** @class */ (function (_super) {\n    __extends(SimpleFpsUI, _super);\n    function SimpleFpsUI() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.lastSecond = 0;\n        _this.fpsInSecond = 0;\n        return _this;\n    }\n    SimpleFpsUI.prototype.execute = function (context) {\n        var canvas = context.canvas, time = context.time;\n        var ctx = canvas.getContext('2d');\n        var lastTime = Math.round(time.last / 1000);\n        if (this.lastSecond !== lastTime) {\n            this.fpsInSecond = time.fps;\n        }\n        if (ctx) {\n            ctx.font = '12px monospace';\n            ctx.fillStyle = '#fff';\n            ctx.fillText(\"fps: \" + this.fpsInSecond, 10, 20);\n        }\n        this.lastSecond = lastTime;\n    };\n    return SimpleFpsUI;\n}(System_1.System));\nexports.SimpleFpsUI = SimpleFpsUI;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/2D/Systems/SimpleFpsUI.ts?");

/***/ }),

/***/ "./src/Engine/2D/Systems/index.ts":
/*!****************************************!*\
  !*** ./src/Engine/2D/Systems/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SimpleFpsUI = exports.ShapeRender = void 0;\nvar ShapeRender_1 = __webpack_require__(/*! ./ShapeRender */ \"./src/Engine/2D/Systems/ShapeRender.ts\");\nObject.defineProperty(exports, \"ShapeRender\", ({ enumerable: true, get: function () { return ShapeRender_1.ShapeRender; } }));\nvar SimpleFpsUI_1 = __webpack_require__(/*! ./SimpleFpsUI */ \"./src/Engine/2D/Systems/SimpleFpsUI.ts\");\nObject.defineProperty(exports, \"SimpleFpsUI\", ({ enumerable: true, get: function () { return SimpleFpsUI_1.SimpleFpsUI; } }));\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/2D/Systems/index.ts?");

/***/ }),

/***/ "./src/Engine/2D/index.ts":
/*!********************************!*\
  !*** ./src/Engine/2D/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = exports.System = void 0;\nvar System = __webpack_require__(/*! ./Systems/index */ \"./src/Engine/2D/Systems/index.ts\");\nexports.System = System;\nvar Component = __webpack_require__(/*! ./Components/index */ \"./src/Engine/2D/Components/index.ts\");\nexports.Component = Component;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/2D/index.ts?");

/***/ }),

/***/ "./src/Engine/Component.ts":
/*!*********************************!*\
  !*** ./src/Engine/Component.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = exports.ComponentManager = void 0;\n/**\n * Create Component Manager\n * @class ComponentManager\n */\nvar ComponentManager = /** @class */ (function () {\n    function ComponentManager() {\n        /**\n         * Component List\n         */\n        this.components = [];\n    }\n    /**\n     * Add a new component\n     * @param  {Component} component\n     * @param  {String|undefined} id\n     */\n    ComponentManager.prototype.add = function (component, id) {\n        this.components.push(component);\n        if (id) {\n            component.setId(id);\n        }\n    };\n    /**\n     * Get a component by id\n     * @param  {String} id\n     * @returns {Component|undefined}\n     */\n    ComponentManager.prototype.get = function (id) {\n        return this.components.find(function (component) { return component.getId() === id; });\n    };\n    return ComponentManager;\n}());\nexports.ComponentManager = ComponentManager;\n/**\n * Create Component\n * @class Component\n */\nvar Component = /** @class */ (function () {\n    /**\n     * Create a component\n     */\n    function Component() {\n        this.id = this.constructor.name;\n    }\n    /**\n     * Set id component\n     * @param  {String} id\n     */\n    Component.prototype.setId = function (id) {\n        this.id = id;\n    };\n    /**\n     * Set id component\n     * @param  {String} id\n     */\n    Component.prototype.getId = function () {\n        return this.id;\n    };\n    /**\n     * Get state\n     * <T, K extends keyof T>\n     * @returns {Object\n     */\n    Component.prototype.getState = function () {\n        var states = {};\n        var a = Object.getOwnPropertyNames(this);\n        var $this = this;\n        for (var i = 0; i < a.length; i++) {\n            var b = a[i];\n            if (b) {\n                states[b] = $this[b];\n            }\n        }\n        return states;\n    };\n    /**\n     * create\n     */\n    Component.prototype.create = function (context, entity) { };\n    /**\n     * Start\n     */\n    Component.prototype.start = function (context, entity) { };\n    /**\n     * Update\n     */\n    Component.prototype.update = function (context, entity) { };\n    return Component;\n}());\nexports.Component = Component;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/Component.ts?");

/***/ }),

/***/ "./src/Engine/Entity.ts":
/*!******************************!*\
  !*** ./src/Engine/Entity.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Entity = exports.EntityManager = void 0;\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n/**\n * Create Entity Manager\n * @class EntityManager\n */\nvar EntityManager = /** @class */ (function () {\n    function EntityManager(game) {\n        this.game = game;\n        /**\n         * Entity List\n         */\n        this.entities = [];\n    }\n    /**\n     * Add a new entity\n     * @param  {Entity} entity\n     * @param  {String|undefined} id\n     */\n    EntityManager.prototype.add = function (entity, id) {\n        this.entities.push(entity);\n        entity.create(this.game.getContext());\n        if (id) {\n            entity.setId(id);\n        }\n        entity.start(this.game.getContext());\n    };\n    /**\n     * Get a entity by id\n     * @param  {String} id\n     * @returns {Entity|undefined}\n     */\n    EntityManager.prototype.get = function (id) {\n        return this.entities.find(function (entity) { return entity.getId() === id; });\n    };\n    /**\n     * Get a entity by id\n     * @param  {String} id\n     * @returns {Entity|undefined}\n     */\n    EntityManager.prototype.destroy = function (id) {\n        var entityId = (typeof id === 'string') ? id : id.getId();\n        var findIndex = this.entities.findIndex(function (entity) { return entity.getId() === entityId; });\n        this.entities.splice(findIndex, 1);\n        return findIndex;\n    };\n    /**\n     * Run lifecycle\n     * @param  {string} entityId\n     * @param  {string} method\n     * @param  {object} context\n     */\n    EntityManager.prototype.runLifeCycle = function (method, context) {\n        // console.log(this.entities.length)\n        for (var i = 0; i < this.entities.length; i++) {\n            var entity = this.entities[i];\n            if (entity) {\n                // entity\n                try {\n                    if (typeof entity.create === 'function' && method === 'create')\n                        entity.create(context);\n                    if (typeof entity.start === 'function' && method === 'start')\n                        entity.start(context);\n                    if (typeof entity.update === 'function' && method === 'update')\n                        entity.update(context);\n                }\n                catch (error) {\n                    console.warn(\"Error on \" + method + \" entity\", entity);\n                    console.error(error);\n                }\n                // component\n                for (var j = 0; j < entity.componentManager.components.length; j++) {\n                    var component = entity.componentManager.components[j];\n                    if (component) {\n                        try {\n                            if (typeof component.create === 'function' && method === 'create')\n                                component.create(context, entity);\n                            if (typeof component.start === 'function' && method === 'start')\n                                component.start(context, entity);\n                            if (typeof component.update === 'function' && method === 'update')\n                                component.update(context, entity);\n                        }\n                        catch (error) {\n                            console.warn(\"Error on \" + method + \" component\", component);\n                            console.error(error);\n                        }\n                    }\n                }\n            }\n        }\n    };\n    /**\n     * Get Entity has a component\n     * @param  {} component\n     */\n    EntityManager.prototype.getEntityHasComponent = function (component) {\n        var components = (typeof component === 'string') ? [component] : component;\n        return this.entities.filter(function (entity) {\n            var foundCount = 0;\n            for (var i = 0; i < components.length; i++) {\n                var component_1 = components[i];\n                if (entity && (entity.getComponent(component_1) !== undefined)) {\n                    foundCount++;\n                }\n            }\n            return (foundCount === components.length);\n        });\n    };\n    return EntityManager;\n}());\nexports.EntityManager = EntityManager;\n/**\n* Create Entity\n* @class Entity\n*/\nvar Entity = /** @class */ (function () {\n    /**\n     * Create a entity\n     */\n    function Entity() {\n        /**\n         * Component Manager\n         */\n        this.componentManager = new index_1.ComponentManager();\n        this.id = this.constructor.name;\n    }\n    /**\n     * Set id entity\n     * @param  {String} id\n     */\n    Entity.prototype.setId = function (id) {\n        this.id = id;\n    };\n    /**\n     * Set id entity\n     * @param  {String} id\n     */\n    Entity.prototype.getId = function () {\n        return this.id;\n    };\n    /**\n     * Add a new component\n     * @param  {String} id\n     */\n    Entity.prototype.addComponent = function (component, id) {\n        return this.componentManager.add(component, id);\n    };\n    /**\n     * Destroy\n     */\n    Entity.prototype.destoyEntity = function () {\n        console.log('destroyed');\n    };\n    /**\n     * Get component\n     * @param  {String} id\n     */\n    Entity.prototype.getComponent = function (id) {\n        return this.componentManager.get(id);\n    };\n    /**\n     * create\n     */\n    Entity.prototype.create = function (context) { };\n    /**\n     * Start\n     */\n    Entity.prototype.start = function (context) { };\n    /**\n     * Update\n     */\n    Entity.prototype.update = function (context) { };\n    return Entity;\n}());\nexports.Entity = Entity;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/Entity.ts?");

/***/ }),

/***/ "./src/Engine/Game2D.ts":
/*!******************************!*\
  !*** ./src/Engine/Game2D.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game2D = exports.Game2DDefaultOptions = void 0;\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/index.ts\");\nexports.Game2DDefaultOptions = {\n    resolution: {\n        width: 640,\n        height: 480\n    }\n};\n/**\n * Create Game 2D\n * @class Game2D\n */\nvar Game2D = /** @class */ (function () {\n    /**\n     * Create new 2D Game\n     * @param  {IGame2DOptions} options\n     */\n    function Game2D(gameOptions) {\n        if (gameOptions === void 0) { gameOptions = undefined; }\n        /**\n         * Systems\n         * @type {Array<System>}\n         */\n        this.systems = [];\n        /**\n         * Systems\n         * @type {Array<System>}\n         */\n        this.systemsRunning = [];\n        /**\n         * Time\n         * @type {IGame2DTime}\n         */\n        this.time = {\n            last: 0,\n            delta: 0,\n            fps: 0,\n            frame: 0\n        };\n        // Set options\n        this.options = (gameOptions) ? Object.assign(exports.Game2DDefaultOptions, gameOptions) : exports.Game2DDefaultOptions;\n        // \n        var canvas = document.createElement('canvas');\n        var context = canvas.getContext('2d') || undefined;\n        this.screen = {\n            dom: undefined,\n            canvas: canvas,\n            context: context,\n        };\n        // Create scene manager\n        this.sceneManager = new index_1.SceneManager();\n        // Create canvas\n        this.createCanvas();\n        // \n        this.activeScene = new index_1.Scene(this.getContext());\n    }\n    /**\n     * Creating virtual canvas\n     */\n    Game2D.prototype.createCanvas = function () {\n        this.screen.canvas.width = this.options.resolution.width;\n        this.screen.canvas.height = this.options.resolution.height;\n    };\n    /**\n     * Mount virtual canvas to screen for display game\n     * @param  {HTMLElement} screen\n     */\n    Game2D.prototype.mount = function (screen) {\n        var canvas = document.createElement('canvas');\n        this.screen.dom = screen;\n        if (this.screen.canvas) {\n            this.screen.dom.appendChild(this.screen.canvas);\n        }\n    };\n    /**\n     * Clear screen\n     */\n    Game2D.prototype.clearScreen = function () {\n        var context = this.screen.context;\n        if (context) {\n            context.clearRect(0, 0, this.options.resolution.width, this.options.resolution.height);\n        }\n    };\n    /**\n     * register a system\n     * @param  {System} systems\n     */\n    Game2D.prototype.registerSystem = function (systems) {\n        for (var i = 0; i < systems.length; i++) {\n            var system = systems[i];\n            this.systems.push(system);\n        }\n    };\n    /**\n     * Register scene\n     * @param  {Scene} scene\n     * @param  {} id=''\n     */\n    Game2D.prototype.registerScene = function (sceneClasses, id) {\n        for (var i = 0; i < sceneClasses.length; i++) {\n            var scene = sceneClasses[i];\n            if (typeof scene === 'function' && /^\\s*class\\s+/.test(scene.toString())) {\n                this.sceneManager.add((new scene(this.getContext())), id);\n            }\n        }\n    };\n    /**\n     * Get Content\n     */\n    Game2D.prototype.getContext = function () {\n        return {\n            game: this,\n            screen: this.screen,\n            canvas: this.screen.canvas,\n            time: this.time,\n            scene: this.activeScene\n        };\n    };\n    /**\n     * Start game\n     * @param  {Scene} scene\n     */\n    Game2D.prototype.start = function (sceneClass) {\n        var scene = this.sceneManager.get(sceneClass);\n        if (!scene)\n            return;\n        this.activeScene = scene;\n        // create system\n        for (var i = 0; i < this.systems.length; i++) {\n            this.systemsRunning[i] = new (this.systems[i])(this.getContext());\n        }\n        // create scene\n        if (scene) {\n            // preload scene\n            try {\n                if (typeof scene.preload === 'function') {\n                    scene.preload();\n                }\n            }\n            catch (error) {\n                console.warn(\"Error on preload scene\", scene);\n                console.error(error);\n            }\n            // create scene\n            try {\n                if (typeof scene.create === 'function') {\n                    scene.create();\n                }\n            }\n            catch (error) {\n                console.warn(\"Error on create scene\", scene);\n                console.error(error);\n            }\n            // start scene\n            try {\n                if (typeof scene.start === 'function')\n                    scene.start();\n            }\n            catch (error) {\n                console.warn(\"Error on start scene\", scene);\n                console.error(error);\n            }\n            // run game loop\n            requestAnimationFrame(this.gameLoop.bind(this));\n        }\n    };\n    /**\n     * Game Loop\n     */\n    Game2D.prototype.gameLoop = function () {\n        var now = performance.now();\n        this.time.delta = (now - this.time.last) / 1000;\n        this.time.fps = Math.round(1 / this.time.delta);\n        // update entities in scene\n        var scene = this.activeScene;\n        if (scene) {\n            // preload scene\n            try {\n                if (typeof scene.update === 'function')\n                    scene.update();\n            }\n            catch (error) {\n                console.warn(\"Error on update scene\", scene);\n                console.error(error);\n            }\n            scene.entityManager.runLifeCycle('update', this.getContext());\n        }\n        // clear screen\n        this.clearScreen();\n        // run systems\n        for (var i = 0; i < this.systems.length; i++) {\n            var system = (this.systemsRunning[i]);\n            system.execute(this.getContext());\n        }\n        // loop\n        requestAnimationFrame(this.gameLoop.bind(this));\n        this.time.last = performance.now();\n        this.time.frame++;\n    };\n    return Game2D;\n}());\nexports.Game2D = Game2D;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/Game2D.ts?");

/***/ }),

/***/ "./src/Engine/Scene.ts":
/*!*****************************!*\
  !*** ./src/Engine/Scene.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Scene = exports.SceneManager = void 0;\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n/**\n * Create Scene Manager\n * @class SceneManager\n */\nvar SceneManager = /** @class */ (function () {\n    function SceneManager() {\n        /**\n         * Scene List\n         */\n        this.scenes = [];\n    }\n    /**\n     * Add a new scene\n     * @param  {Scene} scene\n     * @param  {String|undefined} id\n     */\n    SceneManager.prototype.add = function (scene, id) {\n        this.scenes.push(scene);\n        if (id) {\n            scene.setId(id);\n        }\n    };\n    /**\n     * Get a scene by id\n     * @param  {String} id\n     * @returns Scene\n     */\n    SceneManager.prototype.get = function (id) {\n        if (typeof id === 'function') {\n            return this.scenes.find(function (scene) { return scene.getId() === id.name; });\n        }\n        else {\n            return this.scenes.find(function (scene) { return scene.getId() === id; });\n        }\n    };\n    return SceneManager;\n}());\nexports.SceneManager = SceneManager;\n/**\n * Create Scene\n * @class Scene\n */\nvar Scene = /** @class */ (function () {\n    /**\n     * Create a scene\n     */\n    function Scene(context) {\n        this.id = this.constructor.name;\n        this.entityManager = new index_1.EntityManager(context.game);\n    }\n    /**\n     * Set id scene\n     * @param  {String} id\n     */\n    Scene.prototype.setId = function (id) {\n        this.id = id;\n    };\n    /**\n     * Set id scene\n     * @param  {String} id\n     */\n    Scene.prototype.getId = function () {\n        return this.id;\n    };\n    /**\n     * Add a new entity\n     * @param  {String} id\n     */\n    Scene.prototype.addEntity = function (entity, id) {\n        return this.entityManager.add(entity, id);\n    };\n    /**\n     * Preload\n     */\n    Scene.prototype.preload = function () { };\n    /**\n     * Start\n     */\n    Scene.prototype.start = function () { };\n    /**\n     * Preload\n     */\n    Scene.prototype.create = function () { };\n    /**\n     * Update\n     */\n    Scene.prototype.update = function () { };\n    return Scene;\n}());\nexports.Scene = Scene;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/Scene.ts?");

/***/ }),

/***/ "./src/Engine/System.ts":
/*!******************************!*\
  !*** ./src/Engine/System.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.System = void 0;\nvar System = /** @class */ (function () {\n    function System(context) {\n    }\n    /**\n     * Execute\n     */\n    System.prototype.execute = function (context) { };\n    return System;\n}());\nexports.System = System;\n\n\n//# sourceURL=webpack://Weebs/./src/Engine/System.ts?");

/***/ }),

/***/ "./src/GameEngine2D.ts":
/*!*****************************!*\
  !*** ./src/GameEngine2D.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Engine2D = exports.Game2D = void 0;\nvar Game2D_1 = __webpack_require__(/*! ./Engine/Game2D */ \"./src/Engine/Game2D.ts\");\nObject.defineProperty(exports, \"Game2D\", ({ enumerable: true, get: function () { return Game2D_1.Game2D; } }));\nvar Engine2D = __webpack_require__(/*! ./Engine/2D/index */ \"./src/Engine/2D/index.ts\");\nexports.Engine2D = Engine2D;\n\n\n//# sourceURL=webpack://Weebs/./src/GameEngine2D.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Engine2D = exports.Vector2 = exports.System = exports.Component = exports.ComponentManager = exports.Entity = exports.EntityManager = exports.Scene = exports.SceneManager = exports.Game2D = void 0;\nvar GameEngine2D_1 = __webpack_require__(/*! ./GameEngine2D */ \"./src/GameEngine2D.ts\");\nObject.defineProperty(exports, \"Game2D\", ({ enumerable: true, get: function () { return GameEngine2D_1.Game2D; } }));\nObject.defineProperty(exports, \"Engine2D\", ({ enumerable: true, get: function () { return GameEngine2D_1.Engine2D; } }));\nvar Scene_1 = __webpack_require__(/*! ./Engine/Scene */ \"./src/Engine/Scene.ts\");\nObject.defineProperty(exports, \"SceneManager\", ({ enumerable: true, get: function () { return Scene_1.SceneManager; } }));\nObject.defineProperty(exports, \"Scene\", ({ enumerable: true, get: function () { return Scene_1.Scene; } }));\nvar Entity_1 = __webpack_require__(/*! ./Engine/Entity */ \"./src/Engine/Entity.ts\");\nObject.defineProperty(exports, \"EntityManager\", ({ enumerable: true, get: function () { return Entity_1.EntityManager; } }));\nObject.defineProperty(exports, \"Entity\", ({ enumerable: true, get: function () { return Entity_1.Entity; } }));\nvar Component_1 = __webpack_require__(/*! ./Engine/Component */ \"./src/Engine/Component.ts\");\nObject.defineProperty(exports, \"ComponentManager\", ({ enumerable: true, get: function () { return Component_1.ComponentManager; } }));\nObject.defineProperty(exports, \"Component\", ({ enumerable: true, get: function () { return Component_1.Component; } }));\nvar System_1 = __webpack_require__(/*! ./Engine/System */ \"./src/Engine/System.ts\");\nObject.defineProperty(exports, \"System\", ({ enumerable: true, get: function () { return System_1.System; } }));\nvar Vector2_1 = __webpack_require__(/*! ./lib/Vector2 */ \"./src/lib/Vector2.ts\");\nObject.defineProperty(exports, \"Vector2\", ({ enumerable: true, get: function () { return Vector2_1.Vector2; } }));\n\n\n//# sourceURL=webpack://Weebs/./src/index.ts?");

/***/ }),

/***/ "./src/lib/Vector2.ts":
/*!****************************!*\
  !*** ./src/lib/Vector2.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Vector2 = void 0;\nvar Vector2 = /** @class */ (function () {\n    function Vector2(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return Vector2;\n}());\nexports.Vector2 = Vector2;\n\n\n//# sourceURL=webpack://Weebs/./src/lib/Vector2.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	Weebs = __webpack_exports__;
/******/ 	
/******/ })()
;