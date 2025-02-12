console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire', 
  'Rivendell', 
  'Mordor'
];


// ============
// Chapter 1
// ============

function makeMiddleEarth () { 
  console.log("1: makeMiddleEarth");

  const middleEarthSection = document.createElement('section');
  middleEarthSection.id = "middle-earth";

  for (let i = 0; i <lands.length; i++){
    console.log(lands[i])
  
  const article = document.createElement('article');
  article.id = lands[i];
  const h1 = document.createElement('h1')
  h1.innerText = lands[i];
  article.appendChild(h1);
  middleEarthSection.appendChild(article);
  document.body.appendChild(middleEarthSection);
}
}

  // 1. create a section tag with an id of middle-earth

  // 2. use a for loop to iterate over the lands array that does the following:

  //   2a. creates an article tag (there should be one for each land when the loop is done)

  //   2b. gives each land article an `id` tag of the corresponding land name

  //   2c. includes an h1 with the name of the land inside each land article

  //   2d. appends each land to the middle-earth section

  // 3. append the section to the body of the DOM.

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".


// ============
// Chapter 2
// ============

const hobbitsList = document.createElement('ul');
function makeHobbits() {
  console.log("2: makeHobbits");

for (i = 0; i < hobbits.length; i++){
           const li = document.createElement('li');
           li.className = 'hobbit';
           li.innerText = hobbits[i];
           hobbitsList.appendChild(li);
}
  const theShire = document.getElementById('The-Shire');

  theShire.appendChild(hobbitsList);
  //grab the shire id, attatch the hobbits to it.
}

  // display an `unordered list` of hobbits in the shire

  // give each hobbit a class of `hobbit`

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id



// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");

const div = document.createElement('div')
div.id = 'the-ring';
div.className = 'magic-imbued-jewelry';
const mrFrodo = document.querySelector('.hobbit');
//console.log(mrFrodo);
mrFrodo.appendChild(div);

}

  // create a div with an id of `'the-ring'`

  // give the div a class of `'magic-imbued-jewelry'`

  // add the ring as a child of `Frodo`


// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() { 
  console.log("4: makeBaddies");
  const badBaddies = document.createElement('ul');

for (i = 0; i < baddies.length; i++){
           const li = document.createElement('li');
           li.className = 'baddyBads';
           li.innerText = baddies[i];
           badBaddies.appendChild(li);
}
  const mordor = document.getElementById('Mordor');

  mordor.appendChild(badBaddies);

  // display an unordered list of baddies in Mordor

  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  console.log("5: makeBuddies");

  const aside = document.createElement('aside');
    const allTheBuddies = document.createElement('ul');

for (i = 0; i < buddies.length; i++){
           const li = document.createElement('li');
           li.className = 'theBuds';
           li.innerText = buddies[i];
           allTheBuddies.appendChild(li);
}
  aside.appendChild(allTheBuddies);
  const rivendell = document.getElementById('Rivendell');
  rivendell.appendChild(aside);

  // create an `aside` tag
   
  // put an `unordered list` of the `'buddies'` in the aside
   
  // insert your aside as a child element of `rivendell`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() { 
  console.log("6: leaveTheShire");
 const rivendell = document.getElementById('Rivendell');
  rivendell.appendChild(hobbitsList);

  // assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() { 
  console.log("7: beautifulStranger");


const budlets = document.querySelectorAll('li');
//console.log(budlets);

for(let i =0; i < budlets.length; i++){
  if((budlets[i].innerText) === 'strider'){

    (budlets[i].innerText) = 'Aragorn';
  }
}


}



  // change the `'Strider'` text to `'Aragorn'`


// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() { 
  console.log("8: forgeTheFellowShip");

  const rivendell = document.querySelector('#Rivendell');
  const theFellowship = document.createElement('div');
  theFellowship.id = 'theFellowship'

        rivendell.appendChild(theFellowship); 
        let fellowship = [];

  for(let i = 0; i < hobbits.length; i++){
    let moreHobbits = hobbits[i];
    fellowship.push(moreHobbits);
    //alert("Another Hobbit has joined the Fellowship!");
  } for (let i = 0; i <buddies.length; i++){
    let moreBuddies = buddies[i];
    fellowship.push(moreBuddies);
    //alert("Another Buddie has joined the Fellowship!")
  }
  const destination = document.querySelector('#Rivendell')
  destination.childNodes[3].append(fellowship);
}

  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they 
    // have joined your party
  
  // NOTE: This won't change what you see in the browser.  
        //Use your Elements tab of your Inspector tools 
        //to make sure that it worked.



// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - 
          //The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() { 
  console.log("9: theBalrog");

const gandalf = document.querySelector('li');
gandalf.innerText = 'Gandalf the White';

gandalf.style.textAlign = 'center';

document.querySelector('.theBuds').style.background = "white";
document.querySelector('.theBuds').style.border = "5px solid grey";

// change the `'Gandalf'` text to `'Gandalf the White'`
// apply the following style to the element, make the 
 // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

 function hornOfGondor() { 
   console.log("10: hornOfGondor");

  alert('The gondor horn has been sounded!');
  alert('Boromir has been killed by the Uruk-hai!');
  const removeB = document.querySelector('#theFellowship') //removeB is an object


  

  //DONE// pop up an alert that the horn of gondor has been blown
  //DONE// Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() { 
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move 
  // them to `Mordor`
  //DONE// add a div with an id of `'mount-doom'` to `Mordor`
  const theFellowship = document.createElement('div');
  const mordor = document.getElementById('Mordor');
  const divDoom = document.createElement('div');
  divDoom.id = 'mount-doom';
  mordor.appendChild(divDoom);

}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() { 
  console.log("12: weWantsIt");

  document.getElementById('the ring');
  const gollum = document.createElement('div');
  gollum.id = 'gollum';

  //DONE// Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() { 
//   console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  //DONE// Move all the `hobbits` back to `the shire`
  const byeBye = document.getElementById('gollum');
  //console.log(byeBye)
  //byeBye.parentNode.removeChild(byeBye);

  const theRing = document.getElementById('the-ring');
  const byeRing = theRing.parentNode.removeChild(theRing);
  
  const theeShire = document.getElementById('The-Shire');
  theeShire.appendChild(hobbitsList);
 }

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
