/* Plugins */
import React from 'react';
import { connect } from 'react-redux';
import { MdOutlineDeleteOutline } from "react-icons/md";

/* Actions and Helpers */
import { delteAboutImage } from '../../Actions/uploadAboutImage';

class ManageAboutImageDisplay extends React.Component {

    handleDelete = async (id) => {
        const { delteAboutImage, handleUpdateImages } = this.props;
        let status = await delteAboutImage(id);
        if(status == 'deleted') handleUpdateImages() 
    };

    render() {
        const { images } = this.props;
        return (
            <div>
                <div className='about_dropzone_image_show'>
                {
                    images && images.length > 0 && images?.map((files, index) => {
                        return (
                            <div className='about_dropzone_main_container' key={index} onClick={() => this.handleDelete(files?.id)}>
                                <div className='about_dropzone_img_container' style={{ backgroundImage: `url(http://localhost:3000/${files.name})` }} />
                                <div style={{position: 'absolute', right: '10px', top: '10px',  width: '20px', height: '20px'}}>
                                    <div style={{position: 'relative', display: 'inline-block', width: '20px', height: '20px'}}>
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
    }
};

const mapState = state => ({});

const mapDispatch = {
    delteAboutImage
}

export default (connect(mapState, mapDispatch)(ManageAboutImageDisplay));