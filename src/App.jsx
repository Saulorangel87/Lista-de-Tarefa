import styles from './App.module.css'
import FormMateria from './components/FormMateria';
import Header from './components/Header'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <FormMateria />
    </div>
  )
}

export default App