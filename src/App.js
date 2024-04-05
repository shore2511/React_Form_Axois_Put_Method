import React from "react";
import axios from "axios";
import Form from "./Components/Form";

const API_URL = "https://660fb7e6356b87a55c522c85.mockapi.io/React_crud";

const App = () => {
  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post(API_URL, formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
