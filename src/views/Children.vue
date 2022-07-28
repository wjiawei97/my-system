<template>
  <div>
    <h2>我是子组件</h2>
    <slot name="footer" :users="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "janet",
        age: 25,
      },
    };
  },
};
</script>