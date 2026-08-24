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
  const [filtroStatus, setFiltroStatus] = useState("Todos");

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

  const tarefasFiltradas = tarefa
    .filter((item) => item.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    .filter((item) => {
      if (filtroStatus === "Todos") {
        return true;
      } else if (filtroStatus === "Pendentes") {
        return item.concluida === false;
      } else if (filtroStatus === "Concluídas") {
        return item.concluida === true;
      }
    });

  const contagemTarefasFiltradas = tarefasFiltradas.reduce(
    (acumulador, item) => {
      if (item.concluida) {
        acumulador.concluidas++;
      } else {
        acumulador.pendentes++;
      }
      return acumulador;
    },
    { pendentes: 0, concluidas: 0 },
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

      <select
        value={filtroStatus}
        onChange={(e) => setFiltroStatus(e.target.value)}
      >
        <option value="Todos">Todos</option>
        <option value="Concluídas">Concluídas</option>
        <option value="Pendentes">Pendentes</option>
      </select>

      <p>
        Total: {tarefa.length} | Pendentes: {contagemTarefasFiltradas.pendentes}{" "}
        | Concluídas: {contagemTarefasFiltradas.concluidas}
      </p>
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
