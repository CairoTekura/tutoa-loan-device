<template>
<div class="confirmation">
  <link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet">
   <div class="hiring">
    <!-- <router-link to="/"> -->
    <img class="studentPhoto" :src="require(`../assets/${taiohiName}.png`)">
    <h1> {{taiohiName}} </h1>
    <p> is returning </p>
    <h1> {{deviceName}} </h1>
    <!-- </router-link> -->
   </div>

   <div class="confirmCancel">
    <router-link to="/">
        <h2 @click="returnClicked()"> RETURN </h2>
    </router-link>
    <router-link to="/">
    <h2 @click="cancelClicked()"> CANCEL </h2> 
    </router-link>
   </div>
</div>
</template>

<script>

import firebase from "firebase";
import { db } from '../components/firebase'

export default {
   name: 'Return',
   data() {
      return {
         deviceName: this.$route.params.deviceName,
         taiohiName: this.$route.params.taiohiName,
      }
   },
   methods: {
    returnClicked() {

        // loan obj
        let onLoan = {}
        onLoan = {
            device: '',
            taiohi: '',
            onLoan: false,
            returnedTime: new Date()
        }
        //save to firestore
        db.collection("onLoan").doc(this.taiohiName).set(onLoan).then(() => {
            console.log("returned", onLoan)
            this.$router.push({ name: 'Loan',})
        })
        
    },
    cancelClicked() {
    this.$router.push({ name: 'Loan',})
    }
   }

}
</script>

<style scoped>
* {
    box-sizing: border-box;
   
}

.studentPhoto {
    background-color: powderblue;
    border-radius: 50%;
    margin: 30px;
}

p {
    color: purple;
    font-size: 200%;
    font-family:  'Ranchers', cursive; ;
    margin: 20px;
}

h1 {
    color: powderblue;
    font-size: 300%;
    margin: 40px;
}


.confirmCancel {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
}

h2 {

    color: rebeccapurple;
    font-size: 400%;
    
}
</style>