<template>
  <v-data-table
    :headers="headers"
    :items="list"
    :search="search"
    item-key="id"
  >
    <template v-slot:items="props">
      <td class="text-xs-left">
        <Contact
          :first_name="props.item.customer.first_name"
          :last_name="props.item.customer.last_name"
          :email="props.item.customer.email"
          :phone="props.item.customer.phone"
        />
      </td>
      <td class="text-xs-left">
        {{ props.item.customer.country_code }}
      </td>
      <td class="text-xs-left">
        {{ props.item.status }}
      </td>
      <td class="text-xs-left">
        {{ getCreationDate(props.item.interaction_creation_date) }}
      </td>
      <td class="text-xs-left">
        <DueDate :date="getDueDate(props.item.due_date)" />
      </td>
      <td class="text-xs-left">
        {{ props.item.assignedTO }}
      </td>
      <td class="text-xs-left">
        <div class=" last-comment">{{ props.item.last_comment }}</div>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Contact from "./Contact";
import DueDate from "./DueDate";
import store from "../store";

export default {
  store,
  components: {
    Contact,
    DueDate
  },
  computed: {
    headers: () => {
      return [
        {
          text: "name",
          align: "left",
          value: "customer.last_name"
        },
        {
          text: "country code",
          align: "left",
          value: "customer.country_code"
        },
        {
          text: "status",
          align: "left",
          value: "status"
        },
        {
          text: "creation date",
          align: "left",
          value: "interaction_creation_date"
        },
        {
          text: "due date",
          align: "left",
          value: "due_date"
        },
        {
          text: "assigned to",
          align: "left",
          value: "assignedTO"
        },
        {
          text: "last comment",
          align: "left",
          value: "last_comment"
        }
      ];
    },
    ...mapState(["list", "search"])
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    getDueDate(date) {
      return new Date(date);
    },
    getCreationDate(date) {
      return new Date(date).toLocaleString();
    },
    ...mapActions(["fetchList"])
  }
};
</script>

<style scoped>
.last-comment {
  overflow: hidden;
  width: 250px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media screen and (min-width: 800px) {
  .last-comment {
    overflow: inherit;
    white-space: normal;
  }
}
</style>
