var App = App || {};

App.defineScope = function(namespace, moduleBody) {
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

        if ((index + 1) === partsLength) {
            parent[parts[index]] = moduleBody;
        }

        parent = parent[parts[index]];
    }
};