<template>
  
  <div id="Students">
     <link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet">
     <div class="title">
        <img alt="STUDENT" src="../assets/students.png"/>
     </div> 

     <div class="studentidcontainer">
      <div @click="taiohiClicked(name)" v-for="name in students" :key="name.id" id="studentcontainer">
         
            <img class="studentPhoto" :src="require(`../assets/${name}.png`)">
            <p class="studentname">{{ name }}</p>
   
      </div>
     </div>
  </div>

</template>

<script>
export default {
   name: "Student",
   data() {
      return {
         deviceHire: this.$route.params.deviceHire,
         deviceReturn: this.$route.params.deviceReturn,
         students: [
               "mata",
               "atama",
               "kino",
               "cairo",
               "casey",
               "hekaranga",
               "vikiani",
               "aria",
               "jodeci",
               "meelah",
               "malakai",
               "olioni",
               "teise",
               "waimirirangi",
               "dallas",
               "kiana",
               "kyden",
               "lanae",
               "terangimarie",
               "akaysha",
               "cage",
               "calais",
               "celin-aroha",
               "harley",
               "jahnaia",
               "kareama",
               "kayah",
               "keyahn",
               "maiana",
               "mihiata",
               "nathaniel",
               "nevaeh",
               "ohomairangi",
               "pare",
               "rongopai",
               "savannah",
               "shiquanah",
               "tainui",
               "taliyah",
               "teahu",
               "teaurere",
               

         ]
      }
   },
   mounted() {
      console.log("students mounted",this.deviceHire, this.deviceReturn)
   },
   methods: {
      taiohiClicked(name) {

         console.log(this.deviceHire, this.deviceReturn)

         // route to chromebook page
         if (this.deviceHire) {
            this.$router.push({ name: 'Chromebooks', params: { name: name }})
         } else if (this.deviceReturn) {
            this.$router.push({ name: 'TaiohiDevices', params: { name: name }})
         }
         
         // and pass the name into that page
         // console.log("hello " + name)
      } 
   }
}
</script>

<style scoped>
   * {
      box-sizing: border-box;
     
   }
   .studentPhoto {
      background-color: rgb(145, 39, 39);
      border-radius: 50%;
   }

   #studentcontainer {
      display: flex;
      width: 20%;
   }

   .studentidcontainer {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
   }

   .studentname {
      font-family: 'Ranchers', cursive;
   }
</style>

