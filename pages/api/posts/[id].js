import {posts} from '../../../posts';

export default function handler(req, res) {
   
    let id = req.query.id;
    let post =posts.find(p=>p.id==id)
    res.status(200).json(post)
    if(posts){
        res.status(200).json(post) 
    }
    else{
        res.status(400).json({message:"Soory,Your Id Not Found"})
    }
    // posts ?  res.status(200).json(post) : res.status(400).json({message:"Soory,Your Id Not Found"})
}