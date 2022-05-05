import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Autorization: "Client-ID NaIvDyztHwjSKXxuoI8wiE-HMJz0iWKKmWre2W8_pgU",
  },
});
