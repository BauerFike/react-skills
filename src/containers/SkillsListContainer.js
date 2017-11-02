/**
 * Created by luca on 2/11/2017.
 */
import React from 'react';
import {helpers} from '../services/helpers'
import {SkillsList} from '../components/SkillsList'

export class SkillsListContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "skillCardsList":[],
            "orderBy": null
        };
        this.handleFilterOnChange = this.handleFilterOnChange.bind(this);
    }
    componentDidMount(){
        let promiseObj = helpers.getData();
        var component = this;
        promiseObj.then(function(data) {
            const skills = data.skills.map((skill) => Object.assign(skill, {"visible":true}))
            component.setState({"skillCardsList" : skills})
        });
    }
    handleFilterOnChange(e){
        const skillsList = this.state.skillCardsList;
        skillsList.map((skill) =>{
            if(skill.type!==e.target.value && e.target.value != ""){
                skill.visible=false;
            }else{
                skill.visible=true;
            }
            return skill;
        });
        this.setState({"skillCardsList" : skillsList})
    }
    render(){
        return <SkillsList skillCards={this.state.skillCardsList}  cardsPerLine={this.props.cardsPerLine} handleFilterOnChange={this.handleFilterOnChange}/>
    }


}
