const churnUrl="";
const creativeUrl="";

async function churnModel(){

    const result_board=document.getElementById("resultText");

    message={
        months:parseFloat(document.getElementById("months").value),
        refurb_new:(document.getElementById("refurb_new").value),

        eqpdays:parseFloat(document.getElementById("eqpdays").value),

        asl_flag: document.getElementById("asl_flag").value,

        uniqsubs : parseFloat(document.getElementById("uniqsubs").value),

        hnd_price: parseFloat(document.getElementById("hnd_price").value),

        mou_Mean: parseFloat(document.getElementById("mou_Mean").value),

        hnd_webcap: document.getElementById("hnd_webcap").value,

        totmrc_Mean: parseFloat(document.getElementById("totmrc_Mean").value),

        change_mou: parseFloat(document.getElementById("change_mou").value),
        creditcd: document.getElementById("creditcd").value,

        ovrmou_Mean: parseFloat(document.getElementById("ovrmou_Mean").value),

        avgqty:parseFloat(document.getElementById("avgqty").value),

        lor: parseFloat(document.getElementById("lor").value),

        change_rev: parseFloat(document.getElementById("change_rev").value),

        avgrev: parseFloat(document.getElementById("avgrev").value),


        actvsubs:parseFloat(document.getElementById("actvsubs").value),

        income: parseFloat(document.getElementById("income").value),

        rev_Mean:parseFloat(document.getElementById("rev_Mean").value),

        mouiwylisv_Mean : parseFloat(document.getElementById("mouiwylisv_Mean").value),

        dualband : (document.getElementById("dualband").value),

        marital: (document.getElementById("marital").value),

        totcalls: parseFloat(document.getElementById("totcalls").value),

        drop_vce_Mean:parseFloat(document.getElementById("drop_vce_Mean").value),

        totrev:parseFloat(document.getElementById("totrev").value)






        

    }

    try{const response= await fetch(churnUrl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(message)
    });

    const response_re=await response.json();

    const final_response=response_re.response;
    }catch(error){
        console.log("error",error)
    }
}

async function creativeModel(){
    const result_board=document.getElementById("resultText");

    message={

        months:parseFloat(document.getElementById("months").value),
        refurb_new:(document.getElementById("refurb_new").value),

        // eqpdays:parseFloat(document.getElementById("eqpdays").value),

        asl_flag: document.getElementById("asl_flag").value,

        uniqsubs : parseFloat(document.getElementById("uniqsubs").value),

        hnd_price: parseFloat(document.getElementById("hnd_price").value),

        mou_Mean: parseFloat(document.getElementById("mou_Mean").value),

        hnd_webcap: document.getElementById("hnd_webcap").value,

        totmrc_Mean: parseFloat(document.getElementById("totmrc_Mean").value),

        change_mou: parseFloat(document.getElementById("change_mou").value),
        creditcd: document.getElementById("creditcd").value,

        ovrmou_Mean: parseFloat(document.getElementById("ovrmou_Mean").value),

        avgqty:parseFloat(document.getElementById("avgqty").value),

        lor: parseFloat(document.getElementById("lor").value),

        change_rev: parseFloat(document.getElementById("change_rev").value),

        avgrev: parseFloat(document.getElementById("avgrev").value),


        actvsubs:parseFloat(document.getElementById("actvsubs").value),

        // income: parseFloat(document.getElementById("income").value),

        rev_Mean:parseFloat(document.getElementById("rev_Mean").value),

        mouiwylisv_Mean : parseFloat(document.getElementById("mouiwylisv_Mean").value),

        dualband : (document.getElementById("dualband").value),

        marital: (document.getElementById("marital").value),

        totcalls: parseFloat(document.getElementById("totcalls").value),

        drop_vce_Mean:parseFloat(document.getElementById("drop_vce_Mean").value),

        totrev:parseFloat(document.getElementById("totrev").value)
    }

    try{

        const response=await fetch(creativeUrl,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(message)
        });

        const response_re =await response.json();

        const final_response = response_re.response;

    }catch(error){
        console.log("error: ", error)
    }
}