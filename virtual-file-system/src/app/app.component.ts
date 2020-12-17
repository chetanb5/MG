import { Component } from '@angular/core';
import { concat, from } from 'rxjs';
import {command} from "./command.interface";
import { ListCommandsComponent } from './list-commands/list-commands.component';
import {COMMANDS} from "./mock-commands";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'virtual-file-system';

  command : string;

  basepath : string ="D:/MG/";

  directory: string[] =[];

  result;

  result1;

  Clicked() :void {
    if(this.command=="help"){
      this.getResults();
    }
    else{
      this.exCommand(this.command);
    }
  }
  getResults() : command[]{
    return this.result =COMMANDS;
  }

  exCommand(com: string){
    console.log(com);
   if(com.split(' ')[0] =="mkdir"){
     this.directory.push(com.split(' ')[1]);
     return this.result1 = (this.basepath);
   }
   if(com.split(' ')[0] =="cd"){
    return this.result1 = (this.basepath+com.split(' ')[1]);
  }
  if(com.split(' ')[0] =="cd" && com.split(' ')[1] =="\\"){
    return this.result1 = (this.basepath);
  }
  if(com.split(' ')[0] =="dir"){
    return this.result1 = this.directory;
  }

  }




}
