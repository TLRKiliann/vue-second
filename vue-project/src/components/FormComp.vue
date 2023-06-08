<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  inheritAttrs: false,
  data() {
    return {
      formValues: {
        name: '',
        password: '',
        phone: null,
        email: '',
        location: '',
        motivation: '',
        checkValue: [],
        remoteWork: 'no'
      }
    }
  },
  methods: {
    submitForm(): void {
      console.log(this.formValues);
    }
  }
})

</script>

<template>
  <div class="greetings">
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre>

    <form @submit.prevent="submitForm">
      <label for="username">Username</label>
      <input id="username" type="text" v-model="formValues.name" />

      <label for="password">Password</label>
      <input id="password" type="password" v-model="formValues.password" />

      <label for="phone">Phone</label>
      <input id="phone" type="number" v-model="formValues.phone" />

      <label for="email">Email</label>
      <input id="email" type="email" v-model="formValues.email" />

      <label for="country"></label>
      <select id="country" v-model="formValues.location">
        <option value="brazil">Brazil</option>
        <option value="united states">USA</option>
        <option value="united kingdom">UK</option>
        <option value="Madagascar">Madagascar</option>
      </select>

      <label for="areaLocation">Cover letter ?</label>
      <textarea id="areaLocation" cols="30" rows="10" v-model="formValues.motivation"/>
  
      <div>
        <h3 for="checkCode">Codes {{ formValues.checkValue }}</h3>
        
        <input type="checkbox" id="react" value="React" 
          v-model="formValues.checkValue" />
        <label for="react">React</label>

        <input type="checkbox" id="sveltekit" value="Sveltekit" 
          v-model="formValues.checkValue" />
        <label for="sveltekit">Sveltekit</label>

        <input type="checkbox" id="vue" value="Vue" 
          v-model="formValues.checkValue" />
        <label for="vue">Vue</label>

        <input type="checkbox" id="nextjs" value="NextJS" 
          v-model="formValues.checkValue" />
        <label for="nextjs">NextJS</label>

        <input type="checkbox" id="vitejs" value="ViteJS" 
          v-model="formValues.checkValue" />
        <label for="vitejs">ViteJS</label>

      </div>

      <div>
        <input type="checkbox" id="remote" 
          v-model="formValues.remoteWork" true-value="yes" false-value="no" />
        <label for="remote">Ok to work in remote ?</label>
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>

  </div>
</template>

<style scoped>
.greetings {
  width: 500px;
  margin: 0 50%;
}
form {
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>
