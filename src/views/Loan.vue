<template>
  <div class="Loan">
        <!-- Hire button using <router-link to=""> -->
        <img @click="startApp('hire')" class="bigbutton" alt="HIRE" src="../assets/hire.png" />

        <!-- Return button -->
        <img @click="startApp('return')" class="bigbutton" alt="RETURN" src="../assets/return.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    startApp(type) {
      if (type == 'hire') {
         this.$router.push({ name: 'Students', params: { deviceHire: true, deviceReturn: false }})
      } else if (type == 'return') {
        this.$router.push({ name: 'Students', params: { deviceHire: false, deviceReturn: true }})
      }
    }
  }
}
</script>

<style scoped>
.Loan {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.bigbutton {
  margin: 50px;
  width: 40%;
}

</style>