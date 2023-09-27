import React, { useState } from 'react';
import AWS from 'aws-sdk';


const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const uploadFile = async () => {
        const S3_BUCKET = "pittsford-printing-uploads";
        const REGION = "us-east-1";
    
        AWS.config.update({
          accessKeyId: "AKIAT4KWJP2347US2J4N",
          secretAccessKey: "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",
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
            console.log(
              "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
            );
          })
          .promise();
    
        await upload.then((err, data) => {
          console.log(err);
          alert("File uploaded successfully.");
        });
      };



    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadFile}>Upload</button>
        </div>
    );
};

export default FileUpload;