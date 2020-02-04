export default async function({store, redirect, $axios}) {
	try {
        return await $axios.$get('/api/auth/admin/token')
    } catch(e) {
        redirect('/login?message=login')
    }
}