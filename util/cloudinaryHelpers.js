const { cloudinary } = require("./helper");

const uploadImage = async (base64ImageString) => {
    try {
        const uploadResult = await cloudinary.uploader.upload(
            base64ImageString,
            {
                upload_preset: "upload",
            }
        );
        console.log(uploadResult["url"])
        return uploadResult && uploadResult["url"]
            ? uploadResult["url"]
            : "Unable to upload";
    } catch (error) {
        console.log(error);
        return "Unable to upload";
    }
};

exports.uploadImage = uploadImage;
