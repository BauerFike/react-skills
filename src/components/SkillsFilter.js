/**
 * Created by luca on 2/11/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

export class SkillsFilter extends React.Component{
    render() {
        this.props.types.sort(function(a,b) {
            return b.toLowerCase() < a.toLowerCase();
        });
        const types = this.props.types.map((type,id)=>(
            <option value={type} key={id - 1}>
                {type}
            </option>
        ));
        return(
            <div className="select" onChange={this.props.handleOnChange}>
                <select>
                    <option value = "">...</option>
                    {types}
                </select>
            </div>
        );
    }
}

SkillsFilter.propTypes = {
    types:  PropTypes.array.isRequired,
    handleOnChange:  PropTypes.func.isRequired
}
