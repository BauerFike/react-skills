/**
 * Created by luca on 31/10/2017.
 */
import React from 'react'
import {Card} from 'reactbulma'
import {Media} from 'reactbulma'
import {Image} from 'reactbulma'
import {Content} from 'reactbulma'
import {Title} from 'reactbulma'
import {SubTitle} from 'reactbulma'
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types'

export class SkillCard extends React.Component {
    render() {
        const cardStyle = {
            fontSize: "0.8em",
            height: "100%"
        }
        const contentStyle = {
            textAlign: "justified"
        }
        const imageStyle = {
            borderRadius: "6",
            height: "100%"
        }
        return (
            <Card style={cardStyle}>
                <Card.Content>
                    <Media>
                        <Media.Left>
                            <Image  style={imageStyle} is="48x48" src={this.props.imgsrc} alt="Image" className="is-rounded"/>
                        </Media.Left>
                        <Media.Content>
                            <Title is='4'>{this.props.title}</Title>
                            <SubTitle is='6'>
                                {this.props.type}
                                <br/>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={this.props.rating}
                                />
                            </SubTitle>
                        </Media.Content>
                    </Media>
                    <Content  style={contentStyle}>
                        {this.props.content}
                    </Content>
                </Card.Content>
            </Card>
        );
    }
}

SkillCard.propTypes = {
    title:      PropTypes.string.isRequired,
    rating:     PropTypes.number.isRequired,
    type:       PropTypes.string.isRequired,
    content:    PropTypes.string.isRequired,
    imgsrc:     PropTypes.string.isRequired,
}
