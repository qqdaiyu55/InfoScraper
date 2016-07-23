// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        var anchor = msg.information;
        var e = $(':contains("' + anchor + '")').last();

        var data = [];
        var st = e.offset().left;
        var tagName = e.prop('tagName');
        $(tagName).each(function() {
            if($(this).offset().left == st) {
                data.push($(this).text());
            }
        });

        sendResponse(data);
    }
});