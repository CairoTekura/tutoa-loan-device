<template>
 <div id="Chromebooks">
    <link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet">
     <div class="title">
        <img alt="CHROMEBOOKS" src="../assets/chromebooks.png"/>
     </div> 

 <div class="devicesContainer">

   <h1 v-if="devicesOnLoan.length <= 0">No Devices Loaned Out</h1>

  <div v-else @click="deviceClicked(deviceObj.device)" v-for="deviceObj in devicesOnLoan" :key="deviceObj.id" id="laptopcontainer">
       <img class="chromebooksphoto" :src="require(`../assets/${deviceObj.device}.png`)">
  </div>

</div>

 </div>
</template>

<script>

import { db } from '../components/firebase' 

export default {
   name: "Chromebook",
   data() {
      return {
         taiohi: this.$route.params.name,
         devicesOnLoan:[],
      }
   },
   //  firestore: {
   //    devicesOnLoan: db.collection('onLoan').where("taiohi","==",this.taiohi),
   // },
  mounted() {
     this.$bind('devicesOnLoan',db.collection('onLoan').where('taiohi', '==', this.taiohi)).then(() => {
        console.log(this.devicesOnLoan)
     }) 
  },
//   watch: {
//      devicesOnLoan: function(newVal) {
//       this.devicesOnLoan.forEach(device => {
//          console.log(device.id,'has',device.device)
//       })
//      }
//   },
   methods: {
     deviceClicked(name) {
      this.$router.push({ name: 'Return', params: { deviceName: name,  taiohiName: this.taiohi}})
      console.log(this.taiohi + name )
     },
     isOnLoan(currentDeviceName) {
        return this.devicesOnLoan.some(deviceOnLoan => deviceOnLoan.device.includes(currentDeviceName));
     } 
   }


}
</script>

<style scoped>

* {
   box-sizing: border-box;
}

.chromebooksphoto {
   background-color: rgb(145, 39,39);
}

.devicesContainer {
   display: flex;
   width: 100%;
   flex-wrap: wrap;
}

#laptopcontainer {
   display: flex;
   width: 20%;
}

.deviceName {
 font-family: 'Ranchers', cursive;  
}
</style>