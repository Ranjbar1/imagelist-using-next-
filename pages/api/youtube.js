import axios from "axios";
const KEY = "AIzaSyCpxm2YhyD4sxcxWR1hok2X4vKI3DJBbAM"
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search", params: {
    part: "snippet", maxResults: 5, key: KEY
  }

})