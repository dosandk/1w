App.defineScope('utils.ajax', function(dataObj) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', dataObj.url, true);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        }
        else {
            if (typeof dataObj.callbackSuccess === 'function') {
                dataObj.callbackSuccess(xhr.responseText);
            }
        }
    };
});