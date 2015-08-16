var utils = App.defineScope('utils');

utils.ajax = function(callbackSuccess) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', './templates/products-list.tpl', true);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            if (typeof callbackSuccess === 'function') {
                callbackSuccess(xhr.responseText);
            }
        }

    };
};
