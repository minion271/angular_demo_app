import { Comment } from '@angular/compiler';

export class Video{
  constructor(
    public id?:number,
    public title?:string,
    public url?:string,
    public description?:string,
    public thumbnail?:string,
    public comment?:Comment[],
    public commentDTOS?:Comment[],
    public total_view?:number,
    public total_like?:number,
    public date_public?:Date
  ){}
}
