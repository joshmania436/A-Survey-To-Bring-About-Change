var voter1,voter2,votr3,voter4;

var form;
var survey;
var submit;
var voterCount =0;
var voterResponse =0;
var voterResponse_text
var database;

var question1,question2,question3,question4;
var quest1,quest2,quest3,quest4;
var quest1_value,quest2_value,quest3_value,quest4_value;

var email1,email2,email3,email4;

var form_input,submit,title,greeting;

var voterEmail =0;

function setup() {
database =firebase.database;
  createCanvas(1000,800);

  //create title
  title =createElement('h1');
  title.html("A Survey To Bring About Change :D");
  title.position(300,5);

  //create greeting
  greeting =createElement('h2');
  greeting.html("This Survey collects your OPINIONS on how make our SCHOOL better ");
  greeting.position(240,80);

//Question1
    question1 =createElement('h3'," Should H.I.S install Air Conditioners in the classrooms?");
    question1.position(40,190);
    quest1 =createRadio();
    quest1.option("YES");
    quest1.option("NO");
    quest1.option("MAYBE");
    quest1_value =quest1.value();
    quest1.style('width','200px');
    quest1.position(100,250);

//Question2
      question2 =createElement('h3',"Should H.I.S implement learning of Robotics, A.I and Machine Learning?" );
      question2.position(40,290);
      quest2 =createRadio();
      quest2.option("YES");
      quest2.option("NO");
      quest2.option("MAYBE");
      quest2_value =quest2.value();
      quest2.position(100,340);

//Question3  
        question3 =createElement('h3', "Should H.I.S hold a yearly Educational Trip");
        question3.position(40,380);
        quest3 =createRadio();
        quest3.option("YES");
        quest3.option("NO");
        quest3.option("MAYBE");
        quest3_value =quest3.value();
        quest3.position(100,440);

//Question4    
          question4 =createElement('h3', "Should H.I.S implement mandatory classes for,<br> singing, dancing and learning of musical instruments?");
          question4.position(40,480);
          quest4 =createRadio();
          quest4.option("YES");
          quest4.option("NO");
          quest4.option("MAYBE");
          quest4_value=quest4.value();
          quest4.position(100,580);
 
// Voter Email
email1 = createElement("h3");
email1.html("Enter Your Email Id ");
email1.position(500,640);
email_input  = createInput();
email_input.style('width', '250px')
email_input.position(500,680);

//Submit Response          
submit = createButton("Submit Response");
  submit.position(560,740);
  submit.style('margin-bottom', '20px');

  //Voter Response
  voterResponse_text =createElement('h3');
  voterResponse_text.html("Your Response To This Survey");
  voterResponse_text.position(100,630);
  voterResponse =createInput();
  voterResponse.style('width', '150px');
  voterResponse.position(170,680);
}

function draw() {
  background("powderblue");  
  submit.mousePressed(() => {

    voter1.push(question_1.value());
    voter2.push(question_2.value());
    voter3.push(question_3.value());
    voter4.push(question_4.value());
  
    voterEmailList.push(email_input.value());
  
    question_1_vote();
    question_2_vote();
    question_3_vote();
    question_4_vote();
  
    count = count + 1;
    updateVoterCount();
  
    updateInputEmail();
    
  })
    
  }
  
    function question_1_vote() {
      database.ref('/A Survey To Bring About Change/voter1').update({
        vote: voter1
      })
    }
    function question_2_vote() {
      database.ref('/A Survey To Bring About Change/voter2').update({
        vote: voter2
      })
    }
    function question_3_vote() {
      database.ref('/A Survey To Bring About Change/voter3').update({
        vote: voter3
      })
    }
    function question_4_vote() {
      database.ref('/A Survey To Bring About Change/voter4').update({
        vote: voter4
      })
    }
  
  function updateInputEmail() {
    database.ref('/A Survey To Bring About Change/').update({
      email: voterEmail
    })
  }
  
  function updateVoterCount() {
    database.ref('/A Survey To Bring About Change/').update({
      voterCount: count
    })
  
  drawSprites();
}