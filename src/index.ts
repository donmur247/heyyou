#! /usr/bin/env node

// Main entry point for heyYou CLI app.

// Third-party modules
import { Command } from "commander";

// Local modules
import { getDefaultQuote, getFunnyQuote, getInspiringQuote } from "./utils";

// Initialize CLI app
const app = new Command();
app
    .name("heyYou")
    .description("A CLI app to give user a random quote of the day.")
    .option("-f, --funny", "Start your day with a funny quote.")
    .option("-i, --inspire", "Get a random inspiring quote of the day.")
    .parse(process.argv);

const options = app.opts();

// Main logic to handle user input and provide quotes
if (!process.argv.slice(2).length) {
    console.log(getDefaultQuote());
}

if (options.funny) {
    console.log(getFunnyQuote());
}

if (options.inspire) {
    console.log(getInspiringQuote());
}
