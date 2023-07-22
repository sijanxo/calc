import { useState } from "react";
import resummon from "./assets/resummon.png";

import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [close, setClose] = useState(false);
  const [equals, setEquals] = useState(false);
  const [operation, setOperation] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("dummy");

  function checkOverflow(e) {
    return e.scrollWidth > e.clientWidth;
  }

  function clear() {
    setDisplay("");

    setOperation("");
    setA("");
    setB("dummy");
    setEquals(false);
  }
  function negate() {
    if (display == "") {
      return;
    }
    if (parseFloat(display) > 0) {
      setDisplay(parseFloat(`-${display.toString()}`));

      setA(`-${a}`);
    } else {
      setDisplay(parseFloat(display.toString().slice(1)));

      setA(`${a.slice(1)}`);
    }
  }
  function percent() {
    display ? setDisplay((parseFloat(display) / 100).toString()) : "";
  }

  function numPress(e) {
    let test1 = parseFloat(display + e.target.innerText);
    let test2 = parseFloat(a + e.target.innerText);
    let test3 = parseFloat(b + e.target.innerText);

    if (equals) {
      clear();
      setDisplay(e.target.innerText);
      setA(e.target.innerText);
    } else {
      if (isNaN(test1) == false && test1 == display + e.target.innerText) {
        if (display.length <= 18) {
          setDisplay(display + e.target.innerText);
        }
      }
    }

    if (a == "" || operation == "") {
      if (isNaN(test2) == false && test2 == a + e.target.innerText) {
        if (a.length <= 18) {
          setA(a + e.target.innerText);
        }
        console.log(a);
      }
    }

    if (b == "" || a !== "") {
      if (isNaN(test3) == false && test3 == b + e.target.innerText) {
        if (b.length <= 18) {
          setB(b + e.target.innerText);
        }
        console.log(b);
      }
    }
  }

  function divide() {
    setEquals(false);
    setDisplay("");
    setB("");
    setOperation("/");
    console.log(a);
    console.log(b);
  }
  function multiply() {
    setEquals(false);
    setDisplay("");
    setB("");
    setOperation("x");
    console.log(a);
    console.log(b);
  }
  function subtract() {
    setEquals(false);
    setDisplay("");
    setB("");
    setOperation("-");
    console.log(a);
    console.log(b);
  }
  function add() {
    setEquals(false);
    setDisplay("");
    setB("");
    setOperation("+");
    console.log(a);
    console.log(b);
  }
  function calculate() {
    setEquals(true);

    if (operation === "") {
      clear();
      return;
    }

    setDisplay("");
    if (operation == "/") {
      if (b == "dummy") {
        clear();
      }
      setDisplay(parseFloat(a) / parseFloat(b));
      setA((parseFloat(a) / parseFloat(b)).toString());
      setB("dummy");

      console.log(a);
      console.log(b);
    }
    if (operation == "x") {
      if (b == "dummy") {
        clear();
      }
      setDisplay(parseFloat(a) * parseFloat(b));
      setA((parseFloat(a) * parseFloat(b)).toString());
      setB("dummy");
    }
    if (operation == "-") {
      if (b == "dummy") {
        clear();
      }
      setDisplay(parseFloat(a) - parseFloat(b));
      setA((parseFloat(a) - parseFloat(b)).toString());
      setB("dummy");
    }
    if (operation == "+") {
      if (b == "dummy") {
        clear();
      }
      setDisplay(parseFloat(a) + parseFloat(b));
      setA((parseFloat(a) + parseFloat(b)).toString());
      setB("dummy");
    }
  }

  return (
    <>
      <div className={`${close ? `okay` : `no`} container`}>
        <div className="title">
          <div className="close" onClick={() => setClose(true)}></div>
          <div className="max"></div>
        </div>
        <div className={`${checkOverflow ? `small` : `large`} display`}>
          {display}
        </div>
        <div className="btncontainer">
          <div className="btn top" onClick={clear}>
            AC
          </div>
          <div className="btn top" onClick={negate}>
            +/-
          </div>
          <div className="btn top" onClick={percent}>
            %
          </div>
          <div className="btn operator" onClick={divide}>
            ÷
          </div>
          <div className="btn" onClick={numPress}>
            7
          </div>
          <div className="btn" onClick={numPress}>
            8
          </div>
          <div className="btn" onClick={numPress}>
            9
          </div>
          <div className="btn operator" onClick={multiply}>
            x
          </div>
          <div className="btn" onClick={numPress}>
            4
          </div>
          <div className="btn" onClick={numPress}>
            5
          </div>
          <div className="btn" onClick={numPress}>
            6
          </div>
          <div className="btn operator" onClick={subtract}>
            -
          </div>
          <div className="btn" onClick={numPress}>
            1
          </div>
          <div className="btn" onClick={numPress}>
            2
          </div>
          <div className="btn" onClick={numPress}>
            3
          </div>
          <div className="btn operator" onClick={add}>
            +
          </div>
          <div className="btn zero" onClick={numPress}>
            0
          </div>
          <div className="btn" onClick={numPress}>
            .
          </div>
          <div className="btn operator" onClick={calculate}>
            =
          </div>
        </div>
      </div>

      <img
        className={`${close ? `reopen` : `hide`} resummon`}
        onClick={() => {
          setClose(false);
        }}
        src={resummon}
      />
    </>
  );
}

export default App;
