// Utility module for the heyYou CLI application.

export { getDefaultQuote, getFunnyQuote, getInspiringQuote };

// Function to return current username
function getUsername(): string {
    return process.env.USER || "User";
}

// Function to return default quote
function getDefaultQuote(): string {
    return `Hello, ${getUsername()}! Here's your quote of the day:\n`;
}

// Function to return funny quote
function getFunnyQuote(): string {
    return "Why don't scientists trust atoms? Because they make up everything!";
}

// Function to return inspiring quote
function getInspiringQuote(): string {
    return "The only way to do great work is to love what you do. - Steve Jobs";
}
