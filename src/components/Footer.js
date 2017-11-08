/**
 * Created by luca on 2/11/2017.
 */
import React from 'react';
import {Hero} from 'reactbulma'
import {Container} from 'reactbulma'
import {SubTitle} from 'reactbulma'
import {Title} from 'reactbulma'
import {Title} from 'reactbulma'

export class Footer extends React.Component{
    render() {
        return (
            <Hero success fullheight>
                <Hero.Head>
                    <Nav>
                        <Container>
                            <Nav.Left>
                                <Nav.Item>
                                    <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                                </Nav.Item>
                            </Nav.Left>
                            <Nav.Toggle/>

                            <Nav.Right menu>
                                <Nav.Item active>
                                    Home
                                </Nav.Item>
                                <Nav.Item>
                                    Examples
                                </Nav.Item>
                                <Nav.Item>
                                    Documentation
                                </Nav.Item>
                                <Nav.Item>
                                    <Button success inverted>
                                        <Icon>
                                            <i className="fa fa-github"/>
                                        </Icon>
                                        <span>Download</span>
                                    </Button>
                                </Nav.Item>
                            </Nav.Right>
                        </Container>
                    </Nav>
                </Hero.Head>
                <Hero.Body>
                    <Container hasTextCentered>
                        <Title>
                            Title
                        </Title>
                        <SubTitle>
                            Subtitle
                        </SubTitle>
                    </Container>
                </Hero.Body>
                <Hero.Foot>
                    <Tabs boxed fullwidth>
                        <Container>
                            <ul>
                                <li className="active"><a>Overview</a></li>
                                <li><a>Modifiers</a></li>
                                <li><a>Grid</a></li>
                                <li><a>Elements</a></li>
                                <li><a>Components</a></li>
                                <li><a>Layout</a></li>
                            </ul>
                        </Container>
                    </Tabs>
                </Hero.Foot>
            </Hero>
        );
    }
}
