import React, { useState } from 'react';
import AWS from 'aws-sdk';


const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(null);
    const [showUploadComplete, setShowUploadComplete] = useState(false);

    const uploadFile = async () => {
        const S3_BUCKET = "pittsford-printing-uploads";
        const REGION = "us-east-1";

        AWS.config.update({
            accessKeyId: "keys",
            secretAccessKey: "keys",
        });
        const s3 = new AWS.S3({
            params: { Bucket: S3_BUCKET },
            region: REGION,
        });

        const params = {
            Bucket: S3_BUCKET,
            Key: file.name,
            Body: file,
        };

        var upload = s3
            .putObject(params)
            .on("httpUploadProgress", (evt) => {
                    setUploadProgress( "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%")
                   
                
            })
            .promise();

        await upload.then((err, data) => {
            console.log(err);
            setShowUploadComplete(true)
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };



    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadFile}>Upload</button>
            {uploadProgress ?
                <p>{uploadProgress}</p> : null
            }
            {showUploadComplete === true ? <p>Your upload is complete!</p>: null}

        </div>
    );
};

export default FileUpload;