const get = (src, path) => {
    return path.split(".").reduce(function (obj, key) {
        return obj[key];
    }, src);
}