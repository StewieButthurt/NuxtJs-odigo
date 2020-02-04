export const state = () => ({
    city: []
})

export const mutations = {
	setCity(state, city) {
		state.city = city
	}
}

export const actions = {
	async setCity({commit}) {
        try {
			let city = await this.$axios.$get('/api/city')
			await commit('setCity', city)
        } catch (e) {
            throw e
        }
    },
	async removeProduct({commit, dispatch}, title) {
		try {
			await this.$axios.$delete('/api/product/admin', { data: { title: title}})
			dispatch('adminProducts')
		} catch (e) {
			throw e
		}
	},
	async createCity({commit}, data) {
		try {
			return await this.$axios.$post('/api/city/admin/create-city', data)
		} catch (e) {
			throw e
		}
	},
	async updateCity({commit}, data) {
		try {
			return await this.$axios.$post('/api/city/admin/update-city', data)
		} catch(e) {
			throw e
		}
	}
}

export const getters = {
	city: state => state.city
}