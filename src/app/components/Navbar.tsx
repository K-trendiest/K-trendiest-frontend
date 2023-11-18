import Link from 'next/link'

const Navbar = ({ curpath, pointColor }: { curpath: String, pointColor: String }) => {
    const categories = [
        {name: 'MUSIC', link: '/music'},
        {name: 'YOUTUBE', link: '/'},
        {name: 'MOVIE', link: '/movie'},
    ];

  return (
    <nav className='pt-16 flex justify-center items-center flex-col sticky top-0 z-10'>
        <h1 className='text-5xl font-bold'>
            <Link href='/'>K-trendiest</Link>
        </h1>
        <ul className='flex flex-row justify-center gap-4 text-lg font-sans'>
            {categories.map((category, index) => (
                <li 
                    key={index} 
                    className={`p-8 ${curpath === category.name.toLowerCase() ? pointColor : 'text-gray-500' }`}
                >
                    <Link href={category.link}>
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar;