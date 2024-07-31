import { Button, Card } from "react-bootstrap";
import "./App.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import NavBar from "./components/NavBar";

function App() {
  let firstName = "Amine";
  return (
    <div className="App">
      <NavBar />
      <h2 id="welcomeMsg">
        {firstName
          ? `Hello ${firstName}!! Welcome to our Website `
          : "Hello There !Welcome to our Website  "}
      </h2>
      {firstName?<div className="d-flex justify-content-center">
        <img
          id="profilePic"
          src="/pic.png"
          alt="Profile-pic"
        />
      </div>:null}

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3%" ,marginBottom:"5%" ,}}
      >
        <Card  style={{ width: "18rem" }}>
          <Image />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Title>
              <Price />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Button variant="danger">Buy</Button>
          </Card.Body>
        </Card>
        
      </div>
    </div>
  );
}

export default App;
