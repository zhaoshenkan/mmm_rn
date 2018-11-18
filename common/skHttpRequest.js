

export default class skHttpRequest {

    // let baseUrl = 'https://api.mmm920.com';
    //
    postRequest(api,parmas,successResponse){


        fetch('https://api.mmm920.com' + api, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
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