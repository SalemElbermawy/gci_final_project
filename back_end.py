from pydantic import BaseModel
from fastapi import FastAPI
import pandas as pd
import joblib
from fastapi.middleware.cors import CORSMiddleware
import back_model
import sys

sys.modules['__main__'].MyTransformer = back_model.MyTransformer


app=FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


churn_model=joblib.load("model_final_xgb.pkl")
creative_model=joblib.load("final_creative_model.pkl")

creative_target_out={
    
    2:"Premium",
    0:"Budget",
    3:"Retention",
    1:"No Offer"
    
}

churn_out={
    1:"Leave",
    0:"Stay"
}

class Churn(BaseModel):
    months:float
    refurb_new:str
    eqpdays:float
    asl_flag:str
    uniqsubs:float
    hnd_price:float
    mou_Mean:float
    hnd_webcap:str
    totmrc_Mean:float
    change_mou:float
    creditcd:str
    ovrmou_Mean:float
    avgqty:float
    lor:float
    change_rev:float
    avgrev:float
    actvsubs:float
    income:float
    rev_Mean:float
    mouiwylisv_Mean:float
    dualband:str
    marital:str
    totcalls:float
    drop_vce_Mean:float
    totrev:float
    



class Creative(BaseModel):
    months:float
    refurb_new:str
    asl_flag:str
    uniqsubs:float
    hnd_price:float
    mou_Mean:float
    hnd_webcap:str
    totmrc_Mean:float
    change_mou:float
    creditcd:str
    ovrmou_Mean:float
    avgqty:float
    lor:float
    change_rev:float
    avgrev:float
    actvsubs:float
    rev_Mean:float
    mouiwylisv_Mean:float
    dualband:str
    marital:str
    totcalls:float
    drop_vce_Mean:float
    totrev:float

@app.post("/churn")

def churn_response(message:Churn):
    
    message=dict(message)
    message=pd.DataFrame([message])
    prediction=churn_model.predict(message)[0]
    predict_form=churn_out[prediction]
    
    return {"response":predict_form}

@app.post("/creative")

def creative_response(message:Creative):
    message=dict(message)
    message=pd.DataFrame([message])
    prediction=creative_model.predict(message)[0]
    predict_form=creative_target_out[prediction]
    
    return {"response":predict_form}