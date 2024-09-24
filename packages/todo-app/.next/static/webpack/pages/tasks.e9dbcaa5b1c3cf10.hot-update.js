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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base-ui/src/components/Table */ \"../base-ui/src/components/Table/index.ts\");\n/* harmony import */ var _src_components_TaskComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/TaskComponent */ \"./src/components/TaskComponent.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination } from 'base-ui/src/components/Table';\n// import { useTodoLogic } from '../src/components/TaskComponent';\n// import React from 'react';\n// const TasksPage = () => {\n//   const { data: todos, error, isLoading, isFetching, columnNames } = useTodoLogic();\n//   const [page, setPage] = React.useState(0);\n//   const [rowsPerPage, setRowsPerPage] = React.useState(10);\n//   // Debugging logs\n//   console.log('Column names:', columnNames);\n//   console.log('Todos data:', todos);\n//   if (isLoading) return <div>Loading...</div>;\n//   if (error) return <div>Error: {error.message}</div>;\n//   type Alignment = 'left' | 'center' | 'right' | 'justify' | 'inherit';\n//   const columns = columnNames.map((name) => {\n//     // No special formatting is applied here\n//     return {\n//       id: name,\n//       label: name.charAt(0).toUpperCase() + name.slice(1), // Capitalize the first letter for a cleaner display\n//       minWidth: 100,\n//       align: 'left' as Alignment,\n//     };\n//   });\n//   console.log('Columns generated:', columns);\n//   const handleChangePage = (event: unknown, newPage: number) => {\n//     setPage(newPage);\n//   };\n//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {\n//     setRowsPerPage(+event.target.value);\n//     setPage(0);\n//   };\n//   return (\n//     <div className=\"p-8 max-w-4xl mx-auto\">\n//       <h1 className=\"text-3xl font-bold mb-4\">Tasks</h1>\n//       <p className=\"text-lg mb-4\">Here is a list of your tasks:</p>\n//       <TableContainer className=\"max-h-[440px] overflow-auto\">\n//         <Table stickyHeader aria-label=\"sticky table\">\n//           <TableHead>\n//             <TableRow>\n//               {columns.map((column) => (\n//                 <TableCell\n//                   key={column.id}\n//                   align={column.align || 'left'}\n//                   className=\"sticky top-0 bg-white z-10\"\n//                   style={{ minWidth: column.minWidth }}\n//                 >\n//                   {column.label}\n//                 </TableCell>\n//               ))}\n//             </TableRow>\n//           </TableHead>\n//           <TableBody>\n//             {todos\n//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)\n//               .map((todo: any, index: number) => (\n//                 <TableRow hover role=\"checkbox\" tabIndex={-1} key={index}>\n//                   {columns.map((column) => {\n//                     const value = todo[column.id];\n//                     return (\n//                       <TableCell key={column.id} align={column.align}>\n//                         {value !== undefined ? value.toString() : ''}\n//                       </TableCell>\n//                     );\n//                   })}\n//                 </TableRow>\n//               ))}\n//           </TableBody>\n//         </Table>\n//       </TableContainer>\n//       <TablePagination\n//         rowsPerPageOptions={[10, 25, 100]}\n//         component=\"div\"\n//         count={todos.length}\n//         rowsPerPage={rowsPerPage}\n//         page={page}\n//         onPageChange={handleChangePage}\n//         onRowsPerPageChange={handleChangeRowsPerPage}\n//       />\n//     </div>\n//   );\n// };\n// export default TasksPage;\n\nvar _s = $RefreshSig$();\n\n\n\n// import Button from \"@mui/material/Button\";\n// import '../styles/task.css';\nconst TasksPage = ()=>{\n    _s();\n    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);\n    // const [rowsPerPage, setRowsPerPage] = React.useState(10);\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);\n    const [isButtonDisabled, setIsButtonDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // Fetch data using pagination\n    const { data: todos, total, error, isLoading, columnNames } = (0,_src_components_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.useTodoLogic)(page, rowsPerPage);\n    const [allTodos, setallTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Check if `todos` exists and has content before updating state\n        if (todos && todos.length) {\n            setallTodos((prevTodos)=>[\n                    ...prevTodos,\n                    ...todos\n                ]);\n            console.log(\"todos.length < 10\", todos.length < 10);\n            if (todos.length < 10) {\n                setIsButtonDisabled(true);\n                console.log(\"isButtonDisabled\", isButtonDisabled);\n            }\n        }\n    }, [\n        todos\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n        lineNumber: 148,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n        lineNumber: 149,\n        columnNumber: 21\n    }, undefined);\n    const columns = columnNames.map((name)=>({\n            id: name,\n            label: name.charAt(0).toUpperCase() + name.slice(1),\n            minWidth: 100,\n            align: \"left\"\n        }));\n    // setallTodos(prevTodos => [...prevTodos, ...todos]);\n    const handleChangePage = (event, newPage)=>{\n        console.log(\"newPage\", newPage);\n        setPage(newPage);\n    };\n    const handleChangeRowsPerPage = (event)=>{\n        setRowsPerPage(+event.target.value);\n        setPage(0); // Reset to first page when rows per page changes\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8 max-w-4xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4\",\n                children: \"Tasks\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 175,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg mb-4\",\n                children: \"Here is a list of your tasks:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 176,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {\n                className: \"max-h-[440px] overflow-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                    stickyHeader: true,\n                    \"aria-label\": \"sticky table\",\n                    className: \"min-w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                                children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                        align: column.align || \"left\",\n                                        className: \"sticky top-0 bg-white z-10\",\n                                        style: {\n                                            minWidth: column.minWidth\n                                        },\n                                        children: column.label\n                                    }, column.id, false, {\n                                        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                        lineNumber: 183,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                            lineNumber: 180,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableBody, {\n                            children: allTodos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                                    hover: true,\n                                    role: \"checkbox\",\n                                    tabIndex: -1,\n                                    children: columns.map((column)=>{\n                                        // {console.log(\"todo.................\",todo);\n                                        // }\n                                        // {\n                                        //   console.log(\"todos.................\", todos);\n                                        // }\n                                        const value = todo[column.id];\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                            align: column.align,\n                                            children: value !== undefined ? value.toString() : \"\"\n                                        }, column.id, false, {\n                                            fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                            lineNumber: 205,\n                                            columnNumber: 21\n                                        }, undefined);\n                                    })\n                                }, index, false, {\n                                    fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                    lineNumber: 196,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                            lineNumber: 194,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                    lineNumber: 179,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TablePagination //className=\"css-20bmp1-MuiSvgIcon-root\"\n            , {\n                rowsPerPageOptions: [\n                    10,\n                    25,\n                    100\n                ],\n                component: \"div\",\n                count: total,\n                rowsPerPage: rowsPerPage,\n                page: page,\n                onPageChange: handleChangePage,\n                onRowsPerPageChange: handleChangeRowsPerPage\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 215,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>{\n                    console.log(\"Ltodos\", todos);\n                    console.log(\"allTodos\", allTodos);\n                    handleChangePage(null, page + 1);\n                },\n                className: \"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 -mt-4\",\n                // {console.log(\"todos\", todos);\n                // }\n                disabled: isButtonDisabled,\n                children: \"Load More\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 225,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n        lineNumber: 174,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TasksPage, \"eORhmWM+ODMaU0h1yJOUDKRFtWM=\", false, function() {\n    return [\n        _src_components_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.useTodoLogic\n    ];\n});\n_c = TasksPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TasksPage); //--------------------------------------------------------withload more -------------------------\nvar _c;\n$RefreshReg$(_c, \"TasksPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLE1BQUs7b0NBQVdDLFVBQVUsQ0FBQzs4Q0FDeEMzQixRQUFRQyxHQUFHLENBQUMsQ0FBQ29CO3dDQUNaLDhDQUE4Qzt3Q0FDOUMsSUFBSTt3Q0FDSixJQUFJO3dDQUNKLGtEQUFrRDt3Q0FDbEQsSUFBSTt3Q0FDSixNQUFNTixRQUFRUSxJQUFJLENBQUNGLE9BQU9sQixFQUFFLENBQUM7d0NBQzdCLHFCQUNFLDhEQUFDL0IsbUVBQVNBOzRDQUFpQnFDLE9BQU9ZLE9BQU9aLEtBQUs7c0RBQzNDTSxVQUFVYSxZQUFZYixNQUFNYyxRQUFRLEtBQUs7MkNBRDVCUixPQUFPbEIsRUFBRTs7Ozs7b0NBSTdCO21DQWJpRHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBbUIzRCw4REFBQ2xELHlFQUFlQSxDQUFDLHdDQUF3Qzs7Z0JBQ3ZEd0Qsb0JBQW9CO29CQUFDO29CQUFJO29CQUFJO2lCQUFJO2dCQUNqQ0MsV0FBVTtnQkFDVkMsT0FBTzVDO2dCQUNQTixhQUFhQTtnQkFDYkYsTUFBTUE7Z0JBQ05xRCxjQUFjdkI7Z0JBQ2R3QixxQkFBcUJyQjs7Ozs7OzBCQUd2Qiw4REFBQ3NCO2dCQUNDQyxNQUFLO2dCQUNMQyxTQUFTO29CQUNQekMsUUFBUUMsR0FBRyxDQUFDLFVBQVVWO29CQUN0QlMsUUFBUUMsR0FBRyxDQUFDLFlBQVlMO29CQUN4QmtCLGlCQUFpQixNQUFNOUIsT0FBTztnQkFDaEM7Z0JBQ0FvQyxXQUFVO2dCQUNWLGdDQUFnQztnQkFDaEMsSUFBSTtnQkFDSnNCLFVBQVV0RDswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7R0FwSU1MOztRQWFBSix1RUFBWUE7OztLQWJaSTtBQXNJTiwrREFBZUEsU0FBU0EsRUFBQyxDQUN6QixpR0FBaUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza3MudHN4Pzk4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVGFibGUsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBUYWJsZUNlbGwsIFRhYmxlQm9keSwgVGFibGVQYWdpbmF0aW9uIH0gZnJvbSAnYmFzZS11aS9zcmMvY29tcG9uZW50cy9UYWJsZSc7XG4vLyBpbXBvcnQgeyB1c2VUb2RvTG9naWMgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50Jztcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGNvbnN0IFRhc2tzUGFnZSA9ICgpID0+IHtcbi8vICAgY29uc3QgeyBkYXRhOiB0b2RvcywgZXJyb3IsIGlzTG9hZGluZywgaXNGZXRjaGluZywgY29sdW1uTmFtZXMgfSA9IHVzZVRvZG9Mb2dpYygpO1xuLy8gICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbi8vICAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XG5cbi8vICAgLy8gRGVidWdnaW5nIGxvZ3Ncbi8vICAgY29uc29sZS5sb2coJ0NvbHVtbiBuYW1lczonLCBjb2x1bW5OYW1lcyk7XG4vLyAgIGNvbnNvbGUubG9nKCdUb2RvcyBkYXRhOicsIHRvZG9zKTtcblxuLy8gICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4vLyAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcblxuLy8gICB0eXBlIEFsaWdubWVudCA9ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB8ICdqdXN0aWZ5JyB8ICdpbmhlcml0JztcblxuLy8gICBjb25zdCBjb2x1bW5zID0gY29sdW1uTmFtZXMubWFwKChuYW1lKSA9PiB7XG4vLyAgICAgLy8gTm8gc3BlY2lhbCBmb3JtYXR0aW5nIGlzIGFwcGxpZWQgaGVyZVxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBpZDogbmFtZSxcbi8vICAgICAgIGxhYmVsOiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSwgLy8gQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIGZvciBhIGNsZWFuZXIgZGlzcGxheVxuLy8gICAgICAgbWluV2lkdGg6IDEwMCxcbi8vICAgICAgIGFsaWduOiAnbGVmdCcgYXMgQWxpZ25tZW50LFxuLy8gICAgIH07XG4vLyAgIH0pO1xuXG4vLyAgIGNvbnNvbGUubG9nKCdDb2x1bW5zIGdlbmVyYXRlZDonLCBjb2x1bW5zKTtcblxuLy8gICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50OiB1bmtub3duLCBuZXdQYWdlOiBudW1iZXIpID0+IHtcbi8vICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xuLy8gICB9O1xuXG4vLyAgIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuLy8gICAgIHNldFJvd3NQZXJQYWdlKCtldmVudC50YXJnZXQudmFsdWUpO1xuLy8gICAgIHNldFBhZ2UoMCk7XG4vLyAgIH07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBtYXgtdy00eGwgbXgtYXV0b1wiPlxuLy8gICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+VGFza3M8L2gxPlxuLy8gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+SGVyZSBpcyBhIGxpc3Qgb2YgeW91ciB0YXNrczo8L3A+XG5cbi8vICAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9XCJtYXgtaC1bNDQwcHhdIG92ZXJmbG93LWF1dG9cIj5cbi8vICAgICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBhcmlhLWxhYmVsPVwic3RpY2t5IHRhYmxlXCI+XG4vLyAgICAgICAgICAgPFRhYmxlSGVhZD5cbi8vICAgICAgICAgICAgIDxUYWJsZVJvdz5cbi8vICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IChcbi8vICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4vLyAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pZH1cbi8vICAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ24gfHwgJ2xlZnQnfVxuLy8gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIGJnLXdoaXRlIHotMTBcIlxuLy8gICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IGNvbHVtbi5taW5XaWR0aCB9fVxuLy8gICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ubGFiZWx9XG4vLyAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4vLyAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgPC9UYWJsZVJvdz5cbi8vICAgICAgICAgICA8L1RhYmxlSGVhZD5cbi8vICAgICAgICAgICA8VGFibGVCb2R5PlxuLy8gICAgICAgICAgICAge3RvZG9zXG4vLyAgICAgICAgICAgICAgIC5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKVxuLy8gICAgICAgICAgICAgICAubWFwKCh0b2RvOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbi8vICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgcm9sZT1cImNoZWNrYm94XCIgdGFiSW5kZXg9ey0xfSBrZXk9e2luZGV4fT5cbi8vICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdG9kb1tjb2x1bW4uaWRdO1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2x1bW4uaWR9IGFsaWduPXtjb2x1bW4uYWxpZ259PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZS50b1N0cmluZygpIDogJyd9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4vLyAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICB9KX1cbi8vICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICA8L1RhYmxlQm9keT5cbi8vICAgICAgICAgPC9UYWJsZT5cbi8vICAgICAgIDwvVGFibGVDb250YWluZXI+XG4vLyAgICAgICA8VGFibGVQYWdpbmF0aW9uXG4vLyAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyNSwgMTAwXX1cbi8vICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbi8vICAgICAgICAgY291bnQ9e3RvZG9zLmxlbmd0aH1cbi8vICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuLy8gICAgICAgICBwYWdlPXtwYWdlfVxuLy8gICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XG4vLyAgICAgICAgIG9uUm93c1BlclBhZ2VDaGFuZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxuLy8gICAgICAgLz5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFRhc2tzUGFnZTtcblxuaW1wb3J0IHtcbiAgVGFibGUsXG4gIFRhYmxlQ29udGFpbmVyLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVQYWdpbmF0aW9uLFxufSBmcm9tIFwiYmFzZS11aS9zcmMvY29tcG9uZW50cy9UYWJsZVwiO1xuaW1wb3J0IHsgdXNlVG9kb0xvZ2ljIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1Rhc2tDb21wb25lbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuLy8gaW1wb3J0ICcuLi9zdHlsZXMvdGFzay5jc3MnO1xuXG5jb25zdCBUYXNrc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICAvLyBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IFtpc0J1dHRvbkRpc2FibGVkLCBzZXRJc0J1dHRvbkRpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBGZXRjaCBkYXRhIHVzaW5nIHBhZ2luYXRpb25cbiAgY29uc3Qge1xuICAgIGRhdGE6IHRvZG9zLFxuICAgIHRvdGFsLFxuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBjb2x1bW5OYW1lcyxcbiAgfSA9IHVzZVRvZG9Mb2dpYyhwYWdlLCByb3dzUGVyUGFnZSk7XG4gIC8vIGNvbnNvbGUubG9nKFwidG9kb3NcIiwgdG9kb3MpO1xuXG4gIHR5cGUgVG9kbyA9IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRvZG86IHN0cmluZztcbiAgICBjb21wbGV0ZWQ6IGJvb2xlYW47XG4gICAgdXNlcklkOiBudW1iZXI7XG4gIH07XG5cbiAgY29uc3QgW2FsbFRvZG9zLCBzZXRhbGxUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIGB0b2Rvc2AgZXhpc3RzIGFuZCBoYXMgY29udGVudCBiZWZvcmUgdXBkYXRpbmcgc3RhdGVcbiAgICBpZiAodG9kb3MgJiYgdG9kb3MubGVuZ3RoKSB7XG4gICAgICBzZXRhbGxUb2RvcygocHJldlRvZG9zKSA9PiBbLi4ucHJldlRvZG9zLCAuLi50b2Rvc10pO1xuICAgICAgY29uc29sZS5sb2coXCJ0b2Rvcy5sZW5ndGggPCAxMFwiLHRvZG9zLmxlbmd0aCA8IDEwKTtcbiAgICAgIFxuICAgICAgaWYgKHRvZG9zLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIHNldElzQnV0dG9uRGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXNCdXR0b25EaXNhYmxlZFwiLCBpc0J1dHRvbkRpc2FibGVkKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9LCBbdG9kb3NdKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbiAgdHlwZSBBbGlnbm1lbnQgPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCIgfCBcImp1c3RpZnlcIiB8IFwiaW5oZXJpdFwiO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBjb2x1bW5OYW1lcy5tYXAoKG5hbWUpID0+ICh7XG4gICAgaWQ6IG5hbWUsXG4gICAgbGFiZWw6IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpLFxuICAgIG1pbldpZHRoOiAxMDAsXG4gICAgYWxpZ246IFwibGVmdFwiIGFzIEFsaWdubWVudCxcbiAgfSkpO1xuICAvLyBzZXRhbGxUb2RvcyhwcmV2VG9kb3MgPT4gWy4uLnByZXZUb2RvcywgLi4udG9kb3NdKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJuZXdQYWdlXCIsIG5ld1BhZ2UpO1xuXG4gICAgc2V0UGFnZShuZXdQYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0Um93c1BlclBhZ2UoK2V2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZSgwKTsgLy8gUmVzZXQgdG8gZmlyc3QgcGFnZSB3aGVuIHJvd3MgcGVyIHBhZ2UgY2hhbmdlc1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTggbWF4LXctNHhsIG14LWF1dG9cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlRhc2tzPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPkhlcmUgaXMgYSBsaXN0IG9mIHlvdXIgdGFza3M6PC9wPlxuXG4gICAgICA8VGFibGVDb250YWluZXIgY2xhc3NOYW1lPVwibWF4LWgtWzQ0MHB4XSBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJlbD1cInN0aWNreSB0YWJsZVwiIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGxcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmlkfVxuICAgICAgICAgICAgICAgICAgYWxpZ249e2NvbHVtbi5hbGlnbiB8fCBcImxlZnRcIn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBiZy13aGl0ZSB6LTEwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBjb2x1bW4ubWluV2lkdGggfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHthbGxUb2Rvcy5tYXAoKHRvZG86IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgcm9sZT1cImNoZWNrYm94XCIgdGFiSW5kZXg9ey0xfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8ge2NvbnNvbGUubG9nKFwidG9kby4uLi4uLi4uLi4uLi4uLi4uXCIsdG9kbyk7XG4gICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwidG9kb3MuLi4uLi4uLi4uLi4uLi4uLlwiLCB0b2Rvcyk7XG4gICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvZG9bY29sdW1uLmlkXTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2x1bW4uaWR9IGFsaWduPXtjb2x1bW4uYWxpZ259PlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUudG9TdHJpbmcoKSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgIDxUYWJsZVBhZ2luYXRpb24gLy9jbGFzc05hbWU9XCJjc3MtMjBibXAxLU11aVN2Z0ljb24tcm9vdFwiXG4gICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyNSwgMTAwXX1cbiAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgY291bnQ9e3RvdGFsfSAvLyBVc2UgdG90YWwgZnJvbSBBUElcbiAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XG4gICAgICAgIG9uUm93c1BlclBhZ2VDaGFuZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxuICAgICAgLz5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTHRvZG9zXCIsIHRvZG9zKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbFRvZG9zXCIsIGFsbFRvZG9zKTtcbiAgICAgICAgICBoYW5kbGVDaGFuZ2VQYWdlKG51bGwsIHBhZ2UgKyAxKTtcbiAgICAgICAgfX0gLy8gUGFzcyBudWxsIGZvciBldmVudCwgaW5jcmVtZW50IHBhZ2VcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0zMDAgLW10LTRcIlxuICAgICAgICAvLyB7Y29uc29sZS5sb2coXCJ0b2Rvc1wiLCB0b2Rvcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgZGlzYWJsZWQ9e2lzQnV0dG9uRGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIExvYWQgTW9yZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrc1BhZ2U7XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0td2l0aGxvYWQgbW9yZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iXSwibmFtZXMiOlsiVGFibGUiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiVGFibGVCb2R5IiwiVGFibGVQYWdpbmF0aW9uIiwidXNlVG9kb0xvZ2ljIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRhc2tzUGFnZSIsInBhZ2UiLCJzZXRQYWdlIiwicm93c1BlclBhZ2UiLCJzZXRSb3dzUGVyUGFnZSIsImlzQnV0dG9uRGlzYWJsZWQiLCJzZXRJc0J1dHRvbkRpc2FibGVkIiwiZGF0YSIsInRvZG9zIiwidG90YWwiLCJlcnJvciIsImlzTG9hZGluZyIsImNvbHVtbk5hbWVzIiwiYWxsVG9kb3MiLCJzZXRhbGxUb2RvcyIsImxlbmd0aCIsInByZXZUb2RvcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtZXNzYWdlIiwiY29sdW1ucyIsIm1hcCIsIm5hbWUiLCJpZCIsImxhYmVsIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm1pbldpZHRoIiwiYWxpZ24iLCJoYW5kbGVDaGFuZ2VQYWdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImgxIiwicCIsInN0aWNreUhlYWRlciIsImFyaWEtbGFiZWwiLCJjb2x1bW4iLCJzdHlsZSIsInRvZG8iLCJpbmRleCIsImhvdmVyIiwicm9sZSIsInRhYkluZGV4IiwidW5kZWZpbmVkIiwidG9TdHJpbmciLCJyb3dzUGVyUGFnZU9wdGlvbnMiLCJjb21wb25lbnQiLCJjb3VudCIsIm9uUGFnZUNoYW5nZSIsIm9uUm93c1BlclBhZ2VDaGFuZ2UiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tasks.tsx\n"));

/***/ })

});