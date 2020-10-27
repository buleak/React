export const getStaticPaths = async() => {
    const posts = await fetch().then(res => res.json())
    const paths = posts.map(post => `/posts/${post.id}`)
    // (fallback: false): 其他路由会显示 404
    return {paths, fallback: false}
}

export default ({pa}) => {
    return (
    <div>{}</div>
    )
}