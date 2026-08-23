import { useEffect, useState } from "react";
import styles from "./FormMateria.module.css";

export default function FormMateria() {
  const [materia, setMateria] = useState([]);
  const [addMateria, setAddMateria] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!addMateria.trim()) {
      setErro("Digite o nome da materia!");
      return;
    }
    setErro("");
    const novaMateria = {
      id: Date.now(),
      nome: addMateria,
    };
    setMateria([...materia, novaMateria]);
    setAddMateria("");
  }

  return (
    <div className={styles.formMateria}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome da Materia:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome da Materia"
          value={addMateria}
          onChange={(e) => setAddMateria(e.target.value)}
        />
        <button>Adicionar Materia</button>
      </form>
      <ul>
        {materia.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
      {erro && <p>{erro}</p>}
    </div>
  );
}
