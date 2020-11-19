import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { Test } from './test';
import { Emp } from './emp';
import { Numenum } from './numenum';
import { MessageService } from './message.service';
import { EmployeesService } from './employees.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h1>Hello World</h1>    <p>Hi , How are you ?</p>',
  styleUrls: ['./app.component.css'],
  // styles:['h1{color:orange}']
  //encapsulation:ViewEncapsulation.ShadowDom
  //providers:[]

})
export class AppComponent {
  title = 'Welcome to Sahosoft Solutions';
  city = "Noida";
  col = "2";
  isbold: boolean = true;
  isItalic:boolean=true;
  fontsize = "40";
  Classtoapply="boldClass fontsize";
isboldClass:boolean=true;
isitalicClass:boolean=true;
name:string="Chandan Kumar";
imgpath="assets/chandan.jpg";
currentvalue:boolean=true;
  addcssStyles() {
    let cssStyles = {
      'font-weight': this.isbold ? 'bold' : 'normal',
      'font-style':this.isItalic?'italic':'normal',
      'font-size.px':this.fontsize
    }
    return cssStyles;
  }
  addCssClasses(){
    let cssClasses={
      boldClass:this.isboldClass,
      italicClass:this.isitalicClass,
    }
    return cssClasses;
  }
  enabledisable(){
    this.currentvalue=!this.currentvalue;
  }

  click1(){
    console.log("click 1 fired");
  }
  click2(){
    console.log("Click 2 fired");
  }
  keyup(){
    console.log("keyup fired");
    
  }
  keydown(){
    console.log("keydown fired");
  }
  input(){
    console.log("Input fired");
  }
}
