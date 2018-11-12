let action = {
	syncSetUser({commit},data) {
		setTimeout(() => {
			commit('setUser',data);
		},1200);
	}
}

export default action;