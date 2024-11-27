var arrayOfQuotes = [
    {'author': '― Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'I m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can t handle me at my worst, then you sure as hell don t deserve me'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
];

function generatequote(){
    // Generate a random index from the array
    var randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);

    // // Select the random quote and author
    var selectedQuote = arrayOfQuotes[randomIndex].quote;
    var selectedAuthor = arrayOfQuotes[randomIndex].author;

    // // Update the HTML elements with the quote and author
    document.getElementById('output').innerHTML = '"' + selectedQuote + '"';
    document.getElementById('authorOutput').innerHTML = '- ' + selectedAuthor;

    

}















