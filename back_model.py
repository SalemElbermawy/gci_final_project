from sklearn.base import BaseEstimator,TransformerMixin
import pandas as pd

class MyTransformer(BaseEstimator,TransformerMixin):
    def __init__(self, network_frustration_feature=True, bill_shock_ratio_feature=True, eqp_age_ratio_feature=True, usage_intensity_feature=True):
        self.network_frustration_feature = network_frustration_feature
        self.bill_shock_ratio_feature = bill_shock_ratio_feature
        self.eqp_age_ratio_feature = eqp_age_ratio_feature
        self.usage_intensity_feature = usage_intensity_feature
    
    def fit (self,X,y=None):
        return self
    
    def transform(self,X):
        X=X.copy()
        
        edits=[]
                    
        if self.network_frustration_feature and "drop_vce_Mean" in X.columns and "mouiwylisv_Mean" in X.columns:
            network_frustration = X["drop_vce_Mean"] * X["mouiwylisv_Mean"]
            network_frustration.name = "network_frustration"
            edits.append(network_frustration)
        
        if self.bill_shock_ratio_feature and "ovrmou_Mean" in X.columns and "totmrc_Mean" in X.columns:
            bill_shock_ratio = X["ovrmou_Mean"] / (X["totmrc_Mean"] + 0.00001)
            bill_shock_ratio.name = "bill_shock_ratio"
            edits.append(bill_shock_ratio)
        
        if self.eqp_age_ratio_feature and "eqpdays" in X.columns and "months" in X.columns:
            eqp_age_ratio = X["eqpdays"] / (X["months"] + 0.0001)
            eqp_age_ratio.name = "eqp_age_ratio"
            edits.append(eqp_age_ratio)
            
        if self.usage_intensity_feature and "totcalls" in X.columns and "months" in X.columns:
            usage_intensity = X["totcalls"] / (X["months"] + 0.0001)
            usage_intensity.name = "usage_intensity"
            edits.append(usage_intensity)
        
        
        
        if edits:
            X=pd.concat([X] + edits,axis=1)
        return X
            
            
        
            