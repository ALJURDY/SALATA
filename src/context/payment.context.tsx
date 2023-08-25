import { createContext, useContext, useState } from "react";

interface ValidationErrors {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  tableNumber: string;
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
  isPerCardPayment: boolean;
}

const emptyformData: FormData = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  tableNumber: 0,
  isPerCardPayment: true,
};

const emptyValidationErrors: ValidationErrors = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  tableNumber: "",
};

const emptyPaymentForm: PaymentForm = {
  formData: emptyformData,
  handleChange: () => {},
  errors: emptyValidationErrors,
  isFormValid: () => false
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
    const { name, value, id } = e.target;
    setFormData({
      ...formData,
      isPerCardPayment: id === 'isPerCardPayment',
      [name]: value,
    });
  };

  const isFormValid = () => {
    const newErrors: ValidationErrors = {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      tableNumber: "",
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

    if (!formData.tableNumber) {
      newErrors.tableNumber = "Le numéro de table est obligatoire";
    } else if (formData.tableNumber < 1 || formData.tableNumber > 20) {
      newErrors.tableNumber =
        "Le numéro de table doit être compris entre 1 et 20";
    } else {
      newErrors.tableNumber = "";
    }

    // Mettre à jour le hook des erreurs
    setErrors(newErrors);

    // vérifier si chaque propriété d'erreur est vide, si oui, le formulaire est valide
    return (
      newErrors.email === "" &&
      newErrors.firstName === "" &&
      newErrors.lastName === "" &&
      newErrors.phoneNumber === "" &&
      newErrors.tableNumber === ""
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
