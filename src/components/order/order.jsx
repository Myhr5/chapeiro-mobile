import { View, Image, Text } from "react-native";
import { styles } from "./order.style";

function Order(props) {
      return <View style={styles.order}>
            <Image source={props.logo} style={styles.logo} />

            <View style={styles.containerValue}>
                  <Text style={styles.value}>
                        {
                              new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(props.value)
                        }
                  </Text>
                  <Text style={styles.value}>{props.dt_order}</Text>
            </View>
            <Text style={styles.status}>{props.status}</Text>
      </View>
}

export default Order;