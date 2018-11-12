let mutation = {
	setUser(state,data) {
		state.userId = data.userId;
		state.userName = data.userName;
	}
}

export default mutation;