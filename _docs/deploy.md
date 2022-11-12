---
title: "Deploy Project to Vercel"
excerpt: "We are done coding and testing our project so now it is time to
deploy it."
image: "mastering-js-thumb.png"
isFeatured: false
date: "2021-10-30"
---

# Deploy project to Vercel

## Deployment Options

**Standard Build**

- Run npm run build.
- Produces optimized production bundles and a server side app.
- Requires a nodeJS server to host app.
- Pages are pre-rendered if possible nodeJS server is required for api
  routes, server-side pages and page revalidations.
- Re-deply required whenever code changes or you don't use revalidations and
  need page updates.

**Full Static Builds**

- Run npm run export.
- Produces a 100% static App (HTML, CSS, JS).
- No nodeJS server is required
- Doesn't work if your app uses API routes, server-side pages or wants to
  use page revalidations.
- Redeploy whenever your code changes or any content changes.

## Deployment Steps

1. Add page metadata, optimize code, remove unnecessary dependencies.
2. Use environment variables for variable data (e.g. database credentials,
   apis etc.)
3. Do a test build and test the production level app locally or on some test
   server.
4. Deploy.

## Deploy to Vercel

1. Make sure git is installed on your computer.
2. Setup repository on github.
   3Initialize a git repository in your project.

```shell
    git init
```

4. Add project files to repository.

```shell
   git add .
```

5. Commit changes.

```shell
git commit -m "A suitable description goes her"
```

6. Connect your local repository to github repository

```shell
    git origin add <adress copied from github>
```

7. push local repository changes to github

```shell
    git push origin main
```
