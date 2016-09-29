import axios from 'axios'

class ProjectApi {

    constructor() {
        this.client = axios.create({
            baseURL: 'http://localhost:4000'
        })
    }

    getUsers() {
        axios.get(`/reacts.json`)
          .then((response) => {
              console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
    }
}

export default ProjectApi
