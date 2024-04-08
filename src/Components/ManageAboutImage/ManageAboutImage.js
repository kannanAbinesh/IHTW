/* Plugins */
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { connect } from 'react-redux';

/* Helpers and Actions */
import { uploadAboutImage } from '../../Actions/uploadAboutImage';

/* style */
import './manageAboutImage.css';

const ManageAboutImage = (props) => {

    const handleUpload = async(files) => {
        const { uploadAboutImage } = props;
        await uploadAboutImage(files);
    }
    
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'jpeg',
        onDrop: (acceptFiles) => {
            handleUpload(acceptFiles);
            setFiles(
                acceptFiles.map(file => Object.assign(
                    file, {
                        preview: URL.createObjectURL(file)
                    }
                ))
            );
        }
    });

    const images = files?.map(file => (
        <img src={file?.preview} key={file?.name} alt='about image' style={{width: '200px', height: '200px'}}/>
    ))

    return (
        <div>
            <div className='about_Dropzone' {...getRootProps()}>
                <input {...getInputProps()} />
                <label className='about_upload_file_content'>Click here to upload file or drag them to upload</label>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '24% 24% 24% 24%', gridGap: '15px', marginTop: '30px', marginBottom: '15px'}}>
                {
                    files?.map((files, index) => {
                        return (
                            <div key={index} style={{position: 'relative'}}>
                                <div style={{
                                    backgroundImage: `url(${files.preview})`, 
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    paddingTop: '70%',
                                    borderRadius: '5px',
                                    backgroundPosition: '50% 50%'
                                }} />
                                <div style={{position: 'absolute', right: '10px', top: '10px'}}>
                                    <div style={{position: 'relative', display: 'inline-block'}}>
                                        <div style={{width: '20px', height: '20px', borderRadius: '50%', background: 'white', cursor: 'pointer', textAlign: 'center'}} >
                                            <MdOutlineDeleteOutline style={{verticalAlign: 'top', marginTop: '2px'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

const mapState = state => ({});

const mapDispatch = {
    uploadAboutImage
}

export default (connect(mapState, mapDispatch)(ManageAboutImage));