import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from 'cloudinary' 

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
});

export const storagePost = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'CommunityPosts',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    }
});

export const storageTask = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Task',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    }
});

