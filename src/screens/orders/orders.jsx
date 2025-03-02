import { FlatList, View } from "react-native";
import { order } from "../../constants/data.js";
import { styles } from "./orders.style";
import Order from "../../components/order/order.jsx";

function Orders(){
      return <View style={styles.container}>
            <FlatList data={order}
                  keyExtractor={(ord) => ord.id}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                        return <Order logo={item.image}
                              value={item.value}
                              date={item.date}
                              status={item.status}                    
                        />
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

export default Orders;