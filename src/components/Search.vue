<template>
    <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        @input="updateSearch"
      ></v-text-field>
</template>

<script>
import { mapActions } from 'vuex'
import store from '../store'
    export default {
        store, 
        methods: mapActions(['updateSearch'])
    }
</script>

<style lang="scss" scoped>

</style>