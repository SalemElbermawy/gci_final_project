# This is the largest model and preprocessing data project I have ever done and the best deploying without any helping from AI

## So I will explain it clearly below
- Data 
- Model 
- EDA
- Fine Tuning
- Final Model
- Targets From The Model
- HTML & CSS code
- JavaScript & FAST API % HuggingFace

### Data 
- Record.csv & Client.csv
- This Data is about client you should use it to improve the bussiness of the company 
- This Data has 100 feature when we marge the two files according to ID and if you want to know each feature endicate to what read this PDF "ENG_Company _A_ Dataset Overview.docx.pdf"
---
### EDA
- 1 Delete the data which has high correlation to avoid overfitting and misunderstanding for the model 
![alt text](corr-matric.png)
---
- 2 Using initial model to choose the most important features 
![alt text](graphs/importance.png)
---
- 3 Delete Features has many nan values
![alt text](image.png)

---

- 4 Do many graphs and you can see all these steps clearer in this file * gci_final_advanced.ipynb * and these are examples graphs

![alt text](<graphs/avg vs month minues.png>)
---
![alt text](graphs/bar-eqpdays.png)
---
![alt text](graphs/totcalls.png)
---

![alt text](graphs/importance.png)
---
![alt text](graphs/months.png)

---

# Fine Tuning 

- I have used the final data to find the best hyperparameters for the model and I have tried 3 models 
- First model XGBoost
- Second Random Forest
- Third CatBoost

