//----------------------------------------------------universal variables---------------------------------------------------------------
//---------------------------------------------------consonent/vowel endings-------------------------------------------------------
const consontantEndingsOrignalArray = ["생", "람", "님", "문", "책", "집", "것", "국", "름", "본"];
const vowelEndingsOrignalArray = ["자", "사", "대", "차", "터", "무", "파", "시"];
//---------------------------------------------------formal endings----------------------------------------------------
const 이다ConsonantInformal = ["이야"];
const 이다ConsonantFormal = ["이에요"];
const 이다VowelInformal = ["야"];
const 이다VowelFormal = ["예요"];
const Consonant이다OrignalArray = [...이다ConsonantInformal, ...이다ConsonantFormal];
const Vowel이다OrignalArray = [...이다VowelInformal, ...이다VowelFormal]; 
//----------------------------------------------------I---------------------------------------------------------
const iInformalOrignalArray = "나";
const iFormalOrignalArray = "저";
const iOrignalArray = [...iFormalOrignalArray, ...iInformalOrignalArray];
//--------------------------------------------------subject Markers---------------------------------------------
const subjectMarkerVowel = ["는"];
const subjectMarkerConsonant = ["은"];


//-------------------------------------------------------chap1-------------------------------------------------------------------------
//---------------------------------------------------nouns------------------------------------------------------
const peopleNounsOriginalArray = ["남자", "여자", "의사", "학생", "사람", "선생님"];
const thingNounsOrignalArray = ["탁자", "침대", "차", "컴퓨터", "나무", "소파", "도시", "의자", "문", "책", "집", "것", "한국", "이름", "중국", "일본"];
//----------------------------------------------------one off phases-------------------------------------------------
const greetingWordsOrignalArray = ["안녕하세요", "감사합니다", "감사해요", "고마워", "고맙습니다", "고마워요", "잘 지내세요?", "제발", "네", "아니"];
//------------------------------------------------------adj-------------------------------------------------------------
const thisThatThatAdjOriginalArray = ["이", "그", "저"];




// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}

const iShuffledArray = shuffle(iOrignalArray);
const peopleNounsShuffledArray = shuffle(peopleNounsOriginalArray);
const greetingWordsShuffledArray = shuffle(greetingWordsOrignalArray);
const thisThatThatAdjShuffledArray = shuffle(thisThatThatAdjOriginalArray);
const Consonant이다ShuffledArray = shuffle(Consonant이다OrignalArray);
const Vowel이다ShuffledArray = shuffle(Vowel이다OrignalArray);
const thingNounsShuffledArray = shuffle(thingNounsOrignalArray);


function shuffleTheFunctions () {
  shuffle(iOrignalArray);
  shuffle(peopleNounsOriginalArray);
  shuffle(greetingWordsOrignalArray);
  shuffle(thisThatThatAdjOriginalArray);
  shuffle(Consonant이다OrignalArray);
  shuffle(Vowel이다OrignalArray);
  shuffle(thingNounsOrignalArray);
}


const IamBlankLineVariable = document.getElementById("iamBlankLine");
const thisThatThatAdjLineVariable = document.getElementById("thisThatThatAdjLine");
const thatThisIsABlankLineVariable = document.getElementById("thatThisIsABlankLine");
const greetingPhrasesLineVariable = document.getElementById("greetingPhrasesLine");
const UltimateLineVariable = document.getElementById("UltimateLine");


//---------------------------------------------------------------------Mix I am a _________ and print------------------------------------------
function iAmBlankMixFunction () {
  const firstSpotiShuffledArray = iShuffledArray[0];
  const firstSpotpeopleNounsShuffledArray = peopleNounsShuffledArray[0];
  const lastChar = firstSpotpeopleNounsShuffledArray[firstSpotpeopleNounsShuffledArray.length - 1];
  let 이다matched = "";


  if (firstSpotiShuffledArray === iFormalOrignalArray && vowelEndingsOrignalArray.includes(lastChar)) {
    이다matched = 이다VowelFormal;
  } else if (firstSpotiShuffledArray === iFormalOrignalArray && consontantEndingsOrignalArray.includes(lastChar)) {
    이다matched = 이다ConsonantFormal;
  } else if (firstSpotiShuffledArray === iInformalOrignalArray && consontantEndingsOrignalArray.includes(lastChar)) {
    이다matched = 이다ConsonantInformal;
  } else if (firstSpotiShuffledArray === iInformalOrignalArray && vowelEndingsOrignalArray.includes(lastChar)) {
     이다matched = 이다VowelInformal;
  } else {
     이다matched = "Something went wrong.";
  }

  const result = `${firstSpotiShuffledArray + subjectMarkerVowel} ${firstSpotpeopleNounsShuffledArray}${이다matched}`;
  return result;
 }


function iAmBlankPrintLine () {
  const result = iAmBlankMixFunction();

  IamBlankLineVariable.innerHTML = "";
  IamBlankLineVariable.innerHTML = result;
  
  shuffleTheFunctions();
}

