import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "не нужная вещь" },
    { id: 1, value: 0, name: "ложка" },
    { id: 2, value: 0, name: "вилка" },
    { id: 3, value: 0, name: "тарелка" },
    { id: 4, value: 0, name: "набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    // console.log(newCounters);
    setCounters(newCounters);
  };

  const handeleIncrement = (id) => {
    const incrementValue = counters.map((el) => {
      if (el.id === id) {
        el.value += 1;
      }
      return el;
    });
    setCounters(incrementValue);
  };

  const handeleDecrement = (id) => {
    const decrementValue = counters.map((el) => {
      if (el.id === id) {
        el.value ? (el.value -= 1) : (el.value = 0);
      }
      return el;
    });
    setCounters(decrementValue);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  // handleMyReset круче предложенного handleReset хотя бы потому что после нажатия кнопки delete и потом
  // кнопки Сброс возвращаются ранее удаленные строки. Так что пусть будут две кнопки.

  const handleMyReset = () => {
    const myReset = counters.map((el) => {
      el.value = 0;
      return el;
    });
    setCounters(myReset);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handeleIncrement}
          onDecrement={handeleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleMyReset}>
        Мой сброс
      </button>
    </>
  );
};

export default CountersList;
