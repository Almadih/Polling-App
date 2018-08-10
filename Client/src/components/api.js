const url = 'https://exclusive-parenthesis.glitch.me/';
export default {
    newPoll: async function (data) {
        let res = await fetch(url + 'api/new', {
            method: 'post',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(data)
        }).catch(err => console.log(err))

        return res;
    },

    getPoll: async function (dat) {

        let res = await fetch(url + 'api/' + dat.id,{
            method: 'post',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(dat)
        });
        let data = await res.json();
        return data;
    },

    updatePoll: function (data) {
        return fetch(url + 'api/' + data.id, {
            method: 'put',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(data)
        })

    },

    getAll: async function (id) {

        let res = await fetch(url + 'api',{
            method: 'post',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(id)
        });

        let data = await res.json();

        return data;

    },

    deletePoll: function (id) {
        return fetch(url + 'api/' + id, {
            method: 'delete'
        });
    },

    getPollData: async function (id) {
        let res = await fetch(url + 'api/data/' + id);

        let data = await res.json();

        return data;
    },


    vote: async function (data) {
        let res = await fetch(url + 'api/poll/' + data.id, {
            method: 'post',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(data)
    });
        
        return res;
},
    
    signup: async function(user){
        
        let res = await fetch(url + 'api/users/signup', {
            method: 'post',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(user)
    });
        
        let data = await res.json();
        
        return data;
        
    },
    
    login: async function(user){
        
         let res = await fetch(url + 'api/users/login', {
            method: 'post',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(user)
    });
        
        let data = await res.json();
        
        return data;
    }


};
