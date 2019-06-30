<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>INNSO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container>
        <Search />
        <List />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import List from "./components/List";
import Search from "./components/Search";

export default {
  name: "App",
  components: {
    List,
    Search
  },
  data() {
    return {
      //
    };
  }
};
</script>
