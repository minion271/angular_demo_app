import { Video } from './video.model';
export class Comment{
  constructor(
    private user_username?:string,
    private message?:string,
    private gen_time?:Date
  ){}
}
