class Github {
  constructor() {
    this.client_id = "b25ae2c88c76835fe648";
    this.client_secret = "0722c3fc3637249a82267c5b9a23df2ed3531bce";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    // convert data to json
    const profile = await profileResponse.json();
    // return the object -- profile + repository
    return {
      profile
    };
  }
}
