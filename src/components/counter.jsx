import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const formatCount = () => {
    return count === 0 ? "empty" : count;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };
  const handeleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  const handeleDecrement = () => {
    setCount(count !== 0 ? (prevState) => prevState - 1 : 0);
  };
  const handleTagChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id));
    // console.log(id)
  };
  const renderTags = () => {
    if (tags.length === 0) {
      return "No tags";
    } else {
      return tags.map((tag) => (
        <li
          key={tag}
          className="btn btn-primary btn-sm m-2"
          onClick={() => handleTagChange(tag)}
        >
          {tag}
        </li>
      ));
    }
  };
  return (
    <>
      <ul>{renderTags()}</ul>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handeleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handeleDecrement}>
        -
      </button>
    </>
  );
};

export default Counter;