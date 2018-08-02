function QuestionSet(obj){
  this.fullTitle = obj.fullTitle || ''
  this.shortTitle = obj.shortTitle || ''
  this.questions = obj.questions || []
}

QuestionSet.prototype.generateQuestionTemplate = function(){
  return `
  <section>
    <h2 class="title ${this.shortTitle}-theme">${this.fullTitle}</h2>
    ${this.questions.map((q, i)=>{ return `
        <div class="question-set">
          <div class="q-number ${this.shortTitle}-theme">${i+1}</div>
          <p>${q}</p>
          <span class="q-answer" id="${this.shortTitle}-${i+1}"></span>
        </div>
    `}).join('')}
  </section>
  `
}


let icelandObj = {
  fullTitle: 'Iceland API',
  shortTitle: 'iceland',
  questions: [
   `How many <u>births</u> were there in Iceland's <u>national hospital</u>?`,
   `What is the <u>next concert</u> event in Iceland?`,
   `How many <u>arrival flights</u> are scheduled for today?`
  ]
}

let nhtsaObj = {
  fullTitle: 'National Highway Transit Safety Administration API',
  shortTitle: 'nhtsa',
  questions: [
    'How many types of Chevrolet models are registered with the NHTSA?',
    'What are the vehicle types that Nissan has?',
    'What are the types of models that exist for Toyota trucks in 2017?'
  ]
}

let apiMashupObj = {
  fullTitle: 'Google Geocode API + Sunrise-Sunset API + Darksky',
  shortTitle: 'apimashup',
  questions: [
    'What are latitude longitude coordinates of Montreal?',
    'What time does the sun set in Montreal (based on the Google Geocode API coordinates)?',
    'What is the weekly weather forecast in Montreal?',

  ]
}

let tvMazeObj = {
  fullTitle: 'TVMaze API',
  shortTitle: 'tvmaze',
  questions: [
    'What is the average rating for the show Better Call Saul?',
    'When was the premiere date for the 9th season of Friends?',
    'How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?',

  ]
}


let icelandSet = new QuestionSet(icelandObj)
let nthsaSet = new QuestionSet(nhtsaObj)
let apiMashupSet = new QuestionSet(apiMashupObj)
let tvMazeSet = new QuestionSet(tvMazeObj)


document.querySelector('main')
  .innerHTML = `
    ${icelandSet.generateQuestionTemplate()}
    ${nthsaSet.generateQuestionTemplate()}
    ${apiMashupSet.generateQuestionTemplate()}
    ${tvMazeSet.generateQuestionTemplate()}

  `
/*

  ##### Iceland API
  https://docs.apis.is/

  1. How many births were there in Iceland's national hospital?

  2.  How many **arrival** flights are scheduled for today?

  3.  What is the next concert event in Iceland? 


  ##### National Highway Transit Safety Administration
  https://vpic.nhtsa.dot.gov/api/

  1. How many types of Chevrolet models are registered with the NHTSA?

  2. What are the vehicle types that Nissan has?

  3. What are the types of models that exist for Toyota trucks in 2017?


  ##### Geocoding
  1. What are latitude longitude coordinates of Montreal?
    - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

  2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
    - https://sunrise-sunset.org/api

  3. What is the weekly weather forecast in Montreal?
    - https://darksky.net/dev
    - Note: You will have to create an account.


  ##### TV Maze
  https://www.tvmaze.com/ap

  1. What is the average rating for the show Better Call Saul?

  2. When was the premiere date for the 9th season of Friends?

  3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
  */
