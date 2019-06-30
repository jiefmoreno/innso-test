<template>
  <div>
    <span
      class="display-name"
      @click="setDialog"
    >{{ first_name }} {{ last_name }}</span>
    <v-dialog
      v-model="dialog"
      width="200"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Contact
        </v-card-title>

        <v-card-text>
          <a
            class="link"
            :href="phoneHref"
          >Call</a>
          <a
            class="link"
            :href="emailHref"
          >Email</a>
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    phoneHref: ({ phone }) => `tel:+${phone}`,
    emailHref: ({ email }) => `mailto:${email}`
  },
  methods: {
    setDialog() {
      this.dialog = !this.dialog;
    }
  }
};
</script>

<style scoped>
.display-name {
  cursor: pointer;
}
.link {
  margin: 5px;
}
</style>