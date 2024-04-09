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
        const { id } = props;
        await uploadAboutImage(files, id);
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
    return (
        <div>
            <div className='about_Dropzone' {...getRootProps()}>
                <input {...getInputProps()} />
                <label className='about_upload_file_content'>Click here to upload file or drag them to upload</label>
            </div>
            <div className='about_dropzone_image_show'>
                {
                    files?.map((files, index) => {
                        return (
                            <div className='about_dropzone_main_container' key={index}>
                                <div className='about_dropzone_img_container' style={{ backgroundImage: `url(${files.preview})` }} />
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