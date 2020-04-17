// to be able to import the class
export class CheckAccount {
  private _balance:number = 0; 
   _title : string;
  constructor(title:string){
      this._title =title;

  }
  get balance(){
      return this._balance
  }
  set balance(val:number){
      this._balance = val;
  }
  deposit(amount:number){
      this.balance += amount;
  }
  withdraw(amount:number){
    this.balance -= amount;
}
get title(){
    return this._title
}
set title(name:string){
    this._title = name;
}
}
