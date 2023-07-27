"use strict";
exports.__esModule = true;
exports.HomePage = void 0;
var react_1 = require("react");
var github_api_1 = require("../store/github/github.api");
var debounce_1 = require("../hooks/debounce");
exports.HomePage = function () {
    var _a = react_1.useState(''), search = _a[0], setSearch = _a[1];
    var _b = react_1.useState(false), dropdown = _b[0], setDropdown = _b[1];
    var debounced = debounce_1.useDebounce(search);
    var _c = github_api_1.useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    }), isLoading = _c.isLoading, isError = _c.isError, data = _c.data;
    var _d = github_api_1.useLazyGetUserReposQuery(), fetchRepos = _d[0], _e = _d[1], areReposLoading = _e.isLoading, repos = _e.data;
    react_1.useEffect(function () {
        setDropdown(debounced.length > 3 && (data === null || data === void 0 ? void 0 : data.length) > 0);
    }, [debounced, data]);
    var clickHandler = function (username) {
        fetchRepos(username);
    };
    return (react_1["default"].createElement("div", { className: 'flex justify-center pt-10 mx-auto h-screen w-screen' },
        isError && react_1["default"].createElement("p", { className: 'text-center text-red-600' }, "Something went wrong..."),
        react_1["default"].createElement("div", { className: 'relative w-[650px]' },
            react_1["default"].createElement("input", { type: "text", className: 'border py-2 px-4 w-full h-[42px] mb-2', placeholder: 'Search for Github username...', value: search, onChange: function (e) { return setSearch(e.target.value); } }),
            dropdown && react_1["default"].createElement("ul", { className: 'list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white' },
                isLoading && react_1["default"].createElement("p", { className: 'text-center' }, "Loading..."), data === null || data === void 0 ? void 0 :
                data.map(function (user) { return (react_1["default"].createElement("li", { key: user.id, className: 'py-2 px-4 hover:bg-gray-500 hover:text-white cursor-pointer transition-colors ', onClick: function () { return clickHandler(user.login); } }, user.login)); })),
            react_1["default"].createElement("div", { className: "container" },
                areReposLoading && react_1["default"].createElement("p", { className: 'text-center' }, "Repos are loading..."), repos === null || repos === void 0 ? void 0 :
                repos.map(function (repo) { return (react_1["default"].createElement(RepoCart, { key: repo.id }, repo.url)); })))));
};
