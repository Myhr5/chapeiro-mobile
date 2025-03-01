import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function GetLogin() {
        console.log(email, password);
    }

    return <View style={styles.container}>
        <Header texto="Acesse sua conta." />

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label="E-mail"
                    onChangeText={(text) => setEmail(text)}
                    value={email} />
            </View>

            <View style={styles.form}>
                <TextBox label="Senha" isPassword={true} 
                    onChangeText={(text) => setPassword(text)}
                    value={password}/>
            </View>

            <View style={styles.form}>
                <Button text="Acessar" onPress={GetLogin}/>
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerText}>Criar minha conta.</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Login;