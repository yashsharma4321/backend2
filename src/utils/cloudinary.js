import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


          
cloudinary.config({ 
  cloud_name : 'danptkyum',
  api_key:  '132994117394836',
  api_secret:  'VKy2NGe5sKlSC5uVgbbgu6mrH7c'
});

const uploadOnCloudinary = async(localFilePath)=>{
    try{
        if(!localFilePath) return null
        //upload the file on cloudniry
      const  response = await  cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded successfull

        //console.log("file is uploaded on cloudinary",response.url);
        fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation got failed
        return response;
    }
    catch(err){
        fs.unlinkSync(localFilePath)//remove the locally saved temorary file as the upload operation gor failed
        return null;
    }

}




cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });




export {uploadOnCloudinary}