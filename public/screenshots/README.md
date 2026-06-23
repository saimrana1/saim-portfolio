# Project screenshots

Drop your project screenshots in THIS folder, then open
`src/data/content.js` and set the matching `image:` field.

Recommended: wide shots (landscape), about 1600×1000px, PNG or JPG.
A clean view of the main screen looks best inside the browser frame.

| Save the file as            | Then set in content.js                          |
| --------------------------- | ----------------------------------------------- |
| myserviceapp.png            | image: '/screenshots/myserviceapp.png'          |
| hireboard.png               | image: '/screenshots/hireboard.png'             |
| loopdsp.png                 | image: '/screenshots/loopdsp.png'               |
| fribe-map.png               | image: '/screenshots/fribe-map.png'             |
| fribe-dashboards.png        | image: '/screenshots/fribe-dashboards.png'      |

Note: the path always starts with `/screenshots/` (no `public`), because
everything inside `public/` is served from the site root.

If a project has no image, the card automatically shows a clean
branded placeholder instead, so nothing ever looks broken.
