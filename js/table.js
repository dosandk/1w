function Table(tableData, idOfElement, columnTitles, tableClass) {
	var tableSettings = {},
		element = document.getElementById(idOfElement) || null;

	function initialize() {
		tableSettings.titles = columnTitles || ['product', 'price, грн', 'category', 'discount, %', 'discount, грн'];
		tableSettings._id = idOfElement,
		tableSettings._className = tableClass || 'table table-striped table-bordered text-center';
		
	};

	this.get = function(attribute) {
		return column[attribute];
	};

	this.setTitles = function(value) {
		tableSettings.titles = value;

		return this;
	};

	this.setClassName = function(value) {
		tableSettings._className = value;

		return this;
	}

	this.tHead = function() {
		var thead = document.createElement('thead'),
			thRow = document.createElement('tr'),
			thData;

		for (var titleIndex = 0, titleLength = tableSettings.titles.length; titleIndex < titleLength; titleIndex++) {
			thData = document.createElement('th');
			thData.textContent = tableSettings.titles[titleIndex];
			thRow.appendChild(thData);
		}

		thead.appendChild(thRow);

		return thead;
	};

	this.render = function() {
		var table = document.createElement('table');

		table.setAttribute('class', tableSettings._className);
    	table.appendChild(this.tHead());
        table.appendChild(this.getTBody());

    	element.appendChild(table);

        return this;
	};

	this.getTBody = function () {
		var tBody = document.createElement('tbody');

		for (var tableDataIndex in tableData) {
			tBody.appendChild(this.getRow(tableData[tableDataIndex])); 
		}

		return tBody;
	};

	this.getRow = function (cellsData) {
		var tData,
		 	tRow = document.createElement('tr');

		for( var cellIndex in cellsData) {
			tData = document.createElement('td');
			tData.textContent = cellsData[cellIndex];
			tRow.appendChild(tData);
		}

		return tRow;
	}

	initialize();
	this.render();
}