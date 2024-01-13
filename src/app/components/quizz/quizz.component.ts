import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import QuizQuestions from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  title: string = QuizQuestions.title;
  finished: boolean = false;
  aliasList: string[] = [];
  finalResult: string = ''

  questions: any = QuizQuestions.questions
  questionIndex: number = 0
  questionSelected: any = this.questions[this.questionIndex]

  constructor() {}

  result(): string {
    let isHero: number = 0
    this.aliasList.forEach(item => {
      if (item === "B") {isHero++}
    })
    return isHero >= 3 ? QuizQuestions.results.B : QuizQuestions.results.A
  }

  setSelection(alias: string): void {
    const questionsSize = Object.keys(this.questions).length
    if (this.questionIndex < questionsSize) {
      this.aliasList.push(alias)
      this.questionIndex++
      this.questionSelected = this.questions[this.questionIndex]
    }
    this.finalResult = this.result()
    this.finished = this.questionIndex >= questionsSize ? true : false
  }

}
