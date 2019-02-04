var q = decodeURIComponent(getQueryVariable('q')).replace(/\+/g,' ');

var newDiv = document.createElement("div");


newDiv.innerHTML = `
        <div style="width:454px;border:1px solid #3176BC; border-radius: 5px;margin-left: 1px;">
            <div style="width:454px;height:32px;background-color:#3176BC">
                <img style="width:32px;height:32px;margin-left:5px;float:left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAIeUlEQVR4nO2de6wV1RXGv6X4AKmCL8QoaZManxXFB1VLwSAaqlgRG7U+6iOo0VQx1PiI0TSlrRqx2gZrEyP9w9TEaqgaxaipCNaaqC1YRePblkStLfh+62cWrCOT2efIueecmTOX+X7Jzb2z9+w9a++9Zs/ae9aaCyGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIbqG5HSSW64PPUnyKJKnJBkVYIMqChVMBLB5kip6SpUVYDMA2yapg5ORALaoouRVVoApAI5OUgcnU+NHtAPJ3bmGZwd7h5HciOTbJD+tok1TiRmA5LRcUuN4Z5LfyZy3OclDkwoqBMmJLmdGou+FLTMEwA/X0e7Sqcoj4PTc8eGZv7OPAb+DfpyUrhbTQ84GR7ZoS7N2l05VFGA0ScOau2IrAAdm8o7J/L0JgGFJ6WqxPYCNMxIdkfn7UJJbRDu973fot+RDkpSSIbkTgP0BnEXyNQDjc4q5B8nTAKwEMAHAZJIbmtnn/ZY9j8sF4BAA/yG5BIAr87czp7liXEDy8VCUfbz9ZvZ8UllJVGEGaDwX9wbwSjwz8+wfed+N6bXZOVVgQiz5xoe8+zWRaWLk7ZVrfz0huTgs/r+THE7yQ6Y8QXITku9FzjVV7CyXK+R7N+R9ImnJmvZtRvKROF6cVFQXSG5N8vPoCP99VtJda5mZ+fvFKnYRyRdayJvnzFy7t0kqqwMkf53rmJVJV7XOO6ZKXeTyrEPeLKtyx1ckFZZEv22AL3LHI5MzWudZckZ/ycvzdW0ZkTvum0HbbwV4M0kpp2wRDMq2VPldgCiBfitAN8ZP1QynQdkWKUDvkAJ0wPI+lVVbgn4rwJ5JiiiVvikASd8KraSfXJ3o5wxwLYBFSWo9md54G1o2fVGA8JB9H8CdSWY9OQjAT/rR8tIVgOR2AOYAODfJrC/zAFxOsnQn2H7MADe4ApjZi022T+vKywCuBjC/7EdBqQpA8pxwQvmDO0sCODU5qb5cD8AdSs4rswdKUwCS7swxG8BpZkb3jAHwzeTEkiH5O5Ln91mM0dEn7u94dvTV+gPJMSRfIemeMg237+dIXpa8KG2fSZ12EMldSf6K5DCS/yL5l3DguIrkt5IC7dU5qYu2fExybNSzX/TVmOQiBVD488adPmK593Mz+7N7/QB4zDUdgDf6N0mh9ngDwEcdlvWoI5frzcw27OsA3ED9L4APkxLrZlMAozqU566YDcebmXsM/cj7y13MzOz/ydk9pFCn0PCAvRvA733wI9mNwD+Z2YMNre+QTjs7S3YPfrv43Y9wtL8C+AaAGwGcEDeKy3GPx0GY2dtJiR5RmA0Qg38fgAVmNi/Szo+7b05SQPzSA0hIXuQ9EX22wPuw4UpeBIXMACRHA1gI4I9mdm2kzQBwknvFhsEjMpjZFySPBeAz4wtmdpuZXUHyEwBLSE4xszd63Wc9VwCSO8cO35VmdlOkeaDnL9yn38zeTQp1xjIAb/Va/i4YETZNx5jZBySPDCV4y8weMDP3NF4F4GEPJTOz6sZLkjyE5KskD8ukTQmLP4mCITkrsYdLWAUUQZergFm5ftmB5JMkJ2fSpkbfTi6jPQPCd6/8+e7RvCT3yAg9g+Rykk3X+1KA5gqAtUqwPB6djTRfPj9PcnYiQId0/Qgg6dbr/LBiDzCzVZF+dgQ/+rT/WlJQfC1mtiLu9jv8/YkbhWb2dOyl3EzSo6XO6HaF0NUqIITwOLel/gEEH3yPjyP52wh5OliD3znRdwcDOIzkdRETuTICTp/y/RSS+3RzjY4UIAb5El/PA5hpZnPCivXNlXvjtMPN7J2ksBgQZvZ+hJwzloRbeV+bmRvVHjR7K8mLIzC1eAWIaF7f2dvNo1vNbHGk+9T0NwC3mNm5ZvZZUlh0hEdCm9mseNT6kvAArEl/2McAwO4AFsfYFIPHs4fR9nJsVTYUwg3AC8NgGdAySEZgayOwFWEILo0+3zBz/RmxSvjZQGaDtmaA8N97NMKd921s65LcEcD9MRv4PvaypLDoKW4IRni83/WLGi+vzOz2mA18rB7pcpv9q4H3cO25sY6fmss72aN0SR6fFGy/fs0AA5wBctecHjPyzFz61Fguzo1VWkuazgAxrR8Xu20f+w6XmS2MvB1J+tsr37b8vpndklQgSsHMFsTHM35A8u6YkRFjNTbeli6NLea2tWosyYdI3ktyl0y62wDnRAz8iUnBDtAM0N0MkLv+SeFHMJvkkEz6LiQXxpi2fiyQHEXyhtjNm5bLG0fyUZI39vJbd1KA3ikA1n5w4yaS/8x7Ffn2fGwv+xiPymYMJXkpyX+H9mycyduS5LzwmpmQXLF7gaUAPVSAjCwTYsx8sEdm0of4Di3Jl2LMh7oN0Pia1V5mNtfMPomvW54XO3wrYr2/JLnSwAXzekc0fgAMTU5qn+HZusr2pg07KduW4clJ7TM015aNupEtxmpceBsvI/lTH3zfmzGz6yNvxOqxd7+4XMOmkXwmppLRSe1dEJ9NL4r8VzcKJQaqKI7qYZ9vT3J+jOkRubxh2YM9Sd5PclGs+3uOFKBteqYAGXnHxdj6GH8VlLtBZPoHl3xzx984TTKzpUkNYlBjZv/wsY34g1sbu7mN5cI97sXjz38N8/qN7x34ngGA1XbGagVwV6S6d0ydiBt99c3edCdQ1AcpQM2RAtQcKUDNkQLUHClAzZEC1BwpQM2RAtQcKUDNKfy/hsUXQbaOwyI/vjAm80ZwRRFxCeFq1QhyLfIfW2+biaf8n5m9l5wxWPCPQhb42rQVTYNRu8XrbXG9Iin0c7p6BNQcKUDNkQLUHCmAEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQghRcQB8CQPjwlbTKjd1AAAAAElFTkSuQmCC" />
                <p style="padding:8px 0 0 45px;margin:0;color:white">Halcyon Library Search</p>
            </div>
            <div style="padding:10px">
                <p>Click to search the library catalogue for '${q}'. Note: The results will open in a new tab.</p>
                <form method="post" action="https://library.halcyonschool.com/s/" target="koha"><input type="hidden" name="filter" value="ALL"/><input type="hidden" name="search" value="${q}" />
                        <input type="submit" value="Search Koha" style="border:0;padding:5px 15px 5px 15px;font-size:14px;background-color:#3176BC;color:white" />
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