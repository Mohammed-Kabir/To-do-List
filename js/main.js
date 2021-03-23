let app = new Vue({
    el: "#vueApp",
    data: {
        welcomeMessage: 'Welcome!',
        title: 'To-do List',
        lists: [],

        newItem: '',

    },
    /*
    */
    methods: {
        addItem: function () {
            let id = this.lists.length + 1
            if (this.newItem !== '') {
                const newList = { id: id, item: this.newItem, isDone: false }
                this.lists.push(newList)
                this.newItem = ''
            }
            return;
            // this.lists.push({ text: this.newItem, isCompleted: false });
            // this.newItem = '';
            //console.log(newItem);

        },

        toggleItem: function (list) {
            list.isDone = !list.isDone;
        },

        removeItem: function (list) {
            var index = _.findIndex(this.lists, list);
            this.lists.splice(index, 1);
            console.log(lists)
        },


    },
    mounted() {
        console.log('App mounted!');
        if (localStorage.getItem('lists')) this.lists = JSON.parse(localStorage.getItem('lists'));
        console.log('Todos before change!');
    },
    watch: {
        lists: {
            handler: function () {
                console.log('Todos changed!');
                localStorage.setItem('lists', JSON.stringify(this.lists));
            },
            deep: true,
        },
    },
});

// app.lists = [
//     {
//     id:1, 
//     item: 'Comp homeworks', 
//     isDone: false
//     },
//     {
//         id:2, 
//         item:'learn Js', 
//         isDone: false
//     },
//     {
//         id:3, 
//         item:'work on todo app', 
//         isDone: false
//     }
// ];


//<button v-on:click="removeItem(list)">Del</button></span>