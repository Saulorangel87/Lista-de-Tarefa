import { useEffect, useState } from "react";
import styles from "./FormTarefas.module.css";

const CHAVE_STORAGE = "tarefas";

export default function FormTarefas() {
  const [tarefa, setTarefas] = useState(() => {
    const dadosSalvo = localStorage.getItem(CHAVE_STORAGE);
    return dadosSalvo ? JSON.parse(dadosSalvo) : [];
  });
  const [addTarefa, setAddTarefa] = useState("");
  const [erro, setErro] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!addTarefa) {
      setErro("Digite o nome da tarefa!");
      return;
    }
    setErro("");
    const novaTarefa = {
      id: Date.now(),
      nome: addTarefa,
      concluida: false,
    };
    setTarefas([...tarefa, novaTarefa]);
    setAddTarefa("");
  }

  function handleDelete(id) {
    const confirmação = confirm("Tem certeza que deseja deletar?");
    if (!confirmação) return;
    setTarefas(tarefa.filter((item) => item.id !== id));
  }

  function handleToggleConcluido(id) {
    setTarefas(
      tarefa.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item,
      ),
    );
  }

  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(tarefa));
  }, [tarefa]); 

  const tarefasFiltradas = tarefa.filter((item) =>
    item.nome.toLowerCase().includes(pesquisa.toLowerCase()),
  );

  return (
    <div className={styles.formTarefa}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome da Tarefa:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome da Tarefa"
          value={addTarefa}
          onChange={(e) => setAddTarefa(e.target.value)}
        />
        <button>Adicionar Tarefas</button>
      </form>

      <input
        type="text"
        placeholder="Pesquisar por Tarefa"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />

      <p>Total de Tarefas: {tarefa.length}</p>
      <ul>
        {tarefasFiltradas.map((item) => (
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
