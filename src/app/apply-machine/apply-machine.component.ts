import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-apply-machine',
  templateUrl: './apply-machine.component.html',
  styleUrls: ['./apply-machine.component.scss']
})
export class ApplyMachineComponent {

  public AllData:any= []
  public manchineName:any = ''
  public date:any = ''
  public applicant:any = ''
  public cellphone:any = ''

  displayModel:boolean = false


  ngOnInit(){
    this.http.get("http://localhost:3000/applicant").subscribe(result=>{
      this.AllData = result
      console.log(this.AllData);
    })
  }
  getApplication(){
    console.log(this.manchineName);
    console.log(this.applicant);
    console.log(this.cellphone);
    console.log(this.date);
  }

  userForm = this.fb.group({
    manchineName:['',Validators.required],
    applicant:['',Validators.required],
    cellphone:['',Validators.required],
    date:['',Validators.required]
  })

  constructor(public fb:FormBuilder,public http:HttpClient){

  }
  addUser(){
    console.log(this.userForm);

  }
  showModal(){
    this.displayModel = true

  }

  onShow(){
    let a = {ManchineNameData:this.manchineName,ApplicantData:this.applicant,CellphoneData:this.cellphone,DateData:this.date}
    this.AllData = a
    const createapi = "http://localhost:3000/applicant"
    this.http.post(createapi,this.AllData).subscribe(result=>{
      console.log('添加成功');
    })
  }
}
