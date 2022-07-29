const apiHost = "https://newsapi.org/v2/everything?q=apple&from=2022-06-23&to=2022-06-23&sortBy=popularity&apiKey=b07decba47f74d5695abfb03a5e675e1"

export default {
    async fetchInitialData(){
        try {
            const response = await fetch(apiHost);   
          //  console.log(response);
            const responseJson = await response.json();
           //     console.log("response",responseJson.articles);
            return responseJson.articles;
            
        } catch (error) {
            console.log(error);
        }
    },

    async fetchFullData(dealId){
        console.log("inside  deal id")
            try{
               
                const responce = await fetch(apiHost+dealId);
                console.log("res", responce);
                const responceJson = await responce.json();
                return responceJson;
            }catch(error){
                console.log(error);
            }
            return {err: "error"}
        },

}