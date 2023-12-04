const { createApp } = Vue

  createApp({
    data() {
      return {
        newElement: {text: '', done: false},
        list: [{text: 'a', done: false},{text: 'b', done: true},{text: 'c', done: false},],
      }
    },
    methods:{

    }
  }).mount('#app')