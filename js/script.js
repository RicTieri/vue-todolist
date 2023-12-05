const { createApp } = Vue

createApp({
  data() {
    return {
      newElement: '',
      list: [{ text: 'andare in un posto', done: false }, { text: 'costruire qualcosa', done: false }, { text: 'fare una bella foto', done: false },],
    }
  },
  methods: {
    addToList(value) {
      let newTodo = {text: value.trim().toLowerCase(), done: false};
      this.list.push(newTodo);
      this.newElement ='';
    },
    removeFromList(indexToRemove) {
      this.list.splice(indexToRemove, 1);
    }
  }
}).mount('#app')