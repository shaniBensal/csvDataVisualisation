import axios from "axios";
import storageService from "./storageService.js";

function getData() {
    return new Promise((resolve, reject) => {
        axios({ method: "GET", url: "http://localhost:5000/" }).then(res => {
            let arrList = res.data;
            return resolve(createArrOfData(arrList));
        });
    })

}

function createArrOfData(arrList) {
    var arr = [];
    for (var i = 0; i <= arrList.length - 5; i += 6) {
        arr.push({
            id: arrList[i],
            gender: arrList[i + 1],
            segment: arrList[i + 2],
            yearsCustomer: arrList[i + 3],
            noOfComplaints: arrList[i + 4],
            contractValue: arrList[i + 5]
        });
    }
    arr.splice(0, 1);
    storageService.saveToStorage("JSON_LIST", arr);
    return arr;
}

export default {
    getData,
    createArrOfData
}