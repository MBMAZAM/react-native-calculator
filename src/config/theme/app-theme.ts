import { StyleSheet } from "react-native";


export const colorGlobal = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
}



export const stylesGlobal = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colorGlobal.background,
  },
  calculateContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10
  },
  mainResult: {
    color: colorGlobal.textPrimary,
    fontSize: 70,
    textAlign: "right",
    marginBottom: 10,
    fontWeight: "400"
  },
  subResult: {
    color: colorGlobal.textSecondary,
    fontSize: 40,
    textAlign: "right",
    fontWeight: "300"
  }, 
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
    flexWrap:"wrap"
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: colorGlobal.darkGray,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,

    

  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: "300"
  }
});