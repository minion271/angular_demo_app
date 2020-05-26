export class User{
  constructor(
    public username:string,
    public password:string
  ){}

  public get getUsername() : string {
    return this.username;
  }

}
