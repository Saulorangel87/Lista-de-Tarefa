import styles from './App.module.css'
import FormTarefas from './components/FormTarefas';
import Header from './components/Header'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <FormTarefas />
    </div>
  )
}

export default App