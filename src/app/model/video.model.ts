import { Comment } from '@angular/compiler';

export class Video{
  constructor(
    public title?:string,
    public url?:string,
    public description?:string,
    public thumbnail?:string,
    public comments?:Comment[]
  ){}
}
