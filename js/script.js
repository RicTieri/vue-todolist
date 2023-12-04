const { createApp } = Vue

  createApp({
    data() {
      return {
        newElement: {text: '', done: false},
        list: [{text: 'andare in un posto', done: false},{text: 'costruire qualcosa', done: false},{text: 'fare una bella foto', done: false},],
      }
    },
    methods:{

    }
  }).mount('#app')