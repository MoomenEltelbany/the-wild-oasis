import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

export default function App() {
    return (
        <>
            <GlobalStyles />
            <div>
                <Row type="vertical">
                    <Heading>Hello World</Heading>
                    <Heading as="h2">Hello H2</Heading>
                </Row>
                <Heading as="h3">Hello H3</Heading>
                <Button size="large" variation="danger">
                    Check in
                </Button>
                <Button size="small">Check Out</Button>
                <Input type="number" placeholder="enter the number of guests" />
            </div>
        </>
    );
}
