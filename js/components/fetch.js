/*LINKS:'https://v2.api.noroff.dev/blog/posts/Swagdaddy'*/
/*METHODS: 'GET' 'POST' 'PUT' 'DELETE'*/

export const doFetch = async (method,urlApiLink,body) => {


    console.log('doing fetch call towards:' , urlApiLink)
    try {
        const response = await fetch(urlApiLink,{
            method: method,
            headers: {
                'content-Type': 'application/json',
                'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3dhZ2RhZGR5IiwiZW1haWwiOiJTd2FnZGFkZHlAc3R1ZC5ub3JvZmYubm8iLCJpYXQiOjE3MTQ0NjMzNjJ9.RdmTh59YT2n5G-bsmRntaJGawmsQ9tZwqbJnwzIQ3Ag'
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        return data.data
    }catch (error){
        console.log('Error:', error)
    }

}
