import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from '../button/button';
import female from '../../assets/female_large.jpg';

class ProfileCard extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { userData } = this.props
    const propfilePhoto = userData?.profilePhoto?.image?.data ?
      "data:image/jpeg;base64," + userData?.profilePhoto?.image?.data : '';

    return (
      <>
        <CardGroup>
          <Card>
            {
              (userData?.profilePhoto?.image?.data) ?

                <Card.Img variant="top" src={propfilePhoto} /> :
                <Card.Img variant="top" src={female} />

            }
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <h6></h6>
                <p></p>
                <Button btnClass="btn-danger" value="Veiw Profile" />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </>
    );
  }
}


export default ProfileCard;
