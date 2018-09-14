<template>
  <div>
    <div class="container cities-container">
      <div class="row">
        <div class="col-12">
          <h2 class="section-title"><span class="dark-blue">Contact</span> Us</h2>
        </div>
      </div>
      <div
        class="row justify-content-center mt-0 mt-lg-5"
      >
        <template v-for="(city, index) in cities">
          <div
            :key="index"
            class="col-auto mt-5 mt-md-5 mt-xl-0"
          >
            <div class="city">
              <span class="city__name">{{ city.name }}</span>
              <span class="city__address">{{ city.address }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="container contact-form-container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h2 class="section-title"><span class="dark-blue">Ask a</span> question</h2>
          <p class="contact-form__desc">Send us a short message with a important question</p>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row no-gutters justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-12 col-xl-10">
              <form @submit.prevent="" class="w-100 contact-form__form">
                <v-input
                  :value="formData.name"
                  :v-placeholder="'Name'"
                  type="text"
                  required
                  class="transaction-input"
                  @input="formData.name = $event.target.value"
                />
                <v-input
                  :value="formData.email"
                  :v-placeholder="'Email'"
                  type="email"
                  required
                  class="mt-4 transaction-input"
                  @input="formData.email = $event.target.value"
                />
                <textarea
                  :value="formData.message"
                  placeholder="Message"
                  class="contacts__textarea mt-4"
                >

                </textarea>
                <button
                  type="submit"
                  class="contact-form__button mt-4"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vInput from '@/components/common/input';

export default {
  name: 'contacts-page',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      cities: [
        {
          name: 'Moscow',
          address: '8900 E, Unnion Ave. Suite 1100 Denver, C0 829013 8900 E, ',
        },
        {
          name: 'Turkey',
          address: '8900 E, Unnion Ave. Suite 1100 Denver, C0 829013 8900 E, ',
        },
        {
          name: 'Dubai',
          address: '8900 E, Unnion Ave. Suite 1100 Denver, C0 829013 8900 E, ',
        },
      ],
    };
  },
  components: {
    vInput,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";

.city {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 360px;
  height: 360px;
  padding: 30px;
  border-radius: 12px;
  background-image: linear-gradient(226deg, rgba(49, 229, 102, 0), #00c6fe);
  box-shadow: 0 8px 42px -8px #b9bcc3;
}

.city__name {
  font-size: 1.875rem;
  font-weight: 900;
  letter-spacing: -0.9px;
  color: #ffffff;
}

.city__address {
  font-size: 1.125rem;
  line-height: 1.39;
  letter-spacing: -0.5px;
  color: #ffffff;
}

.contact-form-container {
  margin-top: 125px;
  margin-bottom: 150px;
}

.cities-container {
  margin-top: 80px;
}


.transaction-input /deep/ {

  & .input__body {
    background-color: white;
    border: solid 2px #ececec;

    .input__placeholder {
      color: #c5c5c5;
    }

    &:hover, &:focus {
      background-color: white;

      & .input__placeholder {
        color: #c5c5c5;
      }

      & .input__root {
        color: #c5c5c5;
      }
    }
  }

  & .input__placeholder {
    color: #c5c5c5;
  }

  & .input__root {
    color: #c5c5c5;
  }

  & .input__body--focus {
    background-color: white !important;
  }
}

.contacts__textarea {
  width: 100%;
  height: 140px;
  border-radius: 12px;
  background-color: #ffffff;
  border: solid 2px #ececec;
  resize: none;
  padding: 21px 16px;

  font-size: 1.25rem;
  line-height: 1.2;
  color: #c5c5c5;


  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #c5c5c5;
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: #c5c5c5;
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: #c5c5c5;
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: #c5c5c5;
  }

  &:focus, &:active {
    outline: none;
  }
}

.contact-form__button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;

  font-size: 1.3125rem;
  font-weight: bold;
  letter-spacing: -0.7px;
  color: #ffffff;

  border: none;
  border-radius: 78px;
  background-color: #8de37f;
  box-shadow: 0 20px 42px -8px rgba(141, 227, 127, 0.82);

  transition: box-shadow .2s ease;

  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
}

.contact-form__desc {
  font-size: 1.125rem;
  text-align: center;
  line-height: 1.44;
  letter-spacing: -0.5px;
  color: #2a3271;
  margin-bottom: 0;
}

.contact-form__form {
  margin-top: 60px;
}
</style>
