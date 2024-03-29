import React, { Component } from 'react';
import "./style.css";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import FileBase64 from 'react-file-base64';
import Button from '../button/button';


class MediaDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMedia: []
        }
    }
    getFiles = (file) => {

        this.setState({ selectedMedia: file });
    }
    uploadMedia = () => {
        const { selectedMedia } = this.state;
        const filteredMedia = selectedMedia.map((image) => {
            return {
                "image": {
                    "mime": "image/jpeg",
                    data: image.base64
                }
            }
        })
        let { userData } = this.props;
        let media = [...userData.media, ...filteredMedia];
        userData = { ...userData, media: media };
        this.props.updateUserDetails(userData);
        // console.log(this.state.selectedMedia);
        // console.log(filteredMedia);
        // this.props.updateMedia(filteredMedia)
    }
    render() {
        const { userData ,showEdit } = this.props;
        const { selectedMedia } = this.state;
        return (
            <div>
                <div className='row'>
                    {userData?.media?.map((media, i) => {
                        return (
                            <div className="col-md-4">
                                <img className="profile-female-image" src={media.image.data} alt="" /> :
                            </div>
                        )
                        // <div className={this.getClass(user.gender)} key={i}> {user.firstName} 

                        // </div>)

                    })}
                </div>
                {showEdit && (
                    <div className='media-container'>
                        <h5 className='heading-welcome'>Welcome <span className='bold-color' >{userData.name} </span>@ Bk Matrimony!</h5>
                        <div className='media-info'>
                            <div className='row'>
                                <h6>Get more responses by adding your photos</h6>
                                <p className='para'>You can increase your profile visibility by adding more photographs.You
                                    can add maximum 20 photographs in your profile and you can’t update same image
                                    twice.Share photographs of self, family and friends to let the world know more
                                    about you.
                                </p>
                                <FileBase64
                                    multiple={true}
                                    onDone={this.getFiles.bind(this)} />
                                {selectedMedia?.map((image, i) => {
                                    return (
                                        <div className="col-md-4">
                                            <img className="profile-female-image" src={image.base64} alt="" /> :
                                        </div>
                                    )
                                    // <div className={this.getClass(user.gender)} key={i}> {user.firstName} 

                                    // </div>)

                                })}
                                <Button value={'Upload Media'} onSubmitBtn={this.uploadMedia} btnClass={'btn-danger'} />

                                {/* <div className='col-md-4'>
                            <img className="image" src="https://www.lovevivah.com/assets/img/avtar-image.png" alt="" />
                        </div>
                        <div className='col-md-4'>

                            <div className='upload-ways'>

                                <h6 className='photo'>UPLOAD PHOTOS</h6>

                                <div className='link      col-md-12'>
                                    <Link className='icon-button' to="">
                                        <FontAwesomeIcon className='icon' icon={faDesktop} />
                                    </Link>
                                    <Button className='computerbtn' variant="warning">From Computer</Button>
                                </div>
                                <div className='link    col-md-12 '>
                                    <Link className='icon-button' to="">
                                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                                    </Link>
                                    <Button className='facebookbtn' variant="warning">From Facebook</Button>
                                </div>
                            </div>

                        </div> */}

                            </div>
                        </div>
                    </div>
                )}
            </div>);
    }
}
// const mapStateToProps = (state) => {
//     return {
//         userData: state.user.userData
//     }
// }
export default MediaDetails;

