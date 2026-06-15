const url="";

async function model(){

    const result_board=document.getElementById("resultText");

    message={

    }

    try{const response= await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(message)
    });

    const response_re=response.json();

    const final_response=response_re.response;
    }catch(error){
        console.log("error",error)
    }
}