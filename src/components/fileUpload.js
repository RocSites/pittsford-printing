import React, { useState } from 'react';
// import fetch from 'fetch';
import AWS from 'aws-sdk';
import { Formik, Form, Field } from 'formik';



const FileUpload = (props) => {
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(null);
    const [showUploadComplete, setShowUploadComplete] = useState(false);


    const uploadFile = async () => {
        const resp = await fetch(`https://u6gk632v5cmbxsom35w2eykmoq0xdraf.lambda-url.us-east-1.on.aws/?file_name=${file.name}&bucket=${props.bucket}`)
        const body = await resp.json(); 
        console.log(props.bucket)

        const uploadResult = await fetch(body.url, {
            method: "PUT",
            headers:{
                'Content-Type': file.type
            },
            body: file,
          });
          setShowUploadComplete(true)
          props.setFileUploaded(true)
          props.setS3Path(`${body.prefix}/${body.fileName}`)
    };

    const handleFileChange = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        setFile(file);
        props.setFileType(file.type)
    };



    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {file && <Field type="hidden" name="file_name" value={props.s3Path}/> }
            {file && <Field type="hidden" name="file_type" value={file.type}/> }
            <button type="button" disabled={file === null } onClick={uploadFile}>Upload</button>
            {uploadProgress ?
                <p>{uploadProgress}</p> : null
            }
            {showUploadComplete === true ? <p>Your upload is complete!</p> : null}

        </div>
    );
};

export default FileUpload;