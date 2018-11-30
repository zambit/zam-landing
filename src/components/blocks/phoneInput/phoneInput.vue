<template>
  <div class="row no-gutters">
    <div class="col-12 position-relative">
      <div class="d-flex">
        <div class="position-relative mr-4">
          <div class="position-relative">
            <div
              v-html="'Code'"
              :class="['placeholder', { 'placeholder--focused': codeInputFocused || code.length >
             0 }]"
            ></div>
            <input
              :value="code"
              :theme="theme"
              type="text"
              class="input input-code"
              @focus="codeInputFocused = true"
              @blur="codeInputFocused = false"
              @input="$emit('code', $event.target.value)"
            />
          </div>
          <transition appear name="fade">
            <div
              v-if="country.length > 0 && code.length > 0"
              class="phone__country"
              :style="{ backgroundImage: `url(https://www.countryflags.io/${country}/flat/64.png)` }"
            ></div>
          </transition>
        </div>
        <div class="position-relative">
          <div
            v-html="'Phone'"
            :class="['placeholder', { 'placeholder--focused': phoneInputFocused || phone.length >
             0 }]"
          ></div>
          <input
            :value="phone"
            :error="error"
            :errorText="errorText"
            type="text"
            class="input"
            @focus="phoneInputFocused = true"
            @blur="phoneInputFocused = false"
            @input="$emit('value', $event.target.value)"
          >
        </div>
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
      codeInputFocused: false,
      phoneInputFocused: false,
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

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 1rem;
  color: #858997;

  padding: 10px 0;
  border: 1px solid transparent;

  transition: color .2s ease, transform .2s ease;
  transform-origin: left;

  pointer-events: none;
}

.placeholder--focused {
  color: $sky-blue;
  transform: scale(.75) translateY(-24px);
}
</style>
