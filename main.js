//----------------------------------------------------universal variables---------------------------------------------------------------
//---------------------------------------------------consonent/vowel endings-------------------------------------------------------
const cnsOA = ["생", "람", "님", "문", "책", "집", "것", "국", "름", "본"];
const vwlsOA = ["자", "사", "대", "차", "터", "무", "파", "시"];
//---------------------------------------------------formal endings----------------------------------------------------
const 이다CnIlOA = ["이야"];
const 이다CnIHOA = ["이에요"];
const 이다VwlIlOA = ["야"];
const 이다VwlIHOA = ["예요"];
const Cn이다OA = [...이다CnIlOA, ...이다CnIHOA];
const Vwl이다OA = [...이다VwlIlOA, ...이다VwlIHOA]; 
//----------------------------------------------------I---------------------------------------------------------
const iIOA = "나";
const iFOA = "저";
const iOA = [...iFOA, ...iIOA];
//--------------------------------------------------subject Markers---------------------------------------------
const sbjctMrkrVo = ["는"];
const sbjctMrkrCo = ["은"];


//-------------------------------------------------------chap1-------------------------------------------------------------------------
//---------------------------------------------------nouns------------------------------------------------------
const pplNnsOA = ["남자", "여자", "의사", "학생", "사람", "선생님"];
const thngNnsOA = ["탁자", "침대", "차", "컴퓨터", "나무", "소파", "도시", "의자", "문", "책", "집", "것", "한국", "이름", "중국", "일본"];
//----------------------------------------------------one off phases-------------------------------------------------
const grtngWrdsOA = ["안녕하세요", "감사합니다", "감사해요", "고마워", "고맙습니다", "고마워요", "잘 지내세요?", "제발", "네", "아니"];
//------------------------------------------------------adj-------------------------------------------------------------
const thsThtThtAdjOA = ["이", "그", "저"];




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

const iSA = shuffle(iOA);
const pplNnsSA = shuffle(pplNnsOA);
const thsThtThtAdjSA = shuffle(thsThtThtAdjOA);
const Cn이다SA = shuffle(Cn이다OA);
const Vwl이다SA = shuffle(Vwl이다OA);
const thngNnsSA = shuffle(thngNnsOA);
const grtngWrdsSA = shuffle(grtngWrdsOA);



function shuffleTheFunctions (arg) { 
  arg.forEach (function (item) {
    shuffle(item);
  });
  
}


const ImBlnkLnVrbl = document.getElementById("iamBlankLine");
const thsThtThtAdjLnVrbl = document.getElementById("thisThatThatAdjLine");
const thtThsIsABlnkLnVrbl = document.getElementById("thatThisIsABlankLine");
const grtngPhrssLnVrbl = document.getElementById("greetingPhrasesLine");
const UltmtLneVrbl = document.getElementById("UltimateLine");


//---------------------------------------------------------------------Mix I am a _________ and print------------------------------------------
function iAmBlankMixFunction () {
  const frstSptiSA = iSA[0];
  const frstSptpplNnsSA = pplNnsSA[0];
  const lstChr = frstSptpplNnsSA[frstSptpplNnsSA.length - 1];
  let 이다mtchd = "";


  if (frstSptiSA === iFOA && vwlsOA.includes(lstChr)) {
    이다mtchd = 이다VwlIHOA;
  } else if (frstSptiSA === iFOA && cnsOA.includes(lstChr)) {
    이다mtchd = 이다CnIHOA;
  } else if (frstSptiSA === iIOA && cnsOA.includes(lstChr)) {
    이다mtchd = 이다CnIlOA;
  } else if (frstSptiSA === iIOA && vwlsOA.includes(lstChr)) {
     이다mtchd = 이다VwlIlOA;
  } else {
     이다mtchd = "Something went wrong.";
  }

  const rslt = `${frstSptiSA + sbjctMrkrVo} ${frstSptpplNnsSA}${이다mtchd}`;
  return rslt;
 }


function iAmBlankPrintLine () {
  const rslt = iAmBlankMixFunction();

  ImBlnkLnVrbl.innerHTML = "";
  ImBlnkLnVrbl.innerHTML = rslt;
  
  shuffleTheFunctions([iOA, pplNnsOA]);
}

