<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found.
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      //     fetch('https://vuejs-course-d14c4-default-rtdb.europe-west1.firebasedatabase.app/surveys.json').then((response) => {
      //   if(response.ok) {
      //    return response.json();
      //   }
      // }).then((data) => {
      //   const results = [];

      //   for(const id in data) {
      //     results.push({id: id, name: data[id].name, rating: data[id].rating});
      //   }

      //   this.results = results;
      //   console.log(data);
      // });

      axios
        .get(
          'https://vuejs-course-d14c4-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
        )
        .then(response => {
          const payload = response.data;

          const results = [];

          for (const id in payload) {
            results.push({
              id: id,
              name: payload[id].name,
              rating: payload[id].rating
            });
          }

          this.results = results;
        })
        .catch(err => {
          console.log(err);
          this.isLoading = false;
          this.error = 'Failed to fetch data - Please try again later';
        });
      this.isLoading = false;
    }
  },
  mounted() {
    this.loadExperiences();
  },
  components: {
    SurveyResult
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
