export class Quiz{
    constructor(result){
        this.result= result
        this.currentIndex=0;
        document.getElementById("to").innerText=this.result.length;
        this.from=document.getElementById("from");
        this.Question=document.getElementById("questionTitle");
        this.questionContent=document.getElementById("questionContent")
        this.showQuestion();
        this.correctQues;
        this.score=0;
        document.getElementById('nextQuestion').addEventListener("click",()=>{
           this.nextQuestion();
        })
        document.getElementById('end').addEventListener("click",()=>{
            location.reload();
        })
    }

    showQuestion(){
    this.from.innerText=this.currentIndex +1
    const currentQuestion=this.result[this.currentIndex]
    this.Question.innerText=currentQuestion.question;
    const answers=[...currentQuestion.incorrect_answers];
    this.correctQues =currentQuestion.correct_answer;
    const randomAnswer=Math.ceil(Math.random()*answers.length)
    answers.splice(randomAnswer,0,this.correctQues)

    let answerBox=``
    for(let i=0 ; i<answers.length;i++){
        answerBox+=`
        <li class="my-3 animate__animated">
                           <div class="pretty p-default p-round p-smooth p-plain">
                              <input type="radio" name="answer" value="${answers[i]}" />
                              <div class="state p-success-o">
                                 <label>${answers[i]}</label>
                              </div>
                           </div>
                        </li>
                        `
    }
    this.questionContent.innerHTML=answerBox;
    }
    nextQuestion(){
        const currentYourAnswer= document.querySelector('[name="answer"]:checked')?.value
        console.log(currentYourAnswer);
        if(currentYourAnswer!=undefined){
            $("#alertAns").fadeOut(300)
            this.currentIndex++;
            if(this.currentIndex>this.result.length-1){
                $("#quiz").removeClass("show");
                $("#finsish").addClass("show");
                document.getElementById("score").innerText=this.score;
            }
            else{
                if(currentYourAnswer==this.correctQues){
                    $('#correct').fadeIn(0)
                    setTimeout(()=>{
                        $('#correct').fadeOut(0)
                    },300)
                    var audio = new Audio('audio/مدحت شلبي برافو عليك(MP3_160K).mp3');    
                    audio.play();
                    this.score++;
                    
                }
                else{
                    $('#inCorrect').fadeIn(0)
                    setTimeout(()=>{
                        $('#inCorrect').fadeOut(0)
                    },300)
                }
                this.showQuestion();
            }

        }
        else{
            $("#alertAns").fadeIn(300)
                }

    }
}