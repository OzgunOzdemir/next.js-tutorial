import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product');
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href="/product">
        <a>Product</a>
      </Link>

      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>

  )
}

export default Home