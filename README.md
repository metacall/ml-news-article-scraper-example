# Polyglot Machine Learning example for scraping similar news articles

<div align="center">
  <a href="https://github.com/metacall/ml-news-article-scraper-example" target="_blank"><img src="https://i.imgur.com/tiDqORi.png" alt="Machine Learning Polyglot with Python and NodeJS" style="max-width:100%; margin: 0 auto;" width="600" height="auto"></a>
</div>

In this example, we will see how we can work with Machine Learning applications written in Python with a NodeJS Script, to build a **Polyglot Machine Learning application for scraping similar news articles**. 

## Install 

Install MetaCall CLI:

```sh
$ curl -sL https://raw.githubusercontent.com/metacall/install/master/install.sh | sh
```

Install application dependencies:

- For Python: `metacall pip3 install -r requirements.txt`
- For NodeJS: `metacall npm i readline-sync`

## Run the Example

```sh
$ metacall app.js
```

Once the application is kick-started, you will be prompted to enter a News Article which you would like to find similar articles for. Let's use this sample article for testing our application: **https://www.nytimes.com/2021/03/23/business/teslas-autopilot-safety-investigations.html**

Here is the application output: 

```
$ metacall app.js
Information: Global configuration loaded from /gnu/store/5cxmq6y8z24ijnvhh6lndgpriwnhf3jl-metacall-0.3.17/configurations/global.json
Enter the News URL:
https://www.nytimes.com/2021/03/23/business/teslas-autopilot-safety-investigations.html
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬───────────────┐
│                                                       (index)                                                       │    Values     │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────────────┤
│ https://auto.timesofindia.com/news/others/teslas-autopilot-technology-faces-fresh-scrutiny/articleshow/81652823.cms │ '83.68405286' │
│                    https://www.autosafety.org/teslas-autopilot-technology-faces-fresh-scrutiny/                     │ '60.35694007' │
│                    https://www.anandmarket.in/teslas-autopilot-technology-faces-fresh-scrutiny/                     │ '94.97681053' │
│                                     https://www.entrepreneur.com/article/367724                                     │ '60.67538891' │
│                 http://www.newsnetworks.in/india/teslas-autopilot-technology-faces-fresh-scrutiny/                  │     '0.'      │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴───────────────┘
Script (app.js) loaded correctly
```
## Deployment using MetaCall FaaS 

After deploying the application into the FaaS https://dashboard.metacall.io, it can be accessed with (change `<your_alias>` by the alias you used to sign up):

```sh
curl -X POST https://api.metacall.io/<your_alias>/ml-news-article-scraper-example/v1/call/similarNews -X POST --data '{ "url": "https://www.nytimes.com/2021/03/23/business/teslas-autopilot-safety-investigations.html" }'
```
## LICENSE 
[Apache License 2.0](./LICENSE)


