import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  //   int a=give(4);
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");
  const [count, setCount] = useState(0);

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(image);
    console.log(details);
    console.log(count);

    setName("");
    setImage("");
    setDetails("");
    setCount("");

    props.setProduct([
      ...props.product,
      {
        name: name,
        img: image,
        detail: details,
        count: count,
      },
    ]);
  };

  const handlenamechange = (event) => {
    setName(event.target.value);
  };

  const handleimagechange = (event) => {
    setImage(event.target.value);
  };

  const handledetailschange = (event) => {
    setDetails(event.target.value);
  };

  const handlecountchange = (event) => {
    setCount(event.target.value);
  };

  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid grey",
      }}
    >
      <form onSubmit={handlesubmit}>
        <div>
          <label>Name</label>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={handlenamechange}
          ></input>
        </div>

        <div>
          <label>Image</label>
          <input
            placeholder="image"
            type="text"
            onChange={handleimagechange}
            value={image}
          ></input>
        </div>

        <div>
          <label>Deatils</label>
          <input
            placeholder="details"
            type="text"
            onChange={handledetailschange}
            value={details}
          ></input>
        </div>

        <div>
          <label>Count</label>
          <input
            placeholder="count"
            type="number"
            onChange={handlecountchange}
            value={count}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
