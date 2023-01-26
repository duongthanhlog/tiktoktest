const routes = {
    home: '/',
    following: '/following',
    profile:'/@:nickname',
    profileLink : nickname => `/@${nickname}`,
    upload: '/upload',
    search: '/search',
    live: '/live',
    video : '/video',
    report : '/report'
    // search: (text, id) => `/search?q=${text}&t=${id}`
};

export default routes;
