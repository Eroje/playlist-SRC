const Credentials = () => {

    return {
        ClientId: process.env.REACT_APP_SPOTIFY_ClientId,
        ClientSecret: process.env.REACT_APP_SPOTIFY_ClientSecret
    }
}

export { Credentials };