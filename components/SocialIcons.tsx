import { FaDev, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const links = [
    {
        Icon: FaDev,
        href: 'https://dev.to/doc22940',
    },
    {
        Icon: FaGithub,
        href: 'https://github.com/fu4303',
    },
    {
        Icon: FaLinkedinIn,
        href: 'https://www.linkedin.com/in/doc22940',
    },
]

const SocialIcons = (): JSX.Element => (
    <div className="flex flex-row text-2xl my-6 text-gray-500 dark:text-gray-300">
        {links.map(({ Icon, href }, i) => (
            <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`hover:text-gray-800 dark:hover:text-white transition-colors ${
                    i < links.length - 1 ? 'mr-3' : ''
                }`}
            >
                <Icon />
            </a>
        ))}
    </div>
)

export default SocialIcons
