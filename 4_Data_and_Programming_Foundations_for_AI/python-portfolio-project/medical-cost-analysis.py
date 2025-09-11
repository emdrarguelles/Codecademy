#importing csv libary
import csv

ages = []
sexes = []
bmis = [] 
num_children = []
smokers = []
regions =[]
charges = []

def load_data(list, csv_file, column_name):
    with open(csv_file) as csv_file:
        csv_dict_reader = csv.DictReader(csv_file)
        for row in csv_dict_reader:
            list.append(row[column_name])

load_data(ages, "insurance.csv", "age")
load_data(sexes, "insurance.csv", "sex")
load_data(bmis, "insurance.csv", "bmi")
load_data(num_children, "insurance.csv", "children")
load_data(smokers, "insurance.csv", "smoker")
load_data(regions, "insurance.csv", "region")
load_data(charges, "insurance.csv", "charges")

# print(ages) test print

class Patient:
    def __init__(self, age, sex, bmi, num_children, smoker, region, charge):
        self.age = age
        self.sex = sex
        self.bmi = bmi
        self.num_children = num_children
        self.smoker = smoker
        self.region = region
        self.charge = charge

    #find average age of the patients
    def average_age(self):
        total_age = 0
        for age in self.age:
            total_age += int(age)
        return ("Average Patient Age: " + str(round(total_age/len(self.age), 2)) + " years\n")

    #return the number of males vs. females counted in the dataset
    def analyze_sexes(self):
        females = 0
        males = 0
        for sex in self.sex:
            if sex == "female":
                females += 1
            elif sex == "male":
                males += 1
        return ("Number of Females: " + str(females) + "\nNumber of Males: " + str(males) + "\n")

    #find geographical location of the patients
    def analyze_regions(self):
        regions = {}
        for region in self.region:
            if region not in regions:
                regions[region] = 1
            else:
                regions[region] += 1
        return ("Unique Regions: " + str(regions) + "\n")

    #return the average yearly medical charges of the patients
    def average_charges(self):
        total_charges = 0
        for charge in self.charge:
            total_charges += float(charge)
        return ("Average Yearly Medical Charges: $" + str(round(total_charges/len(self.charge), 2)) + " dollars.")

    # method to create dictionary with all patients information
    def create_dict(self):
        self.patients_dict = {}
        self.patients_dict["age"] = [int(age) for age in self.age]
        self.patients_dict["sex"] = self.sex
        self.patients_dict["bmi"] = self.bmi
        self.patients_dict["children"] = self.num_children
        self.patients_dict["smoker"] = self.smoker
        self.patients_dict["region"] = self.region
        self.patients_dict["charge"] = self.charge
        return self.patients_dict

    #creates a list of each patient in the dictionaries
    def create_patient_list(self):
        patients_list = []
        # All data lists must be the same length
        num_patients = len(self.age) 

        for i in range(num_patients):
            patient_dict = {}
            patient_dict["age"] = int(self.age[i])
            patient_dict["sex"] = self.sex[i]
            patient_dict["bmi"] = self.bmi[i]
            patient_dict["children"] = self.num_children[i]
            patient_dict["smoker"] = self.smoker[i]
            patient_dict["region"] = self.region[i]
            patient_dict["charge"] = round(float(self.charge[i]), 2)
        
            patients_list.append(patient_dict)
    
        return patients_list

#* create a patient object
patient_information = Patient(ages, sexes, bmis, num_children, smokers, regions, charges)


print(patient_information.average_age())
print(patient_information.analyze_sexes())
print(patient_information.analyze_regions())
print(patient_information.average_charges())
print(patient_information.create_dict())
print(patient_information.create_patient_list())
