import { useEffect, useState } from "react";
import styles from "./FormMateria.module.css";

const CHAVE_STORAGE = "materia";

export default function FormMateria() {
  const [materia, setMateria] = useState(() => {
    const dadosSalvo = localStorage.getItem(CHAVE_STORAGE);
    return dadosSalvo ? JSON.parse(dadosSalvo) : [];
  });
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
      concluida: false,
    };
    setMateria([...materia, novaMateria]);
    setAddMateria("");
  }

  function handleDelete(id) {
    const confirmação = confirm("Tem certeza que deseja deletar?");
    if (!confirmação) return;
    setMateria(materia.filter((item) => item.id !== id));
  }

  function handleToggleConcluido(id) {
    setMateria(
      materia.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item,
      ),
    );
  }

  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(materia));
  }, [materia]);

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
      <p>Total de Materias: {materia.length}</p>
      <ul>
        {materia.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => handleToggleConcluido(item.id)}
              style={{
                cursor: "pointer",
                textDecoration: item.concluida ? "line-through" : "none",
              }}
            >
              {item.nome}
            </span>
            <button onClick={() => handleDelete(item.id)}>X</button>
          </li>
        ))}
      </ul>
      {erro && <p>{erro}</p>}
    </div>
  );
}
