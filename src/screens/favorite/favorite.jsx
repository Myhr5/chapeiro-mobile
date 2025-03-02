import { FlatList, View } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./favorite.style";
import { order } from "../../constants/data.js";
import Order from "../../components/order/order";

function Favorite() {
      return <View style={styles.container}>
            <FlatList data={order}
                  keyExtractor={(ord) => ord.id}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => {
                  return <Order 
                        logo={item.image}
                        value={item.value}
                        date={item.date}
                        icone={icons.remove} />
                  }}

                  contentContainerStyle={styles.containerList}

                  ListEmptyComponent={() => {
                  return <View style={styles.empty}>
                        <Image source={icons.empty} />
                        <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
                  </View>
                  }}
            />
            
      </View>
}

export default Favorite;