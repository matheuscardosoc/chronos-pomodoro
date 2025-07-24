import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));

    // setTheme(prevTheme => {
    //   const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
    //   return nextTheme;
    // });
  }

  // -- Executa toda vez que o componente renderiza na tela ------
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  // });
  // -------------------------------------------------------------

  // -- Executa apenas quando o React monta o componente na tela pela primeira vez --
  // useEffect(() => {
  //   console.log('useEffect de dependencias vazio', Date.now());
  // }, []);
  // --------------------------------------------------------------------------------

  // -- Executa apenas quando o valor da dependência mudar --
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    // return () => {
    //   console.log('cleanup');
    // };
  }, [theme]);
  // ---------------------------------------------------------

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a página inicial'
        title='Página inicial'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico de tarefas'
        title='Histórico de tarefas'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Acessar as configurações do pomodoro'
        title='Configurações do pomodoro'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        aria-label='Mudar o tema'
        title='Mudar tema'
        href='#'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
