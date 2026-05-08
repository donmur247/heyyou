// Utility module for the heyYou CLI application.

export { getDefaultQuote };

// Function to return current username
function getUsername(): string {
    return process.env.USER || "User";
}

// Function to return default quote
function getDefaultQuote(): string {
    return `Hello, ${getUsername()}! Here's your quote of the day:\n`;
}
