#!/usr/bin/env node

const readline = require("readline-sync");
const { similarNews } = require('./machine_learning_news_scrapper.py');

console.log("Enter the News URL:");
url = String(readline.question());

console.table(similarNews(url));

