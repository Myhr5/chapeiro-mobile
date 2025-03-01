import { Image, View, Text, ScrollView } from "react-native";
import { styles } from "./home.style.js";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";

function Home() {

    const [search, setSearch] = useState("");

    return <SafeAreaView style={styles.container}>
        <View style={styles.headerBar}>
            <Image source={icons.logo} style={styles.logo} />
            <Image source={icons.cart} style={styles.cart} />
        </View>

        <View style={styles.search}>
            <TextBox placeholder="O que vamos pedir hoje?"
                onChangeText={(text) => setSearch(text)}
                value={search} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>


        </ScrollView>

    </SafeAreaView>
}

export default Home;