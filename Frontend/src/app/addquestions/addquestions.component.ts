/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-empty-function */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionlistComponent } from '../questionlist/questionlist.component';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css'],
})
export class AddquestionsComponent implements OnInit {
  quesObj: FormGroup;

  err1: string;

  err2: string;

  err3: string;

  err4: string;

  constructor(private dialogRef: MatDialogRef<QuestionlistComponent>,
    private questionService: QuestionService,
    private snackBar: MatSnackBar) {
    this.err1 = '';
    this.err2 = '';
    this.err3 = '';
    this.err4 = '';
  }

  ngOnInit(): void {
    this.quesObj = new FormGroup({
      topic: new FormControl(''),
      Keywords: new FormControl(this.questionService.oldkey),
      quesTitle: new FormControl(''),
      quesDesc: new FormControl(''),
    });
  }

  get topic() {
    return this.quesObj.get('topic') as FormControl;
  }

  get quesTitle() {
    return this.quesObj.get('quesTitle') as FormControl;
  }

  get quesDesc() {
    return this.quesObj.get('quesDesc') as FormControl;
  }

  get Keywords() {
    return this.quesObj.get('Keywords') as FormControl;
  }

  addQues() {
    const quesObject = {
      userId: this.questionService.uid,

      title: this.quesTitle.value,

      topicName: this.topic.value,

      body: this.quesDesc.value,

      keyword: this.Keywords.value,
    };
    if (!this.topic.value) {
      this.err1 = 'Please choose a topic';
      return;
    }this.err1='';

    if (!this.Keywords.value) {
      this.err2 = 'This field cannot be empty';
      return;
    }this.err2='';
    
    if (!this.quesTitle.value) {
      this.err3 = 'This field cannot be empty';
      return;
    }this.err3='';

    if (!this.quesDesc.value) {
      this.err4 = 'This field cannot be empty';
      return;
    }this.err4='';

    this.snackBar.open('Adding. Add Question box will close automatically.', '', {
      duration: 5000,
    });
    console.log(quesObject);
    this.questionService.postQuestion(quesObject).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
