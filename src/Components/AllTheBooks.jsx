import { Button, Card, Col, Row } from "react-bootstrap";
import fantasy from "../Assets/fantasy.json";
import history from "../Assets/history.json";
import horror from "../Assets/horror.json";
import romance from "../Assets/romance.json";
import scifi from "../Assets/scifi.json";

const AllTheBooks = (props) => (
  <Row>
    {fantasy.map((book) => (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="mb-4">
        <Card className="h-100">
          <Card.Img className="img-fluid h-50" variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <span>{book.price}€ </span>
              <span> {book.category}</span>
            </Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);
export default AllTheBooks;
