import { Text } from 'react-native';
import { styles } from "./style.js";
import Button from "./src/components/button/button.jsx";

export default function App() {

  return (<>
    <Text style={styles.text}>Hello World</Text>

    <Button text="Acessar" />
  </>
  );
}
