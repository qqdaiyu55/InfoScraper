// data update
window.addEventListener("message", function(event) {
    hot.loadData(JSON.parse(window.opener.getData()));
});


// export to csv file
document.getElementById('export-csv').addEventListener('click', function() {
    // handsontable2csv.download(hot, "example.csv");
    var exportPlugin = hot.getPlugin('exportFile');
    exportPlugin.downloadFile('csv', {filename: 'example'});
});