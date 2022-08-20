import React, {Fragment} from 'react';
import styled from "styled-components"
import NavigationBar from "../../components/NavigationBar";
import CardNote from "../../components/CardNote";

const CardContainer = styled.div`
    margin: 20px;
`

function App() {
    return (
        <Fragment>
            <NavigationBar title={"FIAP-NOTE"}/>
            <CardContainer>
                <CardNote description={"Estudar React"}/>
            </CardContainer>
        </Fragment>
    );
}

export default App;
