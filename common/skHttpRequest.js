
import {AsyncStorage} from 'react-native'

export default class skHttpRequest {

    // let baseUrl = 'https://api.mmm920.com';
    //
    postRequest(api,parmas,successResponse){

        var token;
        AsyncStorage.getItem('token', function (error, result) {
            if (error) {
                alert('读取失败')
                token = result;
            }else {
                console.log(result)
                alert('读取完成')
            }
        })


        fetch('https://api.mmm920.com' + api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization':token
            },
            body: JSON.stringify(parmas)
        }).then((response) => response.json())
            .then((response) => {
                successResponse(response);
            })
            .catch((error) => {
                // console.error(error);
            });

    };

    run(){
        alert('dog is running');
    }

}