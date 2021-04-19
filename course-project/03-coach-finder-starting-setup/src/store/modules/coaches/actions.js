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

    const response = await fetch(
      `https://vuejs-course-d14c4-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
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
  async loadCoaches(context) {
    const response = await fetch(
      `https://vuejs-course-d14c4-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      // ...
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
  }
};
