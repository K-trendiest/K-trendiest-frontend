import Link from 'next/link'

const Navbar = ({
  curpath,
  pointColor,
}: {
  curpath: string
  pointColor: string
}) => {
  const categories = [
    { name: 'MUSIC', link: '/music' },
    { name: 'YOUTUBE', link: '/' },
    { name: 'MOVIE', link: '/movie' },
  ]

  const getRGB = (HEX: string) => {
    const r = parseInt(HEX.slice(1, 3), 16)
    const g = parseInt(HEX.slice(3, 5), 16)
    const b = parseInt(HEX.slice(5, 7), 16)

    return { r, g, b }
  }

  const getTextShadowStyle = (color: string) => {
    const { r, g, b } = getRGB(color)
    return {
      textShadow: `2px 2px 0px rgba(${r}, ${g}, ${b}, 0.5),5px 5px 0px rgba(${r}, ${g}, ${b}, 0.2)`,
    }
  }

  const textShadowStyle = getTextShadowStyle(pointColor)

  return (
    <nav className="pt-16 flex justify-center items-center flex-col top-0 z-10">
      <Link href="/" className="text-6xl font-bold" style={textShadowStyle}>
        K-trendiest
      </Link>
      <ul className="flex flex-row justify-center gap-4 text-lg font-sans">
        {categories.map((category) => (
          <li
            key={category.link}
            className={`p-8 ${curpath === category.name.toLowerCase() ? `${pointColor} font-bold` : 'text-gray-500'}`}
          >
            <Link href={category.link}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
