import React from 'react'
import { Row, Column, Container, Jumbotron } from '../bootstrap';

import Layout from '../components/layout';

const IndexPage = () => (
    <Layout>
        <Jumbotron>
            <Container>
                <h1>Hi people</h1>
            </Container>
        </Jumbotron>
        <Container full color="red">
            <Container>
                <Row columnPadding="10px">
                    <Column debug size={{ xs: 1, sm: 1 / 2, md: 1 / 4 }}>r1.1</Column>
                    <Column debug size={{ xs: 1, sm: 1 / 2, md: 1 / 4 }}>r1.2</Column>
                    <Column debug size={{ xs: 1, sm: 1 / 2, md: 1 / 4 }}>r1.3</Column>
                    <Column debug size={{ xs: 1, sm: 1 / 2, md: 1 / 4 }}>r1.4</Column>
                </Row>
                <Row>
                    <Column debug size={{ xs: 1, md: 1 / 3 }}>r2.1</Column>
                    <Column debug size={{ xs: 1, md: 1 / 3 }}>r2.2</Column>
                    <Column debug size={{ xs: 1, md: 1 / 3 }}>
                        <div>r2.3</div>
                    </Column>
                </Row>
                <Row>
                    <Column debug size={{ xs: 1, md: 1 / 3 }}>r3.1</Column>
                    <Column debug size={{ xs: 1, md: 0 }}>r3.2</Column>
                    <Column debug size={{ xs: 1, md: 1 / 3 }} offSets={{ md: 1 / 3 }}>
                        <div>r3.3</div>
                    </Column>
                </Row>
            </Container>
        </Container>
    </Layout>
)

export default IndexPage
