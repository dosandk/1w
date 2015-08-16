var App = App || {};

App.defineScope = function(namespace) {
    var parts = namespace.split('.'),
        partsLength = parts.length,
        index = 0,
        parent = App;

    if (parts[0] === 'App') {
        parts = parts.slice(1);
    }

    for (index; index < partsLength; index++) {
        if (typeof parent[parts[index]] === 'undefined') {
            parent[parts[index]] = {};
        }

        parent = parent[parts[index]];
    }

    return parent;
};