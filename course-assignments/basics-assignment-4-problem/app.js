const app = Vue.createApp({
    data() {
        return {
          inputClass: '',
          show: true,
          backgroundColor: ''
        };
      },
      computed: {
        paraClasses() {
          return {
            user1: this.inputClass === 'user1',
            user2: this.inputClass === 'user2',
            visible: this.show,
            hidden: !this.show
          };
        },
      },
    methods: {
        displayParagraph() {
            this.show = !this.show;
        }
    },
});

app.mount("#assignment");
