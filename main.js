let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Der Arschsaft der Herrn - Marcel Davis"',
    '"loooool"'
];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
})