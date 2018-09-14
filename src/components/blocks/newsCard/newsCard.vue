<template>
  <article
    :style="{ backgroundImage: `url(${news.thumbnail})` }"
    class="news-card"
  >
    <div class="position-relative" style="z-index: 1">
      <div class="d-flex justify-content-between align-items-center">
        <span class="news-card__day">{{ news.day }}</span>
        <div class="news-card__tag">{{ news.tag }}</div>
      </div>
      <span class="news-card__month">{{ news.month }}</span>
    </div>
    <div class="position-relative" style="z-index: 1">
      <h3 class="news-card__title">{{ news.title }}</h3>
      <p class="news-card__author mt-3">{{ news.author }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'news-card',
  props: {
    news: {
      type: Object,
      required: true,
      default() {
        return {
          day: '',
          tag: '',
          month: '',
          title: '',
          author: '',
          thumbnail: '',
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_settings.scss";


.news-card {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 30px 28px 35px;

  color: #ffffff;

  border-radius: 12px;
  background-color: rgba(66, 33, 9, 0.3);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: box-shadow .2s ease;

  &:hover {
    box-shadow: 0 20px 33px -8px rgba(0, 0, 0, 0.82);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    border-radius: 12px;

    background-color: rgba(66, 33, 9, 0.3);
  }
}

.news-card__tag {
  border-radius: 24px;
  border: solid 1px $sky-blue;

  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: #ffffff;
  padding: 3px 31px;
}

.news-card__day {
  font-size: 1.875rem;
  font-weight: 500;
  line-height: 0.8;
  letter-spacing: -1px;
}

.news-card__month {
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.33;
}

.news-card__title {
  font-size: 1.6875rem;
  font-weight: bold;
  line-height: 1.11;
  margin-bottom: 0;
  margin-top: 150px;
}

.news-card__author {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 0;
}
</style>
