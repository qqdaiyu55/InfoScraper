var dataObject = JSON.parse(window.opener.getData());
var hotElement = document.querySelector('#hot');
var hotElementContainer = hotElement.parentNode;
var searchResultCount = 0;
var searchResultCounter = function (instance, row, col, value, result) {  
    Handsontable.Search.DEFAULT_CALLBACK.apply(this, arguments);  
    if (result) {
        searchResultCount++;
    }
};
var hotSettings = {
    data: dataObject,
    stretchH: 'all',
    width: 800,
    autoWrapRow: true,
    height: 400,    
    // maxRows: 22,
    rowHeaders: true,
    colHeaders: true,
    // fixedRowsTop: 2,
    // fixedColumnsLeft: 3,
    columnSorting: true,
    sortIndicator: true,
    autoColumnSize: {
        samplingRatio: 23
    },
    mergeCells: true,
    manualRowResize: true,
    manualColumnResize: true,
    manualRowMove: true,
    manualColumnMove: true,
    contextMenu: true,
    // fixedRowsBottom: 2,
    dropdownMenu: true,
    filters: true,
    search: {
        callback: searchResultCounter
    }
};
var hot = new Handsontable(hotElement, hotSettings);


// search: custom callback
var searchFiled = document.getElementById('searchField');
var resultCount = document.getElementById('resultCount');

Handsontable.Dom.addEvent(searchFiled, 'keyup', function (event) {
  searchResultCount = 0;
  var queryResult = hot.search.query(this.value);
  // console.log(queryResult);
  resultCount.innerText = searchResultCount.toString();
  hot.render();
});
