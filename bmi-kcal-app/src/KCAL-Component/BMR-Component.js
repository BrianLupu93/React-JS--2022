import { useState } from "react";

export const BMR = () => {
  const [bmr, setBmr] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState({ men: false, women: false });

  const inputedAge = (event) => {
    event.preventDefault();
    setAge(parseInt(event.target.value));
  };

  const inputedWeight = (event) => {
    event.preventDefault();
    setWeight(parseFloat(event.target.value));
  };

  const inputedHeight = (event) => {
    event.preventDefault();
    setHeight(parseInt(event.target.value));
  };

  const setGenderMen = () => {
    setGender({ men: true, women: false });
  };

  const setGenderWomen = () => {
    setGender({ men: false, women: true });
  };

  // CalculateBMR

  const calculateBMR = (event) => {
    event.preventDefault();

    if (gender.men) {
      const menBmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;

      setBmr(menBmr);
    }
    if (gender.women) {
      const womenBmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

      setBmr(womenBmr);
    } else {
      setBmr("Error! Please check your input");
    }

    return bmr;
  };

  return (
    <div>
      <form action="submit">
        <input placeholder="age" value={age || ""} onChange={inputedAge} />
        <input
          placeholder="weight"
          value={weight || ""}
          onChange={inputedWeight}
        />
        <input
          placeholder="height"
          value={height || ""}
          onChange={inputedHeight}
        />
        <label type="text" className="chekboxMale">
          <input type="checkbox" value="men" onClick={setGenderMen} />
          Men
        </label>
        <label className="chekboxFemale">
          <input type="checkbox" value="women" onClick={setGenderWomen} />
          Women
        </label>
        <br />
        <br />
        <button type="submit" onClick={calculateBMR}>
          Calculate BMR
        </button>
        <h1>{bmr}</h1>
      </form>
    </div>
  );
};
