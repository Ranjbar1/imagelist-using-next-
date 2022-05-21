import axios from 'axios';
console.log(axios);
const Unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID NaIvDyztHwjSKXxuoI8wiE-HMJz0iWKKmWre2W8_pgU',
    // Autorization: "Client-ID NaIvDyztHwjSKXxuoI8wiE-HMJz0iWKKmWre2W8_pgU",
  },
});
export default Unsplash;
