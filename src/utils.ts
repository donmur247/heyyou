// Utility module for the heyYou CLI application.

import fs from "fs";
import boxen from "boxen";
import chalk from "chalk";
import { format } from "path";

export { getUsername, getDefaultQuote, getFunnyQuote, getInspiringQuote, getRandomQuoteFromAPI };

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

// Interface for quote data
interface Quote {
    text: string;
    author: string;
    tags: string[];
    id: Number;
    author_id: string;
}

// Function get random quote from thequoteshub API
async function getRandomQuoteFromAPI(): Promise<string> {
    const url: string = "https://thequoteshub.com/api/random-quote";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error! Responsestatus: ${response.status}`);
        }
        const data: Quote = await response.json();
        return formatQuote(data.text, data.author);
    } catch (error) {
        console.error("Error fetching quote from API:", error);
        return formatQuote("Failed to fetch quote.", "Unknown");
    }
}
