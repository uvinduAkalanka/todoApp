"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasks",{

/***/ "./pages/tasks.tsx":
/*!*************************!*\
  !*** ./pages/tasks.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base-ui/src/components/Table */ \"../base-ui/src/components/Table/index.ts\");\n/* harmony import */ var _src_components_TaskComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/TaskComponent */ \"./src/components/TaskComponent.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination } from 'base-ui/src/components/Table';\n// import { useTodoLogic } from '../src/components/TaskComponent';\n// import React from 'react';\n// const TasksPage = () => {\n//   const { data: todos, error, isLoading, isFetching, columnNames } = useTodoLogic();\n//   const [page, setPage] = React.useState(0);\n//   const [rowsPerPage, setRowsPerPage] = React.useState(10);\n//   // Debugging logs\n//   console.log('Column names:', columnNames);\n//   console.log('Todos data:', todos);\n//   if (isLoading) return <div>Loading...</div>;\n//   if (error) return <div>Error: {error.message}</div>;\n//   type Alignment = 'left' | 'center' | 'right' | 'justify' | 'inherit';\n//   const columns = columnNames.map((name) => {\n//     // No special formatting is applied here\n//     return {\n//       id: name,\n//       label: name.charAt(0).toUpperCase() + name.slice(1), // Capitalize the first letter for a cleaner display\n//       minWidth: 100,\n//       align: 'left' as Alignment,\n//     };\n//   });\n//   console.log('Columns generated:', columns);\n//   const handleChangePage = (event: unknown, newPage: number) => {\n//     setPage(newPage);\n//   };\n//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {\n//     setRowsPerPage(+event.target.value);\n//     setPage(0);\n//   };\n//   return (\n//     <div className=\"p-8 max-w-4xl mx-auto\">\n//       <h1 className=\"text-3xl font-bold mb-4\">Tasks</h1>\n//       <p className=\"text-lg mb-4\">Here is a list of your tasks:</p>\n//       <TableContainer className=\"max-h-[440px] overflow-auto\">\n//         <Table stickyHeader aria-label=\"sticky table\">\n//           <TableHead>\n//             <TableRow>\n//               {columns.map((column) => (\n//                 <TableCell\n//                   key={column.id}\n//                   align={column.align || 'left'}\n//                   className=\"sticky top-0 bg-white z-10\"\n//                   style={{ minWidth: column.minWidth }}\n//                 >\n//                   {column.label}\n//                 </TableCell>\n//               ))}\n//             </TableRow>\n//           </TableHead>\n//           <TableBody>\n//             {todos\n//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)\n//               .map((todo: any, index: number) => (\n//                 <TableRow hover role=\"checkbox\" tabIndex={-1} key={index}>\n//                   {columns.map((column) => {\n//                     const value = todo[column.id];\n//                     return (\n//                       <TableCell key={column.id} align={column.align}>\n//                         {value !== undefined ? value.toString() : ''}\n//                       </TableCell>\n//                     );\n//                   })}\n//                 </TableRow>\n//               ))}\n//           </TableBody>\n//         </Table>\n//       </TableContainer>\n//       <TablePagination\n//         rowsPerPageOptions={[10, 25, 100]}\n//         component=\"div\"\n//         count={todos.length}\n//         rowsPerPage={rowsPerPage}\n//         page={page}\n//         onPageChange={handleChangePage}\n//         onRowsPerPageChange={handleChangeRowsPerPage}\n//       />\n//     </div>\n//   );\n// };\n// export default TasksPage;\n\nvar _s = $RefreshSig$();\n\n\n\n// import Button from \"@mui/material/Button\";\n// import '../styles/task.css';\nconst TasksPage = ()=>{\n    _s();\n    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);\n    // const [rowsPerPage, setRowsPerPage] = React.useState(10);\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);\n    // Fetch data using pagination\n    const { data: todos, total, error, isLoading, columnNames } = (0,_src_components_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.useTodoLogic)(page, rowsPerPage);\n    const [allTodos, setallTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Check if `todos` exists and has content before updating state\n        if (todos && todos.length) {\n            setallTodos((prevTodos)=>[\n                    ...prevTodos,\n                    ...todos\n                ]);\n        }\n    }, [\n        todos\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n        lineNumber: 140,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n        lineNumber: 141,\n        columnNumber: 21\n    }, undefined);\n    const columns = columnNames.map((name)=>({\n            id: name,\n            label: name.charAt(0).toUpperCase() + name.slice(1),\n            minWidth: 100,\n            align: \"left\"\n        }));\n    // setallTodos(prevTodos => [...prevTodos, ...todos]);\n    const handleChangePage = (event, newPage)=>{\n        console.log(\"newPage\", newPage);\n        setPage(newPage);\n    };\n    const handleChangeRowsPerPage = (event)=>{\n        setRowsPerPage(+event.target.value);\n        setPage(0); // Reset to first page when rows per page changes\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8 max-w-4xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4\",\n                children: \"Tasks\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 168,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg mb-4\",\n                children: \"Here is a list of your tasks:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {\n                className: \"max-h-[440px] overflow-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                    stickyHeader: true,\n                    \"aria-label\": \"sticky table\",\n                    className: \"min-w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                                children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                        align: column.align || \"left\",\n                                        className: \"sticky top-0 bg-white z-10\",\n                                        style: {\n                                            minWidth: column.minWidth\n                                        },\n                                        children: column.label\n                                    }, column.id, false, {\n                                        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                        lineNumber: 176,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                lineNumber: 174,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                            lineNumber: 173,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableBody, {\n                            children: allTodos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                                    hover: true,\n                                    role: \"checkbox\",\n                                    tabIndex: -1,\n                                    children: columns.map((column)=>{\n                                        // {console.log(\"todo.................\",todo);\n                                        // }\n                                        // {\n                                        //   console.log(\"todos.................\", todos);\n                                        // }\n                                        const value = todo[column.id];\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                            align: column.align,\n                                            children: value !== undefined ? value.toString() : \"\"\n                                        }, column.id, false, {\n                                            fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                            lineNumber: 198,\n                                            columnNumber: 21\n                                        }, undefined);\n                                    })\n                                }, index, false, {\n                                    fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                    lineNumber: 189,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                            lineNumber: 187,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                    lineNumber: 172,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TablePagination //className=\"css-20bmp1-MuiSvgIcon-root\"\n            , {\n                rowsPerPageOptions: [\n                    10,\n                    25,\n                    100\n                ],\n                component: \"div\",\n                count: total,\n                rowsPerPage: rowsPerPage,\n                page: page,\n                onPageChange: handleChangePage,\n                onRowsPerPageChange: handleChangeRowsPerPage\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 208,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>{\n                    console.log(\"Ltodos\", todos);\n                    console.log(\"allTodos\", allTodos);\n                    handleChangePage(null, page + 1);\n                },\n                className: \"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 -mt-4\",\n                children: \"Load More\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 220,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n        lineNumber: 167,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TasksPage, \"CpJiZ8S5589iQauu6618WKr9REw=\", false, function() {\n    return [\n        _src_components_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.useTodoLogic\n    ];\n});\n_c = TasksPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TasksPage); //--------------------------------------------------------withload more -------------------------\nvar _c;\n$RefreshReg$(_c, \"TasksPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1FQUFTQTs0Q0FBaUJpQyxPQUFPYyxPQUFPZCxLQUFLO3NEQUMzQ1EsVUFBVWEsWUFBWWIsTUFBTWMsUUFBUSxLQUFLOzJDQUQ1QlIsT0FBT3BCLEVBQUU7Ozs7O29DQUk3QjttQ0FiaUR1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQW1CM0QsOERBQUNoRCx5RUFBZUEsQ0FBRSx3Q0FBd0M7O2dCQUN4RHNELG9CQUFvQjtvQkFBQztvQkFBSTtvQkFBSTtpQkFBSTtnQkFDakNDLFdBQVU7Z0JBQ1ZDLE9BQU81QztnQkFDUEosYUFBYUE7Z0JBQ2JGLE1BQU1BO2dCQUNObUQsY0FBY3pCO2dCQUNkMEIscUJBQXFCckI7Ozs7OzswQkFLdkIsOERBQUNzQjtnQkFDQ0MsTUFBSztnQkFDTEMsU0FBUztvQkFDUDFCLFFBQVFDLEdBQUcsQ0FBQyxVQUFVekI7b0JBQ3RCd0IsUUFBUUMsR0FBRyxDQUFDLFlBQVlwQjtvQkFDeEJnQixpQkFBaUIsTUFBTTFCLE9BQU87Z0JBQUU7Z0JBQ2xDa0MsV0FBVTswQkFHWDs7Ozs7Ozs7Ozs7O0FBS1A7R0E3SE1uQzs7UUFZQUosdUVBQVlBOzs7S0FaWkk7QUErSE4sK0RBQWVBLFNBQVNBLEVBQUMsQ0FDekIsaUdBQWlHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rhc2tzLnRzeD85ODhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IFRhYmxlLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLCBUYWJsZVJvdywgVGFibGVDZWxsLCBUYWJsZUJvZHksIFRhYmxlUGFnaW5hdGlvbiB9IGZyb20gJ2Jhc2UtdWkvc3JjL2NvbXBvbmVudHMvVGFibGUnO1xuLy8gaW1wb3J0IHsgdXNlVG9kb0xvZ2ljIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVGFza0NvbXBvbmVudCc7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBjb25zdCBUYXNrc1BhZ2UgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHsgZGF0YTogdG9kb3MsIGVycm9yLCBpc0xvYWRpbmcsIGlzRmV0Y2hpbmcsIGNvbHVtbk5hbWVzIH0gPSB1c2VUb2RvTG9naWMoKTtcbi8vICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4vLyAgIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMTApO1xuXG4vLyAgIC8vIERlYnVnZ2luZyBsb2dzXG4vLyAgIGNvbnNvbGUubG9nKCdDb2x1bW4gbmFtZXM6JywgY29sdW1uTmFtZXMpO1xuLy8gICBjb25zb2xlLmxvZygnVG9kb3MgZGF0YTonLCB0b2Rvcyk7XG5cbi8vICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuLy8gICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbi8vICAgdHlwZSBBbGlnbm1lbnQgPSAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgfCAnanVzdGlmeScgfCAnaW5oZXJpdCc7XG5cbi8vICAgY29uc3QgY29sdW1ucyA9IGNvbHVtbk5hbWVzLm1hcCgobmFtZSkgPT4ge1xuLy8gICAgIC8vIE5vIHNwZWNpYWwgZm9ybWF0dGluZyBpcyBhcHBsaWVkIGhlcmVcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgaWQ6IG5hbWUsXG4vLyAgICAgICBsYWJlbDogbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSksIC8vIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBmb3IgYSBjbGVhbmVyIGRpc3BsYXlcbi8vICAgICAgIG1pbldpZHRoOiAxMDAsXG4vLyAgICAgICBhbGlnbjogJ2xlZnQnIGFzIEFsaWdubWVudCxcbi8vICAgICB9O1xuLy8gICB9KTtcblxuLy8gICBjb25zb2xlLmxvZygnQ29sdW1ucyBnZW5lcmF0ZWQ6JywgY29sdW1ucyk7XG5cbi8vICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XG4vLyAgICAgc2V0UGFnZShuZXdQYWdlKTtcbi8vICAgfTtcblxuLy8gICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbi8vICAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcbi8vICAgICBzZXRQYWdlKDApO1xuLy8gICB9O1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggbWF4LXctNHhsIG14LWF1dG9cIj5cbi8vICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlRhc2tzPC9oMT5cbi8vICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPkhlcmUgaXMgYSBsaXN0IG9mIHlvdXIgdGFza3M6PC9wPlxuXG4vLyAgICAgICA8VGFibGVDb250YWluZXIgY2xhc3NOYW1lPVwibWF4LWgtWzQ0MHB4XSBvdmVyZmxvdy1hdXRvXCI+XG4vLyAgICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJlbD1cInN0aWNreSB0YWJsZVwiPlxuLy8gICAgICAgICAgIDxUYWJsZUhlYWQ+XG4vLyAgICAgICAgICAgICA8VGFibGVSb3c+XG4vLyAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuLy8gICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XG4vLyAgICAgICAgICAgICAgICAgICBhbGlnbj17Y29sdW1uLmFsaWduIHx8ICdsZWZ0J31cbi8vICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBiZy13aGl0ZSB6LTEwXCJcbi8vICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBjb2x1bW4ubWluV2lkdGggfX1cbi8vICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxuLy8gICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4vLyAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4vLyAgICAgICAgICAgPFRhYmxlQm9keT5cbi8vICAgICAgICAgICAgIHt0b2Rvc1xuLy8gICAgICAgICAgICAgICAuc2xpY2UocGFnZSAqIHJvd3NQZXJQYWdlLCBwYWdlICogcm93c1BlclBhZ2UgKyByb3dzUGVyUGFnZSlcbi8vICAgICAgICAgICAgICAgLm1hcCgodG9kbzogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGhvdmVyIHJvbGU9XCJjaGVja2JveFwiIHRhYkluZGV4PXstMX0ga2V5PXtpbmRleH0+XG4vLyAgICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvZG9bY29sdW1uLmlkXTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGtleT17Y29sdW1uLmlkfSBhbGlnbj17Y29sdW1uLmFsaWdufT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUudG9TdHJpbmcoKSA6ICcnfVxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuLy8gICAgICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgICAgfSl9XG4vLyAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbi8vICAgICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4vLyAgICAgICAgIDwvVGFibGU+XG4vLyAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuLy8gICAgICAgPFRhYmxlUGFnaW5hdGlvblxuLy8gICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDEwMF19XG4vLyAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4vLyAgICAgICAgIGNvdW50PXt0b2Rvcy5sZW5ndGh9XG4vLyAgICAgICAgIHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cbi8vICAgICAgICAgcGFnZT17cGFnZX1cbi8vICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxuLy8gICAgICAgICBvblJvd3NQZXJQYWdlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cbi8vICAgICAgIC8+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBUYXNrc1BhZ2U7XG5cbmltcG9ydCB7XG4gIFRhYmxlLFxuICBUYWJsZUNvbnRhaW5lcixcbiAgVGFibGVIZWFkLFxuICBUYWJsZVJvdyxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlUGFnaW5hdGlvbixcbn0gZnJvbSBcImJhc2UtdWkvc3JjL2NvbXBvbmVudHMvVGFibGVcIjtcbmltcG9ydCB7IHVzZVRvZG9Mb2dpYyB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbi8vIGltcG9ydCAnLi4vc3R5bGVzL3Rhc2suY3NzJztcblxuY29uc3QgVGFza3NQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gdXNlU3RhdGUoMTApO1xuXG4gIC8vIEZldGNoIGRhdGEgdXNpbmcgcGFnaW5hdGlvblxuICBjb25zdCB7XG4gICAgZGF0YTogdG9kb3MsXG4gICAgdG90YWwsXG4gICAgZXJyb3IsXG4gICAgaXNMb2FkaW5nLFxuICAgIGNvbHVtbk5hbWVzLFxuICB9ID0gdXNlVG9kb0xvZ2ljKHBhZ2UsIHJvd3NQZXJQYWdlKTtcbiAgLy8gY29uc29sZS5sb2coXCJ0b2Rvc1wiLCB0b2Rvcyk7XG5cbiAgdHlwZSBUb2RvID0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdG9kbzogc3RyaW5nO1xuICAgIGNvbXBsZXRlZDogYm9vbGVhbjtcbiAgICB1c2VySWQ6IG51bWJlcjtcbiAgfTtcblxuICBjb25zdCBbYWxsVG9kb3MsIHNldGFsbFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9bXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgYHRvZG9zYCBleGlzdHMgYW5kIGhhcyBjb250ZW50IGJlZm9yZSB1cGRhdGluZyBzdGF0ZVxuICAgIGlmICh0b2RvcyAmJiB0b2Rvcy5sZW5ndGgpIHtcbiAgICAgIHNldGFsbFRvZG9zKChwcmV2VG9kb3MpID0+IFsuLi5wcmV2VG9kb3MsIC4uLnRvZG9zXSk7XG4gICAgfVxuICB9LCBbdG9kb3NdKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbiAgdHlwZSBBbGlnbm1lbnQgPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCIgfCBcImp1c3RpZnlcIiB8IFwiaW5oZXJpdFwiO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBjb2x1bW5OYW1lcy5tYXAoKG5hbWUpID0+ICh7XG4gICAgaWQ6IG5hbWUsXG4gICAgbGFiZWw6IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpLFxuICAgIG1pbldpZHRoOiAxMDAsXG4gICAgYWxpZ246IFwibGVmdFwiIGFzIEFsaWdubWVudCxcbiAgfSkpO1xuICAvLyBzZXRhbGxUb2RvcyhwcmV2VG9kb3MgPT4gWy4uLnByZXZUb2RvcywgLi4udG9kb3NdKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJuZXdQYWdlXCIsIG5ld1BhZ2UpO1xuICAgIFxuICAgIHNldFBhZ2UobmV3UGFnZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuXG4gICAgc2V0Um93c1BlclBhZ2UoK2V2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZSgwKTsgLy8gUmVzZXQgdG8gZmlyc3QgcGFnZSB3aGVuIHJvd3MgcGVyIHBhZ2UgY2hhbmdlc1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTggbWF4LXctNHhsIG14LWF1dG9cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlRhc2tzPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPkhlcmUgaXMgYSBsaXN0IG9mIHlvdXIgdGFza3M6PC9wPlxuXG4gICAgICA8VGFibGVDb250YWluZXIgY2xhc3NOYW1lPVwibWF4LWgtWzQ0MHB4XSBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJlbD1cInN0aWNreSB0YWJsZVwiIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGxcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmlkfVxuICAgICAgICAgICAgICAgICAgYWxpZ249e2NvbHVtbi5hbGlnbiB8fCBcImxlZnRcIn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBiZy13aGl0ZSB6LTEwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBjb2x1bW4ubWluV2lkdGggfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHthbGxUb2Rvcy5tYXAoKHRvZG86IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgcm9sZT1cImNoZWNrYm94XCIgdGFiSW5kZXg9ey0xfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8ge2NvbnNvbGUubG9nKFwidG9kby4uLi4uLi4uLi4uLi4uLi4uXCIsdG9kbyk7XG4gICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwidG9kb3MuLi4uLi4uLi4uLi4uLi4uLlwiLCB0b2Rvcyk7XG4gICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvZG9bY29sdW1uLmlkXTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2x1bW4uaWR9IGFsaWduPXtjb2x1bW4uYWxpZ259PlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUudG9TdHJpbmcoKSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgIDxUYWJsZVBhZ2luYXRpb24gIC8vY2xhc3NOYW1lPVwiY3NzLTIwYm1wMS1NdWlTdmdJY29uLXJvb3RcIlxuICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDEwMF19XG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgIGNvdW50PXt0b3RhbH0gLy8gVXNlIHRvdGFsIGZyb20gQVBJXG4gICAgICAgIHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cbiAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxuICAgICAgICBvblJvd3NQZXJQYWdlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cblxuICAgICAgICBcbiAgICAgIC8+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkx0b2Rvc1wiLCB0b2Rvcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJhbGxUb2Rvc1wiLCBhbGxUb2Rvcyk7XG4gICAgICAgICAgaGFuZGxlQ2hhbmdlUGFnZShudWxsLCBwYWdlICsgMSl9fSAvLyBQYXNzIG51bGwgZm9yIGV2ZW50LCBpbmNyZW1lbnQgcGFnZVxuICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTMwMCAtbXQtNFwiXG4gICAgICAgIC8vIHtjb25zb2xlLmxvZyhcInRvZG9zXCIsIHRvZG9zKTtcbiAgICAgICAgLy8gfVxuICAgICAgPlxuICAgICAgICBMb2FkIE1vcmVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza3NQYWdlO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXdpdGhsb2FkIG1vcmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIl0sIm5hbWVzIjpbIlRhYmxlIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsIlRhYmxlQm9keSIsIlRhYmxlUGFnaW5hdGlvbiIsInVzZVRvZG9Mb2dpYyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUYXNrc1BhZ2UiLCJwYWdlIiwic2V0UGFnZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJkYXRhIiwidG9kb3MiLCJ0b3RhbCIsImVycm9yIiwiaXNMb2FkaW5nIiwiY29sdW1uTmFtZXMiLCJhbGxUb2RvcyIsInNldGFsbFRvZG9zIiwibGVuZ3RoIiwicHJldlRvZG9zIiwiZGl2IiwibWVzc2FnZSIsImNvbHVtbnMiLCJtYXAiLCJuYW1lIiwiaWQiLCJsYWJlbCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJtaW5XaWR0aCIsImFsaWduIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInRhcmdldCIsInZhbHVlIiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwic3RpY2t5SGVhZGVyIiwiYXJpYS1sYWJlbCIsImNvbHVtbiIsInN0eWxlIiwidG9kbyIsImluZGV4IiwiaG92ZXIiLCJyb2xlIiwidGFiSW5kZXgiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsInJvd3NQZXJQYWdlT3B0aW9ucyIsImNvbXBvbmVudCIsImNvdW50Iiwib25QYWdlQ2hhbmdlIiwib25Sb3dzUGVyUGFnZUNoYW5nZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tasks.tsx\n"));

/***/ })

});