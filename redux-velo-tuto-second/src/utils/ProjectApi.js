import axios from 'axios'
import * as actions from '../actions'

class ProjectApi {

    constructor(dispatch) {
        this.dispatch = dispatch
        this.client = axios.create({
            baseURL: 'http://localhost:4000/'
        })
    }

    getUsers() {
        this.client.get(`reacts.json`)
          .then((response) => {
              this.dispatch(actions.setUserData(response.data))
        })
          .catch((error) => {
            console.log(error);
          });
    }

    updateUser(user) {

    }


}

export default ProjectApi
