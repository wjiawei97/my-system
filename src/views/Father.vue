<template>
  <div>
    <h2>我是父组件</h2>
    <Children>
      <template v-slot:footer="slotProps">
        <p style="color: red">我是具名插槽{{ slotProps.users.name }}</p>
      </template>
    </Children>
  </div>
</template>

<script>
import Children from "./Children.vue";
export default {
  components: {
    Children,
  },
};
</script>