<template>
<div class="confirmation">
  <link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet">
   <div class="hiring">
    <!-- <router-link to="/"> -->
    <img class="studentPhoto" :src="require(`../assets/${taiohiName}.png`)">
    <h1> {{taiohiName}} </h1>
    <p> is hiring </p>
    <h1> {{deviceName}} </h1>
    <!-- </router-link> -->
   </div>

   <div class="confirmCancel">
    <router-link to="/">
        <h2 @click="confirmClicked()"> CONFIRM </h2>
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
   name: 'Confirmation',
   data() {
      return {
         deviceName: this.$route.params.deviceName,
         taiohiName: this.$route.params.taiohiName,
      }
   },
   methods: {
    confirmClicked() {

        // loan obj
        let onLoan = {}
        onLoan = {
            device: this.deviceName,
            taiohi: this.taiohiName,
            onLoan: true,
            hiredTime: new Date()
        }
        //save to firestore
        db.collection("onLoan").doc(this.taiohiName).set(onLoan).then(() => {
            console.log("saved", onLoan)
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