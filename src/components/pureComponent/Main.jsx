import { memo, useCallback, useEffect, useMemo, useState } from "react";
import PureComponentClass from "./PureComponentClass";

import ReactMemoUse from "./ReactMemoUse";
import ShouldComponentUpdateComponent from "./ShouldComponentUpdateComponent";

const ReactMemoUse1 = memo(ReactMemoUse);

export default function Main() {
  const [name, setName] = useState("Uttam Kumari");
  const [age, setAge] = useState(26);

  useEffect(() => {
    setTimeout(() => {
      setAge(age + 1);
    }, 1000);
  }, [age]);

  const memoizedFunction = useCallback(handleButtonClick, []);

  function handleButtonClick() {
    setName("Anand Kumar");
  }

  function counter() {
    return { name: "testing" };
  }

  const testmemo = useMemo(counter, []);

  console.log("age..Parent render");
  return (
    <div>
      <ShouldComponentUpdateComponent
        name="kumari"
        handleButtonClick={handleButtonClick}
      />
      <PureComponentClass name={name}></PureComponentClass>
      <ReactMemoUse1
        name={testmemo}
        handleButtonClick={memoizedFunction}
      ></ReactMemoUse1>
    </div>
  );
}
