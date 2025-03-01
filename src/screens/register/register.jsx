import { View, ScrollView } from "react-native";
import { styles } from "../register/register.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Register(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    return <>
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Header text="Criar sua conta." />

                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <TextBox label="Nome Completo"
                            onChangeText={(text) => setName(text)}
                            value={name} />
                    </View>

                    <View style={styles.form}>
                        <TextBox label="E-mail"
                            onChangeText={(text) => setEmail(text)}
                            value={email} />
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Escolha uma senha" isPassword={true}
                            onChangeText={(text) => setPassword1(text)}
                            value={password1} />
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Confirme a senha" isPassword={true}
                            onChangeText={(text) => setPassword2(text)}
                            value={password2} />
                    </View>

                    <View style={styles.form}>
                        <Button texto="Próximo passo"
                            onPress={() => props.navigation.navigate("register2")} />
                    </View>
                </View>

            </ScrollView>
        </View>
    </>
}

export default Register;