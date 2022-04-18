import React, { Component } from "react";
import { ScrollView, FlatList, Text } from "react-native";
import { Card, ListItem } from "react-native-elements";

class Contact extends Component {
    static navigationOptions = {
        title: "Contact Us",
    };

    render() {
        return (
            <ScrollView>
                <Card wrapperStyle={{ margin: 20 }} title="Contact Information">
                    <Text>
                        <Text>
                            <Text>1 Nucamp Way </Text>
                        </Text>
                    </Text>
                    <Text>
                        <Text>
                            <Text>Seattle, WA 98001</Text>
                        </Text>
                    </Text>
                    <Text>
                        <Text>
                            <Text>U.S.A.</Text>
                        </Text>
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                        <Text>
                            <Text>
                                <Text>Phone: 1-206-555-1234</Text>
                            </Text>
                        </Text>
                        <Text>
                            <Text>
                                <Text>Email: campsites@nucamp.co</Text>
                            </Text>
                        </Text>
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;
