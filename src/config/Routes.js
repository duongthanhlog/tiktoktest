const routes = {
    home: '/',
    following: '/following',
    profile:'/@:nickname',
    profileLink : (nickname) => `/@${nickname}`,
    upload: '/upload',
    search: '/search',
    live: '/live',
    video : '/video'
};

export default routes;
