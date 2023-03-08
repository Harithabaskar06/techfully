import Card from "react-bootstrap/Card";
function Content5() {
  return (
    <div>
      <h2>Upcoming Classes</h2>
      <h5 class="margin">Up-Next</h5>
      <Card className="cardupcoming">
        <Card.Body>
          <Card.Text class="cardupcomingtext">2021-2022</Card.Text>
          <Card.Text class="user">User Interface Design</Card.Text>
        </Card.Body>
      </Card>
      <h5 class="margin">After</h5>
      <Card className="cardupcoming">
        <Card.Body>
          <Card.Text class="cardupcomingtext">2021-2022</Card.Text>
          <Card.Text class="cardtext">
            Discrete math for absolute beginners
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardupcoming">
        <Card.Body>
          <Card.Text class="cardupcomingtext">2021-2022</Card.Text>
          <Card.Text class="cardtext">
            The Medications of Marcus Aurellus
          </Card.Text>
        </Card.Body>
      </Card>{" "}
      <Card className="cardupcoming">
        <Card.Body>
          <Card.Text class="cardupcomingtext">2021-2022</Card.Text>
          <Card.Text class="cardtext">Atlantis and the Younger Days</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Content5;
