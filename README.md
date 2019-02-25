# koha_chrome
Plugin for Chrome to provide search results from Koha alongside Google search results

Main code is in koha.js

Operation of the plugin is very simple:

- Triggers when a Google search page is displayed
- Reads the q= querystring key/pair
- Creates a fragment of HTML with the search term linked to Koha
- Inserts the HTML in the right sidebar

To install from here:

- Clone the repo locally
- Make sure development mode is enabled for Chrome extensions
- 'Load Unpacked' and select the cloned directory
