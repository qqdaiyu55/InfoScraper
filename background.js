var selection = chrome.contextMenus.create({
	"title": "infoScraper",
	"contexts": ["all"],
	"onclick": getClickHandler
}); 

var popup;
var dataObject;
var maxLenRow = 0;
var cnt = 0;

function getClickHandler(info, tab) { 
	chrome.tabs.sendMessage(tab.id, {text: 'report_back', information: info.selectionText}, function(data) {
		if(typeof(data) == 'undefined') {
			alert('Please select text element.');
		}
		else {
			if (typeof(popup) == 'undefined' || popup.closed) {
				cnt = 0;
				dataObject = [data];
				popup = window.open('window/index.html', '', 'width=800,height=600');
			}
			else {
				cnt++;
				dataObject.push(data);
				popup.postMessage('Data is changed!', '*');
			}

			if(data.length > dataObject[maxLenRow].length)
				maxLenRow = cnt;
		}
	});
}


function getData() {
	// transpose dataObject
	var dataObject_tp = invertArray(dataObject);
	return JSON.stringify(dataObject_tp);
}


function invertArray(array){
    var newArray = array[maxLenRow].map(function(col, i) { 
  		return array.map(function(row) { 
    		return row[i];
  		})
	});

    return newArray;
}