//-----------------------------------------------------------------------Mix this/that person is a ______ and print--------------------------------------
function thisThatThatAdjMixFunction () {
  const frstSptthsThtThtAdjSA = thsThtThtAdjSA[0];
  const frstSptpplNnsSA = pplNnsSA[0];
  const frstSptCn이다SA = Cn이다SA[0];
  const frstSptVwl이다SA = Vwl이다SA[0];
  const lstChr = frstSptpplNnsSA[frstSptpplNnsSA.length - 1];
  let 이다mtchd = "";

  if (cnsOA.includes(lstChr)) { 
    이다mtchd = frstSptCn이다SA;
  } else if (vwlsOA.includes(lstChr)) {
    이다mtchd = frstSptVwl이다SA;
  }  else {
     이다mtchd = "Something went wrong.";
  }

  const rslt = `${frstSptthsThtThtAdjSA} 사람은 ${frstSptpplNnsSA}${이다mtchd}`;
  return rslt;
}

function thisThatThatAdjPrintLine () {
  const rslt = thisThatThatAdjMixFunction();

  thsThtThtAdjLnVrbl.innerHTML = "";
  thsThtThtAdjLnVrbl.innerHTML = rslt;
  
  
  shuffleTheFunctions([thsThtThtAdjOA, pplNnsOA, Cn이다OA, Vwl이다OA]);
}

//----------------------------------------------------------------------Mix This/that is a ______ and print-----------------------------------------
function thatThisIsABlankMixFunction () {
 const frstSptthsThtThtAdjSA = thsThtThtAdjSA[0];
 const frstSptthngNnsSA = thngNnsSA[0];
 const frstSptCn이다SA = Cn이다SA[0];
 const frstSptVwl이다SA = Vwl이다SA[0];
 const lstChr = frstSptthngNnsSA[frstSptthngNnsSA.length - 1];
 let 이다mtchd = "";

 if (cnsOA.includes(lstChr)) { 
   이다mtchd = frstSptCn이다SA;
 } else if (vwlsOA.includes(lstChr)) {
   이다mtchd = frstSptVwl이다SA;
 }  else {
    이다mtchd = "Something went wrong.";
 }

  const rslt = `${frstSptthsThtThtAdjSA}것${sbjctMrkrCo} ${frstSptthngNnsSA}${이다mtchd}`;
  return rslt;
}


function thatThisIsABlankPrintLine () {
  const rslt = thatThisIsABlankMixFunction();

  thtThsIsABlnkLnVrbl.innerHTML = "";
  thtThsIsABlnkLnVrbl.innerHTML = rslt;
  shuffleTheFunctions([thsThtThtAdjOA, thngNnsOA, Cn이다OA, Vwl이다OA]);
}

//------------------------------------------------------------------------Mix greeting and one off phrases and print-------------------------
function greetingPhrasesMixFunction () {
  const frstSptgrtngWrdsSA = grtngWrdsSA[0];
  return frstSptgrtngWrdsSA;
}


function greetingPhrasesPrintLine () {
  
  const frstSptgrtngWrdsSA = greetingPhrasesMixFunction();
  grtngPhrssLnVrbl.innerHTML = "";
  grtngPhrssLnVrbl.innerHTML = frstSptgrtngWrdsSA;
  
  
  shuffleTheFunctions([grtngWrdsOA]);
}

//------------------------------------------------==call all previous functions and mix them all together to make an ultimate button-------------
function ultimateButtonPrintLine () {
  const frstsptgrtngWrdsSA = greetingPhrasesMixFunction();
  const iAmBlnkMxFnctnrslt = iAmBlankMixFunction ();
  const thsThtThtAdjMxFnctnrslt = thisThatThatAdjMixFunction();
  const thtThsIsABlnkMxFnctnrslt = thatThisIsABlankMixFunction();

  const orgnlArryOfAllBttns = [[frstsptgrtngWrdsSA], [iAmBlnkMxFnctnrslt], [thsThtThtAdjMxFnctnrslt], [thtThsIsABlnkMxFnctnrslt]];
  const arryOfAllBttnsShffld = shuffle(orgnlArryOfAllBttns);
  const frstSptarryOfAllBttnsShffld =arryOfAllBttnsShffld[0]
  UltmtLneVrbl.innerHTML = "";
  UltmtLneVrbl.innerHTML = frstSptarryOfAllBttnsShffld;

  shuffleTheFunctions([iOA, thsThtThtAdjOA, pplNnsOA, Cn이다OA, Vwl이다OA, thngNnsOA, grtngWrdsOA]);

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
//check and make sure the order matches the website


//-------------------------------------------------------------------chap2--------------------------------------------------------------------------------

