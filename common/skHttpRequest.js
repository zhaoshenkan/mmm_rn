

export default class skHttpRequest {

    // let baseUrl = 'https://api.mmm920.com';
    //
    postRequest(api,parmas){


        return new Promise(function (resolve, reject) {
            // fetch(url, {
            //     method: 'GET',
            //     headers: headers,
            // })
            //     .then((response) => {
            //         if (response.ok) {
            //             return response.json();
            //         } else {
            //             reject({status:response.status})
            //         }
            //     })
            //     .then((response) => {
            //         resolve(response);
            //     })
            //     .catch((err)=> {
            //         reject({status:-1});
            //     })

            fetch('https://api.mmm920.com' + api, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(parmas)
            }).then((response) => response.json())
                .then((response) => {
                    // console.log(responseJson);
                    // return responseJson;
                    resolve(response);
                })
                .catch((error) => {
                    // console.error(error);
                    reject(error);
                });

        })


    };

    run(){
        alert('dog is running');
    }

}