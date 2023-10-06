
import User from '../model/user-schema.js'
export const userSignup=async(request,response)=>{
try{
   const exist= await User.findOne({username:request.body.username});
   if(exist){
    return response.status(401).json({message:"user alredy exist"})
   }
const user=request.body; 
const newUser=new User(user);
await newUser.save()
response.status(200).json({message:"successfully add user"})

}catch(error){
    response.status(500).json({message:error.message})

}
}

export const loginUser=async(request,response)=>{
try{
   const username=request.body.username;
   const password=request.body.password;
   console.log("fffffffff",await User)
 
   let user= await User.findOne({username:request.body.username,password:password});
   console.log(user)
   if(user) {
    return response.status(200).json({data:user});
   }else{
    return response.status(401).json('invalid user')
   }

}catch(error){
    response.status(500).json('Error',error.message)

}
}