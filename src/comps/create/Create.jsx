import "./create.css";
import { useState } from "react";
import axios from "axios";

const Create = () => {
  const url =
    "http://skoutwatch-dev-api.eu-west-3.elasticbeanstalk.com/api/v1/players";



  const [attributes, setAttribute] = useState([
    {
      attribute: "Dribbling",
      score: "",
    },
    {
      attribute: "Pacing",
      score: "",
    },
    {
      attribute: "Shooting",
      score: "",
    },
    {
      attribute: "Passing",
      score: "",
    },
    {
      attribute: "Defending",
      score: "",
    },
    {
      attribute: "Physicality",
      score: "",
    },
  ]);

  // const [file, setFile] = useState("");

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    nin: "",

  });

  const handleTextInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAttrChange = (attributeName, newScore) => {
    const updatedAttri = attributes.map((attr) => {
      if (attr.attribute === attributeName) {
        return { ...attr, score: newScore };
      }
      return attr;
    });
    setAttribute(updatedAttri);
  };

 

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, nin } = values;

    try {
      const res = await axios.post(
        url,
        {
          first_name,
          last_name,
          email,
          nin,
          attributes
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      res.data && window.location.replace("/");

      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      {attributes.map((attr, index) => (
        <section className="progress">
          <label htmlFor="Dribbling">
            <p>{attr.attribute}</p>
            <span>{attr.score}</span>
          </label>
          <input
            type="range"
            className=""
            max={100}
            min={0}
            value={attr.score}
            onChange={e => handleAttrChange(attr.attribute, e.target.value)}
          />
        </section>
      ))}

      <section className="form__input">
        <div className="form__input-right">
          <input type="file"  />
        </div>

        <div className="form__input-left">
          <div className="form__cont">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              required
              min={4}
              onChange={handleTextInputChange}
            />

            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              required
              min={4}
              onChange={handleTextInputChange}
            />

            <div className="form__cont-sec">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="inputs2"
                min={1}
                required
                onChange={handleTextInputChange}
              />

              <input
                type="number"
                placeholder="NIN"
                name="nin"
                className="inputs2"
                min={1}
                onChange={handleTextInputChange}
              />
            </div>

            <button type="submit">Create</button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Create;
