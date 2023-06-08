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
    <pre class="prerender">
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

      <label for="country">Choose your country</label>
      <select id="country" v-model="formValues.location">
        <option value="brazil">Brazil</option>
        <option value="united states">USA</option>
        <option value="united kingdom">UK</option>
        <option value="Madagascar">Madagascar</option>
      </select>

      <label for="areaLocation">Cover letter ?</label>
      <textarea id="areaLocation" cols="30" rows="10" v-model="formValues.motivation"/>
  
      <div class="checkvalues">
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

      <div class="btn--div">
        <button>Submit</button>
      </div>
    </form>

  </div>
</template>

<style scoped>
.greetings {
  margin-top: -140px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
}
.prerender {
  width: 40%;
  font-size: 1.4rem;
  text-align: center;
  background: navy;
  border-radius: 7px;
  box-shadow: 0px 0px 20px aqua;
  color: lightgrey;
}
form {
  width: 45%;
  display: flex;
  flex-direction: column;
  background-color: navy;
  border-radius: 7px;
  box-shadow: 0px 0px 20px cyan;
  padding: 20px 40px;
  color: #fff;
}
label {
  font-size: 1.2rem;
  margin: 10px 0px;
}
.checkvalues{
  margin: 10px auto;
}
input {
  font-size: 1.2rem;
  padding: 5px;
}
input[type='checkbox'] {
  margin: 10px;
}
select {
  font-size: 1.2rem;
  padding: 5px 0px;
}
textarea {
  font-size: 0.9rem;
  border: 1px solid #242424;
  border-radius: 12px;
  box-shadow: 0px 0px 20px inset #000;
  padding: 5px 10px;
}
.btn--div {
  display: flex;
  justify-content: center;
}
button {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: royalblue;
  border: 1px solid navy;
  border-radius: 7px;
  color: lightgreen;
  padding: 10px 200px;
}
button:hover {
  transform: scale(1.05);
}
button:active {
  transform: scale(0.95);
}
</style>
