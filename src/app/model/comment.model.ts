import { Video } from './video.model';
import { User } from './user.model';

export class Comment{
  constructor(
    public video?:Video,
    public user_username?:string,
    public message?:string,
    public gen_time?:Date
  ){}
}
