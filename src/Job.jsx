import { Button, Card, CardBody, CardText, CardTitle, Col } from 'reactstrap';

const Job = ({ title, location, desc, applyUrl }) => {
  return (
    <Col xs="12" className="py-3">
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{location}</CardText>
          <CardText>{desc}</CardText>
          <Button color="success" block href={applyUrl} target="_blank">
            apply
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Job;
