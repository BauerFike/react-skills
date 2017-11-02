/**
 * Created by luca on 2/11/2017.
 */
import Axios from 'axios'

function getSkills(){
    return Axios.get('/data/skills.json');
}

function getUserInfo(){
    return Axios.get('/data/skills.json');
}

export const helpers = {
    getData: function(){
        return Axios.all([getSkills(), getUserInfo()])
            .then(function(arr){
                return {
                    skills: arr[0].data.sort( (a,b) => b.title > a.title ),
                    bio: arr[1].data
                }
            })
    }
}

