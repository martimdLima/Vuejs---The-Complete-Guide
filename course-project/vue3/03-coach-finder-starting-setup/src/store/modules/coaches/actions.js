export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;

    const coach = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vuejs-course-d14c4-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`,
      {
        method: 'PUT',
        body: JSON.stringify(coach)
      }
    );

    if (!response.ok) {
      //error
    }

    const responseData = {
      ...coach,
      id: userId
    };

    context.commit('registerCoach', responseData);
  },
  async loadCoaches(context, payload) {
    if (!context.getters.shouldUpdate && !payload.forceRefresh) {
      return;
    }

    const response = await fetch(
      `https://vuejs-course-d14c4-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
