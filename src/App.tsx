import RouterConfig from './routes/RouterConfig';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#af7eeb'
    }
  }
});

const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <RouterConfig />
    </ThemeProvider>
  </div>
);

export default App;
