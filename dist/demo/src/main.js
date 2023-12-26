"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
const index_js_1 = require("../../src/index.js");
react_dom_1.default.render(react_1.default.createElement(Demo, null), document.getElementById('root'));
function Demo() {
    const demoDefault = 'Iron.Man.2008.INTERNAL.REMASTERED.2160p.UHD.BluRay.X265-IAMABLE';
    const [result, setResult] = (0, react_1.useState)((0, index_js_1.filenameParse)(demoDefault));
    const [input, setInput] = (0, react_1.useState)(demoDefault);
    const [isTvShow, setTvShow] = (0, react_1.useState)(false);
    function handleChange(event) {
        setInput(event.target.value);
        setResult((0, index_js_1.filenameParse)(event.target.value, isTvShow));
    }
    function handleToggleTvShow(event) {
        setTvShow(event.target.checked);
        setResult((0, index_js_1.filenameParse)(input, event.target.checked));
    }
    return (react_1.default.createElement("div", { className: "py-6" },
        react_1.default.createElement("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-200 mb-3" }, "Demo"),
        react_1.default.createElement("div", { className: "mt-2 text-sm leading-5 text-gray-600" },
            react_1.default.createElement("div", { className: "mb-4" },
                react_1.default.createElement("label", { htmlFor: "title", className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" }, "Title of release"),
                react_1.default.createElement("div", { className: "mb-2" },
                    react_1.default.createElement("textarea", { id: "title", name: "title", className: "shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-md", placeholder: "Title", defaultValue: demoDefault, onChange: handleChange })),
                react_1.default.createElement("div", { className: "flex items-center justify-between mb-2" },
                    react_1.default.createElement("div", { className: "flex items-center" },
                        react_1.default.createElement("input", { id: "tvshow", name: "tvshow", type: "checkbox", className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded", onChange: handleToggleTvShow }),
                        react_1.default.createElement("label", { htmlFor: "tvshow", className: "ml-2 block text-sm text-gray-900 dark:text-gray-300" }, "Parse as TV Show")))),
            react_1.default.createElement("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" }, "Output"),
            react_1.default.createElement("pre", { className: "bg-gray-100 dark:bg-gray-900 rounded-lg p-2 md:py-4 text-gray-900 dark:text-gray-300 text-xs" },
                react_1.default.createElement("code", null, JSON.stringify(result, undefined, 2))))));
}
