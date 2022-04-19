import { firebase, FieldValue } from "../libraries/firebase";


const doesUserNameExist = async(username) => {
const result = await firebase
.firestore()
.collection("users")
.where("username", "==", username)
.get();

console.log(result);
 
return result.docs.map((user) => user.data().length >0);


};

export default doesUserNameExist;