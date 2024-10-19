import { useState } from "react";
import { v4 as uuid } from "uuid";

//import { Formik, Field, Form, ErrorMessage } from "formik";

// allows user input for adding items to the inventory
// invoking call function "addspaceCraft" as props handed down from SpacecraftBuilder
// child component(ItemForm) initiate state in the parent(SpacecraftBuilder)

// validation
// make all fields required
// validate each field on form submission, if field is missing highlight the field
// clear form on successful form submission

const INITIAL_STATE = {
  name: "",
  quantity: "",
  purpose: "",
  agreement: false,
};

const ItemForm = ({ onItemSubmit }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  //for validation
  const [isInValid, setIsInvalid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    setIsTouched(true);
    const { name, value, type, checked } = e.target;
    //simple validation
    if (value === "") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      // [name]: value,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isInValid) {
      const newItem = {
        ...formData,
        id: uuid(),
      };
      onItemSubmit(newItem); // { ...formData });
      setFormData(INITIAL_STATE);
    }
  };

  return (
    <form className=" flex flex-col flex-grow" onSubmit={handleSubmit}>
      <div className="mb-5 border-solid border-2 border-white">
        <input
          className=" p-2.5 w-full outline-white border-none outline-none bg-transparent"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* <ErrorMessage name="email" component="div" /> */}

      <div className="mb-5 border-solid border-2 border-white">
        <input
          className=" p-2.5 w-full outline-white border-none outline-none bg-transparent"
          name="quantity"
          type="text"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-5  border-2 border-solid border-white">
        <input
          className=" p-2.5 w-full outline-white border-none outline-none bg-transparent"
          name="purpose"
          type="text"
          placeholder="Purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-5 p-2.5 border-2 border-solid border-white">
        <input
          className="mr-5"
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
        />
        <label htmlFor="agreeToTerms"> Agree to Terms</label>
      </div>

      <div>
        {isInValid && isTouched && (
          <span style={{ color: "red" }}>It can not be blank</span>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center self-end justify-center w-40 h-10 outline outline-offset-2 outline-green-400 bg-transparent"
      >
        Add
      </button>

      {/* <p>Name: {formData.name}</p>
      <p> Quantity: {formData.quantity}</p>
      <p>purpose:{formData.purpose}</p> */}
      {/* <p> Value check? {checked.toString()}</p> */}
    </form>
  );
};

export default ItemForm;
