import axios from "axios";


export default axios.create({
   baseURL:"http://www.omdbapi.com"
})

// const api = async (MovieName, MovieType) => {
//    const dispatch = useDispatch();
//    try {
//       return await axios
//          .get(
//             `http://www.omdbapi.com/?apikey=${config.apiKey}&s=${MovieName}&type=${MovieType}`
//          )
//          .then((data) => {
//             console.log(data.data.Search);
//             return dispatch(dataCatch(data.data.Search))
//          });
//    } catch (error) {
//       console.log("Error: " + error.message)
//       throw error.message;
//    }
// };

// export default api;
