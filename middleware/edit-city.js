export default async function({store, $axios, redirect}) {
  try {
    return await $axios.$get('/api/auth/admin/token')
  } catch(e) {
      redirect('/login?message=login')
  }
    
	if(!store.getters['localStorage/title']) {
		redirect('/admin/edit-city/')
    }
    
    if(!store.getters['localStorage/descr']) {
		redirect('/admin/edit-city/')
    }
    
    if(!store.getters['localStorage/id']) {
		redirect('/admin/edit-city/')
	}
}