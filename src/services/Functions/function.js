/* eslint-disable no-debugger */
import axios from "axios";
import { nfl, soccer } from "../api/api";

export const fetchNFLData = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(nfl)
            .then((response) => {
                resolve(JSON.parse(response.data.body));
            })
            .catch((err) => reject(err));
    });
};

export const fetchSoccerData = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(soccer)
            .then((response) => {
                resolve(JSON.parse(response.data.body));
            })
            .catch((err) => reject(err));
    });
};
