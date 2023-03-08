import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
class Content2 extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View
            style={{
              padding: 10,
              width: "100%",
              backgroundColor: "pink",
              height: 150
            }}
          >
            <TouchableOpacity>
              <View></View>
              <View></View>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
              Johny Makelele
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>
              Lagos , Nigeria{" "}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Content2;
