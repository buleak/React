// 预渲染时执行
export default ({posts}) => {
    return (
        <ul>
            {posts.map(post => {
                <li>{post.title}</li>
            })}
        </ul>
    )
}

// 构建是执行
export const getStaticProps = async() => {
    const posts = await fetch().then(res => res.json())
    return {
        props: {
            props
        }
    }
}