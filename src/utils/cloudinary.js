import {v2 as cloudinary} from "cloudinary"
import { response } from "express";
import fs from "fs"

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'API Keys' above to copy your API secret
    });
    
    // Upload file 
    const uploadOnCloudinary = async (localFilePath) => {
        try{
            if(!localFilePath) return null;
            cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto"
            })
            console.log("File is uploaded on cloudinary",response.url);
            return response;

        } catch(error){
            // remove the locally save temporary file
            fs.unlinkSync(localFilePath)
            return null;
        }
    }

    export {uploadOnCloudinary}

    // // Upload an image
    //  const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'main-sample',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    
    // console.log(uploadResult);
    
    // // Transform the image
    // const imageUrl = cloudinary.image("main-sample");
    
    // console.log(imageUrl);
    
})();