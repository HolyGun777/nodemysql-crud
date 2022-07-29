module.exports = {
    limit: function (ar, max) {
        var db = ar.slice(0, max);
        return db;
    }
}