let sent = ['Revelle', 'Muir', 'Marshall', 'Warren', 
            'Roosevelt', 'Sixth', 'Seventh', 'Eighth']

let count = 0;

function sentences(sentencesList, action, string){
    if(action == 'remove' && string){
        for(i = sentencesList.length-1; i>=0; i--){
            if(sentencesList[i]==string){
                sentencesList.splice(i, 1);
                count++;
            }
        }
        console.log(sentencesList)
    }
    else{
        if(action == 'add' && string){
            sent.push(string);
            count++;
            console.log(sentencesList);
        }
        else if(action == 'remove' && !string){
            sent.pop();
            count++;
            console.log(sentencesList);
        }
        else{
            console.log("Error, make sure arguments are: sentences list, either 'add' or 'remove', string to add or remove or null");
        }
    }
    return sentencesList;
}

const sentencesErr= sentences(sent);

const sentencesAdd = sentences(sent, 'add', 'I love UCSD!');
console.log("sentencesAdd: " + sentencesAdd);
console.log("count: " + count);

const sentencesRemove = sentences(sent, 'remove', 'This is UCSD!');
console.log("sentencesRemove: " + sentencesRemove);
console.log("count: " + count);

const sentencesNull = sentences(sent, 'remove', null);
console.log("sentencesNull: " + sentencesNull);
console.log("count: " + count);