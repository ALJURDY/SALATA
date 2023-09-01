import { createContext, useContext, useState } from "react";

interface ValidationErrors {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface PaymentForm {
  formData: FormData;
  handleChange: (e: any) => void;
  errors: ValidationErrors;
  isFormValid: () => boolean;
}

export interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  tableNumber: number;
  isPerCardPayment: string;
}

const emptyformData: FormData = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  tableNumber: 0,
  isPerCardPayment: "isPerCardPayment",
};

const emptyValidationErrors: ValidationErrors = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: ""
};

const emptyPaymentForm: PaymentForm = {
  formData: emptyformData,
  handleChange: () => {},
  errors: emptyValidationErrors,
  isFormValid: () => false,
};

const PaymentContext = createContext<PaymentForm>(emptyPaymentForm);

// Hook qui permet d'utiliser les infos du formulaire dans les composants
export const usePaymentContext = () => useContext(PaymentContext);

// PROVIDER
interface PaymentProviderProps {
  children: JSX.Element;
}

const PaymentProvider = (props: PaymentProviderProps) => {
  const { children } = props;

  const [formData, setFormData] = useState<FormData>(emptyformData);
  const [errors, setErrors] = useState(emptyValidationErrors);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    const newErrors: ValidationErrors = {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: ""
    };

    !formData.email
      ? (newErrors.email = "L'adresse e-mail est obligatoire")
      : (newErrors.email = "");
    !formData.firstName
      ? (newErrors.firstName = "Le prénom est obligatoire")
      : (newErrors.firstName = "");
    !formData.lastName
      ? (newErrors.lastName = "Le nom est obligatoire")
      : (newErrors.lastName = "");
    !formData.phoneNumber
      ? (newErrors.phoneNumber = "Le numéro de téléphone est obligatoire")
      : (newErrors.phoneNumber = "");

    // Mettre à jour le hook des erreurs
    setErrors(newErrors);

    // vérifier si chaque propriété d'erreur est vide, si oui, le formulaire est valide
    return (
      newErrors.email === "" &&
      newErrors.firstName === "" &&
      newErrors.lastName === "" &&
      newErrors.phoneNumber === ""
    );
  };

  const paymentForm: PaymentForm = {
    formData,
    handleChange,
    errors,
    isFormValid
  };

  return (
    <PaymentContext.Provider value={paymentForm}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;
