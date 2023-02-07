import { reactive } from "vue"

export const store = reactive({
    params: {
        total: 0,
        tip: 0,
        people: 0,
        remaining: 0
    },
    people: []
})

export function getGrandTotal(){
    return store.params.total * (store.params.tip / 100 + 1)
}

export function calculate(){
    store.people = []
    const { total, tip, people } = store.params
    const totalXPeronsa = getGrandTotal() / people
    store.params.remaining = getGrandTotal()

    for (let index = 0; index < people; index++) {
        store.people.push({
            id: crypto.randomUUID(),
            numberOfPerson: index+1,
            totalXPeronsa,
            paid: false
        })
    }
}

function calculateRemaining(){
    const missingToPay = store.people.filter(item => !item.paid)
    const remaining = missingToPay.reduce((acc, item) => (acc += item.totalXPeronsa), 0)
    store.params.remaining = remaining
}

export function pay(id, paid){
    const person = store.people.find(item => item.id === id)
    if (person) {
        person.paid = paid
        calculateRemaining()
    }
}