import Card from "react-bootstrap/Card";

function Content4() {
  return (
    <div>
      <div>
        <h2 className="name">Johnny Makelele</h2>
        <p className="city">Lagos, Nigeria </p>
      </div>
      <h1 className="header">Courses</h1>
      <ul class="unorder">
        <li>All</li>
        <li>Current</li>
        <li>Pending </li>
        <li>Completed</li>
      </ul>
      <Card className="card1">
        <Card.Body>
          <Card.Text className="card1text1">
            programming october 09,2022
          </Card.Text>
          <Card.Text className="card1text2">
            Object Oriented Programming in Java{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card2">
        <Card.Body>
          <Card.Text className="card2text1">
            How to track your Course progress easily?
          </Card.Text>
          <Card.Text className="card2text2">Find more</Card.Text>
        </Card.Body>
      </Card>{" "}
      <Card className="card1">
        <Card.Body>
          <Card.Text className="card1text1">Design sep 09,2022</Card.Text>
          <Card.Text className="card1text2">
            Visual Elements of User Interface Design
          </Card.Text>
        </Card.Body>
      </Card>{" "}
      <Card className="card1">
        <Card.Body>
          <Card.Text className="card1text1">Design sep 09,2022</Card.Text>
          <Card.Text className="card1text2">
            The Strategy of Content Marketing
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Content4;
