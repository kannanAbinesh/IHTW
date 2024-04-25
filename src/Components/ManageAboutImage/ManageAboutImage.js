/* Plugins */
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';

/* Components */
import ManageAboutImageDisplay from '../ManageAboutImageDisplay/ManageAboutImageDisplay';

/* Helpers and Actions */
import { uploadAboutImage } from '../../Actions/uploadAboutImage';

/* style */
import './manageAboutImage.css';

const ManageAboutImage = (props) => {

    const handleUpload = async(files) => {
        const { uploadAboutImage, handleUpdateImages } = props;
        const { id } = props;
        let updateStatus = await uploadAboutImage(files, id);
        if(updateStatus === "updated") handleUpdateImages();
    };
    
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'jpeg',
        onDrop: (acceptFiles) => {
            handleUpload(acceptFiles);
        }
    });

    return (
        <div>
            <div className='about_Dropzone' {...getRootProps()}>
                <input {...getInputProps()} />
                <label className='about_upload_file_content'>Click here to upload file or drag them to upload</label>
            </div>
            {
                props?.images && props?.images.length > 0 && <ManageAboutImageDisplay 
                    images={props?.images}
                    handleUpdateImages={props?.handleUpdateImages}
                />
            }
        </div>
    )
};

const mapState = state => ({});

const mapDispatch = {
    uploadAboutImage
}

export default (connect(mapState, mapDispatch)(ManageAboutImage));