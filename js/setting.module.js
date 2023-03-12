/// <reference types="../@types/jquery" />

import { Quiz } from "./quiz.module.js";

export class Setting{
    constructor(){
        document.getElementById('start').addEventListener("click", this.startQuiz.bind(this))
    }
   async  startQuiz(){
        const category=document.getElementById("category").value
        const difficulty= document.querySelector('[name="difficulty"]:checked').value
        const NumberOfQuiz= document.getElementById("amount").value


    if(NumberOfQuiz>0){
        const result=await this.getQuiz(NumberOfQuiz,category,difficulty);
        $("#setting").removeClass("show");
        $("#quiz").addClass("show");
        const quiz=new Quiz(result);
    }
    else{
        $('#alertNumber').fadeIn(1000)        
    }
    }
    async getQuiz(NumberOfQuiz,category,difficulty){
        const apiResponse=await fetch(`https://opentdb.com/api.php?amount=${NumberOfQuiz}&category=${category}&difficulty=${difficulty}`)
        const response= await apiResponse.json()    
        return response.results
    }
}