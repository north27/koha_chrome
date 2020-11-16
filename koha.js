var q = decodeURIComponent(getQueryVariable('q')).replace(/\+/g,' ');

var newDiv = document.createElement("div");


newDiv.innerHTML = `
        <div style="width:454px;border:1px solid #241FC2; border-radius: 5px;margin-left: 1px;">
            <div style="width:454px;height:32px;background-color:#241FC2">
                <img style="width:32px;height:32px;margin-left:5px;float:left" src="data:image/png;base64,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" />
                <p style="padding:8px 0 0 45px;margin:0;color:white">Halcyon Library Search</p>
            </div>
            <div style="padding:10px">
                <p>Click to search the library catalogue for '${q}'. Note: The results will open in a new tab.</p>
                <form method="post" action="https://library.halcyonschool.com/s/" target="koha"><input type="hidden" name="filter" value="ALL"/><input type="hidden" name="search" value="${q}" />
                        <input type="submit" value="Search Koha" style="border:0;padding:5px 15px 5px 15px;font-size:14px;background-color:#241FC2;color:white" />
                </form>
            </div>
        </div>
`;

//newDiv.innerHTML = '<form method="post" action="https://library.halcyonschool.com/s/" target="koha"><input type="hidden" name="filter" value="ALL"/><input type="hidden" name="search" value="' + oq + '"/><input type="submit" value="Search Koha for \'' + oq + '\'" / style="margin:10px;font-size:18px;font-weight:bold;width:100%"></form>';
rhs.prepend(newDiv); 

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}