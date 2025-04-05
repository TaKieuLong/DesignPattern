import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/count";

function App() {
  const count = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(to bottom right,rgb(98, 224, 203),rgb(83, 216, 163))",
        color: "#000",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff4d",
          padding: 100,
          borderRadius: 20,
          width: "40%",
          height: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="btn-click" onClick={() => dispatch(decrement())}>
            Giảm
          </button>
          <h1 style={{ color: "white", fontWeight: 700 }}>Giá trị: {count}</h1>

          <button className="btn-click" onClick={() => dispatch(increment())}>
            Tăng
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