//-----------------------------------------------------------------------Mix that/this person is a ______ and print--------------------------------------
function thisThatThatAdjMixFunction () {
  const firstSpotthisThatThatAdjShuffledArray = thisThatThatAdjShuffledArray[0];
  const firstSpotpeopleNounsShuffledArray = peopleNounsShuffledArray[0];
  const firstSpotConsonant이다ShuffledArray = Consonant이다ShuffledArray[0];
  const firstSpotVowel이다ShuffledArray = Vowel이다ShuffledArray[0];
  const lastChar = firstSpotpeopleNounsShuffledArray[firstSpotpeopleNounsShuffledArray.length - 1];
  let 이다matched = "";

  if (consontantEndingsOrignalArray.includes(lastChar)) { 
    이다matched = firstSpotConsonant이다ShuffledArray;
  } else if (vowelEndingsOrignalArray.includes(lastChar)) {
    이다matched = firstSpotVowel이다ShuffledArray;
  }  else {
     이다matched = "Something went wrong.";
  }

  const result = `${firstSpotthisThatThatAdjShuffledArray} 사람${subjectMarkerConsonant} ${firstSpotpeopleNounsShuffledArray}${이다matched}`;
  return result;
}

function thisThatThatAdjPrintLine () {
  const result = thisThatThatAdjMixFunction();

  thisThatThatAdjLineVariable.innerHTML = "";
  thisThatThatAdjLineVariable.innerHTML = result;
  
  shuffleTheFunctions();
}

//----------------------------------------------------------------------Mix That/That is a thing and print-----------------------------------------
function thatThisIsABlankMixFunction () {
 const firstSpotthisThatThatAdjShuffledArray = thisThatThatAdjShuffledArray[0];
 const firstSpotthingNounsShuffledArray = thingNounsShuffledArray[0];
 const firstSpotConsonant이다ShuffledArray = Consonant이다ShuffledArray[0];
 const firstSpotVowel이다ShuffledArray = Vowel이다ShuffledArray[0];
 const lastChar = firstSpotthingNounsShuffledArray[firstSpotthingNounsShuffledArray.length - 1];
 let 이다matched = "";

 if (consontantEndingsOrignalArray.includes(lastChar)) { 
   이다matched = firstSpotConsonant이다ShuffledArray;
 } else if (vowelEndingsOrignalArray.includes(lastChar)) {
   이다matched = firstSpotVowel이다ShuffledArray;
 }  else {
    이다matched = "Something went wrong.";
 }

  const result = `${firstSpotthisThatThatAdjShuffledArray}것${subjectMarkerConsonant} ${firstSpotthingNounsShuffledArray}${이다matched}`;
  return result;
}


function thatThisIsABlankPrintLine () {
  const result = thatThisIsABlankMixFunction();

  thatThisIsABlankLineVariable.innerHTML = "";
  thatThisIsABlankLineVariable.innerHTML = result;
  shuffleTheFunctions();
}

//------------------------------------------------------------------------Mix greeting and one off phrases and print-------------------------
function greetingPhrasesMixFunction () {
  const firstSpotgreetingWordsShuffledArray = greetingWordsShuffledArray[0];
  return firstSpotgreetingWordsShuffledArray;
}


function greetingPhrasesPrintLine () {
  
  const firstSpotgreetingWordsShuffledArray = greetingPhrasesMixFunction();
  greetingPhrasesLineVariable.innerHTML = "";
  greetingPhrasesLineVariable.innerHTML = firstSpotgreetingWordsShuffledArray;
  
  shuffleTheFunctions();
}

//------------------------------------------------==call all previous functions and mix them all together to make an ultimate button-------------
function ultimateButtonPrintLine () {
  const firstspotgreetingWordsShuffledArray = greetingPhrasesMixFunction();
  const iAmBlankMixFunctionresult = iAmBlankMixFunction ();
  const thisThatThatAdjMixFunctionresult = thisThatThatAdjMixFunction();
  const thatThisIsABlankMixFunctionresult = thatThisIsABlankMixFunction();

  const originalArrayOfAllButtons = [[firstspotgreetingWordsShuffledArray], [iAmBlankMixFunctionresult], [thisThatThatAdjMixFunctionresult], [thatThisIsABlankMixFunctionresult]];
  const arrayOfAllButtonsShuffled = shuffle(originalArrayOfAllButtons);
  const firstSpotarrayOfAllButtonsShuffled =arrayOfAllButtonsShuffled[0]
  UltimateLineVariable.innerHTML = "";
  UltimateLineVariable.innerHTML = firstSpotarrayOfAllButtonsShuffled;

  shuffleTheFunctions();
}

//--------------------------------------------------------------add event listeners to buttons-------------------------------------------
const iAmBlankbutton1 = document.getElementById("iAmBlankbutton").addEventListener("click", iAmBlankPrintLine ); 
const thatBlankIsABlankbutton1 = document.getElementById("thisThatThatAdjLinebutton").addEventListener("click", thisThatThatAdjPrintLine ); 
const thatThisIsABlankbutton3 = document.getElementById("thatThisIsABlankbutton").addEventListener("click", thatThisIsABlankPrintLine ); 
const greetingPhrasesButton2 = document.getElementById("greetingPhrasesButton").addEventListener("click", greetingPhrasesPrintLine ); 
const UltimateButton3 = document.getElementById("ultimateButton").addEventListener("click", ultimateButtonPrintLine ); 

//to do list
//Should these be in objects, is there a better method?
//are the variables names too long? does it make a difference in performance, spaces are frowned upon right?
//Should I have 100% variable names or is a few strings in final results taking up space/peformance?
//Should I shuffle all functions all the time or just shuffle a few.  It will make the functions longer, but I'm thinking for this case it's better to call just a few.





//completed
//change to const and let
//change to lowercase first letter for variables
//clearer labeling of variables
//make functions smaller
//see if I can use return functions
//write the That this is a thing function.
//save this in commits in github
//write notes what each does


//-------------------------------------------------------------------chap2--------------------------------------------------------------------------------

