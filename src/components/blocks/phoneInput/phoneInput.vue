<template>
  <div class="row no-gutters">
    <div class="col-12 position-relative">
      <input
        :placeholder="'Code'"
        :value="code"
        :error="error"
        :errorText="errorText"
        aria-label="Country code"
        type="text"
        maxlength="6"
        class="input input-code"
        @input="$emit('code', $event.target.value)"
      >
      <input
        :placeholder="'Phone'"
        :value="phone"
        :error="error"
        :errorText="errorText"
        aria-label="Phone"
        type="text"
        class="input"
        @input="$emit('phone', $event.target.value)"
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import phoneCodes from './phoneCodes.json';

export default {
  name: 'phone-input',
  props: {
    code: String,
    phone: String,
    errorText: String,
    error: Boolean,
    guessCountryOnCreated: Boolean,
  },
  async created() {
    if (this.guessCountryOnCreated) {
      let response = '';

      /**
       * Get user country based on IP information
       */
      try {
        response = await axios.get('https://ipinfo.io');
      } catch (e) {
        this.country = '';
        return false;
      }

      // Value is RU, US, etc
      this.country = response.data.country || '';

      const countryInfo = phoneCodes.find(el => el.country === this.country);

      if (countryInfo) {
        this.code = countryInfo.code;
      }
      this.$emit('country', this.country);
    }
    return true;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.input {
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: transparent transparent #b0b3be transparent;

  padding: 10px 0;

  font-size: 1rem;
  color: #858997;

  &:focus {
    outline: none;
  }
}

.input-code {
  width: 75px;

  margin-right: 28px;
}

.input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-size: 1rem;
  color: #858997;
}

.input::-moz-placeholder { /* Firefox 19+ */
  font-size: 1rem;
  color: #858997;
}

.input:-ms-input-placeholder { /* IE 10+ */
  font-size: 1rem;
  color: #858997;
}

.input:-moz-placeholder { /* Firefox 18- */
  font-size: 1rem;
  color: #858997;
}
</style>
