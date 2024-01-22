import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "../components/main.css"
import prettyBytes from 'pretty-bytes';

const FileUpload = (props) => {
    const [file, setFile] = useState(null);
    const [fileSize, setFileSize] = useState(null);
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
        setFileSize(prettyBytes(file.size));
        props.setFileType(file.type)
    };

    return (
        <div className="fileUploadWrapper">
            <label className={file === null ? `customFileUploadEnabled` : `customFileUpload`}>
                Choose file
                <input name="file-upload" className="fileUploadInput" type="file" onChange={handleFileChange} />

            </label>
            <div style={{display: "flex"}}>
                {file !== null ? <div className="fileDetailStyle">{`${file.name},  ${fileSize}`}</div> : null}
            </div>

            <button className={file === null || showUploadComplete === true ? `fileUploadButtonDisabled` : `fileUploadButtonEnabled`} type="button" disabled={file === null || showUploadComplete === true} onClick={uploadFile}>
                <span style={{ verticalAlign: "middle", marginRight: "7px", cursor: "pointer" }}><CloudUploadIcon /></span>
                Upload</button>

            {uploadProgress ?
                <CircularProgress style={{ marginLeft: "10px", marginBottom: "-13px", color: "#03178e" }} value={uploadProgress} /> : null
            }
            {showUploadComplete === true ? <CheckIcon className="uploadCheckIcon" /> : null}
            {showUploadComplete === true ? (
                <button style={{ borderRadius: "15px", verticalALign: "middle", padding: "6px", margin: "4px", backgroundColor: "#ff00006e" }} type="button" onClick={() => props.onDelete()}>
                    Remove File
                </button>
            ) : null}

        </div>
    );
};

export default FileUpload;