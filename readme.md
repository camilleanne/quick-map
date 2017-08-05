### Quick map template

A quick template I've been using to make easy to reference maps of interesting places from a dataset (e.g. list in a travel book or blog) for use on the go. Mostly mobile responsive. Geolocate works as long as location services for your mobile browser are enabled.

#### to add points

edit `points.json` with stuff you'd like to see on the map. The `name`, `address`, and `description` fields will show up in a box on the side when the point is clicked. Pretty important stuff. If you need reverse geocoding of address, might I suggest [Mapbox Geocoding API](https://www.mapbox.com/api-documentation/#geocoding).

#### local

```
# swap out the `YOUR_MAPBOX_TOKEN` in `index.html` with your own
python -m SimpleHTTPServer
open localhost:8000
```

#### deploy

push to a `gh-pages` branch, go check it out at `https://{githubhandle}.github.io/{whateveryoucalledyourmap}`