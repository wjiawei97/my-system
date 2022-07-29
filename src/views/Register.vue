<template>
  <div class="register"></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["register"]),
  },
};
</script>