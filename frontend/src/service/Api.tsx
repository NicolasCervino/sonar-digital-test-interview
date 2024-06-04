import axios from "axios";

export const getRandomJoke = async () => {
    return await axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return { value: error.message };
        });
};