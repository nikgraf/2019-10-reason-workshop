## Deployment

You can follow the Netlify instructions below or use any other static site publishing tool.

Add the file build/\_redirects with the following content

```
/*    /index.html   200
```

Run

```
npm run build
npm run webpack:production
```

Go to Netlify and drag & drop your `build` folder into the deploy site page: https://app.netlify.com/site/

## Send out feedback form!

# End Beginner Workshop
