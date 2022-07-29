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


  render() {
    const { userData } = this.props
    const propfilePhoto = userData?.profilePhoto?.image?.data ?
      userData?.profilePhoto?.image?.data : '';

    return (
      <>
        <CardGroup  >
          <Card >
          <div>
            {
              (userData?.profilePhoto?.image?.data) ?

                <Card.Img className='profile-photos-container'   variant="top" src={propfilePhoto} /> :
                <Card.Img  className='profile-photos-container'  variant="top" src={female} />

            }
       </div>
            <Card.Body>
              <Card.Title>
                
                <h4 className='profile-name'>{userData.firstName}</h4>
 

              </Card.Title>
              <Card.Text>
                <h6></h6>
                <small className='user-description'>{userData.age+ ', '+ userData.height+','+ userData.city+','+userData.caste}</small>

                <Button btnClass="btn-danger" value="Veiw Profile" />
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </>
    );
  }
}


export default ProfileCard;
