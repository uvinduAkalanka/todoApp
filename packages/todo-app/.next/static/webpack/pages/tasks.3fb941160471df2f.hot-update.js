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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base-ui/src/components/Table */ \"../base-ui/src/components/Table/index.ts\");\n/* harmony import */ var _src_components_TaskComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/TaskComponent */ \"./src/components/TaskComponent.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ \"../../node_modules/@mui/material/Button/index.js\");\n// import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination } from 'base-ui/src/components/Table';\n// import { useTodoLogic } from '../src/components/TaskComponent';\n// import React from 'react';\n// const TasksPage = () => {\n//   const { data: todos, error, isLoading, isFetching, columnNames } = useTodoLogic();\n//   const [page, setPage] = React.useState(0);\n//   const [rowsPerPage, setRowsPerPage] = React.useState(10);\n//   // Debugging logs\n//   console.log('Column names:', columnNames);\n//   console.log('Todos data:', todos);\n//   if (isLoading) return <div>Loading...</div>;\n//   if (error) return <div>Error: {error.message}</div>;\n//   type Alignment = 'left' | 'center' | 'right' | 'justify' | 'inherit';\n//   const columns = columnNames.map((name) => {\n//     // No special formatting is applied here\n//     return {\n//       id: name,\n//       label: name.charAt(0).toUpperCase() + name.slice(1), // Capitalize the first letter for a cleaner display\n//       minWidth: 100,\n//       align: 'left' as Alignment,\n//     };\n//   });\n//   console.log('Columns generated:', columns);\n//   const handleChangePage = (event: unknown, newPage: number) => {\n//     setPage(newPage);\n//   };\n//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {\n//     setRowsPerPage(+event.target.value);\n//     setPage(0);\n//   };\n//   return (\n//     <div className=\"p-8 max-w-4xl mx-auto\">\n//       <h1 className=\"text-3xl font-bold mb-4\">Tasks</h1>\n//       <p className=\"text-lg mb-4\">Here is a list of your tasks:</p>\n//       <TableContainer className=\"max-h-[440px] overflow-auto\">\n//         <Table stickyHeader aria-label=\"sticky table\">\n//           <TableHead>\n//             <TableRow>\n//               {columns.map((column) => (\n//                 <TableCell\n//                   key={column.id}\n//                   align={column.align || 'left'}\n//                   className=\"sticky top-0 bg-white z-10\"\n//                   style={{ minWidth: column.minWidth }}\n//                 >\n//                   {column.label}\n//                 </TableCell>\n//               ))}\n//             </TableRow>\n//           </TableHead>\n//           <TableBody>\n//             {todos\n//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)\n//               .map((todo: any, index: number) => (\n//                 <TableRow hover role=\"checkbox\" tabIndex={-1} key={index}>\n//                   {columns.map((column) => {\n//                     const value = todo[column.id];\n//                     return (\n//                       <TableCell key={column.id} align={column.align}>\n//                         {value !== undefined ? value.toString() : ''}\n//                       </TableCell>\n//                     );\n//                   })}\n//                 </TableRow>\n//               ))}\n//           </TableBody>\n//         </Table>\n//       </TableContainer>\n//       <TablePagination\n//         rowsPerPageOptions={[10, 25, 100]}\n//         component=\"div\"\n//         count={todos.length}\n//         rowsPerPage={rowsPerPage}\n//         page={page}\n//         onPageChange={handleChangePage}\n//         onRowsPerPageChange={handleChangeRowsPerPage}\n//       />\n//     </div>\n//   );\n// };\n// export default TasksPage;\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import '../styles/task.css';\nconst TasksPage = ()=>{\n    _s();\n    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);\n    // const [rowsPerPage, setRowsPerPage] = React.useState(10);\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);\n    // const [isButtonDisabled, setIsButtonDisabled] = useState(false);\n    let isButtonDisabled = false;\n    // Fetch data using pagination\n    const { data: todos, total, error, isLoading, columnNames } = (0,_src_components_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.useTodoLogic)(page, rowsPerPage);\n    const [allTodos, setallTodos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Check if `todos` exists and has content before updating state\n        if (todos && todos.length) {\n            setallTodos((prevTodos)=>[\n                    ...prevTodos,\n                    ...todos\n                ]);\n        // console.log(\"todos.length < 10\",todos.length < 10);\n        // console.log(\"todos.length\",todos.length);\n        }\n    }, [\n        todos\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n        lineNumber: 145,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n        lineNumber: 146,\n        columnNumber: 21\n    }, undefined);\n    const columns = columnNames.map((name)=>({\n            id: name,\n            label: name.charAt(0).toUpperCase() + name.slice(1),\n            minWidth: 100,\n            align: \"left\"\n        }));\n    // setallTodos(prevTodos => [...prevTodos, ...todos]);\n    const handleChangePage = (event, newPage)=>{\n        console.log(\"newPage ,todos.length < 10\", newPage, todos.length < 10);\n        if (todos.length < 10) {\n            // setIsButtonDisabled(true);\n            isButtonDisabled = true;\n        // console.log(\"isButtonDisabled\", isButtonDisabled);\n        }\n        console.log(\"isButtonDisabled\", isButtonDisabled);\n        setPage(newPage);\n    };\n    const handleChangeRowsPerPage = (event)=>{\n        setRowsPerPage(+event.target.value);\n        setPage(0); // Reset to first page when rows per page changes\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8 max-w-4xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4\",\n                children: \"Tasks\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg mb-4\",\n                children: \"Here is a list of your tasks:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {\n                className: \"max-h-[440px] overflow-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                    stickyHeader: true,\n                    \"aria-label\": \"sticky table\",\n                    className: \"min-w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                                children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                        align: column.align || \"left\",\n                                        className: \"sticky top-0 bg-white z-10\",\n                                        style: {\n                                            minWidth: column.minWidth\n                                        },\n                                        children: column.label\n                                    }, column.id, false, {\n                                        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                        lineNumber: 188,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                lineNumber: 186,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                            lineNumber: 185,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableBody, {\n                            children: allTodos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                                    hover: true,\n                                    role: \"checkbox\",\n                                    tabIndex: -1,\n                                    children: columns.map((column)=>{\n                                        // {console.log(\"todo.................\",todo);\n                                        // }\n                                        // {\n                                        //   console.log(\"todos.................\", todos);\n                                        // }\n                                        const value = todo[column.id];\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                            align: column.align,\n                                            children: value !== undefined ? value.toString() : \"\"\n                                        }, column.id, false, {\n                                            fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                            lineNumber: 210,\n                                            columnNumber: 21\n                                        }, undefined);\n                                    })\n                                }, index, false, {\n                                    fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                                    lineNumber: 201,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                            lineNumber: 199,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                    lineNumber: 184,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(base_ui_src_components_Table__WEBPACK_IMPORTED_MODULE_1__.TablePagination //className=\"css-20bmp1-MuiSvgIcon-root\"\n            , {\n                rowsPerPageOptions: [\n                    10,\n                    25,\n                    100\n                ],\n                component: \"div\",\n                count: total,\n                rowsPerPage: rowsPerPage,\n                page: page,\n                onPageChange: handleChangePage,\n                onRowsPerPageChange: handleChangeRowsPerPage\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 220,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                type: \"button\",\n                disabled: isButtonDisabled,\n                onClick: ()=>{\n                    // console.log(\"Ltodos\", todos);\n                    // console.log(\"allTodos\", allTodos);\n                    console.log(\"isButtonDisabled\", isButtonDisabled);\n                    handleChangePage(null, page + 1);\n                },\n                className: \"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 -mt-4\",\n                children: \"Load More\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n                lineNumber: 230,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job assesment\\\\assessment\\\\assessment\\\\packages\\\\todo-app\\\\pages\\\\tasks.tsx\",\n        lineNumber: 179,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TasksPage, \"CpJiZ8S5589iQauu6618WKr9REw=\", false, function() {\n    return [\n        _src_components_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.useTodoLogic\n    ];\n});\n_c = TasksPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TasksPage); //--------------------------------------------------------withload more -------------------------\nvar _c;\n$RefreshReg$(_c, \"TasksPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQUNDLE1BQUs7b0NBQVdDLFVBQVUsQ0FBQzs4Q0FDeEM3QixRQUFRQyxHQUFHLENBQUMsQ0FBQ3NCO3dDQUNaLDhDQUE4Qzt3Q0FDOUMsSUFBSTt3Q0FDSixJQUFJO3dDQUNKLGtEQUFrRDt3Q0FDbEQsSUFBSTt3Q0FDSixNQUFNTixRQUFRUSxJQUFJLENBQUNGLE9BQU9wQixFQUFFLENBQUM7d0NBQzdCLHFCQUNFLDhEQUFDN0IsbUVBQVNBOzRDQUFpQm1DLE9BQU9jLE9BQU9kLEtBQUs7c0RBQzNDUSxVQUFVYSxZQUFZYixNQUFNYyxRQUFRLEtBQUs7MkNBRDVCUixPQUFPcEIsRUFBRTs7Ozs7b0NBSTdCO21DQWJpRHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBbUIzRCw4REFBQ2xELHlFQUFlQSxDQUFDLHdDQUF3Qzs7Z0JBQ3ZEd0Qsb0JBQW9CO29CQUFDO29CQUFJO29CQUFJO2lCQUFJO2dCQUNqQ0MsV0FBVTtnQkFDVkMsT0FBTzVDO2dCQUNQTCxhQUFhQTtnQkFDYkYsTUFBTUE7Z0JBQ05vRCxjQUFjekI7Z0JBQ2QwQixxQkFBcUJyQjs7Ozs7OzBCQUd2Qiw4REFBQ2xDLDREQUFNQTtnQkFDTHdELE1BQUs7Z0JBQ0xDLFVBQVVuRDtnQkFDVm9ELFNBQVM7b0JBQ1AsZ0NBQWdDO29CQUNoQyxxQ0FBcUM7b0JBQ3BDMUIsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQjNCO29CQUNqQ3VCLGlCQUFpQixNQUFNM0IsT0FBTztnQkFDaEM7Z0JBQ0FtQyxXQUFVOzBCQUNYOzs7Ozs7Ozs7Ozs7QUFLUDtHQXhJTXBDOztRQWNBTCx1RUFBWUE7OztLQWRaSztBQTBJTiwrREFBZUEsU0FBU0EsRUFBQyxDQUN6QixpR0FBaUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFza3MudHN4Pzk4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVGFibGUsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBUYWJsZUNlbGwsIFRhYmxlQm9keSwgVGFibGVQYWdpbmF0aW9uIH0gZnJvbSAnYmFzZS11aS9zcmMvY29tcG9uZW50cy9UYWJsZSc7XG4vLyBpbXBvcnQgeyB1c2VUb2RvTG9naWMgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50Jztcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGNvbnN0IFRhc2tzUGFnZSA9ICgpID0+IHtcbi8vICAgY29uc3QgeyBkYXRhOiB0b2RvcywgZXJyb3IsIGlzTG9hZGluZywgaXNGZXRjaGluZywgY29sdW1uTmFtZXMgfSA9IHVzZVRvZG9Mb2dpYygpO1xuLy8gICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbi8vICAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XG5cbi8vICAgLy8gRGVidWdnaW5nIGxvZ3Ncbi8vICAgY29uc29sZS5sb2coJ0NvbHVtbiBuYW1lczonLCBjb2x1bW5OYW1lcyk7XG4vLyAgIGNvbnNvbGUubG9nKCdUb2RvcyBkYXRhOicsIHRvZG9zKTtcblxuLy8gICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4vLyAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcblxuLy8gICB0eXBlIEFsaWdubWVudCA9ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB8ICdqdXN0aWZ5JyB8ICdpbmhlcml0JztcblxuLy8gICBjb25zdCBjb2x1bW5zID0gY29sdW1uTmFtZXMubWFwKChuYW1lKSA9PiB7XG4vLyAgICAgLy8gTm8gc3BlY2lhbCBmb3JtYXR0aW5nIGlzIGFwcGxpZWQgaGVyZVxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBpZDogbmFtZSxcbi8vICAgICAgIGxhYmVsOiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSwgLy8gQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIGZvciBhIGNsZWFuZXIgZGlzcGxheVxuLy8gICAgICAgbWluV2lkdGg6IDEwMCxcbi8vICAgICAgIGFsaWduOiAnbGVmdCcgYXMgQWxpZ25tZW50LFxuLy8gICAgIH07XG4vLyAgIH0pO1xuXG4vLyAgIGNvbnNvbGUubG9nKCdDb2x1bW5zIGdlbmVyYXRlZDonLCBjb2x1bW5zKTtcblxuLy8gICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50OiB1bmtub3duLCBuZXdQYWdlOiBudW1iZXIpID0+IHtcbi8vICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xuLy8gICB9O1xuXG4vLyAgIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuLy8gICAgIHNldFJvd3NQZXJQYWdlKCtldmVudC50YXJnZXQudmFsdWUpO1xuLy8gICAgIHNldFBhZ2UoMCk7XG4vLyAgIH07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBtYXgtdy00eGwgbXgtYXV0b1wiPlxuLy8gICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+VGFza3M8L2gxPlxuLy8gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+SGVyZSBpcyBhIGxpc3Qgb2YgeW91ciB0YXNrczo8L3A+XG5cbi8vICAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9XCJtYXgtaC1bNDQwcHhdIG92ZXJmbG93LWF1dG9cIj5cbi8vICAgICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBhcmlhLWxhYmVsPVwic3RpY2t5IHRhYmxlXCI+XG4vLyAgICAgICAgICAgPFRhYmxlSGVhZD5cbi8vICAgICAgICAgICAgIDxUYWJsZVJvdz5cbi8vICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IChcbi8vICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4vLyAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pZH1cbi8vICAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ24gfHwgJ2xlZnQnfVxuLy8gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIGJnLXdoaXRlIHotMTBcIlxuLy8gICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IGNvbHVtbi5taW5XaWR0aCB9fVxuLy8gICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ubGFiZWx9XG4vLyAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4vLyAgICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgICAgPC9UYWJsZVJvdz5cbi8vICAgICAgICAgICA8L1RhYmxlSGVhZD5cbi8vICAgICAgICAgICA8VGFibGVCb2R5PlxuLy8gICAgICAgICAgICAge3RvZG9zXG4vLyAgICAgICAgICAgICAgIC5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKVxuLy8gICAgICAgICAgICAgICAubWFwKCh0b2RvOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbi8vICAgICAgICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgcm9sZT1cImNoZWNrYm94XCIgdGFiSW5kZXg9ey0xfSBrZXk9e2luZGV4fT5cbi8vICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdG9kb1tjb2x1bW4uaWRdO1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2x1bW4uaWR9IGFsaWduPXtjb2x1bW4uYWxpZ259PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZS50b1N0cmluZygpIDogJyd9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4vLyAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgICB9KX1cbi8vICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICA8L1RhYmxlQm9keT5cbi8vICAgICAgICAgPC9UYWJsZT5cbi8vICAgICAgIDwvVGFibGVDb250YWluZXI+XG4vLyAgICAgICA8VGFibGVQYWdpbmF0aW9uXG4vLyAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyNSwgMTAwXX1cbi8vICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbi8vICAgICAgICAgY291bnQ9e3RvZG9zLmxlbmd0aH1cbi8vICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxuLy8gICAgICAgICBwYWdlPXtwYWdlfVxuLy8gICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XG4vLyAgICAgICAgIG9uUm93c1BlclBhZ2VDaGFuZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxuLy8gICAgICAgLz5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFRhc2tzUGFnZTtcblxuaW1wb3J0IHtcbiAgVGFibGUsXG4gIFRhYmxlQ29udGFpbmVyLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVQYWdpbmF0aW9uLFxufSBmcm9tIFwiYmFzZS11aS9zcmMvY29tcG9uZW50cy9UYWJsZVwiO1xuaW1wb3J0IHsgdXNlVG9kb0xvZ2ljIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1Rhc2tDb21wb25lbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuLy8gaW1wb3J0ICcuLi9zdHlsZXMvdGFzay5jc3MnO1xuXG5jb25zdCBUYXNrc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICAvLyBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gIC8vIGNvbnN0IFtpc0J1dHRvbkRpc2FibGVkLCBzZXRJc0J1dHRvbkRpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IGlzQnV0dG9uRGlzYWJsZWQ9ZmFsc2VcblxuICAvLyBGZXRjaCBkYXRhIHVzaW5nIHBhZ2luYXRpb25cbiAgY29uc3Qge1xuICAgIGRhdGE6IHRvZG9zLFxuICAgIHRvdGFsLFxuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBjb2x1bW5OYW1lcyxcbiAgfSA9IHVzZVRvZG9Mb2dpYyhwYWdlLCByb3dzUGVyUGFnZSk7XG4gIC8vIGNvbnNvbGUubG9nKFwidG9kb3NcIiwgdG9kb3MpO1xuXG4gIHR5cGUgVG9kbyA9IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRvZG86IHN0cmluZztcbiAgICBjb21wbGV0ZWQ6IGJvb2xlYW47XG4gICAgdXNlcklkOiBudW1iZXI7XG4gIH07XG5cbiAgY29uc3QgW2FsbFRvZG9zLCBzZXRhbGxUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIGB0b2Rvc2AgZXhpc3RzIGFuZCBoYXMgY29udGVudCBiZWZvcmUgdXBkYXRpbmcgc3RhdGVcbiAgICBpZiAodG9kb3MgJiYgdG9kb3MubGVuZ3RoKSB7XG4gICAgICBzZXRhbGxUb2RvcygocHJldlRvZG9zKSA9PiBbLi4ucHJldlRvZG9zLCAuLi50b2Rvc10pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0b2Rvcy5sZW5ndGggPCAxMFwiLHRvZG9zLmxlbmd0aCA8IDEwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidG9kb3MubGVuZ3RoXCIsdG9kb3MubGVuZ3RoKTtcbiAgICAgIFxuICAgIH1cbiAgfSwgW3RvZG9zXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuXG4gIHR5cGUgQWxpZ25tZW50ID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiIHwgXCJqdXN0aWZ5XCIgfCBcImluaGVyaXRcIjtcblxuICBjb25zdCBjb2x1bW5zID0gY29sdW1uTmFtZXMubWFwKChuYW1lKSA9PiAoe1xuICAgIGlkOiBuYW1lLFxuICAgIGxhYmVsOiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSxcbiAgICBtaW5XaWR0aDogMTAwLFxuICAgIGFsaWduOiBcImxlZnRcIiBhcyBBbGlnbm1lbnQsXG4gIH0pKTtcbiAgLy8gc2V0YWxsVG9kb3MocHJldlRvZG9zID0+IFsuLi5wcmV2VG9kb3MsIC4uLnRvZG9zXSk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQ6IHVua25vd24sIG5ld1BhZ2U6IG51bWJlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibmV3UGFnZSAsdG9kb3MubGVuZ3RoIDwgMTBcIiwgbmV3UGFnZSx0b2Rvcy5sZW5ndGggPCAxMCk7XG4gICAgXG4gICAgaWYgKHRvZG9zLmxlbmd0aCA8IDEwKSB7XG4gICAgICAvLyBzZXRJc0J1dHRvbkRpc2FibGVkKHRydWUpO1xuICAgICAgaXNCdXR0b25EaXNhYmxlZD10cnVlO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJpc0J1dHRvbkRpc2FibGVkXCIsIGlzQnV0dG9uRGlzYWJsZWQpO1xuICAgICAgXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiaXNCdXR0b25EaXNhYmxlZFwiLCBpc0J1dHRvbkRpc2FibGVkKTtcblxuICAgIHNldFBhZ2UobmV3UGFnZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldFJvd3NQZXJQYWdlKCtldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFBhZ2UoMCk7IC8vIFJlc2V0IHRvIGZpcnN0IHBhZ2Ugd2hlbiByb3dzIHBlciBwYWdlIGNoYW5nZXNcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5UYXNrczwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1iLTRcIj5IZXJlIGlzIGEgbGlzdCBvZiB5b3VyIHRhc2tzOjwvcD5cblxuICAgICAgPFRhYmxlQ29udGFpbmVyIGNsYXNzTmFtZT1cIm1heC1oLVs0NDBweF0gb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIGFyaWEtbGFiZWw9XCJzdGlja3kgdGFibGVcIiBjbGFzc05hbWU9XCJtaW4tdy1mdWxsXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IChcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pZH1cbiAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ24gfHwgXCJsZWZ0XCJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgYmctd2hpdGUgei0xMFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogY29sdW1uLm1pbldpZHRoIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7YWxsVG9kb3MubWFwKCh0b2RvOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGhvdmVyIHJvbGU9XCJjaGVja2JveFwiIHRhYkluZGV4PXstMX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIHtjb25zb2xlLmxvZyhcInRvZG8uLi4uLi4uLi4uLi4uLi4uLlwiLHRvZG8pO1xuICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInRvZG9zLi4uLi4uLi4uLi4uLi4uLi5cIiwgdG9kb3MpO1xuICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0b2RvW2NvbHVtbi5pZF07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGtleT17Y29sdW1uLmlkfSBhbGlnbj17Y29sdW1uLmFsaWdufT5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlLnRvU3RyaW5nKCkgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgICA8VGFibGVQYWdpbmF0aW9uIC8vY2xhc3NOYW1lPVwiY3NzLTIwYm1wMS1NdWlTdmdJY29uLXJvb3RcIlxuICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDEwMF19XG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgIGNvdW50PXt0b3RhbH0gLy8gVXNlIHRvdGFsIGZyb20gQVBJXG4gICAgICAgIHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cbiAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxuICAgICAgICBvblJvd3NQZXJQYWdlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cbiAgICAgIC8+XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGRpc2FibGVkPXtpc0J1dHRvbkRpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMdG9kb3NcIiwgdG9kb3MpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWxsVG9kb3NcIiwgYWxsVG9kb3MpO1xuICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzQnV0dG9uRGlzYWJsZWRcIiwgaXNCdXR0b25EaXNhYmxlZCk7XG4gICAgICAgICAgaGFuZGxlQ2hhbmdlUGFnZShudWxsLCBwYWdlICsgMSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtMzAwIC1tdC00XCJcbiAgICAgID5cbiAgICAgICAgTG9hZCBNb3JlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tzUGFnZTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS13aXRobG9hZCBtb3JlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiJdLCJuYW1lcyI6WyJUYWJsZSIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJUYWJsZUNlbGwiLCJUYWJsZUJvZHkiLCJUYWJsZVBhZ2luYXRpb24iLCJ1c2VUb2RvTG9naWMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwiVGFza3NQYWdlIiwicGFnZSIsInNldFBhZ2UiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaXNCdXR0b25EaXNhYmxlZCIsImRhdGEiLCJ0b2RvcyIsInRvdGFsIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJjb2x1bW5OYW1lcyIsImFsbFRvZG9zIiwic2V0YWxsVG9kb3MiLCJsZW5ndGgiLCJwcmV2VG9kb3MiLCJkaXYiLCJtZXNzYWdlIiwiY29sdW1ucyIsIm1hcCIsIm5hbWUiLCJpZCIsImxhYmVsIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm1pbldpZHRoIiwiYWxpZ24iLCJoYW5kbGVDaGFuZ2VQYWdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzdGlja3lIZWFkZXIiLCJhcmlhLWxhYmVsIiwiY29sdW1uIiwic3R5bGUiLCJ0b2RvIiwiaW5kZXgiLCJob3ZlciIsInJvbGUiLCJ0YWJJbmRleCIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwicm93c1BlclBhZ2VPcHRpb25zIiwiY29tcG9uZW50IiwiY291bnQiLCJvblBhZ2VDaGFuZ2UiLCJvblJvd3NQZXJQYWdlQ2hhbmdlIiwidHlwZSIsImRpc2FibGVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tasks.tsx\n"));

/***/ })

});