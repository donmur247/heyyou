// Utility module for the heyYou CLI application.

import fs from "fs";
import boxen from "boxen";
import chalk from "chalk";

export { getUsername,getDefaultQuote, getFunnyQuote, getInspiringQuote };

// Function to return current username
function getUsername(): string {
    return process.env.USER || "User";
}

// Function to return a quote based on provided quote from a json file where it randomly
// selects a quote and returns a dictionary with the quote and its author.
function getQuoteFromFile(filePath: string): { quote: string; author: string } {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    } catch (error) {
        console.error("Error reading quote file:", error);
        return { quote: "Failed to load quote.", author: "Unknown" };
    }
}

// Function to format a quote in a box using boxen and chalk for styling
function formatQuote(quote: string, author: string): string {
    const formattedQuote = chalk.cyan(`"${quote}"\n- ${author}`);
    const boxedQuote = boxen(formattedQuote, { padding: 1, borderColor: "green", borderStyle: "round" });
    return boxedQuote;
}


// Function to return default quote
function getDefaultQuote(): string {
    const quoteData = getQuoteFromFile("src/quotes/default.json");
    return formatQuote(quoteData.quote, quoteData.author);
}

// Function to return funny quote
function getFunnyQuote(): string {
    const quoteData = getQuoteFromFile("src/quotes/funny.json");
    return formatQuote(quoteData.quote, quoteData.author);
}

// Function to return inspiring quote
function getInspiringQuote(): string {
    const quoteData = getQuoteFromFile("src/quotes/inspire.json");
    return formatQuote(quoteData.quote, quoteData.author);
}
