import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../model/use-theme';
import { Button } from '../primitive/button';

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  );
};
