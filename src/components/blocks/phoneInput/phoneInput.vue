<template>
  <div class="row no-gutters">
    <div class="col-12 position-relative">
      <div class="d-flex">
        <div class="position-relative mr-4">
          <input
            :placeholder="'Code'"
            :value="code"
            :theme="theme"
            type="text"
            class="input input-code"
            @input="$emit('code', $event.target.value)"
          />
          <transition appear name="fade">
            <div
              v-if="country.length > 0"
              class="phone__country"
              :style="{ backgroundImage: `url(https://www.countryflags.io/${country}/flat/64.png)` }"
            ></div>
          </transition>
        </div>
        <input
          :placeholder="'Phone'"
          :value="phone"
          :error="error"
          :errorText="errorText"
          type="text"
          class="input"
          @input="$emit('value', $event.target.value)"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { AsYouType, parseNumber } from 'libphonenumber-js';
import axios from 'axios';
import vInput from '@/components/common/input';

import phoneCodes from './phoneCodes.json';

export default {
  name: 'phone-input',
  props: {
    code: String,
    phone: String,
    errorText: String,
    theme: String,
    error: Boolean,
    guessCountryOnCreated: Boolean,
  },
  data() {
    return {
      country: '',
      formatter: new AsYouType(),
    };
  },
  components: {
    vInput,
  },
  watch: {
    code(value) {
      const countryInfo = phoneCodes.find(el => el.code === value);

      if (countryInfo) {
        this.country = countryInfo.country;
        this.$emit('country', countryInfo.country);
      }
    },
  },
  methods: {
    parseInputValue(value) {
      const { countryCallingCode = '' } = parseNumber(value, { extended: true });

      const countryInfo = phoneCodes.find(el => el.code === `+${countryCallingCode}`);

      if (countryInfo) {
        this.country = countryInfo.country;
      } else {
        this.country = '';
      }

      this.formatter.reset();
      this.$emit('value', this.formatter.input(value));
    },
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
        this.$emit('code', countryInfo.code);
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

  transition: border-bottom-color .2s ease;

  &:focus {
    outline: none;
    border-color: transparent transparent $sky-blue transparent;
    caret-color: $sky-blue;
  }
}

.input-code {
  width: 75px;
}

.phone__country {
  position: absolute;
  right: 0;
  top: 15px;
  width: 24px;
  height: 18px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 0px 30px -5px #00000085;
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
