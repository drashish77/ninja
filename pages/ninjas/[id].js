export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
const Details = ({ post }) => {
  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.username}</p>
      <p>{post.email}</p>
      <p>{post.website}</p>
      <p>{post.address.city}</p>
      <span>Zipcode: {post.address.zipcode}</span>
      <p>{post.phone}</p>
      <p>{post.company.name}</p>
    </div>
  )
}

export default Details
