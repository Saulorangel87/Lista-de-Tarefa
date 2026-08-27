import { useEffect, useState } from "react";
import styles from "./FormTarefas.module.css";

const CHAVE_STORAGE = "tarefas";

export default function FormTarefas() {
  const [tarefa, setTarefas] = useState(() => {
    const dadosSalvo = localStorage.getItem(CHAVE_STORAGE);
    try {
    return dadosSalvo ? JSON.parse(dadosSalvo) : [];
    } catch (error) {
      return [];
    }
  });
  const [addTarefa, setAddTarefa] = useState("");
  const [erro, setErro] = useState("");
  const [pesquisa, setPesquisa] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("Todos");
  const [editarTarefa, setEditarTarefa] = useState(null);
  const [editarTarefaNome, setEditarTarefaNome] = useState("");
  const [prioridade, setPrioridade] = useState("Média");
  const [categoria, setCategoria] = useState("Pessoal");
  const [filtroPrioridade, setFiltroPrioridade] = useState("Todos");
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");

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
      prioridade: prioridade,
      categoria: categoria,
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

  function handleIniciarEdicao(id, itemAtual) {
    setEditarTarefa(id);
    setEditarTarefaNome(itemAtual.nome);
  }

  function handleConfirmarEdicao(id, nome) {
    setTarefas(
      tarefa.map((item) => (item.id === id ? { ...item, nome: nome } : item)),
    );
    setEditarTarefa(null);
    setEditarTarefaNome("");
  }

  function handleCancelarEdicao() {
    setEditarTarefa(null);
    setEditarTarefaNome("");
  }

  function handleExcluirTudo() {
    const confirmação = confirm("Tem certeza que deseja excluir todas as tarefas?");
    if (!confirmação) return;
    setTarefas([]);
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
    })
    .filter((item) => {
      if (filtroPrioridade === "Todos") return true;
      return item.prioridade === filtroPrioridade;
    })
    .filter((item) => {
      if (filtroCategoria === "Todos") return true;
      return item.categoria === filtroCategoria;
    })
    .sort((a, b) => a.nome.localeCompare(b.nome));

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

  const contagemPorCategoria = tarefasFiltradas.reduce((acumulador, item) => {
    acumulador[item.categoria] = (acumulador[item.categoria] || 0) + 1;
    return acumulador;
  }, {});

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
        <select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
        >
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
        </select>
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

      <select
        value={filtroPrioridade}
        onChange={(e) => setFiltroPrioridade(e.target.value)}
      >
        <option value="Todos">Todos</option>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>

      <select
        value={filtroCategoria}
        onChange={(e) => setFiltroCategoria(e.target.value)}
      >
        <option value="Todos">Todos</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Estudos">Estudos</option>
      </select>

      <button onClick={handleExcluirTudo}>Excluir Tudo</button>
      <div>
        {Object.entries(contagemPorCategoria).map(([categoria, quantidade]) => (
          <p key={categoria}>
            {categoria}: {quantidade}
          </p>
        ))}
      </div>


      <p>
        Total: {tarefa.length} | Pendentes: {contagemTarefasFiltradas.pendentes}{" "}
        | Concluídas: {contagemTarefasFiltradas.concluidas}
      </p>
      <ul>
        {tarefasFiltradas.map((item) => (
          <li key={item.id}>
            {editarTarefa === item.id ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleConfirmarEdicao(item.id, editarTarefaNome);
                }}
              >
                <label htmlFor="nome">Nome da Tarefa:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome da Tarefa"
                  value={editarTarefaNome}
                  onChange={(e) => setEditarTarefaNome(e.target.value)}
                />
                <button>Confirmar Edição</button>
                <button onClick={handleCancelarEdicao} type="button">
                  Cancelar Edição
                </button>
              </form>
            ) : (
              <>
                <span
                  onClick={() => handleToggleConcluido(item.id)}
                  style={{
                    cursor: "pointer",
                    textDecoration: item.concluida ? "line-through" : "none",
                    color: item.prioridade === "Alta" ? "red" : "black",
                  }}
                >
                  {item.nome} - {item.prioridade} - {item.categoria}
                </span>
                <button onClick={() => handleDelete(item.id)}>X</button>
                <button onClick={() => handleIniciarEdicao(item.id, item)}>
                  Editar
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {erro && <p>{erro}</p>}
    </div>
  );
}
