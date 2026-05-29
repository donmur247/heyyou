#! /usr/bin/env node

// Main entry point for heyYou CLI app.

// Third-party modules
import { Command, Option } from "commander";

// Local modules
import { getUsername, getDefaultQuote, getFunnyQuote, getInspiringQuote, getRandomQuoteFromAPI } from "./utils";

// Initialize CLI app
const app = new Command();
app
    .name("heyYou")
    .description("A CLI app to give user a random quote of the day.")
    .addOption(new Option("-f, --funny", "Start your day with a funny quote."))
    .addOption(new Option("-i, --inspire", "Get a random inspiring quote of the day."))
    .addOption(new Option("-a, --api", "Get a random quote from thequoteshub API."))
    .action((options, app) => {
        if (options.funny && options.inspire && options.api) {
            console.log("Please choose either --funny, --inspire, or --api, but not all three.");
            console.log("Have a nice one! :)");
            process.exit(0);
        }
    })
    .parse(process.argv);

const options = app.opts();

// Main logic to handle user input and provide quotes
if (!process.argv.slice(2).length) {
    console.log(`Hello, ${getUsername()}!\n`);
    console.log(getDefaultQuote());
}

if (options.funny) {
    console.log(`Hey hey, ${getUsername()}!\n`);
    console.log(getFunnyQuote());
}

if (options.inspire) {
    console.log(`Believe in yourself, ${getUsername()}!\n`);
    console.log(getInspiringQuote());
}

if (options.api) {
    console.log(`Here's a random quote for you, ${getUsername()}!\n`);
    getRandomQuoteFromAPI().then((quote) => console.log(quote));
}
