import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [detail, setDetail] = useState("");
  const [count, setCount] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(image);
    console.log(detail);
    console.log(count);

    props.setProduct([
      ...props.product,
      {
        name: name,
        img: image,
        detail: detail,
        count: count,
      },
    ]);

    setName("");
    setImage("");
    setDetail("");
    setCount("");
  };

  const handlenamechange = (event) => {
    setName(event.target.value);
  };

  const handleimagechange = (event) => {
    setImage(event.target.value);
  };

  const handledetailchange = (event) => {
    setDetail(event.target.value);
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
        border: "solid 2px grey",
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
            value={image}
            onChange={handleimagechange}
          ></input>
        </div>

        <div>
          <label>Details</label>
          <input
            placeholder="details"
            type="text"
            value={detail}
            onChange={handledetailchange}
          ></input>
        </div>

        <div>
          <label>Count</label>
          <input
            placeholder="count"
            type="number"
            value={count}
            onChange={handlecountchange}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
