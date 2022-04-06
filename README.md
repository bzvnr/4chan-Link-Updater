# 4chan-Link-Updater
Replace broken/dead 4chan archive links with live ones. Contains Regex to search and replace links in a body of text.

See [here](https://github.com/4chenz/archives.json) for live 4chan archives in a JSON file.

Currently, it cannot parse 4chan links that only have a single digit in their thread / post number.
4chan links ending in the format `/{threadNumber},{postNumber}` don't work.
