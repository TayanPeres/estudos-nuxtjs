export default(context, inject) => {
    inject('name', 'Tayan')
    inject('name', (name) =>`ola ${name}`)
}