import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const MAX_COUNT = 5;

const MultipleFileUpload = (props) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(false);
    const [showUploadComplete, setShowUploadComplete] = useState(false);
    const [fileLimit, setFileLimit] = useState(false);



    const uploadFile = async () => {
        setUploadProgress(true)

        //TODO - refactor the resp to send file_names (multiple), better way than queryParams?
        //Then refactor orderForm to pass multiple file names and types (s3Path and fileType respectively)


        // const resp = await fetch(`https://u6gk632v5cmbxsom35w2eykmoq0xdraf.lambda-url.us-east-1.on.aws/?file_name=${file.name}&bucket=${props.bucket}`)
        // const body = await resp.json();
        setUploadProgress(false)
        setShowUploadComplete(true)
        // props.setFilesUploaded(true)
        // props.setS3Path(`${body.prefix}/${body.files}`)
    };

    const handleUploadFiles = (files) => {
        console.log(files)
    
        // setShowUploadComplete(false)
        //refactor to pass array that includes upload data, name and type
        // props.setFileTypes(fileTypes)

        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)
    };

    const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }

    const handleRemove = (f) => {
        setUploadedFiles(uploadedFiles.filter(x => x.name !== f.name));
      };

      const formatBytes = (b) => {
        const units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        let l = 0
        let n = b
      
        while (n >= 1024) {
          n /= 1024
          l += 1
        }
      
        return `${n.toFixed(n >= 10 || l < 1 ? 0 : 1)}${units[l]}`
      }


    return (
        <div style={{ width: "110%" }}>
            <input type="file" multiple onChange={handleFileEvent} />
            {uploadedFiles && <Field type="hidden" name="file_name" value={props.s3Path} />}
            {uploadedFiles && <Field type="hidden" name="file_type" value={uploadedFiles.type} />}
            <button style={{ borderRadius: "15px", padding: "5px" }} type="button" disabled={uploadedFiles.length <= 0} onClick={uploadFile}>
                <span style={{ verticalAlign: "middle", marginRight: "7px" }}><CloudUploadIcon /></span>
                Upload</button>
                <div className="uploaded-files-list">
				{uploadedFiles.map(file => (
                    <div style={{display: "flex", justifyContent: "space-between", border: "1px solid black", borderRadius: "4px", padding: "4px", margin: "4px", width: "50%"}}>
                        <p style={{marginBottom: 0, padding: "4px"}}>{file.name}, {formatBytes(file.size)}</p>
                        <span className="remove-icon" onClick={() => handleRemove(file)}></span>
                    </div>
                ))}
			</div>

            {uploadProgress ?
                <CircularProgress style={{ marginLeft: "10px", marginBottom: "-13px", color: "#03178e" }} value={uploadProgress} /> : null
            }
            {showUploadComplete === true ? <CheckIcon style={{ backgroundColor: "#5bd75b", borderRadius: "15px", marginLeft: "10px", marginBottom: "-7px" }} /> : null}

        </div>
    );
};

export default MultipleFileUpload;