import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



const FileUpload = (props) => {
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(false);
    const [showUploadComplete, setShowUploadComplete] = useState(false);

    const uploadFile = async () => {
        setUploadProgress(true)
        const resp = await fetch(`https://u6gk632v5cmbxsom35w2eykmoq0xdraf.lambda-url.us-east-1.on.aws/?file_name=${file.name}&bucket=${props.bucket}`)
        const body = await resp.json();

        const uploadResult = await fetch(body.url, {
            method: "PUT",
            headers: {
                'Content-Type': file.type
            },
            body: file,
        });
        setUploadProgress(false)
        setShowUploadComplete(true)
        props.setFileUploaded(true)
        props.setS3Path(`${body.prefix}/${body.fileName}`)
    };

    const handleFileChange = (e) => {
        e.preventDefault()
        setShowUploadComplete(false)
        const file = e.target.files[0];
        setFile(file);
        props.setFileType(file.type)
    };



    return (
        <div style={{ width: "110%" }}>
            <input type="file" onChange={handleFileChange} />
            <button style={{ borderRadius: "15px", padding: "5px" }} type="button" disabled={file === null || showUploadComplete === true} onClick={uploadFile}>
                <span style={{ verticalAlign: "middle", marginRight: "7px" }}><CloudUploadIcon /></span>
                Upload</button>

            {uploadProgress ?
                <CircularProgress style={{ marginLeft: "10px", marginBottom: "-13px", color: "#03178e" }} value={uploadProgress} /> : null
            }
            {showUploadComplete === true ? <CheckIcon style={{ backgroundColor: "#5bd75b", borderRadius: "15px", marginLeft: "10px", marginBottom: "-7px" }} /> : null}

        </div>
    );
};

export default FileUpload;