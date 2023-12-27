import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



const MultipleFileUpload = (props) => {
    const [files, setFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(false);
    const [showUploadComplete, setShowUploadComplete] = useState(false);



    const uploadFile = async () => {
        setUploadProgress(true)
        // const resp = await fetch(`https://u6gk632v5cmbxsom35w2eykmoq0xdraf.lambda-url.us-east-1.on.aws/?file_name=${file.name}&bucket=${props.bucket}`)
        // const body = await resp.json();

        setUploadProgress(false)
        setShowUploadComplete(true)
        // props.setFilesUploaded(true)
        // props.setS3Path(`${body.prefix}/${body.files}`)
    };

    const handleFileChange = (e) => {
        console.log(files)
        e.preventDefault()

        setShowUploadComplete(false)    
        //refactor to pass array
        let fileTypes = files.map(file => file.type)
        props.setFileTypes(fileTypes)
    };

    const packFiles = (files)=> {
        const data = new FormData();

        [...files].forEach((file, i) => {
            data.append(`file-${i}`, file, file.name)
        })
        return data
    }

    const renderFileList = () => (<ol>
        {[...files].map((f, i) => (
            <li key={i}>{f.name} - {f.type}</li>
        ))}
    </ol>)



    return (
        <div style={{width: "110%"}}>
            <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
            {renderFileList()}
            {files && <Field type="hidden" name="file_name" value={props.s3Path} />}
            {files && <Field type="hidden" name="file_type" value={files.type} />}
            <button style={{ borderRadius: "15px", padding: "5px" }} type="button" disabled={files === null || showUploadComplete === true} onClick={uploadFile}>
                <span style={{ verticalAlign: "middle", marginRight: "7px" }}><CloudUploadIcon /></span>
            Upload</button>


            {uploadProgress ?
                <CircularProgress style={{ marginLeft: "10px", marginBottom: "-13px", color: "#03178e" }} value={uploadProgress} /> : null
            }
            {showUploadComplete === true ? <CheckIcon style={{ backgroundColor: "#5bd75b", borderRadius: "15px", marginLeft: "10px", marginBottom: "-7px" }} /> : null}

        </div>
    );
};

export default MultipleFileUpload;