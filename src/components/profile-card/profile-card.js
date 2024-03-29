import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from '../button/button';
import female from '../../assets/female_large.jpg';
import './styles.css';


class ProfileCard extends Component {
  constructor(props) {
    super(props)
  }

  getProfile = (userData) => {
      this.props.getProfile(userData);
  }

  render() {
    const { userData, getProfile } = this.props
    const propfilePhoto = userData?.profilePhoto?.image?.data ?
      userData?.profilePhoto?.image?.data : '';

    return (
      <>
        <CardGroup  >
          <Card >
            <div className='profileContent'>
              {
                (userData?.profilePhoto?.image?.data) ?

                  <Card.Img className='profile-photos-container' variant="top" src={propfilePhoto} /> :
                  <Card.Img className='profile-photos-container' variant="top" src={female} />

              }
            </div>
            <Card.Body>
              <Card.Title>

                <h4 className='profile-name'>{userData.firstName}</h4>


              </Card.Title>
              <Card.Text>
                <small className='user-description'>
                  {userData?.age ? userData?.age : ''+ ', '}
                  </small>
                  <small className='user-description'>{ userData.height? userData.height: ''  + ',' }
                  </small>
                  <small className='user-description'>{ userData.city? userData.city: ''  + ',' }
                  </small>
                  <small className='user-description'>{ userData.caste? userData.caste: ''  + ',' }
                  </small>

                <Button btnClass="btn-danger" value="View Profile" onSubmitBtn={() => {this.getProfile(userData)}}/>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </>
    );
  }
}


export default ProfileCard;
