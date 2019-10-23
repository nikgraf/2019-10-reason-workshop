## Deployment

You can follow the Netlify instructions below or use any other static site publishing tool.

Add the file build/\_redirects with the following content

```
/*    /indexProduction.html   200
```

Run

```
npm run build
```

Follow the build instructions in the Readme. Don't forget to change the Webpack mode back to `production`.

Make sure `indexProduction.html` also uses a non-relative path `<script src="/bundleOutput/index.js"></script>`

Take `assets`, `bundleOutput` and `indexProduction.html` and copy them into one folder.

Go to Netlify and drag & drop this folder into the deploy site page: https://app.netlify.com/site/

## Send out feedback form!

# End Beginner Workshop
