import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-information-machine',
  templateUrl: './information-machine.component.html',
  styleUrls: ['./information-machine.component.scss']
})
export class InformationMachineComponent {

  // 廠線
  public areaMachine:any = []
  public areaMachineSelect:any = ""
// 機台
  public LineMachine:any = []
  public LineMachinSelect:any = ''
// 最後一台機台ID
  public ProductMachine:any = []
  public ProductSelect:any = ''
// 機台狀況
  public ProductStatus:any = []

  cities:any = []
  selectedCity: City | undefined;


  constructor(public http:HttpClient){

  }
  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];

      const apiUrl = 'http://localhost:3000/productArea'
      this.http.get(apiUrl).subscribe(data=>{
        this.areaMachine = data
        this.areaMachineSelect = this.areaMachine.id
      })
  }
  // 一級聯動
  changeNum($event:any){
    console.log($event);

    this.areaMachineSelect = $event.value.id
    console.log(this.areaMachineSelect);
    const apiUrlOne = `http://localhost:3000/ProductLine?categoryId=${this.areaMachineSelect}`
    this.http.get(apiUrlOne).subscribe((data)=>{
        this.LineMachine = data
    })
    this.LineMachine = []
    this.ProductMachine = []

  }
  // 二級聯動
  changeLine($event:any){
    console.log($event);

    this.LineMachinSelect = $event.value.id
    console.log(this.LineMachinSelect);
    const apiUrlTwo = `http://localhost:3000/Machine?categoryId=${this.areaMachineSelect}&category2Id=${this.LineMachinSelect}`
    this.http.get(apiUrlTwo).subscribe(data=>{
      console.log(data);

      this.ProductMachine = data
    })
    this.ProductMachine = []
  }
  // 三級聯動(機台)
  changeMachine($event:any){
    this.ProductSelect = $event.value.id
    console.log(this.ProductSelect);
  }

  getMachineInfo(){
    const AreaId = this.areaMachineSelect
    const LineId = this.LineMachinSelect
    const ProductId = this.ProductSelect
    const apiUrlThree = `http://localhost:3000/MachineStatus?categoryId=${AreaId}&category2Id=${LineId}&category3Id=${ProductId}`
    // const apiUrlThree = "http://localhost:3000/MachineStatus?categoryId=2&category2Id=1&category3Id=1"

    this.http.get(apiUrlThree).subscribe(data=>{
      this.ProductStatus = data
      console.log(this.ProductStatus);
    })
  }
}
