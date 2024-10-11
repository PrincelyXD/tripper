import { useEffect } from "react";

export const vehicleClasses: string[] = [
  "Sedan",
  "Hatchback",
  "SUV",
  "Crossover",
  "Coupe",
  "Convertible",
  "Pickup Truck",
  "Van",
  "Minivan",
  "Wagon",
  "Sports Car",
  "Luxury Car",
  "Electric Vehicle",
  "Hybrid Vehicle",
  "Diesel Vehicle",
  "Motorcycle",
  "Truck",
  "Bus",
  "Off-road Vehicle",
  "Commercial Vehicle",
];

export const bloodGroupTypes = ["A+", "A-", "B-", "AB+", "AB-", "O+", "O-"];


const date = new Date()
const fiveYears= date.getFullYear()+5
export const fiveYearsString = fiveYears.toString()


export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};