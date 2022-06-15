import React from "react";
import "./formModel.css";
import { useForm } from "react-hook-form";

export const FormModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("errors", errors);

  return (
    <div className="useForm-example">
      <h2>useForm Example</h2>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="input-form">
          <label>Nume:</label>
          <input
            type="text"
            {...register("nume", { required: "Campul Nume este NECESAR!" })}
            id="nume"
          />

          <label>Prenume:</label>
          <input
            type="text"
            {...register("prenume", { required: true })}
            id="prenume"
          />

          <label>E-mail:</label>
          <input type="email" {...register("email", { required: true })} />

          <label>CNP:</label>
          <input
            type="number"
            {...register("cnp", {
              required: true,
              maxLength: {
                value: 13,
                message: "CNP-ul este format din 13 cifre",
              },
              minLenght: {
                value: 13,
                message: "CNP-ul este format din 13 cifre",
              },
              valueAsNumber: true,
            })}
          />

          <label>Data Nastere:</label>
          <input
            type="date"
            {...register("dataNastere", { required: true, valueAsDate: true })}
          />

          <label>Localitate:</label>
          <input type="text" {...register("localitate", { required: true })} />

          <label>Stare Civila:</label>
          <select
            name="stareCivila"
            {...register("stareCivila")}
            id="stareCivila"
          >
            <option value="burlac">Burlac</option>
            <option value="casatorit">Casatorit</option>
            <option value="divortat">Divortat</option>
            <option value="vaduv">Vaduv</option>
          </select>

          <label>Parola:</label>
          <input type="password" {...register("password")} />

          <label>Acord privind prelucrarea datelor</label>

          <input
            type="checkbox"
            name="acord"
            id="acord"
            {...register("acord")}
          />

          <button className="btn">Trimite</button>
        </div>
      </form>
      <div className="errors">
        {errors.nume && <p className="red-message">{errors.nume.message}</p>}
        {errors.prenume && (
          <p className="red-message">Este necesar sa introduceti Prenume</p>
        )}
        {errors.email && (
          <p className="red-message">Este necesar sa introduceti Email</p>
        )}
        {errors.cnp && <p className="red-message">{errors.cnp.message}</p>}
        {errors.localitate && (
          <p className="red-message">Este necesar sa introduceti Localitatea</p>
        )}
      </div>
    </div>
  );
};
