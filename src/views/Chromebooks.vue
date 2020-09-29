<template>
 <div id="Chromebooks">
    <link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet">
     <div class="title">
        <img alt="CHROMEBOOKS" src="../assets/chromebooks.png"/>
     </div> 

 <div class="devicesContainer">
   <div @click="deviceClicked(name)" v-for="name in chromebooks" :key="name.chromebooks" id="laptopcontainer">
       <!-- if on loan. show x'd out -->
       <img v-if="isOnLoan(name)" class="chromebooksphoto" :src="require(`../assets/crossedOut.png`)">
       <!-- else show device image -->
       <img v-else class="chromebooksphoto" :src="require(`../assets/${name}.png`)">
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
         chromebooks: [
            "cb01",
            "cb02",
            "cb04",
            "cb05",
            "cb06",
            "cb08",
            "cb10",
            "cb12",
            "cb14",
            "cb15",
            "cb16",
            "cb20",
            "cb21",
            "cb22",
            "cb24",
            "cb25",
            "cb27",
            "cb28",
            "cb29",
            "cb30",
            "cb31",
            "cb32",
            "cb33",
            "hp-cb-07",
            "hp-cb-08",
            "hp-cb-11",
            "hp-cb-12",
            "hp-cb-15",
            "hp-cb-16",
            "lt-ln-01",
            "lt-ln-02",
            "lt-ln-03",
            "lt-ln-04",
            "lt-ln-05",
            "lt-ln-07",
            "lt-ln-08",
            "lt-ln-12",
            "lt-ln-13",
            "lt-ln-14",
            "lt-ln-16",
            "lt-ln-17",
            "lt-ln-18",
            "lt-ln-21",
            "lt-ln-23",
            "lt-ln-26",
            
         ]
      }
   },
    firestore: {
      devicesOnLoan: db.collection('onLoan'),
   },
  mounted() {
     this.$bind('devicesOnLoan',db.collection('onLoan').where('onLoan', '==', true)).then(() => {
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
      this.$router.push({ name: 'Confirmation', params: { deviceName: name,  taiohiName: this.taiohi}})
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