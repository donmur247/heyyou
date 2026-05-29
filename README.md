# heyYou!
A simple CLI program to display quote of the day for You!

Start your day with the right quote whether it's random, simply funny or inspirational.

This project is based on Mixed Messages project from Codecademy's back-end engineering capstone project.

Feel free to contribute with this project to expand it as the scope of this project is to cover basic fundamentals of Javascript project configuration using `nodejs`.

I used Typescript in this project to give type-hinting that I love to have for every project that I work on.

## Install
```
npm install heyyou
```

## Usage
Starting your day is easy as typing this to the terminal.

```
heyyou
Hello, user!

╭────────────────────────────────────────────────────────────────────────╮
│                                                                        │
│   "It does not matter how slowly you go as long as you do not stop."   │
│   - Confucius                                                          │
│                                                                        │
╰────────────────────────────────────────────────────────────────────────╯
```
By default it gives you random quotes from provided `json` data that come with the project.

```
heyyou --help

Usage: heyYou [options]

A CLI app to give user a random quote of the day.

Options:
  -f, --funny    Start your day with a funny quote.
  -i, --inspire  Get a random inspiring quote of the day.
  -a, --api      Get a random quote from thequoteshub API.
  -h, --help     display help for command
```
Will show the help option.

```
heyyou -f

Hey hey, user!

╭────────────────────────────────────────────────────────────────────────╮
│                                                                        │
│   "Be nice to nerds. You may end up working for them. We all could."   │
│   - Charles J. Sykes                                                   │
│                                                                        │
╰────────────────────────────────────────────────────────────────────────╯
```
Option for funny quotes.

```
heyyou -i

Believe in yourself, user!

╭────────────────────────────────────────────────────────────────────────────────╮
│                                                                                │
│   "Remember that wherever your heart is, there you will find your treasure."   │
│   - Paulo Coelho                                                               │
│                                                                                │
╰────────────────────────────────────────────────────────────────────────────────╯
```
Inspirational quotes.

```
heyyou -a

Here's a random quote for you, user!

╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                                                             │
│   "...Stories want to be told. Stories have a power of their own ... You can't write a story until you've felt it.          │
│   Breathed it in. Walked with your characters. Talked with them."                                                           │
│   - Angelica Banks                                                                                                          │
│                                                                                                                             │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```
Getting random quotes from `thequoteshub.com` API. Currently this is hardcoded in the code for fundamental practice. Ideally should be put as configurable option and payloads.

