import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @State()
  todoList:any[]=["Eat Breakfast","Eat Lunch"]
  @State()
  value:string
  render() {
    return <div>
      {this.todoList.map((str)=>
        <div>{str}</div>
      )}
      <input onInput={(e:any)=>{this.value=e.target.value}}></input>
      <button onClick={()=>{this.todoList=[...this.todoList,this.value]}}>+</button>
      <button onClick={()=>{
        let Newarr = []
        for (let i=0;i<this.todoList.length-1;i++){
          Newarr.push(this.todoList[i])
      }
      this.todoList=Newarr
    }
        }>X</button>
    </div>
  }
}