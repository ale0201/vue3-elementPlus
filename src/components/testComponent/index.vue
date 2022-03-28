<template>
  <div @click="textClick">{{ text }}</div>
  <div>{{ name }}</div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
export default defineComponent({
  props: {
    text: {
      type: String,
      required: false,
      default: "",
    },
    name: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: ["text", "name"],
  setup(props, { emit }) {
    const { text, name } = toRefs(props);
    const textClick = () => {
      emit("text", "textClick11");
    };
    return {
      text,
      name,
      textClick,
    };
  },
});
</script>
