import { createContext, useContext, useState } from "react";

const SignupContext = createContext(null);

export const SignupProvider = ({ children }) => {
  const [step, setStep] = useState(0); // 0-7 (8 steps total)

  const [formData, setFormData] = useState({
    // Step 0 – Account Setup
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",

    // Step 1 – Business Info
    storeName: "",
    businessType: "",
    registrationNumber: "",
    taxNumber: "",

    // Step 2 – Location
    fullAddress: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",

    // Step 3 – Store Setup
    storeDescription: "",
    openingTime: "08:00",
    closingTime: "22:00",
    prepTime: "10 - 20 minutes",
    logo: null,
    coverBanner: null,

    // Step 4 – Documents
    businessLicense: null,
    ownerId: null,
    storefrontImages: [],

    // Step 5 – Payment
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    routingNumber: "",
    mobileBanking: "",
  });

  const updateFormData = (fields) =>
    setFormData((prev) => ({ ...prev, ...fields }));

  const nextStep = () => setStep((s) => Math.min(s + 1, 7));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  const goToStep = (s) => setStep(s);

  return (
    <SignupContext.Provider value={{ step, formData, updateFormData, nextStep, prevStep, goToStep }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => useContext(SignupContext);