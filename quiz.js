
    const quesJSON = [
      {
        correctAnswer: 'Three',
        options: [
          'Two', 
          'Three',
          'Four',
          'Five'
        ],
        question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
      },
      {
        correctAnswer: 'L. Frank Baum',
        options: [
          'Suzanne Collins',
          'James Fenimore Cooper',
          'L. Frank Baum',
          'Donna Leon'
        ],
        question:
        "Which author wrote 'The Wonderful Wixard of Oz'?",
      },
      {
        correctAnswer: 'Atlanta United',
        options: [
          'Atlanta United', 
          'Atlanta Impact',
          'Atlanta Bulls',
          'Atlanta Stars'
      ],
        question:
        "Which f these is a soccer team based in Atlanta?",
      },
      {
        correctAnswer: 'A Nanny',
        options: [
          'A Sow', 
          'A Hen ',
          'A Nanny',
          'A Lioness'
      ],
        question:
        "A female goat is known as what?",
      },
      {
        correctAnswer: 'P. L. Travers',
        options: [
          'J. R. R. Tolkien', 
          'Lewis Carroll',
          'Enid Blyton',
          'P. L. Travers'],
        question:
        "Which author wrote 'Mary Poppins'?",
      },
    ];

    let score = 0;
    let currrentQuestion = 0;
    const totalScore = quesJSON.length;

   //Accessing all the element
    const questionEl = document.getElementById(
      'question'
      );
    const optionEl = document.getElementById(
      'options'
      );
    const scoreEl = document.getElementById(
      'score'
      );
    const nextEl = document.getElementById("next");

    showQuestion();
    nextEl.addEventListener("click", ()=> {
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();

    }); 

    function showQuestion(){
      // Destructuring the object
      const {
        correctAnswer,
        options,
        question,
      }= quesJSON[currrentQuestion];


    //Setting question text content
      questionEl.textContent = question;

      const shuffledOptions = shuffleOptions(options);

    //Population the options div with the buttons
    shuffledOptions.forEach((opt) =>{
      const btn = document.createElement('button');
      btn.textContent = opt;
      optionEl.appendChild(btn);
      
      btn.addEventListener("click", ()=>{
        if(opt == correctAnswer){
          score++;

        }else{
          score = score-0.25;
        }
        
        scoreEl.textContent = `Score: ${score} / ${totalScore}`;
        nextQuestion();

      });

    });
  }

    function nextQuestion(){
      currrentQuestion++;
      optionEl.textContent = '';
      // console.log(currrentQuestion);
      if(currrentQuestion>=quesJSON.length){
        questionEl.textcontent = 'Quiz Completed!!';
        nextEl.remove();
        
      }
      else{
        showQuestion();
      }
    }

    //shuffling the options

    function shuffleOptions(options){
      for(let i = options.length - 1; i >= 0; i--){
        const j = Math.floor(Math.random() * i + 1);
        [options[i], options[j]] =
        [ options[j], options[i]];
      }
      return options;

    }
    shuffleOptions([1,2,3,4,5]);
    
