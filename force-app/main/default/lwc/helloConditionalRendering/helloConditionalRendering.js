import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {


    isVisible=false
    name
    handleClick(){
        this.isVisible=true
    }

    changeHandler(event){
        this.name=event.target.value
    }

    get helloMethod(){
        return this.name == 'hello'


    }

    // falsy values - if u used any of the below values in directives you will always get false in return
    //  x=0, false,undefined,null,""
}