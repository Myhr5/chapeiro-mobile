import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./register.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";


function Register(props) {
    return <>
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Header text="Criar sua conta." />

                    <View style={styles.formGroup}>
                        <View style={styles.form}>
                            <TextBox label="Nome Completo" />
                        </View>

                        <View style={styles.form}>
                            <TextBox label="E-mail" />
                        </View>

                        <View style={styles.form}>
                            <TextBox label="Escolha uma senha" isPassword={true} />
                        </View>

                        <View style={styles.form}>
                            <TextBox label="Confirme a senha" isPassword={true} />
                        </View>

                        <View style={styles.form}>
                            <Button text="Próximo passo" />
                        </View>
                    </View>

                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Acessar minha conta.</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </>      
}

export default Register;