import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { messages, stickers } from "@/Data/Data";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import TinderCard from "react-tinder-card";

const index = () => {
  const [characters, setCharacters] = useState<any[]>(stickers);
  const [lastDirection, setLastDirection] = useState<string>();
  const [alreadyRemoved, setAlreadyRemoved] = useState<number[]>([]);

  const childRefs = useMemo(
    () =>
      Array(stickers.length)
        .fill(0)
        .map(() => React.createRef()),
    [stickers.length]
  );

  const swipe = (dir: any) => {
    // Filter out cards that have already been removed
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.id)
    );

    if (cardsLeft.length) {
      // Get the ID of the last card in the filtered list
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id;
      // Find the index of this card in the original characters array
      const index = characters.map((person) => person.id).indexOf(toBeRemoved);

      // Add the removed card ID to the alreadyRemoved array
      alreadyRemoved.push(toBeRemoved);
      // Swipe the card using the reference
      childRefs[index].current?.swipe(dir);
    } else {
      // No cards left, reset alreadyRemoved and characters
      setAlreadyRemoved([]);
      setCharacters(stickers);
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 14,
            }}
          >
            See what everyone thinks! Check out the results of your poll
          </Text>
        </View>
        <View style={[styles.cardContainer]}>
          {characters.map((character: any, index: number) => (
            <TinderCard
              ref={childRefs[index] as any}
              key={index}
              // onSwipe={(dir) => swipe(characters.id)}
              preventSwipe={["left", "right", "up", "down"]}
            >
              <View style={[{ backgroundColor: "#f4d03f" }, styles.card]}>
                {character.type == "text" ? (
                  <View
                    style={{
                      paddingVertical: 20,
                      paddingHorizontal: 25,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "800",
                      }}
                    >
                      {character.content}
                    </Text>
                    <View
                      style={{
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                        backgroundColor: "#ffeb99",
                        marginTop: 17,
                        borderRadius: 10,
                      }}
                    >
                      <Text>Share your secrets, get anonymous answers.</Text>
                    </View>
                  </View>
                ) : (
                  <View
                    style={{
                      paddingVertical: 20,
                      paddingHorizontal: 25,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "800",
                      }}
                    >
                      {character.content}
                    </Text>
                    <View
                      style={{
                        marginTop: 17,
                      }}
                    >
                      {character.poll.options.map(
                        (option: any, index: number) => (
                          <View
                            key={index}
                            style={{
                              position: "relative",
                              paddingVertical: 10,
                              // paddingHorizontal: 20,
                              width: "100%",
                              borderWidth: 1.5,
                              marginBottom: 15,
                              borderRadius: 10,
                              height: 50,
                              zIndex: 10,
                            }}
                          >
                            {/* <View
                              style={{
                                backgroundColor: "black",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                borderRadius: 8,
                                zIndex: -10,
                                bottom: -8,
                                right: -8,
                              }}
                            ></View> */}
                            <View
                              style={{
                                paddingHorizontal: 20,
                                zIndex: 1000,
                                height: "100%",
                                width: "100%",
                                backgroundColor: "#f4d03f",
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 17,
                                  fontWeight: "800",
                                }}
                              >
                                {option}
                              </Text>
                            </View>
                          </View>
                        )
                      )}
                    </View>
                  </View>
                )}
              </View>
            </TinderCard>
          ))}
          {/* ))} */}
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={() => swipe("left")}
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          {/* <Pressable
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <MaterialCommunityIcons name="restore" size={24} color="black" />
          </Pressable> */}
          <Pressable
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "white",
              justifyContent: "center",
              marginHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Entypo name="share" size={24} color="black" />
          </Pressable>
          <Pressable
            onPress={() => swipe("right")}
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "white",
              justifyContent: "center",
              marginHorizontal: 10,
              alignItems: "center",
            }}
          >
            <AntDesign name="arrowright" size={24} color="black" />
          </Pressable>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "700",
                color: "white",
                fontSize: 23,
              }}
            >
              Inbox
            </Text>
          </View>
          <View
            style={{
              height: 100,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                paddingHorizontal: 30,
                color: "rgba(255,255,255,0.6)",
                textAlign: "center",
              }}
            >
              Please share above template to get anonymous ans
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    color: "#000",
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: "100%",
    minHeight: 320,
    marginTop: 30,
  },
  card: {
    position: "absolute",
    width: "100%",
    minHeight: 200,

    maxHeight: 500,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: "cover",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 20,
  },
  cardTitle: {
    position: "absolute",
    bottom: 0,
    margin: 10,
    color: "#fff",
  },
  infoText: {
    height: 28,
    justifyContent: "center",
    display: "flex",
    zIndex: -100,
  },
});
