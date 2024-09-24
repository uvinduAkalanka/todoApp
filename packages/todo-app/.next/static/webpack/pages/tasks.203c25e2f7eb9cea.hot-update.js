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

/***/ "./src/components/TaskComponent.tsx":
/*!******************************************!*\
  !*** ./src/components/TaskComponent.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchTodos: function() { return /* binding */ fetchTodos; },\n/* harmony export */   useTodoLogic: function() { return /* binding */ useTodoLogic; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"../../node_modules/@tanstack/react-query/build/modern/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\nvar _s = $RefreshSig$();\n\n\n// Function to fetch all todos from the API (without pagination)\nconst fetchTodos = async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://dummyjson.com/todos\");\n    return response.data.todos;\n};\nconst useTodoLogic = ()=>{\n    _s();\n    const { data, error, isLoading, isFetching } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            \"todos\"\n        ],\n        queryFn: fetchTodos\n    });\n    const columnNames = Array.isArray(data) && data.length > 0 ? Object.keys(data[0]) : [];\n    return {\n        data: data || [],\n        error,\n        isLoading,\n        isFetching,\n        columnNames\n    };\n};\n_s(useTodoLogic, \"OH7FBUrOx2Ru35wnpqEzZWQRzmc=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n // import { useQuery } from '@tanstack/react-query';\n // import axios from 'axios';\n // // Define the Todo type\n // type Todo = {\n //   id: number;\n //   todo: string;\n //   completed: boolean;\n //   userId: number;\n // };\n // // Fetch Todos with pagination\n // const fetchTodos = async (page: number, rowsPerPage: number): Promise<{ todos: Todo[]; total: number }> => {\n //   const skip = page * rowsPerPage;\n //   const response = await axios.get(`https://dummyjson.com/todos?limit=${rowsPerPage}&skip=${skip}`);\n //   return { todos: response.data.todos, total: response.data.total };\n // };\n // // Custom hook for fetching todos with pagination\n // const useTodoLogic = (page: number, rowsPerPage: number) => {\n //   const { data, error, isLoading, isFetching } = useQuery({\n //     queryKey: ['todos', page, rowsPerPage], // Query key with page and rowsPerPage\n //     queryFn: () => fetchTodos(page, rowsPerPage), // Pass pagination parameters\n //     // keepPreviousData: true,  // Keep previous data while fetching new\n //   });\n //   // Extract column names from the data\n //   const columnNames = Array.isArray(data?.todos) && data.todos.length > 0 ? Object.keys(data.todos[0]) : [];\n //   return {\n //     data: data?.todos || [],\n //     total: data?.total || 0, // Track the total number of todos\n //     error,\n //     isLoading,\n //     isFetching,\n //     columnNames,\n //   };\n // };\n // export { useTodoLogic, fetchTodos };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXNrQ29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUN2QjtBQVMxQixnRUFBZ0U7QUFDaEUsTUFBTUUsYUFBYTtJQUNqQixNQUFNQyxXQUFXLE1BQU1GLGlEQUFTLENBQUM7SUFDakMsT0FBT0UsU0FBU0UsSUFBSSxDQUFDQyxLQUFLO0FBQzVCO0FBRUEsTUFBTUMsZUFBZTs7SUFDbkIsTUFBTSxFQUFFRixJQUFJLEVBQUVHLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBR1YsK0RBQVFBLENBQUM7UUFDdERXLFVBQVU7WUFBQztTQUFRO1FBQ25CQyxTQUFTVjtJQUNYO0lBRUEsTUFBTVcsY0FBY0MsTUFBTUMsT0FBTyxDQUFDVixTQUFTQSxLQUFLVyxNQUFNLEdBQUcsSUFBSUMsT0FBT0MsSUFBSSxDQUFDYixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUU7SUFFdEYsT0FBTztRQUNMQSxNQUFNQSxRQUFRLEVBQUU7UUFDaEJHO1FBQ0FDO1FBQ0FDO1FBQ0FHO0lBQ0Y7QUFDRjtHQWZNTjs7UUFDMkNQLDJEQUFRQTs7O0FBZ0JyQixDQUVwQyxvREFBb0Q7Q0FDcEQsNkJBQTZCO0NBRTdCLDBCQUEwQjtDQUMxQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLEtBQUs7Q0FFTCxpQ0FBaUM7Q0FDakMsK0dBQStHO0NBQy9HLHFDQUFxQztDQUNyQyx1R0FBdUc7Q0FDdkcsdUVBQXVFO0NBQ3ZFLEtBQUs7Q0FFTCxvREFBb0Q7Q0FDcEQsZ0VBQWdFO0NBQ2hFLDhEQUE4RDtDQUM5RCxxRkFBcUY7Q0FDckYsa0ZBQWtGO0NBQ2xGLDJFQUEyRTtDQUMzRSxRQUFRO0NBRVIsMENBQTBDO0NBQzFDLCtHQUErRztDQUUvRyxhQUFhO0NBQ2IsK0JBQStCO0NBQy9CLGtFQUFrRTtDQUNsRSxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsT0FBTztDQUNQLEtBQUs7Q0FFTCx1Q0FBdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFza0NvbXBvbmVudC50c3g/NjYxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG50eXBlIFRvZG8gPSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0b2RvOiBzdHJpbmc7XHJcbiAgY29tcGxldGVkOiBib29sZWFuO1xyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG59O1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gZmV0Y2ggYWxsIHRvZG9zIGZyb20gdGhlIEFQSSAod2l0aG91dCBwYWdpbmF0aW9uKVxyXG5jb25zdCBmZXRjaFRvZG9zID0gYXN5bmMgKCk6IFByb21pc2U8VG9kb1tdPiA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS90b2RvcycpO1xyXG4gIHJldHVybiByZXNwb25zZS5kYXRhLnRvZG9zO1xyXG59O1xyXG5cclxuY29uc3QgdXNlVG9kb0xvZ2ljID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZywgaXNGZXRjaGluZyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgcXVlcnlLZXk6IFsndG9kb3MnXSwgLy8gUXVlcnkga2V5XHJcbiAgICBxdWVyeUZuOiBmZXRjaFRvZG9zLCAvLyBGZXRjaCBmdW5jdGlvblxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb2x1bW5OYW1lcyA9IEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwID8gT2JqZWN0LmtleXMoZGF0YVswXSkgOiBbXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEgfHwgW10sXHJcbiAgICBlcnJvcixcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGlzRmV0Y2hpbmcsXHJcbiAgICBjb2x1bW5OYW1lcyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlVG9kb0xvZ2ljLCBmZXRjaFRvZG9zIH07XHJcblxyXG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vLyAvLyBEZWZpbmUgdGhlIFRvZG8gdHlwZVxyXG4vLyB0eXBlIFRvZG8gPSB7XHJcbi8vICAgaWQ6IG51bWJlcjtcclxuLy8gICB0b2RvOiBzdHJpbmc7XHJcbi8vICAgY29tcGxldGVkOiBib29sZWFuO1xyXG4vLyAgIHVzZXJJZDogbnVtYmVyO1xyXG4vLyB9O1xyXG5cclxuLy8gLy8gRmV0Y2ggVG9kb3Mgd2l0aCBwYWdpbmF0aW9uXHJcbi8vIGNvbnN0IGZldGNoVG9kb3MgPSBhc3luYyAocGFnZTogbnVtYmVyLCByb3dzUGVyUGFnZTogbnVtYmVyKTogUHJvbWlzZTx7IHRvZG9zOiBUb2RvW107IHRvdGFsOiBudW1iZXIgfT4gPT4ge1xyXG4vLyAgIGNvbnN0IHNraXAgPSBwYWdlICogcm93c1BlclBhZ2U7XHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vZHVtbXlqc29uLmNvbS90b2Rvcz9saW1pdD0ke3Jvd3NQZXJQYWdlfSZza2lwPSR7c2tpcH1gKTtcclxuLy8gICByZXR1cm4geyB0b2RvczogcmVzcG9uc2UuZGF0YS50b2RvcywgdG90YWw6IHJlc3BvbnNlLmRhdGEudG90YWwgfTtcclxuLy8gfTtcclxuXHJcbi8vIC8vIEN1c3RvbSBob29rIGZvciBmZXRjaGluZyB0b2RvcyB3aXRoIHBhZ2luYXRpb25cclxuLy8gY29uc3QgdXNlVG9kb0xvZ2ljID0gKHBhZ2U6IG51bWJlciwgcm93c1BlclBhZ2U6IG51bWJlcikgPT4ge1xyXG4vLyAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZywgaXNGZXRjaGluZyB9ID0gdXNlUXVlcnkoe1xyXG4vLyAgICAgcXVlcnlLZXk6IFsndG9kb3MnLCBwYWdlLCByb3dzUGVyUGFnZV0sIC8vIFF1ZXJ5IGtleSB3aXRoIHBhZ2UgYW5kIHJvd3NQZXJQYWdlXHJcbi8vICAgICBxdWVyeUZuOiAoKSA9PiBmZXRjaFRvZG9zKHBhZ2UsIHJvd3NQZXJQYWdlKSwgLy8gUGFzcyBwYWdpbmF0aW9uIHBhcmFtZXRlcnNcclxuLy8gICAgIC8vIGtlZXBQcmV2aW91c0RhdGE6IHRydWUsICAvLyBLZWVwIHByZXZpb3VzIGRhdGEgd2hpbGUgZmV0Y2hpbmcgbmV3XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIC8vIEV4dHJhY3QgY29sdW1uIG5hbWVzIGZyb20gdGhlIGRhdGFcclxuLy8gICBjb25zdCBjb2x1bW5OYW1lcyA9IEFycmF5LmlzQXJyYXkoZGF0YT8udG9kb3MpICYmIGRhdGEudG9kb3MubGVuZ3RoID4gMCA/IE9iamVjdC5rZXlzKGRhdGEudG9kb3NbMF0pIDogW107XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBkYXRhOiBkYXRhPy50b2RvcyB8fCBbXSxcclxuLy8gICAgIHRvdGFsOiBkYXRhPy50b3RhbCB8fCAwLCAvLyBUcmFjayB0aGUgdG90YWwgbnVtYmVyIG9mIHRvZG9zXHJcbi8vICAgICBlcnJvcixcclxuLy8gICAgIGlzTG9hZGluZyxcclxuLy8gICAgIGlzRmV0Y2hpbmcsXHJcbi8vICAgICBjb2x1bW5OYW1lcyxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IHsgdXNlVG9kb0xvZ2ljLCBmZXRjaFRvZG9zIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiYXhpb3MiLCJmZXRjaFRvZG9zIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwidG9kb3MiLCJ1c2VUb2RvTG9naWMiLCJlcnJvciIsImlzTG9hZGluZyIsImlzRmV0Y2hpbmciLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJjb2x1bW5OYW1lcyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TaskComponent.tsx\n"));

/***/ })

});