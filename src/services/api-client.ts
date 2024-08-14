    import axios from "axios";

   export default axios.create({
       baseURL: 'https://api.rawg.io/api',
        params: {
            key:'f295c2b5b5e74a85bc059319f6f7e2cd',

        }
    })