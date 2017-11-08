/**
 * Created by luca on 31/10/2017.
 */

import React from 'react';
import PropTypes from 'prop-types'
import {SkillCard} from '../components/SkillCard'
import {SkillsFilter} from '../components/SkillsFilter'

export class SkillsList extends React.Component {
    render() {
        let skillCardsRows = [];
        let rowN = 0;
        // let types = Array.from(new Set(this.props.skillCards.map(card => card.type)));
        const types = this.props.skillCards.map(card => card.type).filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
        let cards = this.props.skillCards.filter(card => card.visible)
        for ( var i = 0; i < cards.length; i++ ) {
            let id = i;
            let card = cards[id];

            if (card.visible === false) {
                continue;
            }
            if (id % this.props.cardsPerLine === 0) {
                rowN++;
                skillCardsRows[rowN] = [];
            }

            skillCardsRows[rowN].push((
                <div className="column  " key={id}>
                    <SkillCard
                        title={card.title}
                        type={card.type}
                        rating={card.rating}
                        content={card.content}
                        imgsrc={card.imgsrc}/>
                </div>
            ));
        }
        const skillCardsList = skillCardsRows.map((row, id) => (
            <div className="columns  " key={id}>
                {row}
            </div>
        ));
        return (
            <div>
                <div className="level">
                    <SkillsFilter types={types} handleOnChange={this.props.handleFilterOnChange}/>
                </div>
                {skillCardsList}
            </div>
        );
    }
}

SkillsList.propTypes = {
    skillCards: PropTypes.array.isRequired,
    handleFilterOnChange: PropTypes.func.isRequired,
    cardsPerLine: PropTypes.number.isRequired
}
