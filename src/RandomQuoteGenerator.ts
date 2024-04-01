type Quote = {
    quote: string,
    author: string
}

const quotes : Quote[] = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        author: "Edmund Burke"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Whatever you are, be a good one.",
        author: "Abraham Lincoln"
    },
    {
        quote: "The only way to predict the future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        quote: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale"
    },
    {
        quote: "The best way to predict your future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        quote: "A journey of a thousand miles begins with a single step.",
        author: "Laozi"
    },
    {
        quote: "Believe and act as if it were impossible to fail.",
        author: "Charles Kettering"
    },
    {
        quote: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
        author: "Joel Brown"
    }
];
function randomQuote() : Quote {
    const randomIndex : number = Math.floor(Math.random()*quotes.length);
    return quotes[randomIndex];
}
//const randomIndex : number = Math.floor(Math.random()*quotes.length);
export default randomQuote; // Could write export {quotes} if I wanted to export multiple objects