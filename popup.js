 $(document).ready(function () {
     var myform = $('#myform'),
         iter = 0;
     $('#AddCol').click(function () {
         myform.find('tr').each(function(){
           var trow = $(this);
             if(trow.index() === 0){
                 trow.append('<td>Col'+iter+'</td>');
             }else{
                 trow.append('<td><input type="checkbox" name="cb'+iter+'"/></td>');
             }
         });
         iter += 1;
     });

     $('#ShowData').click(function () {
        $('#demodata').show();
        // var count = 3,
            // first_row = $('#Row1');
        // while (count-- > 0) first_row.clone().appendTo('#blacklistgrid');
     });

     $('#HideData').click(function() {
        $('#demodata').hide();
     });
 });

 document.addEventListener("DOMContentLoaded",function (){
    //Fetch all contents
    chrome.storage.local.get(null, function (obj){
        console.log(JSON.stringify(obj));
    });
    //Set some content from browser action
    chrome.storage.local.set({"anotherIdentifier":"Another awesome Content"},function (){
        console.log("Storage Succesful");
    });
});