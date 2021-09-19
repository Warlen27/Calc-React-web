import React, { useState, useEffect, useMemo, useCallback } from "react";

import { Calculator, BackgroundImage } from "./styles";
import Button from "./components/Button";
import Display from "./components/Display";
import frameMobile from "./assets/frame-mobile.png";
import backspace from "./assets/backspace.png";
import divide from "./assets/divide.png";
import multiplicationIcon from "./assets/multiplication.png";

function App() {
  const [operation, setOperation] = useState<string[]>([]);
  const [penultimateOperation, setPenultimateOperation] = useState("");
  const [valueOperation, setValueOperation] = useState("0");

  const lastOperation = useMemo(
    () => operation[operation.length - 1],
    [operation]
  );

  const test = useCallback(() => {
    console.log("operation", operation);
    console.log("penultimateOperation24", penultimateOperation);
  }, [operation, penultimateOperation]);

  useEffect(() => {
    test();
  }, [test]);

  function clearAll() {
    setValueOperation("0");
    setOperation([]);
  }

  function cancelEntry() {
    const operationSplit = lastOperation.split("");
    const restOperationSplit = operationSplit.pop()!;
    const popOperation = operation.pop()!;

    const firstOperation = operationSplit.join("");

    setOperation([...operation, firstOperation]);
  }

  function isOperator(value: string) {
    return ["+", "-", "*", "%", "/"].indexOf(value) > -1;
  }

  function calc() {
    if (operation.length > 2) {
      const firstnumber = operation[0];
      const operator = operation[1];
      const secondNumber = operation[2];
      let currentOperation: string = "";
      switch (operator) {
        case "+":
          const sum = Number(firstnumber) + Number(secondNumber);
          currentOperation = `${sum}`;
          break;
        case "-":
          const subtraction = Number(firstnumber) - Number(secondNumber);
          currentOperation = `${subtraction}`;
          break;
        case "*":
          const multiplication = Number(firstnumber) * Number(secondNumber);
          currentOperation = `${multiplication}`;
          break;
        case "/":
          const division = Number(firstnumber) / Number(secondNumber);
          currentOperation = `${division}`;
          break;
        case "%":
          const module = Number(firstnumber) % Number(secondNumber);
          currentOperation = `${module}`;
          break;
        default:
          break;
      }

      setOperation([currentOperation]);
      setPenultimateOperation("=");

      return currentOperation;
    }
    return "";
  }

  function pushOperation(value: string) {
    const regex = /[0-9]/;

    if (penultimateOperation === "=" && regex.test(value)) {
      setOperation([value]);
      setPenultimateOperation("");
      return;
    }
    if (operation.length > 2) {
      const result = calc();
      setPenultimateOperation("");
      setOperation([result, value]);
      return;
    }

    setOperation([...operation, value]);
  }

  function addDot() {
    if (
      typeof lastOperation === "string" &&
      lastOperation.split("").indexOf(".") > -1
    )
      return;

    if (isOperator(lastOperation) || !lastOperation) {
      pushOperation("0.");
    } else {
      setLastOperation(lastOperation.toString() + ".");
    }
  }

  const setLastNumberToDisplay = useCallback(() => {
    let lastNumber = "0";

    for (let i = operation.length - 1; i >= 0; i--) {
      if (!isOperator(operation[i])) {
        lastNumber = operation[i];
        break;
      }
    }

    setValueOperation(lastNumber);
  }, [operation]);

  function addOperation(value: string) {
    setPenultimateOperation("");

    const formatLastOperation = Number(lastOperation);
    const formatValue = Number(value);

    if (isNaN(formatLastOperation)) {
      if (isOperator(value)) {
        setLastOperation(value);
      } else if (isNaN(formatValue)) {
      } else {
        pushOperation(value);
      }
    } else {
      if (isOperator(value)) {
        pushOperation(value);
      } else {
        if (penultimateOperation === "=") {
          setOperation([value]);
          setPenultimateOperation("");
          return;
        }

        let newValue = lastOperation + value;
        setLastOperation(newValue);
      }
    }
  }

  function setLastOperation(value: string) {
    const newOperation = [...operation];

    newOperation[newOperation.length - 1] = value;

    console.log("newOperation", newOperation);
    setOperation(newOperation);
  }

  useEffect(() => {
    setLastNumberToDisplay();
  }, [setLastNumberToDisplay]);

  return (
    <>
      <Calculator>
        <BackgroundImage src={frameMobile} />

        <Display value={valueOperation} />
        <Button label="AC" click={clearAll} gridColumn={2} />
        <Button label="%" click={addOperation} />
        <Button label="DEL" img icon={backspace} click={cancelEntry} />
        <Button label="7" click={addOperation} />
        <Button label="8" click={addOperation} />
        <Button label="9" click={addOperation} />
        <Button
          label="/"
          img
          icon={divide}
          click={addOperation}
          bgColor="#DC143C"
          bgActive="#eb1f48"
        />
        <Button label="4" click={addOperation} />
        <Button label="5" click={addOperation} />
        <Button label="6" click={addOperation} />
        <Button
          label="*"
          img
          icon={multiplicationIcon}
          click={addOperation}
          bgColor="#DC143C"
          bgActive="#eb1f48"
        />
        <Button label="1" click={addOperation} />
        <Button label="2" click={addOperation} />
        <Button label="3" click={addOperation} />
        <Button
          label="-"
          click={addOperation}
          bgColor="#DC143C"
          bgActive="#eb1f48"
        />
        <Button
          label="0"
          click={addOperation}
          borderRadius="0px 0px 0px 25px"
        />
        <Button label="." click={addDot} />
        <Button label="=" click={calc} bgColor="#960e6d" bgActive="#ad107d" />
        <Button
          label="+"
          click={addOperation}
          bgColor="#DC143C"
          bgActive="#eb1f48"
          borderRadius="0px 0px 25px 0px"
        />
      </Calculator>
    </>
  );
}

export default App;
