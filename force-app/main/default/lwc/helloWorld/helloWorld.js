import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname="Zero to hero"
    title="Salesforce Developer"
    
    // method
    changeHandler(event){
        this.title=event.target.value

    }
    // First option using track and second option is used ... this operator to create duplicate copy and append it by using old method
    // @track address={
    //     city:'Agra',
    //     postcode:3008,
    //     country:'UP'
    // }


    address={
        city:'Agra',
        postcode:3008,
        country:'UP'
    }

    @track a=[1,2,3]
    trackHandler(event){

        this.address = {...this.address,"city":event.target.value}
        this.a[0]=event.target.value
    }

    /***getter example. Used get method to convert the function the method into getter*/
    users=["john","smith","nik"]
    num1=10
    num2=20

    get firstUser(){
        return this.users[0].toUpperCase()
        
    }

    get multiply(){
        return this.num1*this.num2
    }











}